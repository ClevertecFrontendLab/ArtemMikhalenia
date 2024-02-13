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

    const menuItems = [
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
    ];

    return (
        <Sider
            breakpoint='m'
            collapsedWidth='64'
            width={208}
            trigger={null}
            collapsible
            collapsed={collapsed}
            data-test-id={collapsed ? 'sider-switch' : 'sider-switch-mobile'}
        >
            <div className='sidebar-logo'>
                <img
                    src='./src/assets/Logo.svg'
                    alt='Logo'
                    className={collapsed ? 'logo-image-collapsed' : 'logo-image-not-collapsed'}
                />
            </div>
            <nav className='sidebar-nav'>
                <Menu
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    inlineIndent={0}
                    items={menuItems.map((item) => ({
                        ...item,
                        label: (
                            <span className='opacity-block' style={{ opacity: collapsed ? 0 : 1 }}>
                                {item.label}
                            </span>
                        ),
                    }))}
                />
            </nav>
            <div className='trigger-block'>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                    'data-test-id': collapsed ? 'sider-switch' : 'sider-switch-mobile',
                })}
            </div>
            <div className='exit-block'>
                <Button type='link' className='exit-block-btn opacity-block'>
                    <img
                        src='./src/assets/Exit.svg'
                        alt='exit'
                        className={collapsed ? 'exit-icon-collapsed' : 'exit-icon-not-collapsed'}
                    />
                    <span className='exit-block-btn-text' style={{ opacity: collapsed ? 0 : 1 }}>
                        Выход
                    </span>
                </Button>
            </div>
        </Sider>
    );
}
