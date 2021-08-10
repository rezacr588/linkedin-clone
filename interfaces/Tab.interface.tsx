import { BottomTabParamList } from "../types";
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps, ComponentType } from "react"

export default interface Tab {
  name: keyof BottomTabParamList,
  component: ComponentType,
  iconName: ComponentProps<typeof Ionicons>['name']
}