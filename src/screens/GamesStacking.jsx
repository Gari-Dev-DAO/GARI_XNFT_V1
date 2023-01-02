import { useState} from "react"
import {View,Button,ScrollView,Dimensions} from "react-native"
import { useNavigation } from "@react-navigation/native";
import StakeonGame from "../components/StackOnGame";
import StakingButton from "../components/StakingButton";


const GameStaking = ({route}) => {
const nav=useNavigation()
const {url}=route.params;
const [staked,setStaked]=useState(false)  //get from api 


const navigateToGameIframe=()=>{
    nav.push("gameiframe",{url})
}

  return (
    <ScrollView
    contentContainerStyle={{ backgroundColor: "#8c067d", paddingTop: 20,minHeight:Dimensions.get('screen').height }}
  >   
{!staked && <StakeonGame setStaked={setStaked}/>}

{staked  &&  <StakingButton onPress={navigateToGameIframe} title="Play Now" />}

</ScrollView>
  )
}

export default GameStaking