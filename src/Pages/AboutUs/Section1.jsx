import React from 'react';
import logoone from '../../assets/AboutImages/logo/secondsection.png'
import logotwo from '../../assets/AboutImages/logo/rocket.png'
import logothree from '../../assets/AboutImages/logo/trending.png'

const Section1 = () => {
    return (

        <div className="mt-[100px] grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
            <div className='text-center text-balance'>
                <img
                    className="object-cover m-auto w-24 h-24 "
                    src={logoone}
                    alt="group"
                />
                <div className="flex flex-col justify-center mt-2">
                    <p className="text-lg font-semibold text-black">Great team work</p>
                    <p className="text-sm tracking-wide text-[#878787]">
                        Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                        cuppa unhand me sir hadn't done it in donkey's years sod's law.
                    </p>
                </div>
            </div>
            <div className='text-balance text-center'>
                <img
                    className="object-cover w-24 h-24 m-auto"
                    src={logotwo}
                    alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                    <p className="text-lg font-semibold text-black">Our vision</p>
                    <p className="text-sm tracking-wide text-[#878787]">
                        Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                        cuppa unhand me sir hadn't done it in donkey's years sod's law.
                    </p>
                </div>
            </div>
            <div className='text-balance text-center'>
                <img
                    className="object-cover w-24 h-24 m-auto"
                    src={logothree}
                    alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                    <p className="text-lg font-semibold text-black">Our mision</p>
                    <p className="text-sm tracking-wide text-[#878787]">
                        Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                        cuppa unhand me sir hadn't done it in donkey's years sod's law.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Section1;