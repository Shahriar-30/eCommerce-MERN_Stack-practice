import React from 'react'
import Title from '../reUseAble/Title'
import LinkPage from "../reUseAble/LinkPage"

function Menu({titleTxt, data}) {
  return (
    <>
        <Title txt={titleTxt} className={'my-2'}  />
        <ul>
            {
                data.map((e)=> (
                    <li><LinkPage path={e.path} txt={e.name} /></li>
                ))
            }
        </ul>

    </>
  )
}

export default Menu