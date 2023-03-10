import axios from "axios";
const url='https://games-backend.vercel.app/api'


const Error='error'

export const getLiveGame=async({gameID})=>{
    try{
      const params = new URLSearchParams({
          gameID
      })
       const res=await axios.get(`${url}/getLiveGame?${params}`)
       return res.data
    }
    catch(err)
    {
      return Error
    }
  }


  export const getPlayer=async({publicKey,gameID,gameInstanceID})=>{
    try{
        const params = new URLSearchParams({
            publicKey,
            gameID,
            gameInstanceID
        })
        const res=await axios.get(`${url}/getPlayer?${params}`)
        return res.data;
    }
    catch(err)
    {
       return Error
    }
}



export const addPlayer=async({gameID,gameInstanceID,publicKey})=>{
    try{
        const res=await axios.post(`${url}/addPlayer`,{gameID,gameInstanceID,publicKey})
        console.log(res.data.msg)
        return res.data
    }
    catch(err)
    {
       return Error
    }
}

export const addNewGame=async({gameName,gameUrl,gameImage})=>{
    try{
        const res=await axios.post(`${url}/addNewGame`,{gameName,gameUrl,gameImage})
        
        return res.data
    }
    catch(err)
    {
       return Error
    }
}

export const getAllGames=async()=>{
    try{
        const res=await axios.get(`${url}/getAllGames`)
        console.log(res.data);
        return res.data
    }
    catch(err)
    {
       return Error
    }
}

export const getAllAdmins=async()=>{
    try{
     
       const res=await axios.get(`${url}/getAllAdmins`)
       return res.data[0].admins
    }
    catch(err)
    {
      return Error
    }
  }

  export const addNewAdmin=async({gameAdmin})=>{
    try{
        const res=await axios.patch(`${url}/updateGameAdmins`,{gameAdmin})
        
        return res.data
    }
    catch(err)
    {
       return Error
    }
}


export const getGame=async({gameID,gameInstanceID})=>{
    try{
        const params = new URLSearchParams({
            gameID,
            gameInstanceID
        })
        const res=await axios.get(`${url}/getGame?${params}`)
        return res.data;
    }
    catch(err)
    {
       return Error
    }
}

export const startNewGame=async({gameID,gamePda})=>{
    try{
        const res=await axios.post(`${url}/startNewGame`,{gameID,gamePda})
        return res.data
    }
    catch(err)
    {
       return Error
    }
}

export const endGame=async({gameID,gameInstanceID})=>{
    try{
        const res=await axios.patch(`${url}/endGame`,{gameID,gameInstanceID})
        return res.data
    }
    catch(err)
    {
       return Error
    }
}

export const getAllPlayersScore=async({gameID,gameInstanceID})=>{
    try{
        const params = new URLSearchParams({
            gameID,
            gameInstanceID
        })
        const res=await axios.get(`${url}/getAllPlayers?${params}`)
        return res.data;
    }
    catch(err)
    {
      return Error
    }
}