import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History from '../screens/History';
import Stake from '../screens/Stake';
import LeaderBoard from '../screens/LeaderBoard';

const Tab = createMaterialTopTabNavigator();
const StakingTabNav = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle: { fontSize: 14 ,textTransform:'capitalize',margin:'auto'},
        tabBarStyle: { backgroundColor: 'transparent',height:40, elevation: 0,   // for Android
        shadowOffset: {
            width: 0, height: 0 // for iOS
        }
    },
        tabBarIndicatorStyle:{width:'25%',marginLeft:"4%"}
      }}
      tabBarStyle={{backgroundColor:'transparent'}}
    >
        <Tab.Screen name="Stake" component={Stake} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Leaderboard" component={LeaderBoard}/>
      </Tab.Navigator>
  )
}

export default StakingTabNav