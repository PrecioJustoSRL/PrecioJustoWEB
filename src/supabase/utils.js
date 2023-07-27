import { supabase } from './config'

//--------------------------Authentications----------------------------------

const onAuth =  (setUserProfile) => {
    supabase.auth.onAuthStateChange(async (event, session) => {
        console.log(session)
        if(session ) {
            const {data} = await supabase
            .from('Users')
            .select()
            .eq('uuid', session.user.id)
        // console.log(data[0])
        data !== null && data.length 
        ? setUserProfile(data[0])
        : setUserProfile(session.user)
        } else {setUserProfile(null)}
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
    const result = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    result.data.user == null && setUserSuccess('AccountNonExist')
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
    result.status == 201 ? readUserData(rute, uuid, updateContext) : (setUserSuccess ? setUserSuccess(msg) : '')
    console.log(result)

}
// ('Users', session.user.id, {}, setUserProfile, null, { uuid: session.user.id, rol: undefined })

const readUserData = async (rute, uuid, updateContext, eq, ) => {
    const result = await supabase
        .from(rute)
        .select()
        .eq(eq ? eq : 'uuid', uuid)
    console.log(result)
    result.data !== null && result.data.length !== 0 
    ? updateContext(result.data[0])
    : updateContext(null)  
}


const readUserAllData = async (rute, context, updateContext) => {

    const result = await supabase
        .from(rute)
        .select()
    console.log(result.data)

    return updateContext(result.data)

}

const updateUserData = async (rute, object, uuid, eq) => {
    const result = await supabase
        .from(rute)
        .update(object)
        .eq(eq ? eq : 'uuid', uuid)
        // if (result.data !== null && result.data.length !== 0) {
        //     console.log('act')
        //     key ? updateContext({ ...context, [key]: result.data[0] }) : updateContext(arr == true ? result.data : result.data[0])
        // } 
    console.log(result)
}


const deleteUserData = async (rute, uuid, ) => {
    const { error } = await supabase
        .from(rute)
        .delete()
        .eq('uuid', uuid)

}






export { onAuth, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut, writeUserData, readUserData, deleteUserData, updateUserData, readUserAllData }

