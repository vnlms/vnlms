import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image src={"/logo.png"} alt="loading.." width={28} height={28} />
    </div>
  )
}

export default Logo