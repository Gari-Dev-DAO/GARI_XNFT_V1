import { useEffect } from "react";
import Moralis from 'moralis'
import { moralisApi } from "../utils/moralisApi";

export const useMoralis = () => {
  useEffect(() => {
    const makeConnection = async () => {
      try {
        await Moralis.start({
          apiKey: moralisApi,
        });
      } catch (e) {
        console.error(e);
      }
    };
    makeConnection();
  }, []);
};
