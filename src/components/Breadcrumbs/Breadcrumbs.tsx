import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

const Breadcrumbs = () => {
    const breadcrumbStyles = {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '150%',
        textAlign: 'center',
        color: '#000',
        textDecoration: 'none',
    };
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink sx={breadcrumbStyles} href='#'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default Breadcrumbs;
