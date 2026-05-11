// import React from 'react';
import { useLoaderData, useParams } from 'react-router';

// const booksPromise = fetch('/booksData.json').then(res => res.json());

const BookDetails = () => {

    const { id } = useParams();
    console.log(id, 'bookId');

    // promise -> use
    //  const books = use(booksPromise);
    // console.log('books', books);

    //LoaderData
    const books = useLoaderData();
    console.log('books', books);


    const expectedBook = books.find((book) => book.bookId == id); //click kora book id === url path theke jeta pabo
    console.log(expectedBook, 'expectedBook');

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing
    } = expectedBook;


    return <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto min-h-screen items-center gap-8 px-6">
        <figure className='flex w-full justify-center items-center bg-gray-100 p-[50px] rounded-2xl'>
            <img className='w-[400px]'
                src={image}
                alt={bookName} />
        </figure>
        <div className="card-body space-y-3">
            <h2 className="card-title text-2xl">{bookName}</h2>
            <h2 className="card-title">By: {author}</h2>
            <p className='py-2 border-y'>{category}</p>
            <p>Review: {review}</p>

            <div className='flex gap-4'>
                <p className='font-bold'>Tag</p>
            {
                tags.map((tag, ind) => (
                    <div key={ind} className="badge badge-soft badge-success">#{tag}</div>
                ))
            }
            </div>
            <div className="border-t space-y-3">
                <div className="flex justify-between items-center gap-2">
                    <span>Number of Pages: </span> <span>{totalPages}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <span>Publisher: </span> <span>{publisher}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <span>Year of Publishing </span> <span>{yearOfPublishing}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <span>Rating </span> <span>{rating}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <button className="btn ">Read</button>
                    <button className="btn btn-accent">WishList</button>
                </div>
            </div>
        </div>
    </div>
};

export default BookDetails;


/**
 * data load ways 
 * 
 * 1. promise diye use use kore data load kora jabe 
 * 2. use Loader diye kora jabe, in that case, no need to convert in json()
 */