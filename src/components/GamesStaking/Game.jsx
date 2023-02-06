import { useNavigation } from '@react-navigation/native';
import Button from '../Buttons/Button';
import Box from '../Containers/Container';
import PrimaryText from '../Typology/PrimaryText';

const Game = ({game}) => {
const nav=useNavigation()
const {name,url}=game;

const navigateToGameIframe=()=>{
    nav.push("gameiframe",{url,free:true})
}

const navigateToStaking=()=>{
  nav.push("gamestaking",{url})
}

  return (
    <Box>
    <PrimaryText>{name}</PrimaryText>
    <Button onPress={navigateToGameIframe}  title="Play For Free" />
    <Button onPress={navigateToStaking}  title="Play To Earn" />
    </Box>
  )
}


export default Game