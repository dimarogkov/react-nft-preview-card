export interface CardImg {
    src: string;
    alt: string;
}

export interface CardContent {
    title: string;
    text: string;
    quantity: number;
    time: string;
}

export interface CardUser {
    name: string;
    img: CardImg;
}

export interface Card {
    img: CardImg;
    content: CardContent;
    user: CardUser;
}
