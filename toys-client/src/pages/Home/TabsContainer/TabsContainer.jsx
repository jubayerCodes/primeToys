import React from 'react';
import TabContent from '../TabContent/TabContent';

const TabsContainer = ({ subCategories, toys, activeTab, setActiveTab }) => {

    return (
        <div className='tabs-container w-full flex flex-col items-center'>
            <div className="flex flex-col w-full lg:w-fit lg:flex-row gap-6 mb-12">
                {
                    subCategories.map((c, idx) => (
                        <button onClick={()=> setActiveTab(c)} className={`btn tab-btn px-6 ${activeTab === c ? 'bg-[#FF6799] border-[#FF6799]' : 'bg-[#4acdd5] border-[#4acdd5]'}`} key={idx}>
                            {c}
                        </button>
                    ))
                }
            </div>
            <div className="contents w-full">
                {
                    subCategories.map((c, idx) => <TabContent key={idx} toys={toys} activeTab={activeTab} subCategory={c}></TabContent>)
                }
            </div>
        </div>
    );
};

export default TabsContainer;