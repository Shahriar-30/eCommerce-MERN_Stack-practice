import React from 'react'
import Button from '../../../layout/Button'

function CartTotal() {
  return (
    <>
        <div className='p-3 '>
            <div className='text-secondary flex gap-1 p-1'>
                Subtotal: <p className='text-black font-bold'>$44.00</p> 
            </div>
            <div className='w-full font-bold  flex gap-1'>
                <Button txt={'View Cart'} className={'w-full p-4 bg-white text-black border-2 rounded'} />
                <Button txt={'Checkout'} className={'w-full p-4 rounded'} />
            </div>
        </div>
    </>
  )
}

export default CartTotal