import {
    Badge,
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Image,
    Stack,
    Tag,
    TagLabel,
    TagLeftIcon,
    Text,
} from '@chakra-ui/react';
import { BsBookmarkHeart, BsEmojiHeartEyes } from 'react-icons/bs';

import { badgeStyles, cardVStyles, tagStyles } from '~/app/theme/styles';
import { relevantCardV } from '~/interfaces/interfaces';

const RelevantCardV = (props: relevantCardV) => (
    <Card maxW='322px' minH='192px' sx={cardVStyles}>
        <CardBody p={0} w='100%' flex='0'>
            <Stack p='24px 24px 28px' gap='8px'>
                <Heading
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize='20px'
                    lineHeight='140%'
                    color='#000'
                    noOfLines={1}
                >
                    {props.title}
                </Heading>
                <Text
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='14px'
                    lineHeight='143%'
                    color='#000'
                    noOfLines={3}
                >
                    {props.text}
                </Text>
            </Stack>
        </CardBody>
        <CardFooter w='100%' p={0}>
            <HStack w='100%' justifyContent='space-between' p='0px 24px 20px'>
                <Badge sx={badgeStyles}>
                    <Image width='16px' src={props.badgeIcon} />
                    {props.badgeText}
                </Badge>
                <HStack gap='8px' alignItems='center'>
                    {props.bookmarkCount > 0 && (
                        <Tag sx={tagStyles}>
                            <TagLeftIcon boxSize='12px' as={BsBookmarkHeart} />
                            <TagLabel color='#2db100'>{props.bookmarkCount}</TagLabel>
                        </Tag>
                    )}
                    {props.likeCount > 0 && (
                        <Tag sx={tagStyles}>
                            <TagLeftIcon boxSize='12px' as={BsEmojiHeartEyes} />
                            <TagLabel color='#2db100'>{props.likeCount}</TagLabel>
                        </Tag>
                    )}
                </HStack>
            </HStack>
        </CardFooter>
    </Card>
);

export default RelevantCardV;
