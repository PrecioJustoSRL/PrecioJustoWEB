'use client'
import { writeUserData, readUserData } from '@/supabase/utils'
import { useUser } from '@/context/Context'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import style from '../page.module.css'
import Button from '../../components/Button'
import Input from '@/components/Input'
import Select from '@/components/Select'
import { WithAuth } from '@/HOCs/WithAuth'


import { useRouter } from 'next/navigation';

function Home() {

    const { user, userDB, setUserProfile, setUserSuccess, success, setUserData } = useUser()
    const router = useRouter()

    const [rol, setRol] = useState('Cliente')
    const [ciudad, setCiudad] = useState('La paz')


    const onClickHandler = (name, value) => {
        setRol(value)
    }
    const onClickHandlerCity = (name, value) => {
        setCiudad(value)
    }
    const registerHandler = (e) => {
        e.preventDefault()
        let nombre = e.target[0].value
        writeUserData('Users', { uuid: user.uuid, nombre, rol, ciudad }, user.uuid, user, setUserProfile, setUserSuccess)
    }


    useEffect(() => {
        console.log(user)
        if (user) readUserData('Users', user.uuid, userDB, setUserData)
        if (user && user.rol) router.push('/Cliente')
    }, [user]);

    return (
        <div className="min-h-full bg-[#0064FA] flex flex-col justify-center items-center p-5"
            style={{
                backgroundImage: 'url(/background.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 100%',
                backgroundAttachment: 'fixed'
            }}>
            <form className=" space-y-3 w-[100%] max-w-[350px]" onSubmit={registerHandler} >
                <div className='w-full text-center flex justify-center'>
                    <Image src="/logo-main.svg" width="150" height="150" alt="User" />
                </div>
                <br />
                <h5 className="text-[18px] text-center text-white">Registrate</h5>
                <br />                        <div>
                    <label htmlFor="email" className="block mb-2 text-[16px] text-left font-medium text-white">Nombre</label>
                    <Input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-[16px] text-left font-medium text-white">Tipo de cuenta</label>
                    <Select arr={['Cliente', 'Medico', 'Clinica', 'Distribuidor']} name='rol' click={onClickHandler} />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-[16px] text-left  font-medium text-white">Ciudad</label>
                    <Select arr={['La Paz', 'Cochabamba', 'Santa Cruz']} name='Ciudad' click={onClickHandlerCity} />
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-[14px] font-medium text-gray-100 ">Políticas de Servicio</label>
                    </div>
                </div>
                <Button type="submit" theme="Transparent">Continuar</Button>
                <br />
                <div className="text-[14px] text-center font-medium text-white dark:text-gray-300">Ya tienes una cuenta? <Link href="/" className="text-gray-100 hover:underline">Inicia Sessión</Link >
                </div>
            </form>
        </div>
    )
}


export default WithAuth(Home)
