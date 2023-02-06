import { useEffect, useState} from "react"
import {ScrollView,Dimensions,Text} from "react-native"
import { useNavigation } from "@react-navigation/native";
import StakeonGame from "../components/GamesStaking/StakeOnGame";
import GradientButton from "../components/Buttons/GradientButton";
import OverLay from "../components/OverLay";
import { usePublicKey } from "../hooks/xnftConnection/hooks";
import { getPlayer } from "../services/GameDBApis";
import Loading from "../components/Loading";


const GameStaking = ({route}) => {
const nav=useNavigation()
const {url}=route.params;
const publicKey=usePublicKey()
const [isBetted,setIsBetted]=useState(false) //get from api 
const [isLoading,setLoading]=useState(true)


const getUserBettingData=async()=>{
  setLoading(true)
  const status=await getPlayer({walletID:publicKey})
  if(status=='User Data Found' )
  setIsBetted(true)
  setLoading(false)
}

useEffect(()=>{
  if(publicKey)
  getUserBettingData()
},[publicKey])

const [isOverLayVisible,setOverLayVisible]=useState(true)
const [navigateToOther,setNavigateToOther]=useState(false)

const navigateToGameIframe=()=>{
    nav.push("gameiframe",{url,free:false})
    setNavigateToOther(true)
    setOverLayVisible(false)
}

useEffect(()=>{
  if(!isOverLayVisible && !navigateToOther)
  nav.push('games')
},[isOverLayVisible])


  return (
    <ScrollView
    contentContainerStyle={{ backgroundColor: "#8c067d", paddingTop: 20,minHeight:Dimensions.get('screen').height }}
  >
{isLoading && <Loading/>}
<Text>Thanks For Playing The Game</Text>
<OverLay visible={isOverLayVisible && !isBetted && !isLoading} setVisible={setOverLayVisible}><StakeonGame setIsBetted={setIsBetted} setLoading={setLoading}/> </OverLay>
<OverLay visible={isOverLayVisible && isBetted && !isLoading} setVisible={setOverLayVisible}><GradientButton title={"Play Now"} onPress={navigateToGameIframe}/> </OverLay>
</ScrollView>
  )
}

export default GameStaking
