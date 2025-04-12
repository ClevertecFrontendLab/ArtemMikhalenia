import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { breadcrumbStyles } from '~/app/theme/styles';
import { BreadcrumbsNames } from '~/interfaces/interfaces';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const breadcrumbsNames: BreadcrumbsNames = {
        vegkitchen: 'Веганская кухня',
        mostpopularfood: 'Самое сочное',
    };

    return (
        <Breadcrumb separator='>'>
            <BreadcrumbItem>
                <BreadcrumbLink
                    isCurrentPage={pathnames.length === 0}
                    as={Link}
                    sx={breadcrumbStyles}
                    to='/'
                >
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathnames.map((path, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <BreadcrumbItem key={routeTo}>
                        <BreadcrumbLink
                            as={Link}
                            to={routeTo}
                            sx={breadcrumbStyles}
                            isCurrentPage={isLast}
                        >
                            {breadcrumbsNames[path] || path}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
