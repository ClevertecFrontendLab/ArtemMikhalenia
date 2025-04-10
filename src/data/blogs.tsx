import { blogCard } from '~/interfaces/interfaces';

import alexCookImg from '../assets/img/avatars/alex-cook.jpg';
import ekaterinaKonstImg from '../assets/img/avatars/ekaterina-konst.jpg';
import elenaVysotskayaImg from '../assets/img/avatars/elena-vysotskaya.jpg';

export const blogData: blogCard[] = [
    {
        avatar: elenaVysotskayaImg,
        name: 'Елена Высоцкая',
        email: '@elenapovar',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        avatar: alexCookImg,
        name: 'Alex Cook',
        email: '@funtasticooking',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        avatar: ekaterinaKonstImg,
        name: 'Екатерина Константинопольская',
        email: '@bake_and_pie',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
