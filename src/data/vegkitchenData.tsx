import { vegKitchenCard } from '~/interfaces/interfaces';

import fryingPanImg from '../assets/img/icons/navbar/frying-pan.svg';
import grillImg from '../assets/img/icons/navbar/grill.svg';
import kidImg from '../assets/img/icons/navbar/kid.svg';
import nationalImg from '../assets/img/icons/navbar/national.svg';
import chesnokImg from '../assets/img/vegkitchen/chesnok.jpg';
import kartoshkaImg from '../assets/img/vegkitchen/kartoshka.jpg';
import lazaniaImg from '../assets/img/vegkitchen/lazania.jpg';
import puriImg from '../assets/img/vegkitchen/puri.jpg';
import ruletikiImg from '../assets/img/vegkitchen/ruletiki.jpg';
import tefteliImg from '../assets/img/vegkitchen/tefteli.jpg';
import tomYumImg from '../assets/img/vegkitchen/tom-yum.jpg';

export const vegKitchenPageData: vegKitchenCard[] = [
    {
        img: kartoshkaImg,
        alt: 'kartoshka-img',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        text: 'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        badgeText: 'Национальные',
        badgeIcon: nationalImg,
        bookmarkCount: 85,
        likeCount: 152,
        recAvatar: '',
        recName: '',
    },
    {
        img: ruletikiImg,
        alt: 'ruletiki-img',
        title: 'Картофельные рулетики с грибами',
        text: 'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        badgeText: 'Детские блюда',
        badgeIcon: kidImg,
        bookmarkCount: 85,
        likeCount: 152,
        recAvatar: '',
        recName: '',
    },
    {
        img: tomYumImg,
        alt: 'tom-yum-img',
        title: 'Том-ям с капустой кимчи',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeText: 'Национальные',
        badgeIcon: nationalImg,
        bookmarkCount: 124,
        likeCount: 324,
        recAvatar: '',
        recName: '',
    },
    {
        img: lazaniaImg,
        alt: 'lazania-img',
        title: 'Овощная лазанья из лаваша',
        text: 'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        badgeText: 'Блюда на гриле',
        badgeIcon: grillImg,
        bookmarkCount: 85,
        likeCount: 152,
        recAvatar: '',
        recName: '',
    },
    {
        img: tefteliImg,
        alt: 'tefteli-img',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badgeText: 'Вторые блюда',
        badgeIcon: fryingPanImg,
        bookmarkCount: 85,
        likeCount: 152,
        recAvatar: '',
        recName: '',
    },
    {
        img: tefteliImg,
        alt: 'tefteli-img',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badgeText: 'Вторые блюда',
        badgeIcon: fryingPanImg,
        bookmarkCount: 85,
        likeCount: 152,
        recAvatar: '',
        recName: '',
    },
    {
        img: chesnokImg,
        alt: 'chesnok-img',
        title: 'Чесночная картошка',
        text: 'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        badgeText: 'Национальные',
        badgeIcon: nationalImg,
        bookmarkCount: 124,
        likeCount: 324,
        recAvatar: '',
        recName: '',
    },
    {
        img: puriImg,
        alt: 'puri-img',
        title: 'Пури',
        text: 'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        badgeText: 'Национальные',
        badgeIcon: nationalImg,
        bookmarkCount: 124,
        likeCount: 324,
        recAvatar: '',
        recName: '',
    },
];
