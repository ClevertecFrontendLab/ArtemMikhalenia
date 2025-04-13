import { Button, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { BsPencilSquare } from 'react-icons/bs';

import ProfileNotification from '../ProfileNotification/ProfileNotification';

const Sidebar = () => (
    <>
        <Container w='100%' h='100%' p={0} m={0}>
            <Flex
                className='sidebar-content'
                direction='column'
                justifyContent='space-between'
                h='100%'
            >
                <ProfileNotification />
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

export default Sidebar;
