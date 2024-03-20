import React from 'react'
import { FaUser } from "react-icons/fa";
import HeaderBTN from '../../../layout/HeaderBTN';

function ProfileBTN() {
  return (
    <>
        <HeaderBTN btn={<FaUser className='text-lg' />} />
    </>
  )
}

export default ProfileBTN