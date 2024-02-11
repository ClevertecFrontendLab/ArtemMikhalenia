import './MenuItem.css';

export default function MenuItem({ title }) {
    return (
        <li className='menu-item'>
            <a href='#'>{title}</a>
        </li>
    );
}
