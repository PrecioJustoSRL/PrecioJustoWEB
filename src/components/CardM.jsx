'use client';

import Button from '@/components/Button'
import { useUser } from '@/context/Context.js'
import { useRouter } from 'next/navigation';

export default function Card({ nombre1, nombre2, nombre3, costo, url, empresa, descripcion, i, recetado}) {

    const { user, userDB, distributorPDB, setUserDistributorPDB, setUserItem, item, setUserData, setUserSuccess, cart, setUserCart } = useUser()
    const router = useRouter()

    function seeMore(e) {
        setUserItem(i)
        router.push('/Producto')
    }

    const addCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: 1 } })
    }

    const addPlussCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: cart[i.uuid].cantidad + 1 } })
    }
    const addLessCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const obj = { ...cart }
        delete obj[i.uuid]
        console.log(obj)

        cart[i.uuid].cantidad - 1 == 0
            ? setUserCart(obj)
            : setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: cart[i.uuid].cantidad - 1 } })
    }
    console.log(item)
    return (
        <div class="relative w-full bg-gray-100 min-h-[180px] max-w-[500px] rounded-[15px] border border-gray-200 rounded-[20px] shadow my-[10px]" onClick={(e) => seeMore(e, i)} style={{ display: 'grid', gridTemplateColumns: 'auto 150px' }}>
            <div class=" p-4  flex flex-col justify-between leading-normal">
                <div class="">
                    <div class=" font-bold text-[16px] mb-2 text-gray-950">
                        {i['nombre de producto 1']}
                    </div>
                    <div class=" font-bold text-[16px] mb-2 text-gray-950">
                        {i['nombre de producto 2']}
                    </div>
                    <div class=" font-bold text-[16px] mb-2 text-gray-950">
                        {i['nombre de producto 3']}
                    </div>
                </div>
                <p class="text-gray-700 text-base py-[10px]">{i.empresa}</p>
                <div class="">
                    <p class="text-gray-700 text-[14px]">{i['descripcion basica']}</p>
                </div>
            </div>
            <div class="relative h-[150px] w-[150px] rounded-t text-center" style={{ backgroundImage: `url(${i.url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            </div>
            <div className='w-full flex justify-between  items-center p-4'>
                <div class="flex items-baseline text-gray-900">
                    <span class="text-[14px] text-gray-600 font-semibold">BOB</span>
                    <span class="text-[18px]  text-gray-600 font-extrabold tracking-tight">{i.costo}</span>
                </div>
                {cart && cart[i.uuid] && cart[i.uuid].cantidad !== undefined && cart[i.uuid].cantidad !== 0 && <span className='text-[16px] text-right px-5'> {cart[i.uuid].cantidad} </span>}
            </div>
            <div className='flex py-4 pr-4'>
                {cart && cart[i.uuid] && cart[i.uuid].cantidad !== undefined && cart[i.uuid].cantidad !== 0
                    ? <div className='flex w-full'>
                        <Button theme='MiniSecondary' click={(e) => addPlussCart(e, i)}>+</Button>
                        <Button theme='MiniPrimary' click={(e) => addLessCart(e, i)}>-</Button>
                    </div>
                    : <Button theme='MiniSuccessRecetar' click={(e) => addCart(e, i)}>Recetar</Button>
                }
            </div>
        </div>
    )
}



