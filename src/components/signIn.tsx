import { SignInButton } from '@clerk/clerk-react'
import ReactPlayer from 'react-player'
import rocket from '../../public/rocket.webm'
export default function SignInPage() {
  return (
    <div className='grid min-h-screen auto-rows-min flex-col bg-[#0c0a09] p-16 md:flex md:flex-row md:p-48'>
      <div>
        <div className='md:ml-8'>
          <h1 className='mb-4 max-w-[40rem] text-center text-5xl font-extrabold leading-none text-[#f2f2f2] sm:text-left md:text-5xl xl:text-6xl'>
            Science and Technology Council
          </h1>
          <p className='text-muted-foreground mb-6 max-w-2xl text-center font-light text-[#a1a1aa] sm:text-left md:text-lg lg:mb-8 lg:text-xl'>
            The official technical body of IIT (BHU) Varanasi
          </p>
          <button className='hidden h-10 w-36 rounded-md bg-[#22c55e] text-sm font-normal hover:bg-[#22c55ee6] md:block'>
            <SignInButton>
              <button>Get Started</button>
            </SignInButton>
          </button>
        </div>
      </div>
      <div className='video w-[12rem] justify-self-center md:w-52'>
        <ReactPlayer
          url={rocket}
          playing
          muted
          loop
          width='100%'
          height='auto'
          className='justify-self-center md:w-52'
        />
      </div>
      <button className='mt-8 h-12 w-full rounded-md bg-[#22c55e] text-xl font-medium hover:bg-[#22c55ee6] md:hidden'>
        <SignInButton>
          <button>Get Started</button>
        </SignInButton>
      </button>
    </div>
  )
}
