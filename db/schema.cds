namespace sap.capire.bookshop;

entity Books {
    key ID       : Integer;
        title    : String(111)            @mandatory;
        descr    : String(1111);
        author   : Association to Authors @mandatory;
        genre    : Association to Genres;
        stock    : Integer                @mandatory;
        price    : Decimal(9, 2)          @mandatory;
        currency : Decimal(15, 2);
}

entity Authors {
    key ID           : Integer;
        name         : String(111) @mandatory;
        dateOfBirth  : Date;
        dateOfDeath  : Date;
        placeOfBirth : String;
        placeOfDeath : String;
        test         : Association to Tests;
        books        : Association to many Books
                           on books.author = $self;
}

entity Genres {
    ID   : Integer;
    name : String(255);
}

entity Tests {
    key ID   : Integer;
        name : String;
}
