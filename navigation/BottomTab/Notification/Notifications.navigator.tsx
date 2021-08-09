// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from '../../../screens/Notifications.screen';
import { NotificationsParamList } from '../../../types';

const NotificationsStack = createStackNavigator<NotificationsParamList>();

export default function NotificationsNavigator() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ headerTitle: 'Notifications' }}
      />
    </NotificationsStack.Navigator>
  );
}