import {View ,SafeAreaView , FlatList} from "react-native"
import Game from "../components/Game"
import { games } from "../utils/gamesurls"


const Games = () => {
  const renderGames=({item})=>{
    return  <Game game={item} />
  }
  return (
    <SafeAreaView style={{flex:1,alignItems:"center"}}>
      <FlatList data={games} renderItem={renderGames} keyExtractor={item => item.url} contentContainerStyle={{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}}/>
    </SafeAreaView>

  )
}

export default Games