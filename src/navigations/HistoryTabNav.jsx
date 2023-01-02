import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History from '../screens/History';
import Stake from '../screens/Stake';
import LeaderBoard from '../screens/LeaderBoard';
import FAQs from '../screens/FAQs';

const Tab = createMaterialTopTabNavigator();
const HistoryTabNav = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle: { fontSize: 14 ,textTransform:'capitalize',margin:'auto'},
        tabBarStyle: { backgroundColor: 'transparent',height:40, elevation: 0,   // for Android
        shadowOffset: {
            width: 0, height: 0 // for iOS
        }
    },
        tabBarIndicatorStyle:{width:'0',height:'0'}
      }}
      tabBarStyle={{backgroundColor:'transparent'}}
    >
        <Tab.Screen name="Stake" component={Stake} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Leaderboard" component={LeaderBoard}/>
        <Tab.Screen name="FAQ" component={FAQs}/>
      </Tab.Navigator>
  )
}

export default HistoryTabNav