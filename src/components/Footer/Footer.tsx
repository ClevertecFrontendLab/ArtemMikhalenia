import { Button, Container, Stack, Text } from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';

import { buttonFooterStyles, footerStyles } from '~/app/theme/styles';

const Footer = () => (
    <>
        <Container as='footer' w='100%' fontFamily='Inter' p={0} m={0}>
            <Stack className='footer-content' sx={footerStyles}>
                <Text
                    marginBottom='16px'
                    fontSize='12px'
                    fontWeight='500'
                    lineHeight='133%'
                    color='rgba(0, 0, 0, 0.24)'
                >
                    Версия программы 03.25
                </Text>
                <Text
                    maxW='169px'
                    marginBottom='16px'
                    fontSize='12px'
                    fontWeight='400'
                    lineHeight='133%'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                </Text>
                <Button sx={buttonFooterStyles} p={0} m={0}>
                    <BiLogOut size='12px' />
                    <Text
                        sx={{
                            fontFamily: 'Inter',
                            fontWeight: '600',
                            fontSize: '12px',
                            color: '#000',
                            lineHeight: '130%',
                        }}
                    >
                        Выйти
                    </Text>
                </Button>
            </Stack>
        </Container>
    </>
);

export default Footer;
