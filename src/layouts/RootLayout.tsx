import { Grid, GridItem } from '@chakra-ui/react';

import Header from '~/components/Header/Header';
import Navbar from '~/components/Navbar/Navbar';
import Sidebar from '~/components/Sidebar/Sidebar';
import HomePage from '~/pages/HomePage';

const RootLayout = () => (
    <Grid templateColumns='256px 1fr 208px ' templateRows='80px 1fr' w='100%' h='100vh'>
        <GridItem as='header' data-test-id='header' rowSpan={1} colSpan={3}>
            <Header />
        </GridItem>
        <GridItem
            as='nav'
            rowSpan={1}
            colSpan={1}
            sx={{
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                boxShadow:
                    '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
            }}
        >
            <Navbar />
        </GridItem>
        <GridItem
            as='main'
            sx={{
                overflowY: 'scroll',
                scrollbarWidth: 'none',
            }}
            rowSpan={1}
            colSpan={1}
            maxW='1360px'
            w='100%'
            marginLeft='24px'
        >
            <HomePage />
        </GridItem>
        <GridItem as='aside' rowSpan={1} colSpan={1}>
            <Sidebar />
        </GridItem>
    </Grid>
);

export default RootLayout;
