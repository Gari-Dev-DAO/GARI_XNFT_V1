import { useState, useEffect, useMemo } from "react";

export const useFilters = (nfts, languageFilter, catgFilter) => {

  const [filteredNfts, setfilteredNfts] = useState([]);

  
  const filterByCatg = () => {
    let fltrcat = []

    if (catgFilter == 'All Category') {
     
      fltrcat=nfts
     
    }
    else{
   
    nfts?.map((nft) => {
      nft?.attributes?.map((trait) => {
        const { value, trait_type } = trait;

        if ((value?.toLowerCase()) == catgFilter) {
          console.log(value, catgFilter)
          fltrcat.push(nft)
        }

      });
    })
  }
    if (languageFilter == 'All Languages') {
      setfilteredNfts(fltrcat)
      return
    }

    const filtlang = []
    fltrcat?.map((nft) => {
      nft?.attributes?.map((trait) => {
        const { value, trait_type } = trait;

        if (trait_type == 'language') {
          if ((value?.toLowerCase()) == languageFilter) {
            filtlang.push(nft)
          }
        }
      });
    })
    setfilteredNfts(filtlang)
  }

  useEffect(() => {
    filterByCatg()
  }, [nfts, catgFilter,languageFilter])


  return useMemo(() => filteredNfts, [filteredNfts]);
};
