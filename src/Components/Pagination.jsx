import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

 const Pagination = () => {
  const{page,totalpages,changePageHandler}=useContext(AppContext);
  return (
    <div className='w-full fixed bottom-0 flex justify-center items-center bg-white border border-black py-1'>
      <div className='flex w-11/12 justify-between max-w-[490px]'>

      <div className='flex gap-2'>
        {page<totalpages &&

             <button onClick={()=>changePageHandler(page+1)} className='py-1 px-5 border-2 text rounded-md'>Next</button>
        }


        {
          page>1 &&
          <button onClick={()=>changePageHandler(page-1)} className='py-1 px-5 border-2 text rounded-md'>Previous</button>



        }
        
        
      </div>
      <div>
        <p className='font-bold text-sm'>Page {page} of {totalpages}</p>
      </div>

      </div>
      
    </div>
  )
}
export default Pagination
