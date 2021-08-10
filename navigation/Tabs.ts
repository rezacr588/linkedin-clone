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
    iconName: "md-home-sharp"
  },
  {
    name: "MyNetwork",
    component: MyNetworkNavigator,
    iconName: "people"
  },
  {
    name: "Post",
    component: PostNavigator,
    iconName: "add-circle"
  },
  {
    name: "Notifications",
    component: NotificationsNavigator,
    iconName: "notifications"
  },
  {
    name: "Jobs",
    component: JobsNavigator,
    iconName: "md-briefcase"
  },
]