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
    Text,
} from '@chakra-ui/react';
import { BsArrowRight, BsFilter, BsSearch } from 'react-icons/bs';

import CardH from '~/components/CardH/CardH';
import CardV from '~/components/CardV/CardV';
import { mostPopularData } from '~/data/mostPopular';
import { newRecipesData } from '~/data/newRecipes';

const HomePage = () => {
    const inputStyles = {
        width: '100%',
        border: '1px solid rgba(0, 0, 0, 0.48)',
        borderRadius: '6px',
        padding: '0px 48px 0px 16px',
        maxWidth: '458px',
        height: '48px',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: '400',
        _placeholder: {
            color: '#134b00',
        },
    };

    const filterStyles = {
        width: '54px',
        border: '1px solid rgba(0, 0, 0, 0.48)',
        borderRadius: '6px',
        height: '48px',
        background: 'none',
    };

    const labelStyles = {
        margin: 0,
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#000',
        cursor: 'pointer',
    };

    const selectStyles = {
        margin: 0,
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '150%',
        color: 'rgba(0, 0, 0, 0.64)',
    };

    const heading2Styles = {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '48px',
        lineHeight: '90%',
        letterSpacing: '2px',
        color: '#000',
    };

    const buttonStyle = {
        height: '48px',
        padding: '0px 24px',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '156%',
        color: '#000',
        background: '#b1ff2e',
    };

    return (
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
                    m='0 auto 56px'
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
                        Приятного аппетита!
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
                <Stack className='new-recipes' w='100%' marginBottom='40px'>
                    <Heading as='h2' sx={heading2Styles} marginBottom='20px'>
                        Новые рецепты
                    </Heading>
                    <SimpleGrid
                        gap='24px'
                        templateColumns='repeat(auto-fill, minmax(322px, 322px))'
                    >
                        {newRecipesData.map((element, index) => (
                            <CardV
                                key={index}
                                img={element.img}
                                alt={element.alt}
                                title={element.title}
                                text={element.text}
                                badgeText={element.badgeText}
                                badgeIcon={element.badgeIcon}
                                bookmarkCount={element.bookmarkCount}
                                likeCount={element.likeCount}
                            />
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className='most-popular' w='100%' marginBottom='40px' gap='0'>
                    <HStack justifyContent='space-between' alignItems='center' marginBottom='23px'>
                        <Heading as='h2' sx={heading2Styles}>
                            Самое сочное
                        </Heading>
                        <Button rightIcon={<BsArrowRight />} sx={buttonStyle}>
                            <Text>Вся подборка</Text>
                        </Button>
                    </HStack>
                    <SimpleGrid
                        gap='24px'
                        templateColumns='repeat(auto-fill, minmax(668px, 668px))'
                    >
                        {mostPopularData.map((element, index) => (
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
                            />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Flex>
        </>
    );
};

export default HomePage;
