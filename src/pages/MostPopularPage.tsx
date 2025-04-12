import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    SimpleGrid,
    Stack,
    Switch,
} from '@chakra-ui/react';
import { BsFilter, BsSearch } from 'react-icons/bs';

import { filterStyles, inputStyles, labelStyles, selectStyles } from '~/app/theme/styles';
import CardH from '~/components/CardH/CardH';
import RelevantBlock from '~/components/RelevantBlock/RelevantBlock';
import { mostPopularPageData } from '~/data/mostPopularData';
import { relevantPopularPageData } from '~/data/relevantData';

const MostPopularPage = () => (
    <>
        <Flex
            padding='32px 0px'
            flexDirection='column'
            justifyContent='start'
            alignItems='center'
            height='100%'
        >
            <Stack
                className='searching-block'
                alignItems='center'
                justifyContent='center'
                maxW='898px'
                w='100%'
                m='0 auto 32px'
                gap='32px'
            >
                <Heading
                    as='h1'
                    fontFamily='Inter'
                    fontWeight='700'
                    fontSize='48px'
                    w='100%'
                    textAlign='center'
                    lineHeight='100%'
                    letterSpacing='1px'
                    sx={{
                        lineHeight: '100%',
                        color: '#000',
                    }}
                >
                    Самое сочное
                </Heading>
                <Stack gap='16px' maxWidth='518px' w='100%'>
                    <HStack justifyContent='center' gap='12px'>
                        <IconButton
                            aria-label='Filter'
                            sx={filterStyles}
                            fontSize='24px'
                            icon={<BsFilter />}
                        />
                        <InputGroup>
                            <InputRightElement pointerEvents='none' height='100%'>
                                <BsSearch size='18px' />
                            </InputRightElement>
                            <Input
                                sx={inputStyles}
                                type='search'
                                placeholder='Название или ингредиент...'
                            />
                        </InputGroup>
                    </HStack>
                    <HStack justifyContent='center' gap='16px'>
                        <FormControl
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            gap='9px'
                        >
                            <FormLabel sx={labelStyles} htmlFor='allergens'>
                                Исключить мои аллергены
                            </FormLabel>
                            <Switch id='allergens' />
                        </FormControl>
                        <Select maxW='234px' sx={selectStyles} placeholder='Выберите из списка'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </HStack>
                </Stack>
            </Stack>
            <Stack w='100%' mb='40px' gap={0}>
                <SimpleGrid
                    columnGap='24px'
                    rowGap='16px'
                    templateColumns='repeat(auto-fill, minmax(668px, 668px))'
                    mb='16px'
                >
                    {mostPopularPageData.map((element, index) => (
                        <CardH
                            key={index}
                            img={element.img}
                            alt={element.alt}
                            title={element.title}
                            text={element.text}
                            badgeText={element.badgeText}
                            badgeIcon={element.badgeIcon}
                            bookmarkCount={element.bookmarkCount}
                            likeCount={element.likeCount}
                            recAvatar={element.recAvatar}
                            recName={element.recName}
                        />
                    ))}
                </SimpleGrid>
                <Button
                    sx={{
                        margin: '0 auto',
                        maxW: '152px',
                        borderRadius: '6px',
                        padding: '0px 16px',
                        background: '#b1ff2e',
                        fontFamily: 'Inter',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '150%',
                        color: '#000',
                    }}
                >
                    Загрузить еще
                </Button>
            </Stack>
            <RelevantBlock {...relevantPopularPageData} />
        </Flex>
    </>
);

export default MostPopularPage;
