import Button from '../Buttons/Button';
import RowBox from '../Containers/InLineContainer';
import GameBtn from '../gradients/GameBtn';
import PrimaryText from '../Typology/PrimaryText';
import Box from '../Containers/Container';
import { Image } from 'react-native';
import { startNewGame } from '../../services/GameDBApis';
import { startGame } from '../../services/GameProgramApis';
import Toast from 'react-native-root-toast';
import { getGame,getLiveGame } from '../../services/GameDBApis';
import { getAllPlayersScore } from '../../services/GameDBApis';
import { endGame } from '../../services/GameDBApis';
import { makeWinner } from '../../services/GameProgramApis';


const Game = ({game}) => {

const {gameName,gameID,gameImage}=game;

const startTheGame=async()=>{
  
//fetch the game and declare winner than only new game start
let isLive=true;
const gameInstanceID = await getLiveGame({ gameID })
if (!gameInstanceID || gameInstanceID == 'error') {
  Toast.show('Something get Wrong!!.', {
    duration: Toast.durations.LONG,
    backgroundColor: 'red'
  });
  
  return
}
else if(gameInstanceID.msg=='Game Not Started')
{
  isLive=false
}
else{
const game=await getGame({gameID,gameInstanceID})

if(!game || game=='error')
{
  Toast.show('Something get Wrong!!.', {
    duration: Toast.durations.LONG,
    backgroundColor: 'red'
  });
 
  return
}
isLive=game.isLive
console.log(game)
}

if(!isLive)
{
    const gamePda=await startGame({gameName,gameID})
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
    }}
    else{
      Toast.show(`Game Not Ended Yet!`, {
        duration: Toast.durations.LONG,
        backgroundColor: 'red'
      }
      )
    }
}



const endTheGame=async()=>{
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
const game=await getGame({gameID,gameInstanceID})

if(!game || game=='error')
{
  Toast.show('Something get Wrong!!.', {
    duration: Toast.durations.LONG,
    backgroundColor: 'red'
  });
 
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


    console.log(data)


  
    let winnerOne=data[0];
    let winnerTwo=data[1];
    let winnerThree=data[2];
    if(!winnerTwo)
    winnerTwo=winnerOne;
    if(!winnerThree)
    winnerThree=winnerOne
console.log(winnerOne.publicKey)
console.log(winnerTwo.publicKey)
console.log(winnerThree.publicKey)
console.log(game.gamePda)


  
    const status= await makeWinner({winnerOne:winnerOne.publicKey,winnerTwo:winnerTwo.publicKey,winnerThree:winnerThree.publicKey,gamePda:game.gamePda});
        console.log(status)
    if(status=='success')
          {
            Toast.show(`Winner Rewarded Success!`, {
              duration: Toast.durations.LONG,
              backgroundColor: 'green'
            }
            )
            await endGame({gameID,gameInstanceID});
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



  return (
    <Box style={{marginTop:10,marginBottom:30,marginRight:16,marginLeft:16}}>
     <Image
         source={{ uri: gameImage }}
        style={{display:'flex',height:300,width:240}}
      />
    <PrimaryText style={{fontSize:18, lineHeight:40}}>{gameName}</PrimaryText>
    <RowBox style={{gap:'10px'}}>
    <Button onPress={startTheGame}  title="Start Game" />
    <GameBtn onPress={endTheGame}  title="Reward Winners" />
    </RowBox>
    </Box>
  )
}


export default Game