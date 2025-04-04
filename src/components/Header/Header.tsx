import { Avatar, Box, Container, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';

import avatar from '../../assets/img/Avatar.svg';
import logoFull from '../../assets/img/icons/logo-full.svg';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Header = () => {
    const headerStyles = {
        p: '16px 80px 16px 16px',
        m: '0 auto',
        maxW: '1920px',
        w: '100%',
    };

    return (
        <>
            <Container w='100%' bg='#ffffd3' as='header' data-test-id='header'>
                <Box className='header-content' sx={headerStyles}>
                    <Flex justify='space-between' align='center'>
                        <Box marginRight='128px'>
                            <Image src={logoFull} alt='logo-full' />
                        </Box>
                        <Flex justify='left' w='100%'>
                            <Breadcrumbs />
                        </Flex>
                        <Flex justify='right' w='100%'>
                            <Stack>
                                <HStack gap='12px'>
                                    <Avatar src={avatar} />
                                    <Stack gap='0'>
                                        <Text
                                            fontSize='18px'
                                            fontWeight='500'
                                            lineHeight='156%'
                                            color='black'
                                        >
                                            Екатерина Константинопольская
                                        </Text>
                                        <Text
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
        </>
    );
};

export default Header;
