'use client'


import { writeUserData, readUserData, updateUserData } from '@/supabase/utils'
import { uploadStorage } from '@/supabase/storage'
import { useState } from 'react'
import { useUser } from '../../../context/Context.js'
import Input from '../../../components/Input'
import Select from '../../../components/Select'
import Label from '@/components/Label'
import Checkbox from '@/components/Checkbox'
import { departamentos } from '@/constants'


import Button from '../../../components/Button'
import { useMask } from '@react-input/mask';
import { useRouter } from 'next/navigation';
import { WithAuth } from '@/HOCs/WithAuth'


function Home() {
    const router = useRouter()

    const { user, userDB, setUserData, setUserSuccess } = useUser()
    const [state, setState] = useState({})

    const [postImage, setPostImage] = useState(null)
    const [urlPostImage, setUrlPostImage] = useState(null)

    const [account, setAccount] = useState('Solicitadora')





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
        writeUserData('Clinica', { ...state, uuid: user.uuid, access: account }, user.uuid, userDB, setUserData, setUserSuccess, 'Se ha guardado correctamente', 'Perfil')
        uploadStorage('Clinica', postImage, user.uuid, updateUserData)
        router.push('/Clinica/Perfil')
    }
    return (
        <form className='p-5 pb-[80px]'>
            <h3 className='text-center pb-3'>Agregar Perfil</h3>
            <br />

            <br />
            <div className='flex w-full justify-around mb-12'>
                <div className='w-1/2 flex justify-center'>
                    <span className={`text-center p-5 ${account == 'Solicitadora' ? 'border-b-[2px] border-b-gray-500' : ''}`} onClick={() => setAccount('Solicitadora')}>Cuenta Solicitadora</span>
                </div>
                <div className='w-1/2 flex justify-center border-l-[2px] border-gray-500'>
                    <span className={`p-5 text-center ${account == 'Verificadora' ? 'border-b-[2px] border-b-gray-500' : ''}`} onClick={() => setAccount('Verificadora')}>Cuenta Verificadora</span>
                </div>
            </div>

            <br />

            <div className="w-full flex flex-col justify-center items-center">
                <label htmlFor="file" className="block flex justify-center items-center w-[100px] h-[100px] bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 rounded-[100px]" >
                    {urlPostImage ? <img className="block flex justify-center items-center w-[100px] h-[100px] bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 rounded-[100px]" style={{ objectPosition: 'center' }} src={urlPostImage} alt="" />
                        : 'Subir Imagen'}
                </label>
                <br />
                <br />
                <div className='relative h-[40px] left-0 w-full text-center'>
                {account == 'Verificadora' && 
                    user.uuid
                }</div>
                <br />
                <br />
                <input className="hidden" onChange={manageInputIMG} accept=".jpg, .jpeg, .png, .mp4, webm" id='file' type="file" required />
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <Label htmlFor="">Nombre de la clínica</Label>
                    <Input type="text" name="nombre" onChange={onChangeHandler} />
                </div>
                <div>
                    <Label htmlFor="">Ciudad</Label>
                    <Select arr={departamentos} name='ciudad' click={onClickHandler} />
                </div>

                <div>
                    <Label htmlFor="">Dirección</Label>
                    <Input type="text" name="direccion" onChange={onChangeHandler} />
                </div>
                {account == 'independiente' &&
                    <div>
                        <Label htmlFor="">Numero de tarjeta</Label>
                        <Input type="text" reference={inputRefCard} name="numero de tarjeta" styled={{ textAlign: 'center' }} onChange={onChangeHandler} />
                    </div>}
                {account == 'independiente' && <div>
                    <div className='w-full flex justify-between'>
                        <div className='w-5/12'>
                            <Label htmlFor="">Fecha</Label>
                            <Input reference={inputRefDate} name="fecha de tarjeta" styled={{ textAlign: 'center' }} onChange={onChangeHandler} />
                        </div>
                        <div className='w-5/12'>
                            <Label htmlFor="">CVC</Label>
                            <Input reference={inputRefCVC} name="cvc" styled={{ textAlign: 'center' }} onChange={onChangeHandler} />
                        </div>
                    </div>
                </div>
                }
                <div>
                    <Label htmlFor="">Teléfono</Label>
                    <Input type="text" name="telefono" reference={inputRefPhone} onChange={onChangeHandler} />
                </div>
                <div>
                    <Label htmlFor="">Whatsapp</Label>
                    <Input type="text" name="whatsapp" onChange={onChangeHandler} reference={inputRefWhatsApp} />
                </div>
            </div>
            <div className='flex w-full justify-around'>
                <Button theme='Primary' click={save}>Mandar solicitud</Button>
            </div>
        </form>
    )
}

export default WithAuth(Home)
