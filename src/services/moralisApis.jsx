import Moralis from "moralis";
import { SolAddress } from "@moralisweb3/common-sol-utils";
import { network } from "../utils/solanaNetwork";

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
