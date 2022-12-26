import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Nft from '../screens/Nft';

const Stack = createStackNavigator();

const HomeStackNav=()=> {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options={{
      headerShown: false }}/>
      <Stack.Screen name="Nft" component={Nft} />
    </Stack.Navigator>
  );
}
export default HomeStackNav