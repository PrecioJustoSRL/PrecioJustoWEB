'use client'
import { readUserData } from '@/supabase/utils'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '../../../../context/Context.js'
import Button from '../../../../components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import { WithAuth } from '@/HOCs/WithAuth'

function Home() {
    const router = useRouter()

    const { user, userDB, setUserData } = useUser()

    const redirectHandler = (ref) => {
        router.push(ref)
    }

    console.log(userDB)
    useEffect(() => {
        if (user && user.rol !== undefined) readUserData(user.rol, user.uuid, setUserData,)
    }, [user]);
    return (
        userDB !== undefined && userDB !== null
            ? <div className=" bg-white p-5">
                <br />
                <div className="flex justify-center">
                    <img className='h-[100px] w-[100px] rounded-full' src={userDB[0].url} alt="" />
                </div>
                <br />
                <h3 className='w-full text-[14px] text-center '>{userDB[0]['nombre']}</h3>
                <br />
                <Subtitle>Contactos</Subtitle>
                <div className=''>
                    <Paragraph> <img className="inline pr-5" src="/telefono.svg" alt="" />{userDB[0]['telefono']}</Paragraph>
                    <Paragraph> <img className="inline pr-5" src="/ubicacion.svg" alt="" />{userDB[0]['direccion']}</Paragraph>
                </div>
                <br />
                <Button theme="Success" click={() => redirectHandler(`/${user.rol}`)}>Editar Perfil</Button>
                <img className="fixed bottom-5 right-5" src="/whatsapp.svg" alt="" />
            </div>
            :
            <div className="flex flex-col items-center justify-center h-[80vh] p-5">
                <img src="/logo-circle.png"  className='w-[150px] h-[150px]' alt="" />
                <br />
                <Button theme="Success" click={() => redirectHandler(`/${user.rol}`)}>Completa tu Perfil</Button>
            </div>
    )
}
        
export default WithAuth(Home)
