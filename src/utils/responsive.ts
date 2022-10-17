import { Dimensions } from "react-native"

export enum widths {
  sm = 414,
  md = 0,
  lg = 0,
  xl = 0
}

export const responsive = (value: number) => {
  const {width} = Dimensions.get('screen');

  return (width * value) / widths.sm
}