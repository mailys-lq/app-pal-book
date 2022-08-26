import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeBefore from "../pages/HomeBefore";
import HomeBook from "../pages/HomeBook";
import Library from "../pages/Library";
import Search from "../pages/Search";
import Profil from "../pages/Profil";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#7DC996",

  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeBook}  options={{ headerShown: false }}/>
      <Stack.Screen name="Library" component={Library}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const LibraryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Library" component={Library}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const ProfilStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, LibraryStackNavigator, SearchStackNavigator, ProfilStackNavigator  };
