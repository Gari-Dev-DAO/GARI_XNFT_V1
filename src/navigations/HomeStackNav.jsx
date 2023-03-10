import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Nft from '../screens/Nft';
import Iframe from '../screens/Ifame';

const Stack = createStackNavigator();

const HomeStackNav=()=> {
  return (
    <Stack.Navigator screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#53045c',borderBottomWidth:0,elevation:0,shadowOffset:0 },
    }} >
      <Stack.Screen name="Home" component={Home} options={{
      headerShown: false }}/>
      <Stack.Screen name="Nft" component={Nft} />
      <Stack.Screen name="Nft-Details" component={Iframe} />
    </Stack.Navigator>
  );
}
export default HomeStackNav