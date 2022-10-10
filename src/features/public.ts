import { FeatureGroup } from "../@types/groups";
import Initial from "../screens/Initial";
import Registrar from "../screens/Registrar";

const publicFeatures: FeatureGroup = {
  Initial: {
    enabled: true,
    component: Initial,
    enabledMethod: {
      google: false,
      apple: false,
      facebook: false,
    },
  },
  Registrar: {
    enabled: true,
    component: Registrar,
    enabledMethod: {
      google: false,
      apple: false,
      facebook: false,
    },
  },
};

export default publicFeatures;
