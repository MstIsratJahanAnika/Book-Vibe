// import React from 'react';

import { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";

// react-tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../Components/listedBooks/ListedReadList";
import ListedWishList from "../../Components/listedBooks/ListedWishList";

const Books = () => {

    // sorting state
    const [sortingType, setSortingType] = useState("");
    console.log(sortingType, 'sortingType');

    // BookContext theke storedBooks destructuring kore niye ashlam
    const { storedBooks, wishList } = useContext(BookContext);
    console.log(storedBooks, wishList, 'bookContext');
    return (
        <div className="container mx-auto my-3">

            {/* ReadList: {storedBooks.length} <br />
            WishList: {wishList.length} */}

            {/* sorting dropdown */}
            <div className="flex justify-center items-center my-3">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=> setSortingType('pages')}><a>Pages</a></li>
                        <li onClick={()=> setSortingType('rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>

            {/* react tab */}
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                {/* Listed books component call */}
                <TabPanel>
                    <ListedReadList sortingType={sortingType}/>
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;