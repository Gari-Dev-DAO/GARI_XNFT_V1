import { createStackNavigator } from '@react-navigation/stack';
import Games from '../screens/Games';
import GameIframe from '../screens/GameIframe';
import GameStaking from '../screens/GamesStacking';

const Stack = createStackNavigator();

const GameStackNav=()=> {
  return (
    <Stack.Navigator  screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#53045c',borderBottomWidth:0,elevation:0,shadowOffset:0 },
    }}>
     <Stack.Screen name={"games"} component={Games}  options={{
      headerShown: false,
       }}/>
     <Stack.Screen name={"gameiframe"} component={GameIframe} />
     <Stack.Screen name={"gamestaking"} component={GameStaking} />
    </Stack.Navigator>
  );
}
export default GameStackNav