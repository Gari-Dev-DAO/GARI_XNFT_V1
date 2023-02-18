import {  createContext ,useState} from "react";
import { ScrollView, Dimensions, ActivityIndicator,View } from "react-native";
import { useAllNfts } from "../hooks/useAllNfts";
import { useAlltraits } from "../hooks/useAllTraits";
import AllNfts from "../components/vNFT/AllNfts";
import ScreenConatainer from "../components/gradients/ScreenConatiner";
import PrimaryText from "../components/Typology/PrimaryText";
import CategoryFilter from "../components/vNFT/CategoryFilter";
import LanguageFilter from "../components/vNFT/LanguageFilter";
import { useFilters } from "../hooks/useFilters";



export const filterContex = createContext()


const Home = () => {
  let nfts =null
  nfts= useAllNfts();
  const { traits, languages } = useAlltraits(nfts);
 
  const [languageFilter,setLanguageFilter]=useState('All Languages')
  const [catgFilter,setCatgFilter]=useState('All Category')
  nfts=useFilters(nfts,languageFilter,catgFilter)

  
  return (
    <ScrollView
      contentContainerStyle={{ minHeight: Dimensions.get('screen').height, alignItems: 'center' }}
    >
      <ScreenConatainer>
        {nfts!=null ?
        <ScrollView  contentContainerStyle={{ alignItems: 'center' ,paddingTop:250}}>
           <PrimaryText style={{ fontSize: 32, color: 'white', margin: 'auto', lineHeight: 70,position:'absolute',top:30 }}>vNfts</PrimaryText>
          <View style={{position:'absolute',top:140,display:'flex',flexDirection:'row',gap:14,zIndex:500000}}>
           <CategoryFilter traits={traits} setCatgFilter={setCatgFilter}/>
           <LanguageFilter languages={languages} setLanguageFilter={setLanguageFilter}/>
           </View>
           {nfts?.length==0?
           <PrimaryText style={{fontSize:20}}>NO NFT FOUND!</PrimaryText>:
           <AllNfts nfts={nfts} />
        }
           </ScrollView>
          : <ActivityIndicator style={{ position: 'absolute', top: 100, margin: 'auto', left: '45%' }} size='large' color='#FFFFFF' />}
      </ScreenConatainer>
    </ScrollView>
  );
};

export default Home;
