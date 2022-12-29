import { CommonFeatures, TrainnerFeatures } from '../../features/tabs';
import { CommonBottomTabs } from './CommonBottomTabs';
import { TrainnerBottomTabs } from './TrainnerBottomTabs';

const BottomTabs = () => {
  const common = true;

  return common ? (
    <CommonBottomTabs views={CommonFeatures} />
  ) : (
    <TrainnerBottomTabs views={TrainnerFeatures} />
  );
};

export { BottomTabs };
