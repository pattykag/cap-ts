import cds from '@sap/cds';
import { startFunction, totalToPay, Books } from '#cds-models/BookshopService';
import { BooksOrder } from './functions/func';

export class BookshopService extends cds.ApplicationService {
    init() {
        this.on(totalToPay, async req => {
            const {ID} = req.data;
            if(!ID) {
                req.reject(400, 'ID is required');
            }
            
            const BooksQuery = await SELECT.one(Books, ID);
            if (!BooksQuery) {
                req.reject(400, 'BooksQuery is empty');
            }

            const { stock, price } = BooksQuery as { stock: number; price: number };;
            const booksOrder: BooksOrder = new BooksOrder(ID, stock, price);
            return booksOrder.totalToPay();
        });

        this.on(startFunction, () => {
            return 'Hola';
        });

        return super.init()
    }
}