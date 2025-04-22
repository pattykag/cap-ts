import { Books } from "#cds-models/BookshopService";
import { BooksInterface } from "../interfaces/interfaces";

export class BooksOrder {
    constructor(
        public ID: number,
        public stock?: number,
        public price?: number
    ) { }

    public totalToPay = (): string => {
        if (this.stock && this.price) {
            const total: number = this.stock * this.price;
            return `El total a pagar es de: ${total}`;
        }
        return 'You must provide the stock and the price'
    }

    public authorName = async (): Promise<string> => {
        const books = await SELECT.one(Books, { ID: this.ID }, a => {
            a('*'), a.author('*'), a.author.test('*')
        }) as unknown as BooksInterface;
        if (!books) {
            throw new Error('books is empty');
        }

        const authorName = books?.author?.name;
        const prueba_name = books?.author_test?.name;

        return `Autor: ${authorName}. Prueba: ${prueba_name}`
    }
}