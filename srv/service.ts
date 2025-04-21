import cds from '@sap/cds';
import { startFunction } from '#cds-models/BookshopService';

export class BookshopService extends cds.ApplicationService {
    init() {
        this.on(startFunction, () => {
            return 'Hola';
        });

        return super.init()
    }
}