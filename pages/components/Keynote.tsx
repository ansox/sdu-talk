import Image from 'next/image';
import React from 'react';

export default function Keynote(props: any) {
  const { item } = props;

  const imgLoader = (img: any) => {
    return img.src;
  }

  return <div key={`div-${item.theme}`} className='flex mx-5 w-full pl-1 pb-1 mt-4 border-b border-solid border-slate-300'>
    <div className='flex justify-center items-center w-1/5'>
    {
      !!item && !!item.photo && <Image className='rounded-full' loader={imgLoader} src={item.photo.url} width="60" height="60" alt="profile pic"/>
    }
    </div>
    { !!item &&
      <div>
        <p className='font-bold'>{item?.theme}</p>
        <p>{item?.date}</p>
        <p>{item?.speaker}</p>
      </div>
    }
  </div>
}
