import { Heading, HStack, Stack, Text } from '@chakra-ui/react';

import { heading2Styles, textRelevantBlockStyles } from '~/app/theme/styles';
import { relevantPage } from '~/interfaces/interfaces';

import RelevantCardH from './RelevantCardH';
import RelevantCardV from './RelevantCardV';

const RelevantBlock = (props: relevantPage) => (
    <Stack w='100%' padding='24px 0px' gap='24px' borderTop='1px solid rgba(0, 0, 0, 0.08)'>
        <HStack justifyContent='space-between' alignItems='center'>
            <Heading as='h2' sx={heading2Styles}>
                {props.title}
            </Heading>
            <Text maxW='665px' sx={textRelevantBlockStyles}>
                {props.text}
            </Text>
        </HStack>
        <HStack w='100%' gap='24px'>
            <HStack gap='24px'>
                {props.cardV.map((element, index) => (
                    <RelevantCardV
                        key={index}
                        title={element.title}
                        text={element.text}
                        badgeText={element.badgeText}
                        badgeIcon={element.badgeIcon}
                        bookmarkCount={element.bookmarkCount}
                        likeCount={element.likeCount}
                    />
                ))}
            </HStack>
            <Stack flex={1} gap='12px'>
                {props.cardH.map((element, index) => (
                    <RelevantCardH key={index} title={element.title} icon={element.icon} />
                ))}
            </Stack>
        </HStack>
    </Stack>
);

export default RelevantBlock;
