import { clusterApiUrl, PublicKey } from "@solana/web3.js"
import { Connection } from "@solana/web3.js";
import { AnchorProvider, web3, utils, Program } from "@project-serum/anchor";
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { Buffer } from "buffer";
import { BN } from "@project-serum/anchor";
import idl from '../utils/idl.json'

window.Buffer = Buffer;
const { SystemProgram } = web3;
const programID = new PublicKey('5fgGihdCEzp9Cqzc2HryoxM65kcpkHctrsvuT9ZwWAKN');

const network = clusterApiUrl('devnet')
const connection = new Connection(network, 'processed')

const provider = new AnchorProvider(
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



export const startGameOnSolana = async ({ gameName, gameID }) => {

  try {
    const [campaign] = await findProgramAddressSync(
      [
        utils.bytes.utf8.encode("DEMO"), provider.wallet.publicKey.toBuffer(),
      ],
      program.programId
    );


    await program.methods.create(`Game Name : ${gameName}`, `gameID : ${gameID}`, new BN(0.02 * web3.LAMPORTS_PER_SOL)).accounts({
      campaign,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    }).rpc();

    console.log(
      "Created a new campaign w/ address:",
      campaign.toString()
    );
    return campaign.toString()
  }
  catch (err) {
    console.log(err)
    return 'error'
  }

}



// const gamePda = new PublicKey('HJY8TzzxXKacqi28CUmYhwZWRXUe18RfsSkkNAX2Zj5F')


// export const BetOnTheGame = async ({ gamePda }) => {

//   try {
//     await program.methods.pay().accounts({
//       campaign: gamePda,
//       user: provider.wallet.publicKey,
//       systemProgram: SystemProgram.programId,
//     }).rpc();
//     return 'success'
//   }
//   catch (err) {
//     console.log(err)
//     return 'error'
//   }

// }


export const makeWinner = async () => {
  const provider = new AnchorProvider(
    connection,
    window.xnft?.solana,
    'processed'
  );

  const program = new Program(idl, programID, provider);

  const cp = new PublicKey('HJY8TzzxXKacqi28CUmYhwZWRXUe18RfsSkkNAX2Zj5F')
  const pk = new PublicKey('4URY4JyjfWse9ajnQCwJtN2rswqkb9LDL68t8weyv1BY')

  try {
    await program.methods.winner().accounts({
      campaign: cp,
      winnerone: pk,
      winnertwo: pk,
      winnerthree: pk,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    }).rpc();
    return 'success'
  }
  catch (err) {
    console.log(err)
    return 'error'
  }

}
//test this function is remainings

