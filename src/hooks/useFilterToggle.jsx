import { useMemo, useCallback, useState, useContext } from "react";
import { filterContex } from "../screens/Home";

export const useFilterToggle = () => {
  const [filter, setfilter] = useContext(filterContex);
  const [toggle, settoggle] = useState(true);

  const addFilter = useCallback(
    (trait) => {
      setfilter([...filter, trait]);
      settoggle(false);
    },
    [filter, toggle]
  );

  const removeFilter = useCallback(
    (trait) => {
      const newFilter = filter.filter((val) => {
        return val != trait;
      });

      setfilter(newFilter);
      settoggle(true);
    },
    [filter, toggle]
  );

  const values = useMemo(() => {
    return { filter, toggle, addFilter, removeFilter };
  }, [filter, toggle, addFilter, removeFilter]);
  return values;
};
