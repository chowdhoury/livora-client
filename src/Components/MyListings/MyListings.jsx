import React from 'react';
import MyListingHero from './MyListingHero/MyListingHero';
import MyListingContainer from './MyListingContainer/MyListingContainer';

const MyListings = () => {
    return (
        <div>
            <title>My Listings</title>
            <section>
                <MyListingHero/>
            </section>
            <section>
                <MyListingContainer/>
            </section>
        </div>
    );
};

export default MyListings;