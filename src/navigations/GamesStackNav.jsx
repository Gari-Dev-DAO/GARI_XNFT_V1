import { createStackNavigator } from '@react-navigation/stack';
import Games from '../screens/Games';
import GameIframe from '../screens/GameIframe';
import GameStaking from '../screens/GamesStacking';

const Stack = createStackNavigator();

const GameStackNav=()=> {
  return (
    <Stack.Navigator >
     <Stack.Screen name={"games"} component={Games}  options={{
      headerShown: false }}/>
     <Stack.Screen name={"gameiframe"} component={GameIframe} />
     <Stack.Screen name={"gamestaking"} component={GameStaking} />
    </Stack.Navigator>
  );
}
export default GameStackNav