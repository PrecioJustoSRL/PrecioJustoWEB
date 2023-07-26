'use client'
import { writeUserData, readUserData, updateUserData } from '@/supabase/utils'
import { uploadStorage } from '@/supabase/storage'
import { useState } from 'react'
import { useUser } from '@/context/Context.js'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Label from '@/components/Label'
import Success from '@/components/Success'
import Checkbox from '@/components/Checkbox'
import Button from '@/components/Button'
import { useMask } from '@react-input/mask';
import { useRouter } from 'next/navigation';
import { WithAuth } from '@/HOCs/WithAuth'
import { generateUUID } from '@/utils/UIDgenerator'


function Home() {
    const router = useRouter()

    const { user, userDB, setUserData, setUserSuccess, success } = useUser()
    const [state, setState] = useState({ sistema: '1.5', disponibilidad: 'Disponible' })

    const [postImage, setPostImage] = useState(null)
    const [urlPostImage, setUrlPostImage] = useState(null)

    const [check, setCheck] = useState(false)
    const [categorias, setCategorias] = useState({})
    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });
    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });
    const inputRefPhone = useMask({ mask: '+ 591 _ ___ ___', replacement: { _: /\d/ } });
    const inputRefWhatsApp = useMask({ mask: '+ 591 __ ___ ___', replacement: { _: /\d/ } });

    const onClickHandlerCity = (name, value) => {
        setState({ ...state, ['ciudad']: value })
    }

    const onClickHandlerCategory = (name, value) => {
        setState({ ...state, ['categoria']: value })
    }

    const onClickHandlerAvailability = (name, value) => {
        setState({ ...state, ['disponibilidad']: value })
    }

    const onClickHandlerSystem = (name, value, uuid) => {
        setState({ ...state, ['sistema']: value })
    }

    function onChangeHandlerCheck(e) {
        setCategorias({ ...categorias, [e.target.name]: e.target.checked })
    }

    function manageInputIMG(e) {
        // const fileName = `${e.target.name}`
        const file = e.target.files[0]
        setPostImage(file)
        setUrlPostImage(URL.createObjectURL(file))
    }

    function onChangeHandler(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    // function onChangeHandlerCheck(e) {
    //     setState({ ...state, ['dias de atencion']: { ...state['dias de atencion'], [e.target.name]: e.target.checked } })
    // }
    function checkHandler() {
        setCheck(!check)
    }
    function save(e) {
        e.preventDefault()
        const uid = generateUUID()

        Object.entries(categorias).map((i) => {
            if (i[1] == true) {
                writeUserData('Producto', { ...state, categoria: i[0], uuid: uid, distribuidor: 'Precio-Justo-SRL-Data' }, 'Precio-Justo-SRL-Data', userDB, setUserData, setUserSuccess, 'Se ha guardado correctamente', 'Perfil')
                uploadStorage('Producto', postImage, uid, updateUserData)
            }
        })
        // router.push('/Clinica/Perfil')
    }

    console.log(state)
    console.log(categorias)

    return (
        <form className='p-10 min-w-screen lg:min-w-auto lg:my-[50px] lg:my-[70px] bg-white' onSubmit={save}>
            <h3 className='text-center text-[16px] pb-3'>Agregar Procucto</h3>
            {/* <div className="w-full flex justify-center">
                <label htmlFor="file" className="block flex justify-center items-center w-[250px] h-[300px] bg-white border border-gray-300 text-gray-900 text-[14px] focus:ring-blue-500 focus:border-blue-500 rounded-[10px]" >
                    {urlPostImage ? <img className="block flex justify-center items-center w-[250px] h-[300px] bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 rounded-[10px]" style={{ objectPosition: 'center' }} src={urlPostImage} alt="" />
                        : 'Subir Imagen'}
                </label>
                <input className="hidden" onChange={manageInputIMG} accept=".jpg, .jpeg, .png, .mp4, webm" id='file' type="file" />
            </div> */}
            {success == 'Se ha guardado correctamente' && <Success>Guardado correctamente</Success>}
            <div className="w-full flex justify-center">
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 md:w-[250px] md:h-[200px]" style={{ backgroundImage: `url(${urlPostImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                        </svg>
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label htmlFor="fileUpload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <input id="fileUpload" name="frontPage" onChange={manageInputIMG} type="file" className="sr-only" required />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <Label htmlFor="">Nombre de Producto 1</Label>
                    <Input type="text" name="nombre de producto 1" onChange={onChangeHandler} />
                </div>
                <div>
                    <Label htmlFor="">Nombre de Producto 2</Label>
                    <Input type="text" name="nombre de producto 2" onChange={onChangeHandler} />
                </div>
                <div>
                    <Label htmlFor="">Nombre de Producto 3</Label>
                    <Input type="text" name="nombre de producto 3" onChange={onChangeHandler} />
                </div>
                <div>
                    <Label htmlFor="">Descripción básica</Label>
                    <Input type="text" name="descripcion basica" onChange={onChangeHandler} />
                </div>
                <div>
                    <Label htmlFor="">Descripción técnica</Label>
                    <Input type="text" name="descripcion tecnica" onChange={onChangeHandler} />
                </div>
                <div>
                    <Label htmlFor="">Usu frecuente</Label>
                    <Input type="text" name="uso frecuente" onChange={onChangeHandler} />
                </div>
                <div>
                    <Label htmlFor="">Dias de atención</Label>
                    <div className="flex justify-between">
                        <Checkbox name="Titanio" change={onChangeHandlerCheck} />
                        <Label htmlFor="Titanio">Titanio</Label>
                        <Checkbox name="Acero Inox" change={onChangeHandlerCheck} />
                        <Label htmlFor="Acero Inox">Acero Inox</Label>
                        <Checkbox name="Otros" change={onChangeHandlerCheck} />
                        <Label htmlFor="Otros">Otros</Label>
                    </div>
                </div>
                <div>
                    <Label htmlFor="">Sistema</Label>
                    <Select arr={['1.5', ' 2.0', ' 2.4', '2.5', '2.7', '3.5', '4.5', 'Clavos', 'Protesis', 'Costillas', 'Columna y neurocirugia', 'Fijadores externos', 'Otros']} name='sistema' click={onClickHandlerSystem} />
                </div>
                <div>
                    <Label htmlFor="">Disponibilidad</Label>
                    <Select arr={['Disponible', 'Disponibilidad inmediata', 'No disponible']} name='disponibilidad' click={onClickHandlerAvailability} />
                </div>
                <div>
                    <Label htmlFor="">Costo</Label>
                    <Input type="text" name="costo" styled={{ textAlign: 'center' }} onChange={onChangeHandler} />
                </div>

            </div>
            <div className='flex w-full justify-around'>
                <Button theme='Success' >Ver Vista Cliente</Button>
                <Button theme='Primary' >Guardar</Button>
            </div>

            {success == 'Se ha guardado correctamente' && <Success>Se ha guardado correctamente</Success>}

        </form>
    )
}


export default WithAuth(Home)