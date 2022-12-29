import React from 'react';
import Home from '../screens/Home';
import { SvgProps } from 'react-native-svg';
import { HomeIcon, HomeIconDisable } from '../constants';

type TabsFeature = {
  name: string;
  icon?: React.FC<SvgProps>;
  iconDisable?: React.FC<SvgProps>;
  component: React.FC<any>;
}[];

const CommonFeatures: TabsFeature = [
  {
    name: 'Home',
    component: Home,
    icon: HomeIcon,
    iconDisable: HomeIconDisable,
  },
];

const TrainnerFeatures: TabsFeature = [
  {
    name: 'Home',
    component: Home,
    icon: HomeIcon,
    iconDisable: HomeIconDisable,
  },
];

export { CommonFeatures, TrainnerFeatures, TabsFeature };
