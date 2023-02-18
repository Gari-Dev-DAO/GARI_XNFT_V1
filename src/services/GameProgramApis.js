import { clusterApiUrl, PublicKey } from "@solana/web3.js"
import { Connection } from "@solana/web3.js";
import { AnchorProvider,web3, utils,Program } from "@project-serum/anchor";
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { Buffer } from "buffer";
import { BN } from "@project-serum/anchor";
import idl from '../utils/idl.json'
window.Buffer = Buffer;
const { SystemProgram } = web3;
const programID = new PublicKey('5fgGihdCEzp9Cqzc2HryoxM65kcpkHctrsvuT9ZwWAKN');

const network=clusterApiUrl('devnet')
const connection=new Connection(network,'processed')

const provider =  new AnchorProvider(
  connection,
  window.xnft?.solana,
 'processed'
);
const program = new Program(idl, programID, provider);

export const BetOnTheGame=async()=>{
    
const cp=new PublicKey('5coe96kDyMw2yoLm6HrzDSpVuQudYdE7Qk8k5mpfXYJd')
try{
await program.methods.donate(new BN(0.2 * web3.LAMPORTS_PER_SOL)).accounts({
  campaign: cp,
  user: provider.wallet.publicKey,
  systemProgram: SystemProgram.programId,
}).rpc();
return 'success'
}
catch(err)
{
    console.log(err)
    return 'error'
}

}






//TODO
//Error Handling in Games
//Loading in Games
//Integration with Progrram
//adding video player