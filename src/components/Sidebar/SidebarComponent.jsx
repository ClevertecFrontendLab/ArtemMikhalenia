import { Layout, Menu, Button } from 'antd';
const { Sider } = Layout;
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CalendarTwoTone,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
    IdcardTwoTone,
} from '@ant-design/icons';
import './Sidebar.css';
import React, { useState } from 'react';

export default function SidebarComponent() {
    const [collapsed, setCollapsed] = useState(false);

    // function getItem(key, icon, label) {
    //     return {
    //         key,
    //         icon,
    //         label,
    //     };
    // }

    // const items = [
    //     getItem('1', <CalendarTwoTone twoToneColor={['#061178', '#061178']} />, 'Календарь'),
    //     getItem('2', <HeartFilled />, 'Тренировки'),
    //     getItem('3', <TrophyFilled />, 'Достижения'),
    //     getItem('4', <IdcardTwoTone twoToneColor={['#061178', 'none', '#061178']} />, 'Профиль'),
    // ];

    return (
        <Sider
            // breakpoint='lg'
            collapsedWidth='64'
            width={208}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
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
                            icon: <CalendarTwoTone />,
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
                            icon: <TrophyFilled />,
                            label: 'Профиль',
                        },
                    ]}
                />
            </nav>
            <div className='trigger-block'>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}
            </div>
            <div className='exit-block'>
                <img src='./src/assets/Exit.svg' alt='exit' />
                <Button type='link'>Выход</Button>
            </div>
        </Sider>
    );
}
