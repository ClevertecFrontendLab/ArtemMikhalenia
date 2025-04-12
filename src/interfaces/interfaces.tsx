export interface newRecipesCard {
    img: string;
    alt: string;
    title: string;
    text: string;
    badgeText: string;
    badgeIcon: string;
    bookmarkCount: number;
    likeCount: number;
}

export interface mostPopularCard {
    img: string;
    alt: string;
    title: string;
    text: string;
    badgeText: string;
    badgeIcon: string;
    bookmarkCount: number;
    likeCount: number;
    recAvatar: string;
    recName: string;
}

export interface blogCard {
    avatar: string;
    name: string;
    email: string;
    text: string;
}

export interface relevantCardV {
    title: string;
    text: string;
    badgeText: string;
    badgeIcon: string;
    bookmarkCount: number;
    likeCount: number;
}

export interface relevantCardH {
    title: string;
    icon: string;
}

export interface vegKitchenCard {
    img: string;
    alt: string;
    title: string;
    text: string;
    badgeText: string;
    badgeIcon: string;
    bookmarkCount: number;
    likeCount: number;
    recAvatar: string;
    recName: string;
}

export interface mostPopularCard {
    img: string;
    alt: string;
    title: string;
    text: string;
    badgeText: string;
    badgeIcon: string;
    bookmarkCount: number;
    likeCount: number;
    recAvatar: string;
    recName: string;
}

export interface relevantPage {
    title: string;
    text: string;
    cardV: relevantCardV[];
    cardH: relevantCardH[];
}

export interface BreadcrumbsNames {
    [key: string]: string;
}
