import { View ,Text} from "react-native"
import { useEffect } from "react"
import { clusterApiUrl, PublicKey } from "@solana/web3.js"
import { useConnection, usePublicKey } from "../hooks/xnftConnection/hooks"
import { WebView } from 'react-native-webview';
import * as React from 'react';
import { Connection } from "@solana/web3.js";
import GradientButton from "../components/Buttons/GradientButton";
import { Transaction , LAMPORTS_PER_SOL} from "@solana/web3.js";
import {
	Provider , Program
} from "@project-serum/anchor";
import idl from '../utils/idl.json'
import { AnchorProvider,web3, utils } from "@project-serum/anchor";
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { Buffer } from "buffer";
import { BN } from "@project-serum/anchor";
window.Buffer = Buffer;
const { SystemProgram } = web3;

const ConnectionPoc = () => {
const programID = new PublicKey('5fgGihdCEzp9Cqzc2HryoxM65kcpkHctrsvuT9ZwWAKN');

const publicKey=usePublicKey()
const pk=new PublicKey('5U3bH5b6XtG99aVWLqwVzYPVpQiFHytBD68Rz2eFPZd7')
// const connection=useConnection()
// console.log(publicKey?.toString())
// console.log(connection)
const network=clusterApiUrl('devnet')
const connection=new Connection(network,'processed')

const provider =  new AnchorProvider(
  connection,
  window.xnft?.solana,
 'processed'
);

const program = new Program(idl, programID, provider);
console.log('program',program)

const createcampaign=async()=>{
  Promise.all(
    (await connection.getProgramAccounts(program.programId)).map(
      async (campaign) => ({
        ...(await program.account.campaign.fetch(campaign.pubkey)),
        pubkey: campaign.pubkey,
      })
    )
  ).then((campaigns) => console.log(campaigns[0]));

  const [campaign] = await findProgramAddressSync(
    [
        utils.bytes.utf8.encode("CAMPAIGN_DEMO"),provider.wallet.publicKey.toBuffer(),
    ],
    program.programId
);
console.log(campaign.toString())
console.log('wx',provider.wallet.publicKey.toString())
console.log(program.methods.create)
// const data=await program.methods.create("campaign name2", "campaign description").accounts({
//             campaign,
//             user: provider.wallet.publicKey,
//             systemProgram: SystemProgram.programId,
//         }
// ).rpc();
const cp=new PublicKey('5coe96kDyMw2yoLm6HrzDSpVuQudYdE7Qk8k5mpfXYJd')
await program.methods.donate(new BN(0.2 * web3.LAMPORTS_PER_SOL)).accounts({
  campaign: cp,
  user: provider.wallet.publicKey,
  systemProgram: SystemProgram.programId,
}).rpc();

console.log(data)
console.log(
    "Created a new campaign w/ address:",
    campaign.toString()
);
}

useEffect(() => {
  const getBal=async()=>{
     
       const bal=await connection.getBalance(pk)
       console.log(bal)
  }
  if(publicKey && connection)
getBal()
}, [publicKey,connection])


const transferToken=async()=>{
  const transaction= new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: pk,
      lamports: 1 * LAMPORTS_PER_SOL,
  })
  )
//  var sig=window.xnft.solana.signTransaction(transaction,connection)
 await window.xnft.solana.signTransaction(transaction)
const txsig = await window.xnft.send(transaction)
//  var sig=await connection.sendTransaction(transaction)

} 

  return (
    <View style={{height:600}}>
        {/* <WebView
      style={{flex:1,height:'100%',width:'100%'}}
      originWhitelist={['*']}
      source={{ uri: 'https://www.bonkme.tech/' }}
    /> */}
    <GradientButton onPress={createcampaign} title='transfer'/>
    </View>
  )
}

export default ConnectionPoc

// problems : how to intract with devnet
