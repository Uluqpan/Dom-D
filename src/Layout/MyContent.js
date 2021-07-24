import React from 'react';
import hi1 from '../images/hi1.svg';
import hi2 from '../images/hi2.svg';
import hi3 from '../images/hi3.svg';
import hi4 from '../images/hi4.svg';
import hi5 from '../images/hi5.svg';
import hi6 from '../images/hi6.svg';

const MyContent = () => {
    return (
        <div>
            <div className="text-3xl text-center font-bold">Посмотрите на готовые дома с комплексом</div>
            <div className="text-3xl text-center">отделки и прокладки коммуникаций.</div>

            <div className="grid grid-cols-12">
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={hi1} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={hi2} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={hi3} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={hi4} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={hi5} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={hi6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MyContent;