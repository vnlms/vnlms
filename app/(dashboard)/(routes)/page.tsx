import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Page