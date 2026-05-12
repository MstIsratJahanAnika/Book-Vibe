import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../UI/BookCard';

const ListedWishList = ({sortingType}) => {

    const { wishList } = useContext(BookContext);
    // console.log(storedBooks, wishList, 'bookContext');

    const[filterWishList, setFilterWishList] = useState(wishList);
            
            useEffect(() =>{
                if(sortingType === 'pages'){
                    const sortedData = [...wishList].sort((a, b)=> a.totalPages - b.totalPages); //ascending data sort
                    console.log(sortedData);
                    setFilterWishList(sortedData);
                }else if(sortingType === 'rating'){
                    const sortedData = [...wishList].sort((a, b)=> a.rating - b.rating);
                    console.log(sortedData);
                    setFilterWishList(sortedData);
                }
            },[sortingType, wishList]);

    if(filterWishList.length === 0){
         return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Books Added to Wish List</h2>
            </div>
        }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                
                filterWishList.map((book, idx) => (
                    <BookCard key={idx} book={book}></BookCard>
                ))
            }
        </div>
    );
};

export default ListedWishList;