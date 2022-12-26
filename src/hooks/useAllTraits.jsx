import { useState, useEffect, useMemo } from "react";

export const useAlltraits = (nfts) => {
  const [traits, settraits] = useState([]);

  const addTraits = (traits, nft) => {
    nft?.attributes.map((trait) => {
      const { value } = trait;
      if (!traits.has(value)) traits.add(value);
    });
  };

  useEffect(() => {
    const traits = new Set();
    nfts.map((nft) => {
      addTraits(traits, nft);
      return nft;
    });
    settraits(Array.from(traits));
  }, [nfts]);

  return useMemo(() => traits, [traits]);
};
