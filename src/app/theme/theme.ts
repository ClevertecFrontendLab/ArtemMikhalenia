import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    breakpoints: {
        sm: '320px',
        '500px': '500px',
        md: '768px',
        '1100px': '1100.98px',
        lg: '1440px',
        '1840px': '1840px',
        xl: '1920px',
    },
});

export default theme;
