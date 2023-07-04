import { supabase } from './config'

//--------------------------Authentications----------------------------------

const onAuth = (setUserProfile) => {
    supabase.auth.onAuthStateChange((event, session) => {
        session && readUserData('Users', session.user.id, {}, setUserProfile, null, { uuid: session.user.id, rol: undefined })
        // (rute, uuid, context, updateContext, key, data)
        // const uuid = session.user.id
        // readUserData('Users', uuid, user, setUserProfile)
        // setUserProfile()
    })
}

const signUpWithEmailAndPassword = async (email, password, setUserProfile) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })
    setUserProfile(data)
}

const signInWithEmailAndPassword = async (email, password, setUserSuccess) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    console.log(data)
    data.user == null && setUserSuccess('AccountNonExist')
}

const signOut = async (email, password) => {
    const { error } = await supabase.auth.signOut()
}

//--------------------------CRUD----------------------------------

const writeUserData = async (rute, object, uuid, context, updateContext, setUserSuccess, msg, key) => {
    console.log(object)

    const result = await supabase
        .from(rute)
        .insert(object)
    setUserSuccess ? setUserSuccess(msg) : ''
    result.status == 201 ? readUserData(rute, uuid, context, updateContext, key) : (setUserSuccess ? setUserSuccess(msg) : '')
    console.log(result)

}
// ('Users', session.user.id, {}, setUserProfile, null, { uuid: session.user.id, rol: undefined })

const readUserData = async (rute, uuid, context, updateContext, key, data, eq, arr) => {

    const result = await supabase
        .from(rute)
        .select()
        .eq(eq ? eq : 'uuid', uuid)
    console.log(result)
    console.log(result.data)
    if (result.data !== null && result.data.length !== 0) {
        console.log('act')
        key ? updateContext({ ...context, [key]: result.data[0] }) : updateContext(arr == true ? result.data : result.data[0])
    } else {
        updateContext(data)
    }
}


const readUserAllData = async (rute, context, updateContext) => {

    const result = await supabase
        .from(rute)
        .select()
    console.log(result.data)

    return updateContext(result.data)

}

const updateUserData = async (rute, object, uuid) => {
    const result = await supabase
        .from(rute)
        .update(object)
        .eq('uuid', uuid)

    console.log(object)
}


const deleteUserData = async (rute, uuid) => {
    const { error } = await supabase
        .from(rute)
        .delete()
        .eq('uuid', uuid)
}






export { onAuth, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut, writeUserData, readUserData, deleteUserData, updateUserData, readUserAllData }

