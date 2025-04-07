import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Flex,
    Image,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';

import { navbarData } from '~/data/navbarData';

import accordionIcon from '../../assets/img/icons/accordion-icon.svg';
import Footer from '../Footer/Footer';

const Navbar = () => {
    const listItemStyle = {
        position: 'relative',
        padding: '6px 0px 6px 52px',
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#000',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '6px',
            left: '40px',
            height: '24px',
            width: '1px',
            backgroundColor: '#c4ff61',
        },
    };

    return (
        <Flex direction='column' justifyContent='space-between' w='100%' h='100%'>
            <Accordion
                allowMultiple
                paddingTop='33px'
                sx={{ overflowY: 'scroll', scrollbarWidth: 'none' }}
            >
                {navbarData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        style={{
                            border: 'none',
                        }}
                    >
                        {({ isExpanded }) => (
                            <>
                                <h2
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <AccordionButton
                                        _hover={{ bg: '#eaffc7' }}
                                        sx={{
                                            backgroundColor: isExpanded
                                                ? ' #eaffc7'
                                                : 'transparent',
                                            border: 'none',
                                            gap: '11px',
                                            padding: '12px 6px',
                                            cursor: 'pointer',
                                            maxWidth: '230px',
                                        }}
                                    >
                                        <Image src={item.img} />
                                        <Text
                                            flex='1'
                                            textAlign='left'
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: isExpanded ? ' 700' : '500',
                                                fontSize: '16px',
                                                lineHeight: '150%',
                                                color: '#000',
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                        <img
                                            src={accordionIcon}
                                            alt='Custom Icon'
                                            style={{
                                                width: '16px',
                                                height: '16px',
                                                marginRight: '4px',
                                                transform: isExpanded
                                                    ? 'rotate(180deg)'
                                                    : 'rotate(0deg)',
                                                transition: 'transform 0.5s',
                                            }}
                                        />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    <List
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.text.map((el, i) => (
                                            <ListItem key={i} sx={listItemStyle}>
                                                {el}
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                ))}
            </Accordion>
            <Footer />
        </Flex>
    );
};

export default Navbar;
