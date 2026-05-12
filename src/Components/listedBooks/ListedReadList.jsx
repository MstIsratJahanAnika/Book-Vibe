import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../UI/BookCard';

const ListedReadList = ({sortingType}) => {
    const { storedBooks } = useContext(BookContext);
        // console.log(storedBooks, wishList, 'bookContext');

        const[filterReadList, setFilterReadList] = useState(storedBooks);
        
        useEffect(() =>{
            if(sortingType === 'pages'){
                const sortedData = [...storedBooks].sort((a, b)=> a.totalPages - b.totalPages); //ascending data sort
                console.log(sortedData);
                setFilterReadList(sortedData);
            }else if(sortingType === 'rating'){
                const sortedData = [...storedBooks].sort((a, b)=> a.rating - b.rating);
                console.log(sortedData);
                setFilterReadList(sortedData);
            }
        },[sortingType, storedBooks]);

        if(filterReadList.length === 0){
            return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Books Added to Read List</h2>
            </div>
        }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                filterReadList.map((book, idx) => (
                    <BookCard key={idx} book={book}></BookCard>
                ))
            }
        </div>
    );
};

export default ListedReadList;