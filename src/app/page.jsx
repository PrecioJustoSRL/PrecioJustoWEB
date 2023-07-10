'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmailAndPassword } from '@/supabase/utils'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './page.module.css'
import Button from '../components/Button'
import Input from '../components/Input'
import Error from '@/components/Error'
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

import { useRouter } from 'next/navigation';


export default function Home() {
  const { user, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

  const router = useRouter()
  const vidRef = useRef(null);

  const signInHandler = (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value


    email.length !== 0 && password.length !== 0 ? signInWithEmailAndPassword(email, password, setUserSuccess) : setUserSuccess('Complete')




  }





  async function intro() {
    const data = await fetch('/api')
    const db = await data.arrayBuffer()
    upload('Producto', new Uint8Array(db), '123456789',)
  }

  useEffect(() => {
    user === undefined && onAuth(setUserProfile)
    if (user !== undefined && user !== null) router.replace('/Cliente')
    vidRef.current && vidRef.current.play()
  }, [user]);

  return (
    <div className="h-full bg-[#0064FA] flex flex-col justify-center items-center p-5"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 100%',
        backgroundAttachment: 'fixed'
      }}>
                {/* <button onClick={intro}>descargar</button> */}


      {/* <div  className='absolute top-[0px] flex justify-center items-start p-0 w-screen h-screen bg-blue-600'>

<video id='videoBox' src="/intro.mp4"></video>

  
      </div> */}
{/* 
        <Player  autoPlay={true}>
          <source  src="/intro.mp4" />
        </Player> */}

        {/* <ReactPlayer url='https://www.youtube.com/watch?v=-sQJ7w0bXxM' playing={true} /> */}







      <form className=" space-y-6 lg:space-y-3 w-[100%] max-w-[350px]" onSubmit={signInHandler} >
        <div className='w-full text-center flex justify-center'>
          <Image src="/logo-main.svg" width="150" height="150" alt="User" />
        </div>
        <br />
        <h5 className="text-[18px] text-center text-white">Iniciar Sesión</h5>
        <br />
        <div>
          <label htmlFor="email" className="block mb-2 text-[16px] text-left font-medium text-white">Email</label>
          <Input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-[16px] text-left  font-medium text-white">Contraseña</label>
          <Input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex items-start">
          <a href="#" className="ml-auto text-white text-[14px] text-gray-100 hover:underline">Olvidaste tu contraseña?</a>
        </div>
        <Button type="submit" theme="Transparent">Iniciar Sesión</Button>
        <div className="text-[14px] text-center font-medium text-white">No tienes una cuenta? <Link href="/SignUp" className="text-gray-100 hover:underline">Registrate</Link ></div>
      </form>
      {success == 'AccountNonExist' && <Error>Cuenta inexistente</Error>}
      {success == 'Complete' && <Error>Complete el formulario</Error>}
    </div>
  )
}





{/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}



{/* 
        <video
          src="/intro.mp4"
          ref={vidRef}
        /> */}


{/* <video width="320" height="240"  ref={ vidRef }
>
<source src="intro.mp4" type="video/mp4" />
</video> */}

{/* <iframe width="100%" height="100%" src="/intro.p" frameborder="0" allow="autoplay"  allowfullscreen></iframe> */ }
