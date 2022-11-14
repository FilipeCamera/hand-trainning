import { FeaturePrivateGroup } from '../@types/groups';
import Onboarding from '../screens/Onboarding';

const privateFeatures: FeaturePrivateGroup = {
  Onboarding: {
    enabled: true,
    component: Onboarding,
  },
};

export default privateFeatures;
