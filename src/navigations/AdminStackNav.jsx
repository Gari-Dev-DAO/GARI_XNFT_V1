import { createStackNavigator } from '@react-navigation/stack';
import AdminPanel from '../screens/AdminPanel';
import AddGame from '../components/AdminPanel/AddGame';
import StartGame from '../components/AdminPanel/StartGame';
import AddAdmin from '../components/AdminPanel/AddAdmin';

const Stack = createStackNavigator();

const AdminStackNav=()=> {
  return (
    <Stack.Navigator screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#53045c',borderBottomWidth:0,elevation:0,shadowOffset:0 },
    }} >
     <Stack.Screen name={"admin-panel"} component={AdminPanel}  options={{
      headerShown: false }}/>
     <Stack.Screen name={"add-game"} component={AddGame} />
     <Stack.Screen name={"start-game"} component={StartGame} />
     <Stack.Screen name={"add-admin"} component={AddAdmin} />
    </Stack.Navigator>
  );
}
export default AdminStackNav