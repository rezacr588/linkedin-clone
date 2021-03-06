import { Ionicons } from '@expo/vector-icons';
import React from "react"
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export default function TabBarIcon(
  props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
    focused: boolean
  }) {
  return (
    <Ionicons size={24} {...props} />
  );
}
