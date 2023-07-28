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
      writeUserData('Pedido', { ...data, envio: check, ...state, estado: 'nuevo' }, i.uuid, userDB, setUserData, setUserSuccess, 'existos', null)
    })
    router.push('/Cliente/Comprar/Detalle')
  }
  console.log(check)
  return (<div className='w-full p-5'>
    <div className='fixed top-0 right-[15px] w-1/2 max-w-[250px] py-4 z-[50] '>
      <Button theme='Primary'>Imprimir Proforma</Button>
    </div>
    <form >
      <h3 className='text-center text-[16px] pb-3'>DATOS DEL PACIENTE</h3>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <Label htmlFor="">NOMBRE DEL PACIENTE</Label>
          <Input type="text" name="nombre del paciente" onChange={onChangeHandler} require />
        </div>
        <div>
          <Label htmlFor="">NÚMERO DE CELULAR</Label>
          <Input type="text" name="celular del paciente" onChange={onChangeHandler} require />
        </div>
        <div>
          <Label htmlFor="">NÚMERO DE CELULAR REFERENCIA</Label>
          <Input type="text" name="referencia del paciente" onChange={onChangeHandler} require />
        </div>
        <div>

        <div className="">
        <Label htmlFor="">REFERENCIA DEL LUGAR</Label>

          <div className="flex items-start">
            <div className="flex items-center h-5 mr-5">
              <input id="remember" type="radio" value="" checked={check == false ? true: false} onClick={() => setCheck(false)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <Label htmlFor="remember" className="ml-2 text-[14px] font-medium " >Para la ciudad</Label>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5 mr-5">
              <input id="remember" type="radio" value=""  checked={check == true? true: false} onClick={() => setCheck(true)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <Label htmlFor="remember" className="ml-2 text-[14px] font-medium ">Para el campo (+350bs)</Label>
          </div>
        </div>
        </div>

      </div>
    </form>
    <h3 className='text-center text-[16px] pb-3'>MIS COMPRAS</h3>





    <div className='relative items-center justify-between w-full max-w-[500px] bg-transparent md:flex md:w-auto  transition-all	z-0' >
      <ul className="flex flex-col bg-gray-100 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
        <li>{Object.values(cart).length > 0 ? Object.values(cart).map((i, index) => <MiniCard i={i} />) : <span className='block text-[16px] text-center'>No tienes productos <br /> selecciona alguno <br /> </span>}</li>
        {/* <li className='flex justify-between text-gray-700 text-[16px] '>
          <span className='font-bold '>TOTAL: </span>
          <span className='font-bold '>
            {Object.values(cart).reduce((acc, i, index) => {
              const sum = i['costo'] * i['cantidad']
              return sum + acc
            }, 0)}  Bs
          </span>
        </li> */}
      </ul>
    </div>
    <br />





    {user.rol == 'Clinica' && userDB && userDB.access == 'verificador'
      ? Object.values(cart).length > 0 && <div className='max-w-[500px] left-0 right-0 mx-auto'>
        <Button theme="SuccessReceta" click={handlerPay}> Mandar a Revisión la solicitud de compra</Button>
      </div>
      : Object.values(cart).length > 0 && <div className='flex flex-col lg:flex-row '>
        <Button theme="Success" click={handlerPay}> Pagar por QR</Button>

        <Button theme="Success" click={handlerPay}> Pagar con tarjeta</Button>
      </div>
    }
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








