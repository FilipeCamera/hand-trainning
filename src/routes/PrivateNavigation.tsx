import privateFeatures from '../features/private';

import { createStackNavigator } from '@react-navigation/stack';
import { FeatureGroup } from '../@types/groups';

const { Navigator, Screen } = createStackNavigator();

const features = ['Onboarding', 'CompletarRegistro', 'Dashboard'];

const routes = Object.keys(privateFeatures).map((feature: keyof FeatureGroup) => {
  if (features.includes(feature) && !!privateFeatures[feature].enabled) {
    return {
      name: feature,
      component: privateFeatures[feature].component,
    };
  }

  return {
    name: 'Onboarding',
    component: privateFeatures.Onboarding.component,
  };
});

export default function PrivateNavigation() {
  return (
    <Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      {routes.map((route) => (
        <Screen key={route.name} name={route.name} component={route.component} />
      ))}
    </Navigator>
  );
}
