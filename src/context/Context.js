'use client'


import React, { useState, useMemo, useRef, useContext } from 'react'

const UserContext = React.createContext()

export function UserProvider({ children }) {

	const [user, setUser] = useState(undefined)
	const [userDB, setUserDB] = useState(undefined)
	const [distributorPDB, setDistributorPDB] = useState(undefined)
	const [productDB, setProduct] = useState(undefined)
	const [item, setItem] = useState(undefined)
	const [cart, setCart] = useState({})
	const [success, setSuccess] = useState('')
	const [pedidos, setPedidos] = useState([])
	const [qr, setQr] = useState('');
	const [QRurl, setQRurl] = useState('');
	const [recetaDB, setRecetaDB] = useState({});
	const [filter, setFilter] = useState('');
	const [filterQR, setFilterQR] = useState('');
	const [recetaDBP, setRecetaDBP] = useState(undefined);
	const [nav, setNav] = useState(false)
	const [temporal, setTemporal] = useState(undefined)
	const [userUuid, setUserUuid] = useState(undefined)
	const [modal, setModal] = useState('')
	const [msg, setMsg] = useState('')
	const [tienda, setTienda] = useState(null)

	const timer = useRef(null);


	const videoRef = useRef();
	const [play, setPlay] = useState(true)
	const [sound, setSound] = useState(false)
	const [introVideo, setUserIntroVideo] = useState(undefined)

	const videoClientRef = useRef();
	const [soundClient, setSoundClient] = useState(false)
	const [introClientVideo, setUserIntroClientVideo] = useState(undefined)
	const [search, setSearch] = useState(false)
	const [sound1, setSound1] = useState(false)
	const [sound2, setSound2] = useState(false)
	const [whatsapp, setWhatsapp] = useState(false)
	const [whatsappMSG, setWhatsappMSG] = useState('')
	const [state, setState] = useState({})



	const setUserProfile = (data) => {
		setUser(data)
	}
	const setUserData = (data) => {
		setUserDB(data)
	}
	const setUserDistributorPDB = (data) => {
		setDistributorPDB(data)
	}
	const setUserProduct = (data) => {
		setProduct(data)
	}
	const setUserPedidos = (data) => {
		setPedidos(data)
	}
	const setUserCart = (data) => {
		setCart(data)
	}
	const setUserItem = (data) => {
		setItem(data)
	}
	const setUserSuccess = (data) => {
		setSuccess(data)
		setTimeout(() => { setUserSuccess(null) }, 6000)
	}

	const setIntroVideo = (data) => {
		setUserIntroVideo(data)
		// if (introVideo === undefined) {
		// 	return
		// }
		const interval = setInterval(() => {
			console.log('int')
			if (videoRef.current.ended) {
				setUserIntroVideo(false)
				clearInterval(interval)
			}
		}, 1000)

	}



	const setIntroClientVideo = (data) => {
		setUserIntroClientVideo(data)

		const interval = setInterval(() => {
			console.log('int')
			if (videoClientRef.current.ended) {
				setUserIntroClientVideo(false)
				clearInterval(interval)
			}
		}, 1000)
	}

	const value = useMemo(() => {
		return ({
			user,
			userDB,
			distributorPDB,
			productDB,
			pedidos,
			item,
			cart,
			success,
			qr,
			QRurl,
			recetaDB,
			filter,
			filterQR,
			recetaDBP,
			nav,
			userUuid,
			modal,
			msg,
			tienda,
			introVideo,
			play,
			sound,
			videoRef,
			state,
			videoClientRef,
			soundClient,
			introClientVideo, search,
			sound1,
			sound2,
			whatsapp,
			whatsappMSG,
			setWhatsappMSG,
			setWhatsapp,
			setSound2,
			setSound1,
			setSearch,
			setIntroClientVideo,
			setSoundClient,
			setState,
			setSound,
			setPlay,
			setIntroVideo,
			setTienda,
			setMsg,
			setModal,
			setUserUuid,
			temporal,
			setTemporal,
			setNav,
			setRecetaDBP,
			setFilterQR,
			setFilter,
			setRecetaDB,
			setQRurl,
			setQr,
			setUserProfile,
			setUserData,
			setUserCart,
			setUserDistributorPDB,
			setUserProduct,
			setUserPedidos,
			setUserSuccess,
			setUserItem
		})
	}, [user, userDB, distributorPDB, productDB, pedidos, item, cart, success, qr, QRurl, recetaDB, filter, filterQR, recetaDBP, nav, temporal, userUuid, modal, msg, tienda, introVideo, play, sound, state, videoClientRef,
		soundClient,
		introClientVideo,
		search,
		sound1,
		sound2, whatsapp])

	return (
		<UserContext.Provider value={value} >
			{children}
		</UserContext.Provider>
	)
}

export function useUser() {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('error')
	}
	return context
}


