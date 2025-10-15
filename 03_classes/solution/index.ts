class Catalogue {
    #books: Array<Book>;

    constructor(books: Array<Book>) {
        this.#books = books;
    }

    addBook(book: Book): Catalogue {
        this.#books.push(book);
        return this;
    }
}

class Book {
    title: string;
    author: string;
    pubDate: Date;

    #returnDate: Date | null;
    #borrower: Patron | null;

    constructor(title: string, author: string, pubDate: Date) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;

        this.#returnDate = null;
        this.#borrower = null;
    }

    get isAvailable(): boolean {
        // need to use returnDate and borrower,
        // otherwise we get a unused variable error
        return this.#returnDate === null || this.#borrower === null;
    }

    lend(borrower: Patron): Book {
        const now = new Date();
        const borrowTime = 14;
        this.#returnDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + borrowTime,
        );
        this.#borrower = borrower;
        return this;
    }
}

class Patron {
    name: string;
    #books: Array<Book>;

    constructor(name: string) {
        this.name = name;
        this.#books = [];
    }

    borrow(book: Book): Patron {
        this.#books.push(book);
        book.lend(this);
        return this;
    }
}
