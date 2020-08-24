import * as types from './../constants/actionType'

let initialState = [{
        id: 1,
        name: 'Samsum Galaxy S20 Ultra',
        decription: ' Sản Phẩm của SAMSUNG',
        price: 20999000,
        inventory: 10,
        image: 'https://cdn.tgdd.vn/Products/Images/42/225063/samsung-galaxy-note-20-ultra-5g-063420-123447-400x400.jpg',
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone Apple 11 Pro Max',
        decription: ' Sản Phẩm của APPPLE',
        price: 29999000,
        inventory: 7,
        image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        rating: 3
    },
    {
        id: 3,
        name: 'XiaoMi Mi Note 10 Pro',
        decription: ' Sản Phẩm của XIAOMI',
        price: 15999000,
        inventory: 5,
        image: 'https://cdn.tgdd.vn/Products/Images/42/213590/xiaomi-mi-note-10-pro-black-400x400.jpg',
        rating: 5
    },
    {
        id: 4,
        name: 'Sony Xperia Edge Xtreme',
        decription: ' Sản Phẩm của SONY',
        price: 19999000,
        inventory: 10,
        image: 'https://cdn.tgdd.vn/Products/Images/42/226299/sony-xperia-edge-xtreme-235520-085546-400x400.jpg',
        rating: 2
    },
    {
        id: 5,
        name: 'Huawei P40 Pro',
        decription: ' Sản Phẩm của HUAWEI',
        price: 23999000,
        inventory: 50,
        image: 'https://cdn.tgdd.vn/Products/Images/42/215773/huawei-p40-pro-600x600-3-600x600.jpg',
        rating: 4
    },
    {
        id: 6,
        name: 'Oppo Find X2',
        decription: 'Sản Phẩm của OPPO',
        price: 23999000,
        inventory: 50,
        image: 'https://cdn.tgdd.vn/Products/Images/42/198150/oppo-find-x2-blue-600x600-600x600.jpg',
        rating: 3
    }

]

export const Product = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CARD:
            return state
        default:
            return [...state]
    }
}


export default Product