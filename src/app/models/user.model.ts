export interface ILocation {
    address: string;
    city: string;
    cap: string;
}

export interface IProduct {
    name: string;
    price: number;
}

export interface IOrder {
    id: string;
    date: string;
    product: IProduct;
    quantity: number;
}

export interface IUser {
    id: string;
    name: string;
    surname: string;
    mail: string;
    imageUrl: string;
    location: ILocation;
    orders: IOrder[];
}