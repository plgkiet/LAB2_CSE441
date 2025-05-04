CREATE DATABASE Book;
USE Book;

CREATE TABLE Books (
    bookid INT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(512),
    price DECIMAL(18, 2),
    note VARCHAR(128)
);

INSERT INTO Books (bookid, name, description, price, note)
VALUES 
    (1, 'The Great Gatsby', 'A novel by F. Scott Fitzgerald about the American dream.', 10.99, 'Classic novel'),
    (2, 'To Kill a Mockingbird', 'A novel by Harper Lee about racial injustice in the Deep South.', 12.99, 'Pulitzer Prize-winning book'),
    (3, '1984', 'A dystopian novel by George Orwell about totalitarianism and surveillance.', 15.49, 'Important work of dystopian fiction');

SELECT * FROM Books;
