import publicFeatures from '../features/public';

import { createStackNavigator } from '@react-navigation/stack';
import { FeatureGroup } from '../@types/groups';

const { Navigator, Screen } = createStackNavigator();

const features = ['Initial', 'Registrar', 'Login'];

const routes = Object.keys(publicFeatures).map((feature: keyof FeatureGroup) => {
  if (features.includes(feature) && !!publicFeatures[feature].enabled) {
    return {
      name: feature,
      component: publicFeatures[feature].component,
    };
  }

  return {
    name: '',
    component: publicFeatures.Initial.component,
  };
});

export default () => {
  return (
    <Navigator initialRouteName="Initial" screenOptions={{ headerShown: false }}>
      {routes.map((route) => (
        <Screen key={route.name} name={route.name} component={route.component} />
      ))}
    </Navigator>
  );
};
