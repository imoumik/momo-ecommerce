import { ICategory } from './InterfaceTypes';

export const categories: ICategory[] = [
    {
        id: 1,
        title: 'Hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        route: 'hats'
    },
    {
        id: 2,
        title: 'Jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        route: 'jackets'
    },
    {
        id: 3,
        title: 'Sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        route: 'sneakers'
    },
    {
        id: 4,
        title: 'Womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        route: 'womens'
    },
    {
        id: 5,
        title: 'Mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        route: 'mens'
    }
]

export const ACTION_TYPES = {
    SET_CURRENT_USER: 'user/SET_CURRENT_USER',
    SET_CATEGORIES_MAP: 'categories/SET_CATEGORIES_MAP'
}
