// import React from 'react';

import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

// react-tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../Components/listedBooks/ListedReadList";
import ListedWishList from "../../Components/listedBooks/ListedWishList";

const Books = () => {

    // BookContext theke storedBooks destructuring kore niye ashlam
    const { storedBooks, wishList } = useContext(BookContext);
    console.log(storedBooks, wishList, 'bookContext');
    return (
        <div className="container mx-auto my-3">

            {/* ReadList: {storedBooks.length} <br />
            WishList: {wishList.length} */}

            {/* react tab */}
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                {/* Listed books component call */}
                <TabPanel>
                    <ListedReadList />
                </TabPanel>
                <TabPanel>
                    <ListedWishList />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;