import { Button, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { BsBookmarkHeart, BsEmojiHeartEyes, BsPencilSquare, BsPeopleFill } from 'react-icons/bs';

const Sidebar = () => {
    const textStyles = {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#2db100',
    };

    const buttonStyles = {
        maxWidth: '87px',
        padding: '8px 16px',
        border: 'none',
        bg: 'none',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
    };

    return (
        <>
            <Container w='100%' h='100%' as='aside'>
                <Flex
                    className='sidebar-content'
                    direction='column'
                    justifyContent='space-between'
                    h='100%'
                >
                    <Stack padding='16px 56px 16px 67px' gap='24px'>
                        <Button sx={buttonStyles}>
                            <BsBookmarkHeart size='16px' />
                            <Text sx={textStyles}>185</Text>
                        </Button>
                        <Button sx={buttonStyles}>
                            <BsPeopleFill size='16px' />
                            <Text sx={textStyles}>589</Text>
                        </Button>
                        <Button sx={buttonStyles}>
                            <BsEmojiHeartEyes size='16px' />
                            <Text sx={textStyles}>587</Text>
                        </Button>
                    </Stack>
                    <Button
                        sx={{
                            height: '178px',
                            background:
                                'radial-gradient(25% 25% at 50% 40%, #c4ff61 0%, #ffffff00 100%)',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        w='100%'
                    >
                        <Stack gap='12px' alignItems='center'>
                            <Flex
                                justifyContent='center'
                                alignItems='center'
                                w='48px'
                                h='48px'
                                borderRadius='50%'
                                bg='#000'
                            >
                                <BsPencilSquare color='#c4ff61' size='24px' />
                            </Flex>
                            <Text
                                fontWeight='400'
                                fontSize='12px'
                                lineHeight='133%'
                                textAlign='center'
                                color='#000000'
                            >
                                Записать рецепт
                            </Text>
                        </Stack>
                    </Button>
                </Flex>
            </Container>
        </>
    );
};

export default Sidebar;
