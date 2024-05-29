import React from 'react';

const Review = ({ profile }) => {
    return (
        <div className="max-w-sm mx-auto bg-white  rounded-xl ml-10  p-6 border">
            <div className="flex flex-col items-center">
                <img className="h-28 w-28  rounded-full   object-cover" src={profile.image} alt={profile.name} />
                <div className="text-center mt-16">
                    <h1 className=" mt-1 text-[24px] font-semibold text-black">{profile.name}</h1>
                    <div className="uppercase tracking-wide text-sm text-[#858585] font-semibold">{profile.title}</div>
                    <div className="flex justify-center mt-2 mb-4">
                        {[...Array(5)].map((star, index) => (
                            <svg key={index} className={`h-5 w-5 ${index < profile.rating ? 'text-yellow-500' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .587l3.668 7.428L24 9.743l-6 5.845 1.417 8.262L12 18.897l-7.417 4.953L6 15.588 0 9.743l8.332-1.728z" />
                            </svg>
                        ))}
                    </div>
                    <p className="mt-2 text-gray-500">
                        {profile.description}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Review;