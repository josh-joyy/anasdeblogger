'ues client';

import React from 'react'

export default function Wrapper({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full flex flex-col items-center bg-white overflow-x-hidden'>
        <main className="w-full xl:w-[1280px] h-fit flex flex-col gap-5 items-center">
            {children}
        </main>
        {/* <Footer/> */}
    </div>
  )
}
