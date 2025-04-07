import {
    Flex,
    FormControl,
    FormLabel,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Switch,
    Text,
} from '@chakra-ui/react';
import { BsFilter, BsSearch } from 'react-icons/bs';

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

    return (
        <>
            <Flex
                padding='32px 0px'
                flexDirection='column'
                justifyContent='start'
                alignItems='center'
                gap='32px'
                height='100%'
            >
                <Text
                    sx={{
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        fontSize: '48px',
                        lineHeight: '100%',
                        textAlign: 'center',
                        color: '#000',
                    }}
                >
                    Приятного аппетита!
                </Text>
                <HStack w='100%' justifyContent='center' gap='12px' maxWidth='518px'>
                    <IconButton
                        aria-label='Filter'
                        sx={filterStyles}
                        fontSize='24px'
                        icon={<BsFilter />}
                    />
                    <InputGroup>
                        <InputRightElement pointerEvents='none' height='100%' padding='15px'>
                            <BsSearch size='18px' />
                        </InputRightElement>
                        <Input
                            sx={inputStyles}
                            type='search'
                            placeholder='Название или ингредиент...'
                        />
                    </InputGroup>
                </HStack>
                <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='email-alerts' mb='0'>
                        Enable email alerts?
                    </FormLabel>
                    <Switch id='email-alerts' />
                </FormControl>
            </Flex>
        </>
    );
};

export default HomePage;
