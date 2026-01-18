import React from 'react';
import services from '../../../public/services.json'
import ServiceCard from '../Cards/ServiceCard';
const Service = async () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-bold mb-10'>Our Services</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;