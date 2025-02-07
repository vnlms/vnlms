import { SignIn, SignUp } from '@clerk/nextjs'


export default function Page() {
  return (
    <div>
      <SignIn />
    {/* <div className='md:hidden '>
    <SignUp />
    </div> */}
    </div>
    
  )
}
