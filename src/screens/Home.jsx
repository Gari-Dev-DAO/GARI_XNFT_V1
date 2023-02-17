import {  createContext ,useState} from "react";
import { ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { useAllNfts } from "../hooks/useAllNfts";
import { useAlltraits } from "../hooks/useAllTraits";
import AllNfts from "../components/vNFT/AllNfts";
import ScreenConatainer from "../components/gradients/ScreenConatiner";
import PrimaryText from "../components/Typology/PrimaryText";
import CategoryFilter from "../components/vNFT/CategoryFilter";
import LanguageFilter from "../components/vNFT/LanguageFilter";
import { useFilters } from "../hooks/useFilters";


export const filterContex = createContext()


const Home = ({ }) => {

  let nfts = useAllNfts();
  const { traits, languages } = useAlltraits(nfts);
 
  const [languageFilter,setLanguageFilter]=useState('All Languages')
  const [catgFilter,setCatgFilter]=useState('All Category')
  nfts=useFilters(nfts,languageFilter,catgFilter)

  
  return (
    <ScrollView
      contentContainerStyle={{ minHeight: Dimensions.get('screen').height, alignItems: 'center' }}
    >
      <ScreenConatainer>
        {nfts?.length > 0 ?
        <ScrollView  contentContainerStyle={{ alignItems: 'center' ,paddingTop:200}}>
           <PrimaryText style={{ fontSize: 32, color: 'white', margin: 'auto', lineHeight: 70,position:'absolute',top:30 }}>vNfts</PrimaryText>
           <CategoryFilter traits={traits} setCatgFilter={setCatgFilter}/>
           <LanguageFilter languages={languages} setLanguageFilter={setLanguageFilter}/>
           <AllNfts nfts={nfts} />
           </ScrollView>
          : <ActivityIndicator style={{ position: 'absolute', top: 100, margin: 'auto', left: '45%' }} size='large' color='#FFFFFF' />}
      </ScreenConatainer>
    </ScrollView>
  );
};

export default Home;
