import { Books } from '#cds-models/BookshopService';

export class BooksOrder {
    constructor(
        public ID: number,
        public stock?: number,
        public price?: number
    ) { }

    public totalToPay = (): number | string => {
        if (this.stock && this.price) {
            return this.stock * this.price;
        }
        return 'You must provide the stock and the price'
    }
}