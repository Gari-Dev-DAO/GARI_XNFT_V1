import { clusterApiUrl, PublicKey } from "@solana/web3.js"
import { Connection } from "@solana/web3.js";
import { AnchorProvider, web3, utils, Program } from "@project-serum/anchor";
import { Buffer } from "buffer";
import { BN } from "@project-serum/anchor";
import idl from '../utils/idl.json'
import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes';

window.Buffer = Buffer;
const { SystemProgram } = web3;
const programID = new PublicKey('4X13GHMj9WN5DQHKPeRG534EJvSGo8RsQYNsYzsk9iXj');

const network = clusterApiUrl('devnet')
const connection = new Connection(network, 'processed')

const provider = new AnchorProvider(
  connection,
  window.xnft?.solana,
  'processed'
);
const program = new Program(idl, programID, provider);


export const startGame = async ({gameName,gameID}) => {

  try{
  const count=new PublicKey('K1zrdsow7GwF31MgDEtNSnVaVNE4YxriwhvzuyQFsEs')
  const acc= await program.account.counter.fetch(count)
  const [Pda] = PublicKey.findProgramAddressSync([utf8.encode('BETTING_GAME'),Uint8Array.of(acc.count), provider.wallet.publicKey.toBuffer()], program.programId)

  await program.rpc.create(gameName, `${gameID}`, {
    accounts: {
      count,
      campaign: Pda,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    }
  });
  console.log('started game with Pda',Pda.toString())
  return Pda.toString()
}
catch(err)
{
  console.log(err)
   return 'error'
}

}


export const betOnGame = async ({gamePda}) => {
  // const campaign = new PublicKey('GQbdzKnUTexc71xHU5qeyHYvQySToVbYe9ourBhWXkAV');
  try{
   const campaign = new PublicKey(gamePda);
  const [Pda] = PublicKey.findProgramAddressSync([utf8.encode('BETTING_GAME'), campaign.toBuffer()], program.programId)
  
  await program.rpc.pay(new BN(0.2 * web3.LAMPORTS_PER_SOL), {
    accounts: {
      campaign,
      pda:Pda,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId
    }
  });
  const account = await program.account.campaign.fetch(campaign)
  console.log(account.amountReceived.toString())
  return 'success'
}
catch(err)
{
  return 'error'
}
}



export const makeWinner = async ({winnerOne,winnerTwo,winnerThree,gamePda}) => {
  const campaign = new PublicKey(gamePda);
  const acc1 = new PublicKey(winnerOne)
  const acc2 = new PublicKey(winnerTwo)
  const acc3 = new PublicKey(winnerThree)
  const admin=new PublicKey('4URY4JyjfWse9ajnQCwJtN2rswqkb9LDL68t8weyv1BY')

  try{
  const [Pda] = PublicKey.findProgramAddressSync([utf8.encode('BETTING_GAME'), campaign.toBuffer()], program.programId)
  console.log('pda is',Pda.toString())

  
  await program.rpc.winner( {
    accounts: {
      campaign,
      user:provider.wallet.publicKey,
      pda:Pda,
      winnerOne:acc1,
      winnerTwo:acc2,
      winnerThree:acc3,
      admin,
      systemProgram: SystemProgram.programId
    }
  })
  return 'success'
}
  catch(err)
  {
    return 'error'
  }

}





