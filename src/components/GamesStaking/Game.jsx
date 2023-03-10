import { useNavigation } from '@react-navigation/native';
import Button from '../Buttons/Button';
import Box from '../Containers/Container';
import RowBox from '../Containers/InLineContainer';
import GameBtn from '../gradients/GameBtn';
import PrimaryText from '../Typology/PrimaryText';
import { Image } from 'react-native';

const Game = ({game}) => {
const nav=useNavigation()
const {gameName,gameUrl,gameID,gameImage}=game;


const navigateToGameIframe=()=>{
    nav.push("gameiframe",{gameUrl,free:true})
}

const navigateToStaking=()=>{
  nav.push("gamestaking",{gameUrl,gameID})
}

  return (
    <Box style={{marginTop:10,marginBottom:30,marginRight:16,marginLeft:16}}>
     <Image
         source={{ uri: gameImage }}
        style={{display:'flex',height:300,width:240}}
      />
    <PrimaryText style={{fontSize:18, lineHeight:40}}>{gameName}</PrimaryText>
    <RowBox style={{gap:'10px'}}>
    <Button onPress={navigateToGameIframe}  title="Play For Free" />
    <GameBtn onPress={navigateToStaking}  title="Play To Earn" />
    </RowBox>
    </Box>
  )
}


export default Game