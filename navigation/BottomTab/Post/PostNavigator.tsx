// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from '../../../screens/Post.screen';
import { PostParamList } from '../../../types';

const PostStack = createStackNavigator<PostParamList>();

export default function PostNavigator() {
  return (
    <PostStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <PostStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{ headerTitle: 'Post' }}
      />
    </PostStack.Navigator>
  );
}