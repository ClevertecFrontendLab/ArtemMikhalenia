import { Button, Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

import {
    buttonRelevantCardHStyles,
    headingRelevantCardHStyles,
    relevantCardHStyles,
} from '~/app/theme/styles';
import { relevantCardH } from '~/interfaces/interfaces';

const RelevantCardH = (props: relevantCardH) => (
    <Card
        maxW='668px'
        sx={relevantCardHStyles}
        direction={{ base: 'column', sm: 'row' }}
        justifyContent='center'
        alignItems='center'
        overflow='hidden'
        variant='outline'
        m='0px'
    >
        <CardBody p={0} w='100%'>
            <HStack w='100%' justifyContent='space-between'>
                <HStack gap='12px'>
                    <Image width='24px' src={props.icon} />
                    <Heading sx={headingRelevantCardHStyles}>{props.title}</Heading>
                </HStack>
                <Button sx={buttonRelevantCardHStyles}>Готовить</Button>
            </HStack>
        </CardBody>
    </Card>
);

export default RelevantCardH;
