import React from 'react';
import Heading from '../../Components/AllPropertiesPage/Heading/Heading';
import PropertyContainer from '../../Components/AllPropertiesPage/PropertyContainer/PropertyContainer';

const AllProperties = () => {
    return (
        <div>
            <section>
                <Heading/>
            </section>
            <section>
                <PropertyContainer/>
            </section>
        </div>
    );
};

export default AllProperties;