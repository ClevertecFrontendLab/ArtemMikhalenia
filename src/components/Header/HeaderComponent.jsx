import './Header.css';
import { Button, PageHeader } from 'antd';

// const items = [
//     {
//         key: '1',
//         label: (
//             <a target='_blank' rel='noopener noreferrer' href='http://www.alipay.com/'>
//                 1st menu item
//             </a>
//         ),
//     },
//     {
//         key: '2',
//         label: (
//             <a target='_blank' rel='noopener noreferrer' href='http://www.taobao.com/'>
//                 2nd menu item
//             </a>
//         ),
//     },
//     {
//         key: '3',
//         label: (
//             <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
//                 3rd menu item
//             </a>
//         ),
//     },
// ];

const routes = [
    {
        path: 'index',
        breadcrumbName: 'Главная',
    },
];

export default function HeaderComponent() {
    return (
        <PageHeader
            title='Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!'
            className='site-page-header'
            extra={[
                <Button key='1' type='primary'>
                    Настройки
                </Button>,
            ]}
            breadcrumb={{
                routes,
            }}
        ></PageHeader>
    );
}
