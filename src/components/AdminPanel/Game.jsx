import Button from '../Buttons/Button';
import RowBox from '../Containers/InLineContainer';
import GameBtn from '../gradients/GameBtn';
import PrimaryText from '../Typology/PrimaryText';
import Box from '../Containers/Container';
import { Image } from 'react-native';


const Game = ({game}) => {

const {gameName,gameID,gameImage}=game;

const startGame=async()=>{
    //create game-campaign fn of blockchain
    //start new game api of backend
}
const endGame=async()=>{
    //get winner   (db)
    //end game-cmpgn (blockchain)
    //select winner  (blockchain)
}

  return (
    <Box style={{marginTop:10,marginBottom:30,marginRight:16,marginLeft:16}}>
     <Image
         source={{ uri: gameImage }}
        style={{display:'flex',height:300,width:240}}
      />
    <PrimaryText style={{fontSize:18, lineHeight:40}}>{gameName}</PrimaryText>
    <RowBox style={{gap:'10px'}}>
    <Button onPress={startGame}  title="Start Game" />
    <GameBtn onPress={endGame}  title="End Game" />
    </RowBox>
    </Box>
  )
}


export default Game