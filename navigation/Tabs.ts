import HomeNavigator from './BottomTab/Home/HomeNavigator';
import MyNetworkNavigator from './BottomTab/MyNetwork/MyNetworkNavigator';
import JobsNavigator from './BottomTab/Jobs/Jobs.navigator';
import Tab from '../interfaces/Tab.interface';
import PostNavigator from './BottomTab/Post/PostNavigator';
import NotificationsNavigator from './BottomTab/Notification/Notifications.navigator';

export const Tabs: Tab[] = [
  {
    name: "Home",
    component: HomeNavigator,
    iconName: "ios-code"
  },
  {
    name: "MyNetwork",
    component: MyNetworkNavigator,
    iconName: "ios-code"
  },
  {
    name: "Post",
    component: PostNavigator,
    iconName: "ios-code"
  },
  {
    name: "Notifications",
    component: NotificationsNavigator,
    iconName: "ios-code"
  },
  {
    name: "Jobs",
    component: JobsNavigator,
    iconName: "ios-code"
  },
]