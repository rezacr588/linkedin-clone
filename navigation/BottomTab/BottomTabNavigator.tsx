/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import TabBarIcon from '../../components/TabBarIcon';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import Tab from '../../interfaces/Tab.interface';
import { BottomTabParamList } from '../../types';
import { Tabs } from './../Tabs';

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const renderBottomTabScreens = (tab: Tab) =>
    <BottomTab.Screen
      key={tab.name}
      name={tab.name}
      component={tab.component}
      options={{
        tabBarLabel: tab.name,
        tabBarIcon: ({ color, focused }) =>
          <TabBarIcon focused={focused} name={tab.iconName} color={color} />,
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: 10,
          margin: 0
        },
        tabBarIconStyle: {
          margin: 0
        },
        tabBarItemStyle: {
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',
          padding: 0
        },
      }}
    />

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      screenOptions={{
        tabBarIndicatorStyle: {
          top: 0,
          backgroundColor: Colors[colorScheme].tabIconSelected
        },
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarStyle: {
          height: 50,
        },
        swipeEnabled: false
      }}
    >
      {Tabs.map(renderBottomTabScreens)}
    </BottomTab.Navigator>
  );
}