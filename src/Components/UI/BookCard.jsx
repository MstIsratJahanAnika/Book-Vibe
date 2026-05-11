// import React from 'react';

import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
            <figure className='p-6'>
                <div className="bg-[#F3F3F3] py-8 px-24 rounded-2xl">
                <img src={book.image} alt={book.bookName} className='rounded-xl h-62.5' />
                </div>
            </figure>
            <div className="card-body">

                <div className='flex items-center gap-3'>
                    {
                        book.tags.map((tag, ind) => (
                            <div key={ind} className="badge badge-soft badge-success">{tag}</div>
                        ))
                    }
                </div>
                <h2 className="card-title text-2xl">{book.bookName}</h2>
                <p>By: {book.author}</p>

                <div className="card-actions justify-between border-t border-gray-300 border-dashed pt-4 font-semibold test-xl">
                    <div className=" ">{book.category}</div>
                    <div className="flex justify-between items-center gap-2">{book.rating}  <CiStar className='font-semibold text-xl' /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;