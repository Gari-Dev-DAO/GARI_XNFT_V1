import { useState, useEffect, useMemo } from "react";

export const useAlltraits = (nfts=[]) => {
  const [traits, settraits] = useState([]);
  const [languages,setLanguages]=useState([])

  const addTraits = (traits, nft,languages) => {
    nft?.attributes?.map((trait) => {
      const { value ,trait_type} = trait;
  
      if(trait_type=='language')
      {
        if (!languages.has(value?.toLowerCase())) languages.add(value?.toLowerCase());
      }
     else if (!traits.has(value?.toLowerCase())) traits.add(value?.toLowerCase());
    });
  };

  useEffect(() => {
    const traits = new Set();
    const languages = new Set();
    nfts?.map((nft) => {
      addTraits(traits, nft,languages);
      return nft;
    });
    settraits(Array.from(traits));
    setLanguages(Array.from(languages));
  }, [nfts]);

  return useMemo(() => {
   return {traits,languages}
  }, [traits,languages]);
};
