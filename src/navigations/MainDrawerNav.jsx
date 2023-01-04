import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNav from './HomeStackNav';
import GameStackNav from './GamesStackNav';
import StakingTabNav from './StakingTabNav';
import PandaStaking from '../screens/PandaStaking';

const Drawer = createDrawerNavigator();

const MainDrawerNav = () => {
  return (
        <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
            drawerType:"front",
            defaultStatus:"closed"
          }}
        >
        <Drawer.Screen name="Home" component={HomeStackNav} />
        <Drawer.Screen name="Staking" component={StakingTabNav} />
        <Drawer.Screen name="Games" component={GameStackNav} />
        <Drawer.Screen name="Panda Staking" component={PandaStaking}/>
      </Drawer.Navigator>
  )
}

export default MainDrawerNav


