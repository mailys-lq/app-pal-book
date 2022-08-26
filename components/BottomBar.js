import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeBefore from './pages/HomeBefore';
import Library from './pages/Library';
import Search from './pages/Search';
import Profil from './pages/Profil';

const Tab = createBottomTabNavigator();
import { StyleSheet } from 'react-native';

function BottomBar() {
  return (
    <Tab.Navigator style={styles.bottomBar}>
      <Tab.Screen name="Home" component={HomeBefore} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}

export default BottomBar

const styles = StyleSheet.create({
    navigation: {
        display: 'flex',
        flexDirection: 'row'
    }, 
    header: {
        width: '100%', 
    }, 
    bottomBar: {
        position: 'fixed', 
        bottom: 0,
    }
})