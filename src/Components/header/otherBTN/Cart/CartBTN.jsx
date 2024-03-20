import React from 'react'
import HeaderBTN from '../../../layout/HeaderBTN'
import { FaShoppingCart } from "react-icons/fa";

function CartBTN() {
    return (
      <>
          <HeaderBTN btn={<FaShoppingCart className='text-xl' />} />
      </>
    )
}

export default CartBTN