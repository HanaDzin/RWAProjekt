import React from 'react'

import Golf from '../../assets/Golf.png'
import Mercedes from '../../assets/Mercedes.png'
import Audi from '../../assets/Audi.png'
import Skoda from '../../assets/whiteCar.png'
import Tesla from '../../assets/blackTesla.png'
import BMW from '../../assets/bmw2.png'

const CarListData = [

    {
        name: "Golf",
        price: 120,
        image: Golf,
        aosDelay: "0",
    },

    {
        name: "Mercedes",
        price: 80,
        image: Mercedes,
        aosDelay: "500",
    },

    {
        name: "Audi",
        price: 100,
        image: Audi,
        aosDelay: "1000",
    },
    {
        name: "BMW",
        price: 90,
        image: Skoda,
        aosDelay: "1500",
    },

    {
        name: "Tesla",
        price: 150,
        image: Tesla,
        aosDelay: "2000",
    },

    {
        name: "BMW",
        price: 110,
        image: BMW,
        aosDelay: "2500",
    },
]

const CarList = () => {
  return (
    <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
        <div className="container">
        {/* heading */}
            <h1 className='text-3xl sm:text-4xl font-semibold mb-3'
            data-aos="fade-up">
            Najpopularniji modeli
            </h1>
            <p className='text-sm pb-10'
            data-aos="fade-up">
                Iznajmite neko od najpopularnijih vozila u našoj ponudi. 
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
            {
                CarListData.map((car) => {
                    return (
                    <div className='space-y-3 border-2 border-gray-300 rounded-xl p-3
                    hover:border-primary relative group'
                    data-aos="fade-up"
                    data-aos-delay={car.aosDelay}>
                        <div className='w-full h-[150px]'>
                            <img className='w-full h-[120px] object-contain'
                            src={car.image} alt="" />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-primary font-semibold'>{car.name}</h1>
                            <div className='flex justify-between items-center text-xl font-semibold'>
                                <p>{car.price}€ / dan</p>
                            </div>
                        </div>
                    </div>
                )
            })}

            </div>
            <div className='grid place-content-center mt-8'>
                <button className='button-outline'
                data-aos="fade-up">
                    Istraži ponudu
                </button>
            </div>
        </div>
    </div>
  )
}

export default CarList