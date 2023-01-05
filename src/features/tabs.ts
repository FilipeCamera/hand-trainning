import React from 'react';
import Home from '../screens/Home';
import { SvgProps } from 'react-native-svg';
import { AnilhaIconDisable, AnillhaIcon, HomeIcon, HomeIconDisable } from '../constants';
import Trainning from '../screens/Trainning';

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
  {
    name: 'Trainning',
    component: Trainning,
    icon: AnillhaIcon,
    iconDisable: AnilhaIconDisable,
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
