import React from 'react';
import web1 from '../images/web1.svg';
import web2 from '../images/web2.svg';
import web3 from '../images/web3.svg';
import web4 from '../images/web4.svg';
import web5 from '../images/web5.svg';
import web6 from '../images/web6.svg';

const Web = () => {
    return (
        <div>
            <div>
                <div className="text-2xl text-center font-extrabold">Оказываем  услуги комплексно,</div>
                <div className="text-2xl font-bold text-center">совмещая отдельные виды работ</div>
            </div>
            <div className="grid grid-cols-10">
                <div className="col-span-2"></div>
                <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                    <div className="text-center text-xl text-bold">Каркасные дома</div>
                    <br />
                    <div className="text-center">
                        <button className="rounded border h-10 w-40 bg-red-400 m-3">Подробнее ➡️</button>
                    </div>
                    <br />
                    <img className="h-4/5" src={web1} alt="#" />
                </div>

                <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                    <div className="text-center text-xl text-extrabold">Дома из клеёного бруса</div>
                    <br />
                    <div className="text-center">
                        <button className="rounded border h-10 w-40 bg-red-400 m-3">Подробнее ➡️</button>
                    </div>
                    <img className="h-4/5" src={web2} alt="#" />
                </div>

                <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                    <div className="text-center text-xl text-bold">Дома из брёвен </div>
                    <br />
                    <div className="text-center">
                        <button className="rounded border h-10 w-40 bg-red-400 m-3">Подробнее ➡️</button>
                    </div>
                    <img className="h-5/6" src={web3} alt="#" />
                </div>
                <div className="col-span-2"></div>

            </div>
            <div className="col-span-12">
                <div className="grid grid-cols-10">
                    <div className="col-span-2"></div>
                    <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                        <div className="text-center text-xl text-bold">Фахверковые дома </div>
                        <br />
                        <div className="text-center">
                            <button className="rounded border h-10 w-40 bg-red-400 m-3">Подробнее ➡️</button>
                        </div>
                        <img src={web4} alt="#" />
                    </div>

                    <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                        <div className="text-center text-xl text-bold">Беседки</div>
                        <br />
                        <div className="text-center">
                            <button className="rounded border h-10 w-40 bg-red-400 m-3">Подробнее ➡️</button>
                        </div>
                        <img className="bg-contain" src={web5} alt="#" />
                    </div>

                    <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                        <div className="text-center text-xl text-bold">Ремонт и отделка </div>
                        <br />
                        <div className="text-center">
                            <button className="rounded border h-10 w-40 bg-red-400 m-3">Подробнее ➡️</button>
                        </div>
                        <img src={web6} alt="#" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Web;