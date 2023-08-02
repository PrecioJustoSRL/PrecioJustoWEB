'use client'
import { useUser } from '@/context/Context'
import LoaderWithLogo from '@/components/LoaderWithLogo'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation';
import { readUserData } from '@/supabase/utils'
import { onAuth } from '@/supabase/utils'
function Home({ children }) {
    const { user, userDB, setUserProfile, setUserData } = useUser()

    const router = useRouter()
    useEffect(() => {
        if (user === undefined) onAuth(setUserProfile)
        if (user === null) router.push('/')
        if (user && user.role === 'authenticated') { router.push('/Register') }
        if (user && user.rol) router.push('/Cliente')

        if (user !== undefined && user !== null && user.rol && userDB === undefined) {
            console.log('ejecu')
            readUserData(user.rol, user.uuid, setUserData,)
        }
    }, [user, userDB])
    console.log(user)
    return (
        <main >
            {(user === null || (user && user.role && user.role === 'authenticated')) ? children : <LoaderWithLogo></LoaderWithLogo>}

        </main>
    )
}

export default Home

