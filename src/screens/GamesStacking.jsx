import { useState} from "react"
import {View,Button} from "react-native"
import { useNavigation } from "@react-navigation/native";
import RegisterUser from "../components/RegisterUser";
import StakeonGame from "../components/StackOnGame";


const GameStaking = ({route}) => {
const nav=useNavigation()
const {url}=route.params;
const [staked,setStaked]=useState(false)  //get from api 
const [registered,setregistered]=useState(false)  //get from api

const navigateToGameIframe=()=>{
    nav.push("gameiframe",{url})
}

  return (
<View>
{!staked && <StakeonGame setStaked={setStaked}/>}
{staked && !registered && 

<RegisterUser setregistered={setregistered} />

}
{staked && registered &&  <Button onPress={navigateToGameIframe} title="Play Now" />}

</View>
  )
}

export default GameStaking