import { clusterApiUrl , Connection ,PublicKey } from "@solana/web3.js";
import {getMint} from '@solana/spl-token'
const network = clusterApiUrl("mainnet-beta");
const connection = new Connection("https://api.mainnet-beta.solana.com");

export const getBalance=async()=>{
    const pubkey= new PublicKey('GVPE2f5zsScWLjEHGFEMwZc5oqUSDXeJpKSzQ7bxB3qt')
   const mint=await connection.getBalance(pubkey)
  console.log(mint)
}