import {View ,SafeAreaView , FlatList,ScrollView,Dimensions} from "react-native"
import Game from "../components/GamesStaking/Game"
import { games } from "../utils/gamesurls"


const Games = () => {
  const renderGames=({item})=>{
    return  <Game game={item} />
  }
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