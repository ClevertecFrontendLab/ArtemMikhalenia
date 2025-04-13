import {
    // Box,
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
import {
    // BsArrowLeft,
    BsArrowRight,
    BsFilter,
    BsSearch,
} from 'react-icons/bs';

import {
    buttonBlogStyle,
    buttonStyle,
    filterStyles,
    heading2Styles,
    heading3Styles,
    inputStyles,
    labelStyles,
    selectStyles,
} from '~/app/theme/styles';
import CardBlog from '~/components/CardBlog/CardBlog';
import CardH from '~/components/CardH/CardH';
// import CardV from '~/components/CardV/CardV';
import RelevantBlock from '~/components/RelevantBlock/RelevantBlock';
import { blogData } from '~/data/blogs';
import { mostPopularData } from '~/data/mostPopularData';
// import { newRecipesData } from '~/data/newRecipes';
import { relevantHomePageData } from '~/data/relevantData';

const HomePage = () => (
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
            {/* <Stack className='new-recipes' w='100%' mb='40px'>
                <Heading as='h2' sx={heading2Styles} marginBottom='20px'>
                    Новые рецепты
                </Heading>
                <Box sx={{ position: 'relative' }}>
                    <SimpleGrid
                        gap='24px'
                        sx={{ overflowX: 'scroll', scrollbarWidth: 'none' }}
                        templateColumns='repeat(4, minmax(277px, 322px))'
                        templateRows='repeat(1, minmax(402px, 402px))'
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
                    <Button
                        sx={{
                            position: 'absolute',
                            top: '147px',
                            left: '-8px',
                            width: '48px',
                            height: '48px',
                            background: '#000',
                        }}
                    >
                        <BsArrowLeft color='#ffffd3' />
                    </Button>
                    <Button
                        sx={{
                            position: 'absolute',
                            top: '147px',
                            right: '-8px',
                            width: '48px',
                            height: '48px',
                            background: '#000',
                        }}
                    >
                        <BsArrowRight color='#ffffd3' />
                    </Button>
                </Box>
            </Stack> */}
            <Stack className='most-popular' w='100%' mb='40px' gap='0'>
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
                    gridAutoFlow='row dense'
                    templateColumns='repeat(auto-fill, minmax(668px, 1fr))'
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
                            recAvatar={element.recAvatar}
                            recName={element.recName}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
            <Stack
                className='blogs'
                w='100%'
                mb='40px'
                p='20px 24px 26px'
                bg='#c4ff61'
                borderRadius='16px'
                gap={0}
            >
                <HStack justifyContent='space-between' alignItems='center' mb='24px'>
                    <Heading as='h3' sx={heading3Styles}>
                        Кулинарные блоги
                    </Heading>
                    <Button rightIcon={<BsArrowRight />} sx={buttonBlogStyle}>
                        <Text>Все авторы</Text>
                    </Button>
                </HStack>
                <SimpleGrid gap='16px' templateColumns='repeat(auto-fill, minmax(426px, 426px))'>
                    {blogData.map((element, index) => (
                        <CardBlog
                            key={index}
                            avatar={element.avatar}
                            name={element.name}
                            email={element.email}
                            text={element.text}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
            <RelevantBlock {...relevantHomePageData} />
        </Flex>
    </>
);

export default HomePage;
