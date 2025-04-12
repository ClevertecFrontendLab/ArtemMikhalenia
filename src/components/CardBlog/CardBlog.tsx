import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

import { blogCardStyles, emailStyles, headingStyles, textStyles } from '~/app/theme/styles';
import { blogCard } from '~/interfaces/interfaces';

const CardBlog = (props: blogCard) => (
    <Card maxW='426px' sx={blogCardStyles}>
        <CardHeader p='26px 24px 16px'>
            <Flex flex='1' gap='12px' alignItems='center' flexWrap='wrap'>
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

export default CardBlog;
