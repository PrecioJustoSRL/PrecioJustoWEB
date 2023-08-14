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
    const [state, setState] = useState({})




    const redirectHandler = (ref) => {
        router.push(ref)
    }

    console.log(userDB)
    useEffect(() => {
        if (user && user.rol !== undefined) readUserData(user.rol, user.uuid, setUserData,)
    }, []);
    return (
        userDB !== undefined && userDB !== null ? <div className="min-h-[92vh] bg-white p-5">
            <br />
            <div className="flex justify-center">
                <img className='h-[100px] w-[100px] rounded-full' src={userDB.url} alt="" />
            </div>
{userDB.access == 'Verificadora' && <div>{user.uuid}</div>}
            <br />
            <h3 className='w-full font-base  font-normal text-center '>{userDB['nombre']}</h3>
            <h3 className='text-sm text-center text-emerald-400'>Abierto</h3>
            <br />

            <Subtitle>Contactos</Subtitle>
            <div className=''>
                <Paragraph> <img className="inline pr-5" src="/telefono.svg" alt="" />{userDB['telefono']}</Paragraph>
                <Paragraph> <img className="inline pr-5" src="/ubicacion.svg" alt="" />{userDB['direccion']}</Paragraph>
            </div>
            <br />
            <Button theme="Success" click={() => redirectHandler('Distribuidor/Producto')}>Edita tu Perfil</Button>
            <img className="fixed bottom-5 right-5" src="/whatsapp.svg" alt="" />
        </div> :
            <div className="flex flex-col items-center justify-center p-5 h-[80vh]">
                <img src="/business.svg" alt="" />
                <br />
                <Button theme="Success" click={() => redirectHandler(`/${user.rol}`)}>Completa tu Perfil</Button>
            </div>
    )
}



export default WithAuth(Home)
