using {sap.capire.bookshop as db} from '../db/schema';

@requires: 'authenticated-user'
@path    : '/bookshop'
service BookshopService {
    entity Books as projection on db.Books;
    function totalToPay(ID : Books:ID) returns String;
    function authorBook(ID : Books:ID) returns String;
}
