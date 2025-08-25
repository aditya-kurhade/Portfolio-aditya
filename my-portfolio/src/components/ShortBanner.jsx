import React from 'react'

const ShortBanner = (props) => {
  return (
    <div className=' pt-0.5 pb-0.5 pl-2 pr-2 bg-blue-500  rounded-md border-white   '>
        <a href={props.link} ><h1>{props.text}</h1></a>     
    </div>
  )
}

export default ShortBanner