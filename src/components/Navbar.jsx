'use client';
import { useRouter } from 'next/navigation';

import { useUser } from '@/context/Context'
import Link from 'next/link'
import { signOut } from '@/supabase/utils'




export default function BottomNavigation({ rol }) {
    const { user, userDB, setUserProfile, filter, setFilter, nav, setNav } = useUser()

    const router = useRouter()

    const redirectHandler = (ref) => {
        router.push(ref)
    }

    const signOutHandler = () => {
        router.push('/')
        setUserProfile(null)
        signOut()
      }

 const redirectHandlerWindow = (ref) => {
        window.open(ref, '_blank')
    }
    console.log(rol)
    switch (rol) {
        case 'Cliente':
            return <ul class="space-y-2 text-[16px]  text-gray-600 font-medium">
            <li>
                <Link href="/Distribuidor/Perfil" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Perfil</span>
                </Link>
            </li>
            <li>
                <Link href="/Cliente" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>                        
                <span class="flex-1 ml-3 whitespace-nowrap">Store</span>
                </Link>
            </li>
            <li>
                <Link href="/Cliente/Pedidos" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Pedidos</span>
                </Link>
            </li>
            <li>
                <Link href="https://api.whatsapp.com/send?phone=+59169941749&text=hola%20mundo" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="w-6 h-6 mb-1 text-gray-600 bg-white rounded-full group-hover:text-blue-600 p-1">
                    <svg width="15" height="15" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.853564 19.7608C0.852627 23.1216 1.73763 26.4031 3.42044 29.2955L0.692627 39.178L10.8851 36.5262C13.7042 38.0491 16.8628 38.847 20.0726 38.8472H20.0811C30.6772 38.8472 39.3026 30.2917 39.3072 19.7759C39.3092 14.6802 37.3111 9.88857 33.6808 6.28361C30.0511 2.67896 25.2237 0.692755 20.0803 0.69043C9.48294 0.69043 0.858096 9.24547 0.853721 19.7608" fill="#4b5563" />
                        <path d="M0.167188 19.7544C0.166094 23.2361 1.08281 26.635 2.82562 29.631L0 39.8678L10.558 37.1209C13.467 38.6947 16.7423 39.5245 20.0752 39.5257H20.0837C31.06 39.5257 39.9953 30.6625 40 19.7702C40.0019 14.4915 37.9319 9.5276 34.1719 5.79349C30.4114 2.05984 25.4114 0.00217054 20.0837 0C9.10562 0 0.171563 8.86202 0.167188 19.7544ZM6.45469 29.115L6.06047 28.4941C4.40328 25.8795 3.52859 22.8581 3.52984 19.7557C3.53344 10.7022 10.9591 3.33643 20.09 3.33643C24.5119 3.33829 28.6675 5.04868 31.7931 8.15194C34.9186 11.2555 36.6384 15.3811 36.6373 19.769C36.6333 28.8225 29.2075 36.1891 20.0837 36.1891H20.0772C17.1064 36.1876 14.1928 35.396 11.6519 33.9L11.0472 33.5442L4.78188 35.1741L6.45469 29.1149V29.115Z" fill="white" />
                        <path d="M14.5541 11.3207C14.1812 10.4986 13.7889 10.482 13.4344 10.4675C13.1441 10.4551 12.8122 10.4561 12.4806 10.4561C12.1487 10.4561 11.6095 10.5799 11.1537 11.0737C10.6975 11.568 9.41187 12.7624 9.41187 15.1917C9.41187 17.6212 11.1951 19.9689 11.4437 20.2987C11.6926 20.6279 14.8864 25.7727 19.9445 27.7519C24.1483 29.3967 25.0037 29.0696 25.9161 28.9871C26.8286 28.9049 28.8605 27.793 29.275 26.6399C29.6898 25.4871 29.6898 24.4989 29.5655 24.2923C29.4411 24.0866 29.1092 23.963 28.6116 23.7162C28.1137 23.4692 25.6672 22.2747 25.2111 22.1099C24.7548 21.9452 24.4231 21.863 24.0912 22.3575C23.7594 22.8511 22.8064 23.963 22.5159 24.2923C22.2258 24.6224 21.9353 24.6635 21.4378 24.4165C20.9398 24.1688 19.3372 23.648 17.4358 21.966C15.9564 20.6572 14.9576 19.0409 14.6673 18.5465C14.377 18.0528 14.6362 17.7852 14.8858 17.5392C15.1094 17.3179 15.3836 16.9626 15.6326 16.6744C15.8808 16.386 15.9636 16.1803 16.1295 15.851C16.2956 15.5213 16.2125 15.233 16.0883 14.986C15.9636 14.739 14.9966 12.297 14.5541 11.3207Z" fill="white" />
                    </svg>
                </span>
                <span class="flex-1 ml-3 whitespace-nowrap">Soporte</span>
                </Link>
            </li>
            <li onClick={signOutHandler}>
                <Link href="/" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                </Link>
            </li>
        </ul>
            break
        case 'Medico':
            return <ul class="space-y-2 text-[16px]  text-gray-600 font-medium">
                <li>
                    <Link href="/Medico/Perfil" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Perfil</span>
                    </Link>
                </li>
                <li>
                    <Link href="/Cliente" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>                        
                    <span class="flex-1 ml-3 whitespace-nowrap">Store</span>
                    </Link>
                </li>
                <li>
                    <Link href="/Medico/Recetas" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Recetas</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://api.whatsapp.com/send?phone=+59169941749&text=hola%20mundo" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="w-6 h-6 mb-1 text-gray-600 bg-white rounded-full group-hover:text-blue-600 p-1">
                        <svg width="15" height="15" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.853564 19.7608C0.852627 23.1216 1.73763 26.4031 3.42044 29.2955L0.692627 39.178L10.8851 36.5262C13.7042 38.0491 16.8628 38.847 20.0726 38.8472H20.0811C30.6772 38.8472 39.3026 30.2917 39.3072 19.7759C39.3092 14.6802 37.3111 9.88857 33.6808 6.28361C30.0511 2.67896 25.2237 0.692755 20.0803 0.69043C9.48294 0.69043 0.858096 9.24547 0.853721 19.7608" fill="#4b5563" />
                            <path d="M0.167188 19.7544C0.166094 23.2361 1.08281 26.635 2.82562 29.631L0 39.8678L10.558 37.1209C13.467 38.6947 16.7423 39.5245 20.0752 39.5257H20.0837C31.06 39.5257 39.9953 30.6625 40 19.7702C40.0019 14.4915 37.9319 9.5276 34.1719 5.79349C30.4114 2.05984 25.4114 0.00217054 20.0837 0C9.10562 0 0.171563 8.86202 0.167188 19.7544ZM6.45469 29.115L6.06047 28.4941C4.40328 25.8795 3.52859 22.8581 3.52984 19.7557C3.53344 10.7022 10.9591 3.33643 20.09 3.33643C24.5119 3.33829 28.6675 5.04868 31.7931 8.15194C34.9186 11.2555 36.6384 15.3811 36.6373 19.769C36.6333 28.8225 29.2075 36.1891 20.0837 36.1891H20.0772C17.1064 36.1876 14.1928 35.396 11.6519 33.9L11.0472 33.5442L4.78188 35.1741L6.45469 29.1149V29.115Z" fill="white" />
                            <path d="M14.5541 11.3207C14.1812 10.4986 13.7889 10.482 13.4344 10.4675C13.1441 10.4551 12.8122 10.4561 12.4806 10.4561C12.1487 10.4561 11.6095 10.5799 11.1537 11.0737C10.6975 11.568 9.41187 12.7624 9.41187 15.1917C9.41187 17.6212 11.1951 19.9689 11.4437 20.2987C11.6926 20.6279 14.8864 25.7727 19.9445 27.7519C24.1483 29.3967 25.0037 29.0696 25.9161 28.9871C26.8286 28.9049 28.8605 27.793 29.275 26.6399C29.6898 25.4871 29.6898 24.4989 29.5655 24.2923C29.4411 24.0866 29.1092 23.963 28.6116 23.7162C28.1137 23.4692 25.6672 22.2747 25.2111 22.1099C24.7548 21.9452 24.4231 21.863 24.0912 22.3575C23.7594 22.8511 22.8064 23.963 22.5159 24.2923C22.2258 24.6224 21.9353 24.6635 21.4378 24.4165C20.9398 24.1688 19.3372 23.648 17.4358 21.966C15.9564 20.6572 14.9576 19.0409 14.6673 18.5465C14.377 18.0528 14.6362 17.7852 14.8858 17.5392C15.1094 17.3179 15.3836 16.9626 15.6326 16.6744C15.8808 16.386 15.9636 16.1803 16.1295 15.851C16.2956 15.5213 16.2125 15.233 16.0883 14.986C15.9636 14.739 14.9966 12.297 14.5541 11.3207Z" fill="white" />
                        </svg>
                    </span>
                    <span class="flex-1 ml-3 whitespace-nowrap">Soporte</span>
                    </Link>
                </li>
                <li onClick={signOutHandler}>
                    <Link href="/" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                    </Link>
                </li>
            </ul>
            break
        case 'Clinica':
            return <ul class="space-y-2 text-[16px]  text-gray-600 font-medium">
                <li>
                    <Link href="/Distribuidor/Perfil" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Perfil</span>
                    </Link>
                </li>
                <li>
                    <Link href="/Distribuidor/Transacciones" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-3 text-left whitespace-nowrap">Pedidos</span>
                    </Link>
                </li>
                <li>
                    {
                        user && user.rol == 'Medico'
                            ? <Link href="/Medico/Recetas" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Recetas</span>
                            </Link>

                            : <Link href="/Distribuidor/Productos" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Productos</span>
                            </Link>
                    }
                </li>

                <li>
                    <Link href="#" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span class="ml-3">Reportes</span>
                    </Link>
                </li>
                <li onClick={signOutHandler}>
                    <Link href="#" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                    </Link>
                </li>
            </ul>

        case 'Distribuidor':
            return <ul class="space-y-2 text-[16px]  text-gray-600 font-medium">
            <li>
                <Link href="/Distribuidor/Perfil" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Perfil</span>
                </Link>
            </li>
            <li>
                <Link href="/Cliente" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>                        
                <span class="flex-1 ml-3 whitespace-nowrap">Store</span>
                </Link>
            </li>
            <li>
                <Link href="/Distribuidor/Productos" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Productos</span>
                </Link>
            </li>
            <li>
                <Link href="/Distribuidor/Productos" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Pedidos</span>
                </Link>
            </li>
            <li>
                <Link href="https://api.whatsapp.com/send?phone=+59169941749&text=hola%20mundo" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="w-6 h-6 mb-1 text-gray-600 bg-white rounded-full group-hover:text-blue-600 p-1">
                    <svg width="15" height="15" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.853564 19.7608C0.852627 23.1216 1.73763 26.4031 3.42044 29.2955L0.692627 39.178L10.8851 36.5262C13.7042 38.0491 16.8628 38.847 20.0726 38.8472H20.0811C30.6772 38.8472 39.3026 30.2917 39.3072 19.7759C39.3092 14.6802 37.3111 9.88857 33.6808 6.28361C30.0511 2.67896 25.2237 0.692755 20.0803 0.69043C9.48294 0.69043 0.858096 9.24547 0.853721 19.7608" fill="#4b5563" />
                        <path d="M0.167188 19.7544C0.166094 23.2361 1.08281 26.635 2.82562 29.631L0 39.8678L10.558 37.1209C13.467 38.6947 16.7423 39.5245 20.0752 39.5257H20.0837C31.06 39.5257 39.9953 30.6625 40 19.7702C40.0019 14.4915 37.9319 9.5276 34.1719 5.79349C30.4114 2.05984 25.4114 0.00217054 20.0837 0C9.10562 0 0.171563 8.86202 0.167188 19.7544ZM6.45469 29.115L6.06047 28.4941C4.40328 25.8795 3.52859 22.8581 3.52984 19.7557C3.53344 10.7022 10.9591 3.33643 20.09 3.33643C24.5119 3.33829 28.6675 5.04868 31.7931 8.15194C34.9186 11.2555 36.6384 15.3811 36.6373 19.769C36.6333 28.8225 29.2075 36.1891 20.0837 36.1891H20.0772C17.1064 36.1876 14.1928 35.396 11.6519 33.9L11.0472 33.5442L4.78188 35.1741L6.45469 29.1149V29.115Z" fill="white" />
                        <path d="M14.5541 11.3207C14.1812 10.4986 13.7889 10.482 13.4344 10.4675C13.1441 10.4551 12.8122 10.4561 12.4806 10.4561C12.1487 10.4561 11.6095 10.5799 11.1537 11.0737C10.6975 11.568 9.41187 12.7624 9.41187 15.1917C9.41187 17.6212 11.1951 19.9689 11.4437 20.2987C11.6926 20.6279 14.8864 25.7727 19.9445 27.7519C24.1483 29.3967 25.0037 29.0696 25.9161 28.9871C26.8286 28.9049 28.8605 27.793 29.275 26.6399C29.6898 25.4871 29.6898 24.4989 29.5655 24.2923C29.4411 24.0866 29.1092 23.963 28.6116 23.7162C28.1137 23.4692 25.6672 22.2747 25.2111 22.1099C24.7548 21.9452 24.4231 21.863 24.0912 22.3575C23.7594 22.8511 22.8064 23.963 22.5159 24.2923C22.2258 24.6224 21.9353 24.6635 21.4378 24.4165C20.9398 24.1688 19.3372 23.648 17.4358 21.966C15.9564 20.6572 14.9576 19.0409 14.6673 18.5465C14.377 18.0528 14.6362 17.7852 14.8858 17.5392C15.1094 17.3179 15.3836 16.9626 15.6326 16.6744C15.8808 16.386 15.9636 16.1803 16.1295 15.851C16.2956 15.5213 16.2125 15.233 16.0883 14.986C15.9636 14.739 14.9966 12.297 14.5541 11.3207Z" fill="white" />
                    </svg>
                </span>
                <span class="flex-1 ml-3 whitespace-nowrap">Soporte</span>
                </Link>
            </li>
            <li onClick={signOutHandler}>
                <Link href="/" onClick={() => setNav(false)} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                </Link>
            </li>
        </ul>
        default:

    }
}