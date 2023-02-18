import { clusterApiUrl, PublicKey } from "@solana/web3.js"
import { Connection } from "@solana/web3.js";
import { AnchorProvider,web3, utils,Program } from "@project-serum/anchor";
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { Buffer } from "buffer";
import { BN } from "@project-serum/anchor";
import idl from './idl.json'
import { Pressable,View } from "react-native";
window.Buffer = Buffer;
const { SystemProgram } = web3;
const programID = new PublicKey('9PyH3wLrcfjjCFqMRq5mMapnqs6qb38Vx5XTTRgM3C9Y');

const network=clusterApiUrl('devnet')
const connection=new Connection(network,'processed')



 const makeWinner=async()=>{
    const provider =  new AnchorProvider(
        connection,
        window.xnft?.solana,
       'processed'
      );

      
const program = new Program(idl, programID, provider);

const cp=new PublicKey('HJY8TzzxXKacqi28CUmYhwZWRXUe18RfsSkkNAX2Zj5F')
const pk=new PublicKey('4URY4JyjfWse9ajnQCwJtN2rswqkb9LDL68t8weyv1BY')

try{
await program.methods.winner().accounts({
  campaign: cp,
  winnerone:pk ,
  winnertwo: pk,
  winnerthree: pk,
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


const BetOnTheGame=async()=>{
    const provider =  new AnchorProvider(
        connection,
        window.xnft?.solana,
       'processed'
      );
      
      const program = new Program(idl, programID, provider);
      
const cp=new PublicKey('HJY8TzzxXKacqi28CUmYhwZWRXUe18RfsSkkNAX2Zj5F')

try{
await program.methods.pay().accounts({
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




  const createcampaign=async()=>{
    const provider =  new AnchorProvider(
        connection,
        window.xnft?.solana,
       'processed'
      );
      
      console.log(provider)
      
      const program = new Program(idl, programID, provider);
      
      console.log(program)

    const [campaign] = await findProgramAddressSync(
      [
          utils.bytes.utf8.encode("DEMO"),provider.wallet.publicKey.toBuffer(),
      ],
      program.programId
  );
  
  console.log(campaign)
  
  await program.methods.create("campaign name2", "campaign description",new BN(0.2 * web3.LAMPORTS_PER_SOL)).accounts({
            campaign,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
  }).rpc();
  
  console.log(
      "Created a new campaign w/ address:",
      campaign.toString()
  );
    }

    
    const Poc = () => {
      return (
       <View>
        <Pressable onPress={createcampaign}>Start Game</Pressable>
        <Pressable onPress={BetOnTheGame}>Bet On Game</Pressable>
        <Pressable onPress={makeWinner}>Make Winner</Pressable>
       </View>
      )
    }
    
    export default Poc


//todo
//pay
//winner
//test
//mint nft by doing yarn dev