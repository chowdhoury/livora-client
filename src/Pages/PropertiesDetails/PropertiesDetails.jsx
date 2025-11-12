import React from 'react';
import Heading from '../../Components/PropertyDetailsPage/Heading/Heading';
import PropertyContainer from '../../Components/PropertyDetailsPage/PropertyContainer/PropertyContainer';

const PropertiesDetails = () => {
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

export default PropertiesDetails;