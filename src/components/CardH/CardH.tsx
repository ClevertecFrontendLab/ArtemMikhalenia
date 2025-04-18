import {
    Badge,
    Box,
    Button,
    ButtonGroup,
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

import {
    badgeStyles,
    buttonStyles,
    cardHStyles,
    imageBadgeStyles,
    tagStyles,
} from '~/app/theme/styles';
import { mostPopularCard } from '~/interfaces/interfaces';

const CardH = (props: mostPopularCard) => (
    <Card
        maxW={{ l: '880px', xl: '668px' }}
        sx={cardHStyles}
        direction={{ sm: 'column', xl: 'row' }}
        overflow='hidden'
        variant='outline'
    >
        <Box position='relative'>
            <Image maxW='346px' src={props.img} alt={props.alt} />
            {props.recName !== '' && (
                <Badge sx={imageBadgeStyles}>
                    <Image width='16px' borderRadius='50%' src={props.recAvatar} />
                    {props.recName} рекомендует
                </Badge>
            )}
        </Box>
        <Stack p='20px 24px' gap='0px' w={{ xl: '100%' }}>
            <CardBody p={0}>
                <Stack p='0px 0px 24px' gap={0}>
                    <HStack w='100%' justifyContent='space-between' p='0px 0px 24px'>
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
                    <Heading
                        marginBottom='8px'
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
            <CardFooter w='100%' p={0} justifyContent='end'>
                <ButtonGroup>
                    <Button
                        leftIcon={<BsBookmarkHeart />}
                        sx={buttonStyles}
                        color='rgba(0, 0, 0, 0.8)'
                        bg='rgba(255, 255, 255, 0.06)'
                        border='1px solid rgba(0, 0, 0, 0.48)'
                    >
                        Сохранить
                    </Button>
                    <Button
                        sx={buttonStyles}
                        color='#fff'
                        bg='rgba(0, 0, 0, 0.92)'
                        border='1px solid rgba(0, 0, 0, 0.8)'
                    >
                        Готовить
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Stack>
    </Card>
);

export default CardH;
