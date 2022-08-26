import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Romans from '../pages/categories/Romans';
import BD from '../pages/categories/BD';
import Mangas from '../pages/categories/Mangas';

const Tab = createMaterialTopTabNavigator();

function TabTopNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { borderColor: 'red' },
      tabBarStyle: { backgroundColor: '#7DC996', paddingTop: 50 },
    }}>
      <Tab.Screen name="Roman" component={Romans} />
      <Tab.Screen name="BD" component={BD} />
      <Tab.Screen name="Manga" component={Mangas} />
    </Tab.Navigator>
  );
}

export default TabTopNavigator