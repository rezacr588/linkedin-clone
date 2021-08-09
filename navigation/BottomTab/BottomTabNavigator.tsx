/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import TabBarIcon from '../../components/TabBarIcon';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import Tab from '../../interfaces/Tab.interface';
import { BottomTabParamList } from '../../types';
import { Tabs } from './../Tabs';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const renderBottomTabScreens = (tab: Tab) =>
    <BottomTab.Screen
      key={tab.name}
      name={tab.name}
      component={tab.component}
      options={{
        tabBarIcon: ({ color }) => <TabBarIcon name={tab.iconName} color={color}/>,
      }}
    />

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      {Tabs.map(renderBottomTabScreens)}
    </BottomTab.Navigator>
  );
}