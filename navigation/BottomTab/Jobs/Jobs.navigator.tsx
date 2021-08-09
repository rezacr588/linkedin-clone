// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import JobsScreen from '../../../screens/Jobs.screen';
import { JobsParamList } from '../../../types';

const JobsStack = createStackNavigator<JobsParamList>();

export default function JobsNavigator() {
  return (
    <JobsStack.Navigator>
      <JobsStack.Screen
        name="JobsScreen"
        component={JobsScreen}
        options={{ headerTitle: 'Jobs' }}
      />
    </JobsStack.Navigator>
  );
}