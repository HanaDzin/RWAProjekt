import React from 'react'

import newCar from '../../assets/newCar.png'
import rentaCar from '../../assets/rentaCar.png'
import cars from '../../assets/cars.png'

const servicesData = [
     {
        name:"Nova vozila",
        icon: (<img src={newCar} className=" max-h-[150px] group-hover:text-black duration-300" />),
        link: "#",
        description: "Pogledajte široku ponudu novih automobila.",
        aosDelay: "0",
     },

     {
        name:"Rabljena vozila",
        icon: (<img src={rentaCar} className="max-h-[150px] group-hover:text-black duration-300" />),
        link: "#",
        description: "Preko 100 rabljenih vozila u gotovo savršenom stanju.",
        aosDelay: "500",
     },
     {
        name:"Probna vožnja",
        icon: (<img src={cars} className="max-h-[150px] group-hover:text-black duration-300" />),
        link: "#",
        description: "Rezervirajte probnu vožnju u automobilu svojih snova.",
        aosDelay: "1000",
     },
];

const Services = () => {
  return (
    <div className='py-14 dark:bg-black dark:text-white  
    sm:min-h-[600px] sm:grid sm:place-items-center'>
        <div className="container">
            <div className='pb-12'>
            <h1 className='text-3xl font-semibold text-center font-serif 
            sm:text-4xl'>Naše usluge</h1>
            </div>
            <div className='grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3 gap-6'> 
            {
                servicesData.map((service) => (
                    <div 
                    key={service.name}
                    data-aos="fade-up"
                    data-aos-delay={service.aosDelay}
                    className="card text-center group space-y-3 bg-slate-100 p-4 text-black
                    sm:space-y-6 sm:py-16
                    hover:bg-primary duration-300 hover:text-black hover:scale-110 rounded-lg
                    dark:bg-dark dark:text-white">
                        <div className='grid place-items-center'>{service.icon}</div>
                        <h1 className='font-semibold'>{service.name}</h1>
                        <p>{service.description}</p><br />
                    </div>
                ))
            }

            </div>
        </div>
    </div>
  )
}

export default Services