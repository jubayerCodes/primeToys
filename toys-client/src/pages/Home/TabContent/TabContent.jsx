import React from 'react';
import TabCard from '../TabCard/TabCard';

const TabContent = ({subCategory, toys, activeTab}) => {

    const filteredToys = toys.filter(toy => toy.subCategory === activeTab)

    return (
        <div className={`content w-full grid-cols-1 lg:grid-cols-3 justify-between items-center gap-12  ${activeTab === subCategory ? 'grid' : 'hidden'}`}>
            {
                filteredToys.map(toy => <TabCard key={toy._id} toy={toy}></TabCard>)
            }
        </div>
    );
};

export default TabContent;