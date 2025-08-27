import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
    const [data, setData] = useState([]);
    const componentRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const rect = componentRef.current.getBoundingClientRect();
                setIsAtTop(rect.top <= 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fetchTopRestaurant = async () => {
        const response = await fetch('/restaurantChains.json')
        const apiData = await response.json();
        setData(apiData);
    }
    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto' ref={componentRef}>
            {/* Header */}
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>
                    Restaurant with Online food Delivery in Jodhpur
                </div>
            </div>  

            {/* Restaurant cards */}
            <div className='grid grid-cols-4 gap-3'>
                {data.map((d, i) => (
                    <Card key={i} {...d} />
                ))}
            </div>
        </div>
    )   
}
