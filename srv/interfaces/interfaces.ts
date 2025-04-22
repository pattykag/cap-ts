interface AuthorExtInterface {
    ID: 1,
    name: string,
    dateOfBirth: Date,
    dateOfDeath: string,
    placeOfBirth: string,
    placeOfDeath: string,
    test_ID: number
}

interface AuthorTest {
    ID: number;
    name: string;
}

export interface BooksInterface {
    ID: number;
    title: string;
    descr: string;
    author_ID: number;
    stock: number;
    price: number
    currency: number;
    author: AuthorExtInterface;
    author_test: AuthorTest;
}