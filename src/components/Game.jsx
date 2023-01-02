import {Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import Box from './Box';
import Heading from './Heading';

const Game = ({game}) => {
const nav=useNavigation()
const {name,url}=game;

const navigateToGameIframe=()=>{
    nav.push("gameiframe",{url})
}

const navigateToStaking=()=>{
  nav.push("gamestaking",{url})
}

  return (
     <Box>
    <Heading>{name}</Heading>
    <Button onPress={navigateToGameIframe}  title="Play For Free" />
    <Button onPress={navigateToStaking}  title="Play To Earn" />
    </Box>
  )
}


export default Game