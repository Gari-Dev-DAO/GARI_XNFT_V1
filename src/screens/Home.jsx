import { useState,createContext } from "react";
import {ScrollView} from "react-native";
import { useAllNfts } from "../hooks/useAllNfts";
import { useAlltraits } from "../hooks/useAllTraits";
import { useFilters } from "../hooks/useFilters";
import Filters from "../components/Filters";
import AllNfts from "../components/AllNfts";
import MainLogo from "../components/MainLogo";
import { logo } from "../utils/logo";


export const filterContex=createContext()
const {Provider}=filterContex;

const Home = ({}) => {

   let nfts = useAllNfts();
   const traits=useAlltraits(nfts);
   const [filter,setfilter]=useState(['All'])
   nfts=useFilters(nfts,filter)
   

  return (
    <ScrollView>
       <MainLogo logo={logo}/>
       <Provider value={[filter,setfilter]}>
       <Filters traits={traits}/>
       </Provider>
      <AllNfts nfts={nfts} />
    </ScrollView>
  );
};

export default Home;
