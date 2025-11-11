import React from 'react';
import Heading from '../../Components/MyListings/Heading/Heading';
import PropertyContainer from '../../Components/MyListings/PropertyContainer/PropertyContainer';

const MyProperties = () => {
    return (
      <div>
        <section>
          <Heading />
        </section>
        <section>
          <PropertyContainer />
        </section>
      </div>
    );
};

export default MyProperties;