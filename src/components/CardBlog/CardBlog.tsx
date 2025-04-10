import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

import { blogCard } from '~/interfaces/interfaces';

const CardBlog = (props: blogCard) => {
    const blogCardStyles = {
        borderRadius: '8px',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: 'none',
        overflow: 'hidden',
    };

    const headingStyles = {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '156%',
        color: '#000',
    };

    const emailStyles = {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '143%',
        color: 'rgba(0, 0, 0, 0.64)',
    };

    const textStyles = {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '143%',
        color: '#000',
    };

    return (
        <Card maxW='426px' sx={blogCardStyles}>
            <CardHeader p='24px 24px 16px'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={props.name} src={props.avatar} />

                    <Box>
                        <Heading sx={headingStyles}>{props.name}</Heading>
                        <Text sx={emailStyles}>{props.email}</Text>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody p='12px 24px 20px'>
                <Text sx={textStyles}>{props.text}</Text>
            </CardBody>
        </Card>
    );
};

export default CardBlog;
