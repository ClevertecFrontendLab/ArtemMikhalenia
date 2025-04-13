import { Grid, GridItem, Show } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Header from '~/components/Header/Header';
import Navbar from '~/components/Navbar/Navbar';
import Sidebar from '~/components/Sidebar/Sidebar';

const RootLayout = () => (
    <Grid
        templateColumns={{ '1100px': '256px 1fr 208px ', sm: '1fr' }}
        templateRows={{ '1100px': '80px 1fr', sm: '64px 1fr' }}
        w='100%'
        h='100vh'
    >
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
            maxW='1376px'
            w='100%'
            marginLeft='16px'
            padding='0px 8px'
        >
            <Outlet />
        </GridItem>
        <Show breakpoint='(min-width: 1100px)'>
            <GridItem as='aside' rowSpan={1} colSpan={1}>
                <Sidebar />
            </GridItem>
        </Show>
    </Grid>
);

export default RootLayout;
