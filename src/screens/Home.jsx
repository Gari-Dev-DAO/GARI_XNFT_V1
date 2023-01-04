import { useState,createContext } from "react";
import {ScrollView,Dimensions} from "react-native";
import { useAllNfts } from "../hooks/useAllNfts";
import { useAlltraits } from "../hooks/useAllTraits";
import { useFilters } from "../hooks/useFilters";
import Filters from "../components/vNFT/Filters";
import AllNfts from "../components/vNFT/AllNfts";




export const filterContex=createContext()
const {Provider}=filterContex;

const Home = ({}) => {

   let nfts = useAllNfts();
   const traits=useAlltraits(nfts);
   const [filter,setfilter]=useState(['All'])
   nfts=useFilters(nfts,filter)
   

  return (
    <ScrollView
    contentContainerStyle={{ backgroundColor: "#8c067d", paddingTop: 20,minHeight:Dimensions.get('screen').height }}
  >
      
       <Provider value={[filter,setfilter]}>
       <Filters traits={traits}/>
       </Provider>
      <AllNfts nfts={nfts} />
    </ScrollView>
  );
};

export default Home;
