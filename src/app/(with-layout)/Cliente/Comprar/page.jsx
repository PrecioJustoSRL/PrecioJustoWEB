'use client';
import { useState } from 'react'
import Button from '@/components/Button';
import { useUser } from '@/context/Context.js'
import Subtitle from '@/components/Subtitle'
import { WithAuth } from '@/HOCs/WithAuth'
import { writeUserData, readUserData, updateUserData } from '@/supabase/utils'
import { uploadStorage } from '@/supabase/storage'
import Page from '@/components/Page'
import Label from '@/components/Label'
import MiniCard from '@/components/MiniCard'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation';

function Comprar({ theme, styled, click, children }) {

  const { user, userDB, cart, productDB, setUserProduct, setUserItem, setUserData, setUserSuccess } = useUser()
  const [add, setAdd] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [state, setState] = useState({})
  const [check, setCheck] = useState(false)

  const router = useRouter()

  function onChangeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  function handlerPay() {

    Object.values(cart).map((i) => {
      const data = { ...i }
      delete data['created_at']
      delete data['id']
      writeUserData('Pedido', { ...data, envio: check, ...state, estado:'nuevo'}, i.uuid, userDB, setUserData, setUserSuccess, 'existos', null)
    })
    router.push('/Cliente/Comprar/Detalle')
  }


  console.log(check)
  return (<div className='w-screen p-5'>
    <div className='w-1/2 py-4'>
      <Button theme='Primary'>Imprimir</Button>
    </div>
    <form >
      <h3 className='text-center text-[16px] pb-3'>DATOS DEL PACIENTE</h3>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <Label htmlFor="">NOMBRE DEL PACIENTE</Label>
          <Input type="text" name="nombre del paciente" onChange={onChangeHandler} />
        </div>
        <div>
          <Label htmlFor="">EDAD</Label>
          <Input type="text" name="edad del paciente" onChange={onChangeHandler} />
        </div>
        <div>
          <Label htmlFor="">CI</Label>
          <Input type="text" name="CI del paciente" onChange={onChangeHandler} />
        </div>
        <div>
          <Label htmlFor="">NÚMERO DE CELULAR</Label>
          <Input type="text" name="celular del paciente" onChange={onChangeHandler} />
        </div>
        <div>
          <Label htmlFor="">NÚMERO DE CELULAR REFERENCIA</Label>
          <Input type="text" name="referencia del paciente" onChange={onChangeHandler} />
        </div>


        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5 mr-5">
              <input id="remember" type="checkbox" value="" onClick={()=>setCheck(!check)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <Label htmlFor="remember" className="ml-2 text-[14px] font-medium ">Solicitar envio a distancia</Label>
          </div>
        </div>



      </div>
    </form>
    <h3 className='text-center text-[16px] pb-3'>DATOS DEL CARRITO</h3>
    <div className='relative items-center justify-between w-full max-w-[500px] bg-transparent md:flex md:w-auto  transition-all	z-0' >
      <ul className="flex flex-col bg-gray-100 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
        <li>{Object.values(cart).length > 0 ? Object.values(cart).map((i, index) => <MiniCard i={i} />) : <span className='block text-[16px] text-center'>No tienes productos <br /> selecciona alguno <br /> </span>}</li>
        <li className='flex justify-between text-gray-700 text-[16px] '>
          <span className='font-bold '>TOTAL: </span>
          <span className='font-bold '>
            {Object.values(cart).reduce((acc, i, index) => {
              const sum = i['costo'] * i['cantidad']
              return sum + acc
            }, 0)} BOB
          </span>
        </li>
      </ul>
    </div>
    <br />
    {Object.values(cart).length > 0 && <>
      <Button theme="Success" click={handlerPay}> Pagar por QR</Button>
      <br />
      <br />
      <Button theme="Success" click={handlerPay}> Pagar con tarjeta</Button>
    </>}
  </div>)
}

export default WithAuth(Comprar)





// import Page from '@/components/Page'

// const Home = () => {
//   return (
//   <>
//     <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">Download PDF</a>
//     <Page>
//       <h1>Generated PDF</h1>
//       <p>As you can see you can scroll without issues and select text.</p>
//     </Page>
//     <Page>
//       <h1>Page 2</h1>
//       <p>As you can see you can scroll without issues and select text.</p>
//     </Page>
//   </>
//   )
// }

// export default Home








