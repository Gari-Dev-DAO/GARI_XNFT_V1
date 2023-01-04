import Moralis from "moralis";
import { SolAddress } from "@moralisweb3/common-sol-utils";
import { network } from "../utils/solanaNetwork";
import { moralisApi } from "../utils/moralisApi";


const makeConnection = async () => {
  try {
    await Moralis.start({
      apiKey: moralisApi,
    });
  } catch (e) {
    console.error(e);
  }
};

makeConnection()




export const getNFTMetadata = async (mintAddress) => {
  const address = SolAddress.create(mintAddress);
  try {
    const response = await Moralis.SolApi.nft.getNFTMetadata({
      address,
      network,
    });
    return response.jsonResponse;
  } catch (err) {
    console.log(err);
  }
};

export const getNftsByWallet=async (walletAddress)=>{
  const address = SolAddress.create(walletAddress);
  try{
  const response = await Moralis.SolApi.account.getNFTs({
    address,
    network,
  });
 return response.jsonResponse;
}
  catch(err){
    console.log(err)
  }
}