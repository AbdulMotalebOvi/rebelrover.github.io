import React from 'react';
import paris from '../../assets/packages/traverone.png';
import swiss from '../../assets/packages/traveltwo.png';
import thailand from '../../assets/packages/travelthree.png';
import taiwan from '../../assets/packages/travelfour.png';
import Indonesia from '../../assets/packages/travelfive.png';
import singapore from '../../assets/packages/travel6.png';
import star from '../../assets/packages/star.png';

const cardDetails = [
    {
        image: paris,
        title: 'Paris',
    },
    {
        image: swiss,
        title: 'Swiss',
        update: 'new'
    },
    {
        image: thailand,
        title: 'Thailand',
        update: 'new'
    },
    {
        image: taiwan,
        title: 'Taiwan',
    },
    {
        image: Indonesia,
        title: 'Indonesia',
    },
    {
        image: singapore,
        title: 'Singapore',
        update: 'new'
    }
];

const Section1 = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
            {
                cardDetails.map((cd, index) => (
                    <div key={index} className="card w-[444px]bg-white rounded-t-lg rounded-b-none shadow-xl">
                        <figure><img src={cd.image} alt={cd.title} /></figure>
                        <div className="card-body">
                            <div className='flex justify-between items-center'>
                                <h5 className="card-title capitalize">
                                    {cd.title}
                                    {cd.update && <div className="badge badge-secondary">{cd.update}</div>}
                                </h5>
                                <h5 className='tracking-wide'>$299.00/2days</h5>
                            </div>
                            <p className='text-[#555555]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at placeat laborum praesentium laudantium? Quisquam quis porro praesentium?</p>
                            <div className="card-actions mt-6 justify-between items-center">
                                <img className='w-[134px] h-[21px]' src={star} alt="Star Rating" />
                                <button className="btn btn-neutral bg-[#000000] text-white rounded-[30px]">Discover more</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Section1;
