import axios from "axios";
const url='https://betting-game.onrender.com/player'

export const createPlayer=async({walletID})=>{
   try{
    const res=await axios.post(`${url}/`,{walletID})
    // return res.data
    return 'success'
   }
   catch(err)
   {
    console.log(err)
    return 'error'
   }
}

export const getPlayer=async({walletID})=>{
    try{
        const res=await axios.get(`${url}/${walletID}`)
        if(res.data?.walletID)
        return "User Data Found"
    }
    catch(err)
    {
        console.log(err)
        return 'error'
    }
}
