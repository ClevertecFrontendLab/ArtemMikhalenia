import { Button, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { BsBookmarkHeart, BsEmojiHeartEyes, BsPeopleFill } from 'react-icons/bs';

import { textSidebarStyles } from '~/app/theme/styles';

const ProfileNotification = () => {
    const iconSize = useBreakpointValue({ sm: '12px', '1100px': '16px' });

    const responsiveStyles = {
        maxW: { '1100px': '87px', sm: '58px' },
        fontSize: { '1100px': '16px', sm: '12px' },
        lineHeight: { '1100px': '150%', sm: '133%' },
        width: '100%',
        border: 'none',
        bg: 'none',
        alignItems: 'center',
        cursor: 'pointer',
    };

    return (
        <Stack
            padding={{ '1100px': '16px 56px 16px 67px', sm: '0px' }}
            gap={{ '1100px': '24px', sm: '0px' }}
            direction={{ '1100px': 'column', sm: 'row' }}
            width={{ sm: '100%' }}
            justifyContent={{ sm: 'end' }}
            marginRight={{ '1100px': '0', md: '16px', sm: '8px' }}
        >
            <Button sx={responsiveStyles} leftIcon={<BsBookmarkHeart size={iconSize} />}>
                <Text sx={textSidebarStyles}>185</Text>
            </Button>
            <Button sx={responsiveStyles} leftIcon={<BsPeopleFill size={iconSize} />}>
                <Text sx={textSidebarStyles}>589</Text>
            </Button>
            <Button sx={responsiveStyles} leftIcon={<BsEmojiHeartEyes size={iconSize} />}>
                <Text sx={textSidebarStyles}>587</Text>
            </Button>
        </Stack>
    );
};
export default ProfileNotification;
