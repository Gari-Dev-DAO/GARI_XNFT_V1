import { createStackNavigator } from '@react-navigation/stack';
import AdminPanel from '../screens/AdminPanel';
import Games from '../components/AdminPanel/Games';

const Stack = createStackNavigator();

const AdminStackNav=()=> {
  return (
    <Stack.Navigator >
     <Stack.Screen name={"admin-panel"} component={AdminPanel}  options={{
      headerShown: false }}/>
    <Stack.Screen name={"games"} component={Games} />
    </Stack.Navigator>
  );
}
export default AdminStackNav