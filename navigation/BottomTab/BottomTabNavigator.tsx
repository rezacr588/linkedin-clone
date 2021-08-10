/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import TabBarIcon from '../../components/TabBarIcon';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import Tab from '../../interfaces/Tab.interface';
import { BottomTabParamList } from '../../types';
import { Tabs } from './../Tabs';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const renderBottomTabScreens = (tab: Tab) =>
      <BottomTab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.component}
        options={{
          tabBarLabel: tab.name,
          tabBarIcon: ({ color }) => <TabBarIcon name={tab.iconName} color={color} />,
        }}
      />

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      labeled={true}
      activeColor={Colors[colorScheme].tabIconSelected}
      barStyle={{ backgroundColor: Colors[colorScheme].background }}
      shifting={false}
    >
      {Tabs.map(renderBottomTabScreens)}
    </BottomTab.Navigator>
  );
}