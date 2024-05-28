import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import house from '../assets/house.png'
import { useState } from 'react';

function Navbar(){
  const[menu,setMenu]  = useState(false)

  function toggleNavbar(){
    setMenu(!menu)
  }

    return(
        <>
        
        <div className="top-0 z-50 py-3 backdrop-blur-lg  border-b border-neutral-600 sticky " >
            <div className="mx-auto px-5 text-sm relative container   ">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 flex items-center">
                        <img  className='w-14 h-14 mr-1' src={house} alt='logo'/>
                        <span className='text-xl tracking-tight ' >Delhi Housing</span>

                    </div>
                    <ul className='hidden lg:flex  space-x-12 ml-14  ' >
                              <li>Buy</li>
                              <li>Rent</li>
                              <li>Sell</li>
                              <li>Home Loans</li>
                    </ul>
                    <div className='hidden lg:flex space-x-12 items-center justify-center ' >
                        <a href='#' className='rounded-md border px-3 py-2 ml-4' >Sign In</a>
                        <a href='#' className='py-2 px-3 rounded-md bg-gradient-to-r border'  >Create An Account</a>
                    </div>
                    <div className='lg:hidden  md:flex justify-end flex-col  '>
                        <button onClick={toggleNavbar} >
                            {menu ? <CloseIcon/>  : <MenuIcon/>  }
                        </button>
                    </div>
                </div>
                {menu  && (
                    <div className='fixed right-0 bg-neutral-900  z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden  '>
                        <ul className='text-white'>
                            <li className='py-4' >Buy</li>
                            <li className='py-4'>Rent</li>
                            <li className='py-4' >Sell</li>
                            <li className='py-4' >Home Loans</li>
                        </ul>
                         <div className='spaxe-x-6 flex text-white' > 
                                 <a className='py-2 px-2 rounded-md border' >Sign In</a>
                                 <a className='py-2 px-2 rounded-md border bg-orange-600 ml-4 ' >Create An Account</a>
                         </div>
                    </div>
                ) }
            </div>

        </div>

        </>
    )
}

export default Navbar