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

import { newRecipesCard } from '~/interfaces/interfaces';

const CardV = (props: newRecipesCard) => {
    const cardStyles = {
        borderRadius: '8px',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: 'none',
        overflow: 'hidden',
    };

    const badgeStyles = {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        padding: '2px 8px',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '143%',
        textTransform: 'capitalcase',
        color: '#000',
        borderRadius: '4px',
        background: '#d7ff94',
    };

    const tagStyles = {
        padding: '4px',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '133%',
        background: 'none',
    };
    return (
        <Card maxW='322px' sx={cardStyles}>
            <CardBody p={0}>
                <Image src={props.img} alt={props.alt} />
                <Stack p='16px 24px 27px' gap='8px'>
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
};

export default CardV;
