import Image from 'next/image';
import React from 'react';

export default function Keynote({ item }) {
  const imgLoader = ({src}) => {
    return src;
  }

  return <div key={`div-${item.theme}`} className='flex mx-5 w-full pl-1 pb-1 mt-4 border-b border-solid border-slate-300'>
    <div>
    {
      !!item.photo && <Image className='rounded-full' loader={imgLoader} src={item.photo.url} width="60" height="60"/>
    }
    </div>
    <div>
      <p className='font-bold'>{item.theme}</p>
      <p>{item.date}</p>
      <p>{item.speaker}</p>
    </div>
   
  </div>
}
