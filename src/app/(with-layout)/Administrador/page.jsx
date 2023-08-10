'use client'


import { writeUserData, readUserData, updateUserData } from '@/supabase/utils'
import { uploadStorage } from '@/supabase/storage'
import { useState } from 'react'
import { useUser } from '../../../context/Context.js'
import Input from '../../../components/Input'
import Select from '../../../components/Select'
import Label from '@/components/Label'
import Checkbox from '@/components/Checkbox'


import Button from '../../../components/Button'
import { useMask } from '@react-input/mask';
import { useRouter } from 'next/navigation';
import { WithAuth } from '@/HOCs/WithAuth'
import { departamentos } from '@/constants'


function Home() {
    const router = useRouter()

    const { user, userDB, setUserData, setUserSuccess } = useUser()
    const [state, setState] = useState({})

    const [postImage, setPostImage] = useState(null)
    const [urlPostImage, setUrlPostImage] = useState(null)

    const [account, setAccount] = useState('dependiente')





    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });
    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });
    const inputRefPhone = useMask({ mask: '+ 591 _ ___ ___', replacement: { _: /\d/ } });
    const inputRefWhatsApp = useMask({ mask: '+ 591 __ ___ ___', replacement: { _: /\d/ } });


    function manageInputIMG(e) {
        // const fileName = `${e.target.name}`
        const file = e.target.files[0]

        setPostImage(file)
        setUrlPostImage(URL.createObjectURL(file))

    }


    function onChangeHandler(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    function onChangeHandlerCheck(e) {
        setState({ ...state, [e.target.name]: e.target.checked })
    }
    function onClickHandler(name, value) {
        setState({ ...state, [name]: value })
    }


    function save(e) {
        e.preventDefault()
        writeUserData('Clinica', { ...state, uuid: user.uuid }, user.uuid, userDB, setUserData, setUserSuccess, 'Se ha guardado correctamente', 'Perfil')
        uploadStorage('Clinica', postImage, user.uuid, updateUserData)
        router.push('/Clinica/Perfil')
    }
    return (
        <form className='p-5'>
            <h3 className='text-center pb-3'>Perfil empresarial</h3>
            <br />
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <Label htmlFor="">Nombre de la Empresa</Label>
                    <Input type="text" name="nombre" onChange={onChangeHandler} require/>
                </div>
                <div>
                    <Label htmlFor="">Ciudad</Label>
                    <Select arr={departamentos} name='ciudad' click={onClickHandler} />
                </div>
                <div>
                    <Label htmlFor="">Dirección</Label>
                    <Input type="text" name="direccion" onChange={onChangeHandler} require/>
                </div>
                <div>
                    <Label htmlFor="">Teléfono</Label>
                    <Input type="text" name="telefono" reference={inputRefPhone} onChange={onChangeHandler} require/>
                </div>
                <div>
                    <Label htmlFor="">Whatsapp</Label>
                    <Input type="text" name="whatsapp" onChange={onChangeHandler} reference={inputRefWhatsApp} require/>
                </div>
            </div>
            <div className='flex w-full justify-around'>
                <Button theme='Primary' click={save}>Guardar</Button>
            </div>
        </form>
    )
}

export default WithAuth(Home)
