import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases(){
    //la idea es que aqui nos pongamos en contacto con el servidor para obtener los datos
    
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                title: 'purchase 2',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State'
                }
            },
            {
                _id: 1,
                title: 'purchase 2',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State'
                }
            },
            {
                _id: 2,
                title: 'purchase 2',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State'
                }
            },
            {
                _id: 3,
                title: 'purchase 2',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State'
                }
            },
            {
                _id: 4,
                title: 'purchase 2',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State'
                }
            },
            {
                _id: 5,
                title: 'purchase 2',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State'
                }
            },
            {
                _id: 6,
                title: 'purchase 2',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State'
                }
            },
            {
                _id: 7,
                title: 'purchase 2',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State'
                }
            }
        ]
    })
}