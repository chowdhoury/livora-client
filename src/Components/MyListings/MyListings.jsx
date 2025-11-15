import React from 'react';
import MyListingHero from './MyListingHero/MyListingHero';
import MyListingContainer from './MyListingContainer/MyListingContainer';

const MyListings = () => {
    return (
        <div>
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