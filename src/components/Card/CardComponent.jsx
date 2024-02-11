import { Card } from 'antd';
import './Card.css';
import { cardText } from '../../data.js';

export default function CardComponent({ data, color }) {
    return (
        <Card className={color}>
            <p>{data}</p>
        </Card>
    );
}
