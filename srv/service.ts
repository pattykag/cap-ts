import cds from '@sap/cds';
import { totalToPay, authorBook, Books } from '#cds-models/BookshopService';
import { BooksOrder } from './functions/func';

export class BookshopService extends cds.ApplicationService {
    init() {
        this.on(totalToPay, async req => {
            const { ID } = req.data;
            if (!ID) {
                req.reject(400, 'ID is required');
            }

            const BooksQuery = await SELECT.one(Books, ID as number);
            if (!BooksQuery) {
                req.reject(400, 'BooksQuery is empty');
            }

            const { stock, price } = BooksQuery as { stock: number; price: number };
            const booksOrder: BooksOrder = new BooksOrder(ID as number, stock, price);
            return booksOrder.totalToPay();
        });

        this.on(authorBook, async req => {
            const { ID } = req.data;
            if (!ID) {
                req.reject(400, 'ID is required');
            }

            const author: BooksOrder = new BooksOrder(ID as number);
            const authorName: Promise<string> = author.authorName();

            return authorName;
        });

        return super.init()
    }
}