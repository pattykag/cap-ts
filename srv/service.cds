using {sap.capire.bookshop as db} from '../db/schema';

@requires: 'authenticated-user'
@path    : '/bookshop'
service BookshopService {
    entity Books as projection on db.Books;
    function totalToPay(ID : Books:ID) returns Integer;
    // test
    function startFunction()           returns String;
}
