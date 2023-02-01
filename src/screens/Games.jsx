import {View ,SafeAreaView , FlatList,ScrollView,Dimensions} from "react-native"
import { useEffect ,useState} from "react"
import Game from "../components/GamesStaking/Game"
import { games } from "../utils/gamesurls"
import { useConnection, useDidLaunch, usePublicKeys } from "../hooks/xnft-hooks"
import { usePublicKey } from "../hooks/xnft-hooks"
import { DrawerContentScrollView } from "@react-navigation/drawer"

const Games = () => {
  const renderGames=({item})=>{
    return  <Game game={item} />
  }
  // const publicKeys=useDidLaunch() && usePublicKey()
  // console.log("pk",publicKeys)
  const [publicKey, setPublicKey] = useState('');
const isLaunched=useDidLaunch()
const connection=useConnection()
console.log('connection')
useEffect(() => {
  if(isLaunched)
  setPublicKey(window?.xnft?.solana?.publicKey);

   console.log("i am is Launched",isLaunched)
}, [isLaunched])

console.log(publicKey.toString())

  
  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "#8c067d", paddingTop: 20,minHeight:Dimensions.get('screen').height }}
    >
    <SafeAreaView style={{flex:1,alignItems:"center"}}>
      <FlatList data={games} renderItem={renderGames} keyExtractor={item => item.url} contentContainerStyle={{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}}/>
    </SafeAreaView>
    </ScrollView>

  )
}

export default Games