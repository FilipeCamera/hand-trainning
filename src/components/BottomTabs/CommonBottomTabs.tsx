import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsFeature } from '../../features/tabs';
import THEME from '../../styles/theme';

const Tabs = createBottomTabNavigator();

type CommonBottomTabsProps = {
  views: TabsFeature;
};

const CommonBottomTabs = ({ views }: CommonBottomTabsProps) => {
  return (
    <Tabs.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      {views.map((view) => (
        <Tabs.Screen
          key={view.name}
          name={view.name}
          component={view.component}
          options={{
            tabBarLabelStyle: {
              fontFamily: THEME.FONT_FAMILY[500],
            },
            tabBarActiveTintColor: THEME.TEXT_COLOR.ACTIVE_TINT_COLOR_TABS,
            tabBarInactiveTintColor: THEME.TEXT_COLOR.INACTIVE_TINT_COLOR_TABS,
            tabBarIcon: ({ focused }) => (focused ? <view.icon /> : <view.iconDisable />),
          }}
        />
      ))}
    </Tabs.Navigator>
  );
};

export { CommonBottomTabs };
