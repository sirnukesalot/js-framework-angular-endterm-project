export interface Product  {
    id: string,
    title : string,
    price : number,
    description: string,
        category: {
            id: 1,
            name: string,
            image: string,
        },
        images: [
            string
        ],
}