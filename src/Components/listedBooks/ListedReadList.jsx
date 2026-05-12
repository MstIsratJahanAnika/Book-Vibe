import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../UI/BookCard';

const ListedReadList = () => {
    const { storedBooks } = useContext(BookContext);
        // console.log(storedBooks, wishList, 'bookContext');

        if(storedBooks.length === 0){
            return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Books Added to Read List</h2>
            </div>
        }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                storedBooks.map((book, idx) => (
                    <BookCard key={idx} book={book}></BookCard>
                ))
            }
        </div>
    );
};

export default ListedReadList;