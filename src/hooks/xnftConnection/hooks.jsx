import { useEffect,useState } from "react";
import { useDidLaunch } from "../xnft-hooks";


export const usePublicKey=()=>{
    const isLaunched=useDidLaunch()
 const [publicKey,setPublicKey]=useState('')
    useEffect(()=>{
        setPublicKey(window?.xnft?.solana?.publicKey)
        window?.xnft?.solana?.on("publicKeyUpdate", () => {
          setPublicKey(window?.xnft?.solana?.publicKey);
        });
       },[isLaunched])
    return publicKey
}

export const useConnection=()=>{
 const isLaunched=useDidLaunch()
  const [connection,setConnection]=useState('')
  useEffect(()=>{
    setConnection(window?.xnft?.solana?.connection)
    window?.xnft?.solana?.on("connectionUpdate", () => {
      setConnection(window?.xnft?.solana?.connection);
    });
   },[isLaunched])
   return connection
}