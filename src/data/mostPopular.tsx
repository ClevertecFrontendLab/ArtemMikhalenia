import { mostPopularCard } from '~/interfaces/interfaces';

import alexCookImg from '../assets/img/avatars/alex-cook.jpg';
import elenaVysotskayaImg from '../assets/img/avatars/elena-vysotskaya.jpg';
import fryingPanImg from '../assets/img/icons/navbar/frying-pan.svg';
import nationalImg from '../assets/img/icons/navbar/national.svg';
import kneliImg from '../assets/img/most-popular/kneli.jpg';
import lapshaImg from '../assets/img/most-popular/lapsha.jpg';
import tomYamImg from '../assets/img/most-popular/tom-yam.jpg';
import vetchinaImg from '../assets/img/most-popular/vetchina.jpg';

export const mostPopularData: mostPopularCard[] = [
    {
        img: kneliImg,
        alt: 'kneli-img',
        title: 'Кнели со спагетти',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeText: 'Вторые блюда',
        badgeIcon: fryingPanImg,
        bookmarkCount: 85,
        likeCount: 152,
        recAvatar: '',
        recName: '',
    },
    {
        img: vetchinaImg,
        alt: 'vetchina-img',
        title: 'Пряная ветчина по итальянски',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeText: 'Вторые блюда',
        badgeIcon: fryingPanImg,
        bookmarkCount: 159,
        likeCount: 257,
        recAvatar: elenaVysotskayaImg,
        recName: 'Елена Высоцкая',
    },
    {
        img: lapshaImg,
        alt: 'lapsha-img',
        title: 'Лапша с курицей и шафраном"',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeText: 'Вторые блюда',
        badgeIcon: fryingPanImg,
        bookmarkCount: 258,
        likeCount: 342,
        recAvatar: alexCookImg,
        recName: 'Alex Cook',
    },
    {
        img: tomYamImg,
        alt: 'tom-yam-img',
        title: 'Том-ям с капустой кимчи',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeText: 'Национальные',
        badgeIcon: nationalImg,
        bookmarkCount: 124,
        likeCount: 324,
        recAvatar: '',
        recName: '',
    },
];
