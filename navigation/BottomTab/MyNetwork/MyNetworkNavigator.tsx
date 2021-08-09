// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import MyNetworkScreen from '../../../screens/MyNetworkScreen';
import { MyNetworkParamList } from '../../../types';

const MyNetworkStack = createStackNavigator<MyNetworkParamList>();

export default function MyNetworkNavigator() {
  return (
    <MyNetworkStack.Navigator>
      <MyNetworkStack.Screen
        name="MyNetworkScreen"
        component={MyNetworkScreen}
        options={{ headerTitle: 'MyNetwork' }}
      />
    </MyNetworkStack.Navigator>
  );
}