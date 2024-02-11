import { Layout, Card } from 'antd';
const { Content } = Layout;
import { cardText, cardAction, cardTextList } from '../../data';
import CardAction from '../CardAction/CardActionComponent';
import './Content.css';

export default function ContentComponent() {
    return (
        <Content>
            <Card>
                <p>{cardText[0].text}</p>
                <ul>
                    {cardTextList.map((desc) => (
                        <li key={desc.key}>{desc.description}</li>
                    ))}
                </ul>
            </Card>
            <Card className='black-style'>
                <p>{cardText[1].text}</p>
            </Card>
            <div className='card-action-block'>
                {cardAction.map((action) => (
                    <CardAction key={action.title} {...action} />
                ))}
            </div>
        </Content>
    );
}
