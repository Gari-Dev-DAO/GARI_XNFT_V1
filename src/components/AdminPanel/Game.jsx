import Button from '../Buttons/Button';
import RowBox from '../Containers/InLineContainer';
import GameBtn from '../gradients/GameBtn';
import PrimaryText from '../Typology/PrimaryText';
import Box from '../Containers/Container';
import { Image } from 'react-native';
import { startNewGame } from '../../services/GameDBApis';
import { makeWinner, startGameOnSolana } from '../../services/GameProgramApis';
import Toast from 'react-native-root-toast';


const Game = ({game}) => {

const {gameName,gameID,gameImage}=game;

const startGame=async()=>{

    const gamePda=await startGameOnSolana({gameName,gameID})
    if(gamePda && gamePda!='error')
    {
        const data=await startNewGame({gameID,gamePda})
        if(data && data!='error')
        {
          Toast.show(`New Game Started.`, {
            duration: Toast.durations.LONG,
            backgroundColor: 'green'
          }
          )
        }
        else
        {
          Toast.show(`Something Went Wrong!`, {
            duration: Toast.durations.LONG,
            backgroundColor: 'red'
          }
          )
        }
    }
    else{
      Toast.show(`Something Went Wrong!`, {
        duration: Toast.durations.LONG,
        backgroundColor: 'red'
      }
      )
    }
}



const endGame=async()=>{
    const gameInstanceID=await getLiveGame({gameID})

    if(!gameInstanceID || gameInstanceID=='error')
    {
      Toast.show(`Something Went Wrong!`, {
        duration: Toast.durations.LONG,
        backgroundColor: 'red'
      }
      )
      return 
    }

    let data = await getAllPlayersScore({gameID,gameInstanceID});
    if(!data || data=='error')
    {
      Toast.show(`Something Went Wrong!`, {
        duration: Toast.durations.LONG,
        backgroundColor: 'red'
      }
      )
      return
    }
    
     data=data?.map((user)=>{
        const {publicKey,scores}=user;
        return {
          publicKey,
          score:Math.max(...scores,0)
        }
     })
    data?.sort((a,b) => (a.score >= b.score) ? -1 : ((b.score > a.score) ? 1 : 0))
    const winnerone=data[0];
    const winnertwo=data[1];
    const winnerthree=data[2];
    if(winnerone && winnertwo && winnerthree)
    {
    const status= await makeWinner({winnerone,winnertwo,winnerthree});
          if(status=='success')
          {
            Toast.show(`Winner Selected!`, {
              duration: Toast.durations.LONG,
              backgroundColor: 'green'
            }
            )
          }
          else
          {
            Toast.show(`Something went wrong!`, {
              duration: Toast.durations.LONG,
              backgroundColor: 'red'
            }
            )
          }
    }
    else
    {
      Toast.show(`Less than three Players!`, {
        duration: Toast.durations.LONG,
        backgroundColor: 'red'
      }
      )
    }

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
    <GameBtn onPress={endGame}  title="Reward Winners" />
    </RowBox>
    </Box>
  )
}


export default Game