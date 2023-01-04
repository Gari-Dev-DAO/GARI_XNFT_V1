import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("mainnet-beta"));

const wallet = Keypair.generate();

const metaplex = Metaplex.make(connection)
export const getNfts=async()=>{
    const mintAddress=new PublicKey('HQRs2ozHPhnqovPjU5JnXkuceFyjHzwhmSBiSgbkVDdq')
    const nft = await metaplex.nfts().findByMint({ mintAddress });
    console.log(nft)
}