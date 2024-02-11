import { Layout, Menu, Button } from 'antd';
const { Sider } = Layout;
import {
    CalendarTwoTone,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
    IdcardTwoTone,
} from '@ant-design/icons';
import './Sidebar.css';
import MenuItem from './MenuItem';
import { navItems } from '../../data';

export default function SidebarComponent() {
    return (
        <Sider width={208}>
            <div className='sidebar-logo'>
                <img src='./src/assets/Logo.svg' alt='Logo' />
            </div>
            <nav className='sidebar-nav'>
                <Menu
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    inlineIndent={0}
                    items={[
                        {
                            key: '1',
                            icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']} />,
                            label: 'Календарь',
                        },
                        {
                            key: '2',
                            icon: <HeartFilled />,
                            label: 'Тренировки',
                        },
                        {
                            key: '3',
                            icon: <TrophyFilled />,
                            label: 'Достижения',
                        },
                        {
                            key: '4',
                            icon: <IdcardTwoTone twoToneColor={['#061178', 'none', '#061178']} />,
                            label: 'Профиль',
                        },
                    ]}
                />
            </nav>
            <div className='exit-block'>
                <img src='./src/assets/Exit.svg' alt='exit' />
                <Button type='link'>Выход</Button>
            </div>
        </Sider>
    );
}
