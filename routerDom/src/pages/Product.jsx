import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'

function Product() {
    return (
        <div>
            <div className='flex justify-center gap-5 pt-4 font-semibold'>
                <Link className='hover:text-amber-400' to='/product/men' element={<Men/>}>Men</Link>
                <Link className='hover:text-amber-400' to='/product/women' element={<Women/>}>Women</Link>
                <Link className='hover:text-amber-400' to='/product/kids' element={<Kids/>}>Kid's</Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Product
