
const getAllReadListFromLocalDB = ()=>{
    const allReadList = localStorage.getItem('readList');
    console.log(allReadList,'read from local db');

    if(allReadList) return JSON.parse(allReadList); //stringify obostha theke json e convert 

    return [];
}

const addReadListToLocalDB=(book)=>{
    const allBooks = getAllReadListFromLocalDB();

    const isAlreadyExists = allBooks.find(bk => bk.bookId === book.bookId);

    if(!isAlreadyExists){
        //ei data ta local DB e add korte chai 
        allBooks.push(book);

        localStorage.setItem('readList', JSON.stringify(allBooks));
    }
};

export {getAllReadListFromLocalDB, addReadListToLocalDB};