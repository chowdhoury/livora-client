import React from 'react';
import PropertyDetailsHero from './PropertyDetailsHero/PropertyDetailsHero';
import PropertyDetailsContainer from './PropertyDetailsContainer/PropertyDetailsContainer';


const PropertyDetails = () => {
    return (
        <div>
            
            <section>
                <PropertyDetailsHero/>
            </section>
            <section>
                <PropertyDetailsContainer/>
            </section>
        </div>
    );
};

export default PropertyDetails;