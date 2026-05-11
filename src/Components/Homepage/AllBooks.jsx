// import React, { use } from 'react';
// import { CiStar } from 'react-icons/ci';
import { use } from 'react';
import BookCard from '../UI/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {

    const books = use(booksPromise);
    console.log('books', books);

    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-3xl text-center mb-9'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                books.map((book, idx) => {

                    // for each book card return
                    return (
                        <BookCard book={book} key={idx}/>
                    )
                })
            }
            </div>
        </div>
    );
};

export default AllBooks;