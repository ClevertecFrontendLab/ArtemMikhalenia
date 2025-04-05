import { Grid, GridItem } from '@chakra-ui/react';

import Header from '~/components/Header/Header';
import Sidebar from '~/components/Sidebar/Sidebar';

const RootLayout = () => (
    <Grid templateColumns='256px 1fr 208px ' templateRows='80px 1fr' w='100%' h='100vh'>
        <GridItem as='header' data-test-id='header' rowSpan={1} colSpan={3}>
            <Header />
        </GridItem>
        <GridItem as='nav' rowSpan={1} colSpan={1}>
            <div>Navigation</div>
        </GridItem>
        <GridItem as='main' rowSpan={1} colSpan={1}>
            <div>MainPage</div>
        </GridItem>
        <GridItem as='aside' rowSpan={1} colSpan={1}>
            <Sidebar />
        </GridItem>
    </Grid>
);

export default RootLayout;
