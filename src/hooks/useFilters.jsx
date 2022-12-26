import { useState, useEffect, useMemo } from "react";

export const useFilters = (nfts, filter) => {
  const [filteredNfts, setfilteredNfts] = useState([]);

  const isToFilter = (attributes) => {
    const data = attributes?.find((trait) => {
      const { value } = trait;
      return filter.includes(value);
    });

    return data ? true : false;
  };

  useEffect(() => {
    if (filter.length == 1) {
      setfilteredNfts(nfts);
      return;
    }

    const filtered = nfts.filter((nft) => {
      const { attributes } = nft;
      return isToFilter(attributes) == true;
    });
    setfilteredNfts(filtered);
  }, [filter, nfts]);
  return useMemo(() => filteredNfts, [filteredNfts]);
};
