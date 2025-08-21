import React from 'react'
import Slider from '../components/Slider'
import { serviceinfo } from '../Data'

const Home = () => {
  return (
    <div className="relative">
      {/* Slider */}
      <Slider />

      {/* Overlapping Section */}
      <div className="bg-purple-200">
        <div className="flex justify-center relative md:-mt-3">
          <div className="bg-purple-900 p-6 md:p-8 w-full md:w-[1020px]">
            <img
              src="images/Group-5.webp"
              alt="Group"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 md:p-10">
          {serviceinfo.map((service, index) => (
            <div
              key={index}
              className="relative h-[250px] bg-cover bg-center overflow-hidden shadow-lg"
              style={{ backgroundImage: `url(/images/${service.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 hover:bg-black/40 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center">
                  {service.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
