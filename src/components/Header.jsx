import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { MdSearch } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosSearch } from 'react-icons/io';
import { MdLiveHelp } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";

export default function Header(){
    const [toggle,setToggle] = useState(false);

    const showSideMenu = () =>{
        setToggle(true);
    }
    const hideSideMenu = () =>{
        setToggle(false);
    }

    const link =[
        {
          icon :<MdSearch/> ,
          name : "Search"
        },
        {
            icon:<CiDiscount1/>,
            name:"Offers",
            sup:"new"
        },
        { 
            icon:<MdLiveHelp/>,
            name:"Help"
        },
        { 
            icon:<PiSignInBold/>,
            name:"Sign In"
        }
        ,
        { 
            icon:<FaCartArrowDown/>,
            name:"Cart",
            sub :"1"
            
        }
    ]
    return(
        <>
        <div className='black-overlay w-full h-full fixed duration-500ms' onClick={hideSideMenu} style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden"
         }}>
            <div onClick={(e) =>{
                e.stopPropagation();
            }} className='w-[400px] h-full bg-white absolute duration-[600ms]'
            style={{
                left: toggle ? '0%' : '-100%'
            }}
            >

            </div>
        </div>
        <header className='p-[15px] shadow-xl text-[#686b78]'>
            <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center'>
                <div className='w-[100px]'>
                  <img src ="images/logo.png" className='w-full'/>
                    </div>
                        <div>
                           <span className='font-bold  border-b-[3px] border-black' >Ratanada</span>  Jodhpur, Rajasthan, India 
                           <RxCaretDown fontSize={25} className='inline text-[#fc9019] cursor-pointer ' onClick={showSideMenu}/>
                        </div>
                        <nav className='flex gap-10 ml-auto font-bold text-[18px]'>
                            {
                                link.map(
                                    (link,index) => {
                                    return <li key={index} className='flex items-center gap-2 hover:text-[#fc9019] cursor-pointer'> 
                                       {link.icon}
                                       {link.name}
                                       <sup>{link.sup}</sup>
                                   </li>
                                    }
                                )
                            }
                            
                        </nav>
            </div>
        </header>
    </>
    )
}