import { Grid } from '@chakra-ui/react';

import Header from '~/components/Header/Header';
import Sidebar from '~/components/Sidebar/Sidebar';

const HomePage = () => (
    <Grid>
        <Header />
        <Sidebar />
    </Grid>
);

export default HomePage;
