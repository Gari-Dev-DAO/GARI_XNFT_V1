import { useState ,useEffect} from "react"
import {SafeAreaView , FlatList,ScrollView,Dimensions} from "react-native"
import Game from "./Game";
import ScreenConatainer from "../gradients/ScreenConatiner";
import { getAllGames } from "../../services/GameDBApis";
import PrimaryText from "../Typology/PrimaryText";
import Toast from 'react-native-root-toast';
import { ActivityIndicator } from "react-native"

const StartGame = () => {
  const [games,setGames]=useState([])
  const[isLoading,setLoading]=useState(true)

  const getGames=async()=>
  {
     const games=await getAllGames()
     if(games && games!='error')
     setGames(games)
     else if(games=='error')
     {
      Toast.show(`Something Went Wrong`, {
        duration: Toast.durations.LONG,
        backgroundColor:'red'}
      )
     }
     setLoading(false)
   }

  useEffect(() => {
   getGames()
  }, [])
  
  const renderGames=({item})=>{
    return  <Game game={item} />
  }
  
  return (
    <ScrollView
      contentContainerStyle={{minHeight:Dimensions.get('screen').height }}
    >
    <ScreenConatainer>
   {isLoading? <ActivityIndicator style={{position:'absolute',top:100,margin:'auto',left:'45%'}} size='large' color='#FFFFFF'/>:
    <SafeAreaView style={{flex:1,alignItems:"center"}}>
    <PrimaryText style={{fontSize:26,fontWeight:800,lineHeight:70}}>Games</PrimaryText>
      <FlatList data={games} renderItem={renderGames} keyExtractor={item => item.gameUrl} contentContainerStyle={{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}}/>
    </SafeAreaView>}
    </ScreenConatainer>
    </ScrollView>
  )
}

export default StartGame