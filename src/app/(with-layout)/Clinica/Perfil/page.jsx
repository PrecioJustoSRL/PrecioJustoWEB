'use client'
import { readUserData } from '@/supabase/utils'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '../../../../context/Context.js'
import Button from '../../../../components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import addProfile from '@/components/addProfile'

import { WithAuth } from '@/HOCs/WithAuth'

function Home() {
    const { user, userDB, setUserData } = useUser()

    useEffect(() => {
        if (user && user.rol !== undefined) readUserData(user.rol, user.uuid, setUserData,)
    }, []);
    return (
        <addProfile>
            <h3 className='w-full font-base  font-normal text-center '>{userDB[0]['nombre']}</h3>
            <br />
            {userDB[0].access == 'Solicitadora' && <div className="w-full text-center">{user.uuid}</div>}
            <Subtitle>Contactos</Subtitle>
            <div className=''>
                <Paragraph> <img className="inline pr-5" src="/telefono.svg" alt="" />{userDB[0]['telefono']}</Paragraph>
                <Paragraph> <img className="inline pr-5" src="/ubicacion.svg" alt="" />{userDB[0]['direccion']}</Paragraph>
            </div>
        </addProfile>
    )
}



export default WithAuth(Home)
