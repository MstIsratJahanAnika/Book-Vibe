import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkRead = (currentBook) => {
        /**
         * step 1: store book id
         * step 2: where to store
         * step 3: format: array or collection 
         * step 4: if book exists, show toast and return
         * step 5: if not then add the book in array or collection
         */

        console.log('currentBook', currentBook);

        const isExists = storedBooks.find(book => book.bookId === currentBook.bookId);
        if (isExists) {
            toast.error('The Book is Already Exists');
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);

            // dynamic alert, bookName er 
            toast.success(`${currentBook.bookName} is added to read list`);
        }
    }

    // add to wishlist
    const handleWishList = (currentBook) => {
        /**
         * step 1: store book id
         * step 2: where to store
         * step 3: format: array or collection 
         * step 4: if book exists, show toast and return
         * step 5: if not then add the book in array or collection
         */

        // console.log('currentBook', currentBook);

        // readlist a thakle wishlist a nibo na
        const isExistsInReadList = storedBooks.find(book => book.bookId === currentBook.bookId);
        if(isExistsInReadList){
            toast.error('This Book is already in ReadList');
            return;
        } 

        const isExists = wishList.find(book => book.bookId === currentBook.bookId);
        if (isExists) {
            toast.error('The Book is Already Exists');
        }
        else {
            setWishList([...wishList, currentBook]);

            // dynamic alert, bookName er 
            toast.success(`${currentBook.bookName} is added to wish list`);
        }
    }

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkRead,
        wishList,
        setWishList,
        handleWishList
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;