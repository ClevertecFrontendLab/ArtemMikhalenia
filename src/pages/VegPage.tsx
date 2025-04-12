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
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from '@chakra-ui/react';
import { BsFilter, BsSearch } from 'react-icons/bs';

import {
    filterStyles,
    inputStyles,
    labelStyles,
    selectStyles,
    tabStyles,
} from '~/app/theme/styles';
import CardH from '~/components/CardH/CardH';
import RelevantBlock from '~/components/RelevantBlock/RelevantBlock';
import { relevantVegPageData } from '~/data/relevantData';
import { vegKitchenPageData } from '~/data/vegkitchenData';

const VegPage = () => (
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
                gap='0'
            >
                <Heading
                    as='h1'
                    mb='12px'
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
                    Веганская кухня
                </Heading>
                <Text
                    maxW='696px'
                    mb='32px'
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize='16px'
                    lineHeight='150%'
                    textAlign='center'
                    color='rgba(0, 0, 0, 0.48)'
                >
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.
                </Text>
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
                <Tabs variant='unstyled' position='relative' defaultIndex={2} mb='16px'>
                    <TabList
                        maxW='1006px'
                        m='0 auto 24px'
                        justifyContent='space-between'
                        color='#134b00'
                        borderBottom='1px solid rgba(0, 0, 0, 0.08)'
                    >
                        <Tab sx={tabStyles}>Закуски</Tab>
                        <Tab sx={tabStyles}>Первые блюда</Tab>
                        <Tab sx={tabStyles}>Вторые блюда</Tab>
                        <Tab sx={tabStyles}>Гарниры</Tab>
                        <Tab sx={tabStyles}>Десерты</Tab>
                        <Tab sx={tabStyles}>Выпечка</Tab>
                        <Tab sx={tabStyles}>Сыроедческие блюда</Tab>
                        <Tab sx={tabStyles}>Напитки</Tab>
                    </TabList>
                    <TabIndicator
                        mt='-1.5px'
                        color='#2db100'
                        height='2px'
                        bg='#2db100'
                        borderRadius='1px'
                    />
                    <TabPanels m={0} p={0}>
                        <TabPanel m={0} p={0}>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel m={0} p={0}>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel m={0} p={0}>
                            <SimpleGrid
                                columnGap='24px'
                                rowGap='16px'
                                templateColumns='repeat(auto-fill, minmax(668px, 668px))'
                            >
                                {vegKitchenPageData.map((element, index) => (
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
                        </TabPanel>
                        <TabPanel m={0} p={0}>
                            <p>Four!</p>
                        </TabPanel>
                        <TabPanel m={0} p={0}>
                            <p>Five!</p>
                        </TabPanel>
                        <TabPanel m={0} p={0}>
                            <p>Six!</p>
                        </TabPanel>
                        <TabPanel m={0} p={0}>
                            <p>Seven!</p>
                        </TabPanel>
                        <TabPanel m={0} p={0}>
                            <p>Eight!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
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
            <RelevantBlock {...relevantVegPageData} />
        </Flex>
    </>
);

export default VegPage;
