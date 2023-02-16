import {  createContext } from "react";
import { ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { useAllNfts } from "../hooks/useAllNfts";
import { useAlltraits } from "../hooks/useAllTraits";
import AllNfts from "../components/vNFT/AllNfts";
import ScreenConatainer from "../components/gradients/ScreenConatiner";
import PrimaryText from "../components/Typology/PrimaryText";


export const filterContex = createContext()


const Home = ({ }) => {

  let nfts = useAllNfts();
  const { traits, languages } = useAlltraits(nfts);
  //  const [filter,setfilter]=useState(['All'])
  //  nfts=useFilters(nfts,filter)
  //  use two filters here..language and otherone as nft.


  return (
    <ScrollView
      contentContainerStyle={{ minHeight: Dimensions.get('screen').height, alignItems: 'center' }}
    >
      <ScreenConatainer>
        {nfts?.length > 0 ?
        <ScrollView  contentContainerStyle={{ alignItems: 'center' }}>
           <PrimaryText style={{ fontSize: 32, color: 'white', margin: 'auto', lineHeight: 70 }}>vNfts</PrimaryText>
           {/* filter language */}
            {/* filter Category */}
           <AllNfts nfts={nfts} />
           </ScrollView>
          : <ActivityIndicator style={{ position: 'absolute', top: 100, margin: 'auto', left: '45%' }} size='large' color='#FFFFFF' />}
      </ScreenConatainer>
    </ScrollView>
  );
};

export default Home;
