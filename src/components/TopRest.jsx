import React, { useEffect, useState } from 'react'
import Card from './Card'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
export default function TopRest(){
    const [data,setData] = useState([]);
       
    const fetchTopRestaurant = async () => {
         const response = await fetch('/restaurantChains.json')
         const apiData = await response.json();
         setData(apiData);
    }
    useEffect(
        () => {
             fetchTopRestaurant();
        },[]
    )
      return (
            <div className='max-w-[1200px] mx-auto mb-[100px]'>
                        <div className='flex my-3 items-center justify-between'>
                            <div className='text-[25px] font-bold'>Top restaurant chains in Jodhpur</div>
                            <div className='flex'>
                                <div className='flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' >
                                  <FaArrowCircleLeft />
                                </div>
                                <div className='flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                                 <FaArrowCircleRight />
                                </div>
                            </div>
                        </div>
                        <div className ='flex gap-5 overflow-hidden'>
                            {
                                data.map(
                                    (d,i) => {
                                        return <Card {...d} key={i}/>
                                    }
                                )
                            }
                        </div>
                        </div>
      )
}