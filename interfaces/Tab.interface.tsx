import { BottomTabParamList } from "../types";
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from "react"

export default interface Tab {
  name: keyof BottomTabParamList,
  component: any,
  iconName: ComponentProps<typeof Ionicons>['name']
}