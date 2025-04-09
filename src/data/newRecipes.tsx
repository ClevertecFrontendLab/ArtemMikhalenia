import { newRecipesCard } from '~/interfaces/interfaces';

import breadImg from '../assets/img/icons/navbar/bread.svg';
import eggplantImg from '../assets/img/icons/navbar/eggplant.svg';
import potImg from '../assets/img/icons/navbar/pot.svg';
import vegImg from '../assets/img/icons/navbar/veg.svg';
import kotletyImg from '../assets/img/new-recipes/kotlety.jpg';
import oladyshkiImg from '../assets/img/new-recipes/oladyshki.jpg';
import salatZdorovieImg from '../assets/img/new-recipes/salat-zdorovie.jpg';
import solyankaImg from '../assets/img/new-recipes/solyanka.jpg';

export const newRecipesData: newRecipesCard[] = [
    {
        img: solyankaImg,
        alt: 'solyanka-img',
        title: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeText: 'Первые блюда',
        badgeIcon: potImg,
        bookmarkCount: 1,
        likeCount: 0,
    },
    {
        img: kotletyImg,
        alt: 'kotlety-img',
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        badgeText: 'Веганские блюда',
        badgeIcon: vegImg,
        bookmarkCount: 2,
        likeCount: 1,
    },
    {
        img: oladyshkiImg,
        alt: 'oladyshki-img',
        title: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeText: 'Десерты, выпечка',
        badgeIcon: breadImg,
        bookmarkCount: 0,
        likeCount: 1,
    },
    {
        img: salatZdorovieImg,
        alt: 'salat-zdorovie-img',
        title: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        badgeText: 'Салаты',
        badgeIcon: eggplantImg,
        bookmarkCount: 0,
        likeCount: 0,
    },
];
