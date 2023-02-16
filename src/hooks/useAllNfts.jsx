import { useState, useEffect, useMemo } from "react";
import { useMoralis } from "./useMoralis";
import { mintAddresses } from "../utils/mintdata";
import { getNFTMetadata } from "../services/moralisApis";
import { getArweaveData } from "../services/arweaveApis";


export const useAllNfts = () => {
  const [nfts, setnfts] = useState([]);
  useMoralis()
  useEffect(() => {
    const getNfts = async() => {
      let nfts = mintAddresses.map(async (mintAddress) => {
         const metaData= await getNFTMetadata(mintAddress)
         const {metadataUri}=metaData?.metaplex
         let arweaveData= await getArweaveData(metadataUri)
         arweaveData={...arweaveData,mintAddress,metadataUri}
         return arweaveData;
      });
      nfts=await Promise.all(nfts)
      setnfts(nfts);
    };
    getNfts();
  }, []);

  return useMemo(() => nfts, [nfts]);
};