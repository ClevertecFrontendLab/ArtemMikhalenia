import SidebarComponent from '../../components/Sidebar/SidebarComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';
import CardComponent from '../../components/Card/CardComponent';
import ContentComponent from '../../components/Content/ContentComponent';
import FooterComponent from '../../components/Footer/FooterComponent';

import './main-page.css';
import { cardText } from '../../data';
import { Card, Layout } from 'antd';
import classNames from 'classnames';

const MainPage = () => {
    return (
        <>
            <Layout>
                <SidebarComponent />
                <Layout className='mainblock-body'>
                    <HeaderComponent />
                    <ContentComponent />
                    <FooterComponent />
                </Layout>
            </Layout>
        </>
    );
};
export default MainPage;