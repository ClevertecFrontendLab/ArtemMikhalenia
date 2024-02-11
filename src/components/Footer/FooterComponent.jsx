import { Button, Card, Avatar } from 'antd';
import './Footer.css';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export default function FooterComponent() {
    return (
        <footer>
            <div className='footer-content'>
                <Button type='link' className='footer-link-btn'>
                    Смотреть отзывы
                </Button>
                <Card className='card-download'>
                    <div className='card-download-top'>
                        <Button type='link' className='card-download-link'>
                            Скачать на телефон
                        </Button>
                        <p className='card-download-subtitle'>Доступно в PRO-тарифе</p>
                    </div>
                    <div className='card-download-actions'>
                        <Button icon={<AndroidFilled />} type='link' className='footer-btn android'>
                            Android OS
                        </Button>
                        <Button icon={<AppleFilled />} type='link' className='footer-btn ios'>
                            Apple iOS
                        </Button>
                    </div>
                </Card>
            </div>
        </footer>
    );
}
