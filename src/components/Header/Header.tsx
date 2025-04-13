import {
    Avatar,
    Box,
    Container,
    Flex,
    Hide,
    HStack,
    IconButton,
    Show,
    Stack,
    Text,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

import { headerStyles } from '~/app/theme/styles';

import avatar from '../../assets/img/Avatar.svg';
import logo from '../../assets/img/icons/logo.svg';
import logoFull from '../../assets/img/icons/logo-full.svg';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProfileNotification from '../ProfileNotification/ProfileNotification';

const Header = () => (
    <Container maxW='100%' p={0} bg='#ffffd3'>
        <Box
            className='header-content'
            sx={headerStyles}
            p={{ '1100px': '16px 80px 16px 16px', md: '8px 20px', sm: '8px 16px' }}
        >
            <Flex justify='space-between' align='center'>
                <Box
                    marginRight={{ '1100px': '128px', sm: '8px' }}
                    minWidth={{ '500px': '135px', sm: '32px' }}
                >
                    <Hide below='500px'>
                        <img src={logoFull} alt='logo-full' />
                    </Hide>
                    <Show below='500px'>
                        <img width='32px' src={logo} alt='logo' />
                    </Show>
                </Box>
                <Hide below='1100px'>
                    <Flex justify='start' w='100%'>
                        <Breadcrumbs />
                    </Flex>
                </Hide>
                <Hide below='1100px'>
                    <Flex justify='end' w='100%'>
                        <Stack paddingRight='2px'>
                            <HStack gap='12px'>
                                <Avatar src={avatar} />
                                <Stack gap='0'>
                                    <Text
                                        fontFamily='Inter'
                                        fontSize='18px'
                                        fontWeight='500'
                                        lineHeight='156%'
                                        color='black'
                                    >
                                        Екатерина Константинопольская
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        fontSize='14px'
                                        fontWeight='400'
                                        lineHeight='143%'
                                        color='rgba(0, 0, 0, 0.64)'
                                    >
                                        @bake_and_pie
                                    </Text>
                                </Stack>
                            </HStack>
                        </Stack>
                    </Flex>
                </Hide>
                <Show below='1100px'>
                    <ProfileNotification />
                    <IconButton
                        aria-label='menu'
                        size='48px'
                        padding='12px'
                        bg='transparent'
                        icon={<BiMenu size='24px' />}
                    />
                </Show>
            </Flex>
        </Box>
    </Container>
);

export default Header;
