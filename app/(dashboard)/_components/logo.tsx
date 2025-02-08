import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image src={"/next.svg"} alt="loading.." width={130} height={130} />
    </div>
  )
}

export default Logo