import { Button, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { BsBookmarkHeart, BsEmojiHeartEyes, BsPencilSquare, BsPeopleFill } from 'react-icons/bs';

const Sidebar = () => {
    const textStyles = {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#2db100',
    };

    const buttonStyles = {
        maxWidth: '87px',
        width: '100%',
        border: 'none',
        bg: 'none',
        alignItems: 'center',
        cursor: 'pointer',
    };

    return (
        <>
            <Container w='100%' h='100%' p={0} m={0}>
                <Flex
                    className='sidebar-content'
                    direction='column'
                    justifyContent='space-between'
                    h='100%'
                >
                    <Stack padding='16px 56px 16px 67px' gap='24px'>
                        <Button sx={buttonStyles} leftIcon={<BsBookmarkHeart size='16px' />}>
                            <Text sx={textStyles}>185</Text>
                        </Button>
                        <Button sx={buttonStyles} leftIcon={<BsPeopleFill size='16px' />}>
                            <Text sx={textStyles}>589</Text>
                        </Button>
                        <Button sx={buttonStyles} leftIcon={<BsEmojiHeartEyes size='16px' />}>
                            <Text sx={textStyles}>587</Text>
                        </Button>
                    </Stack>
                    <Button
                        sx={{
                            height: '208px',
                            background:
                                'radial-gradient(25% 25% at 50% 50%, #c4ff61 0%, #ffffff00 100%)',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        w='100%'
                        _hover={{
                            bg: 'radial-gradient(25% 25% at 50% 50%, #c4ff61 0%, #ffffff00 100%),',
                        }}
                    >
                        <Stack paddingTop='24px' gap='12px' alignItems='center'>
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
                                fontFamily='Inter'
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
