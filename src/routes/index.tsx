import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { Context } from '../context';
import PrivateNavigation from './PrivateNavigation';
import PublicNavigation from './PublicNavigation';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const { logged } = useContext(Context);
  return (
    <Navigator
      initialRouteName={logged ? 'Private' : 'Public'}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Public" component={PublicNavigation} />
      <Screen name="Private" component={PrivateNavigation} />
    </Navigator>
  );
}
