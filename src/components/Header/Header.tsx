import { Avatar, Box, Container, Flex, HStack, Stack, Text } from '@chakra-ui/react';

import avatar from '../../assets/img/Avatar.svg';
import logoFull from '../../assets/img/icons/logo-full.svg';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Header = () => {
    const headerStyles = {
        p: '16px 80px 16px 16px',
        m: '0 auto',
        maxWidth: '1920px',
        width: '100%',
    };

    return (
        <Container maxW='100%' p={0} bg='#ffffd3'>
            <Box className='header-content' sx={headerStyles}>
                <Flex justify='space-between' align='center'>
                    <Box marginRight='128px' minWidth='135px'>
                        <img src={logoFull} alt='logo-full' />
                    </Box>
                    <Flex justify='start' w='100%'>
                        <Breadcrumbs />
                    </Flex>
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
                </Flex>
            </Box>
        </Container>
    );
};

export default Header;
