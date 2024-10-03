import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
};

export const ImageSlider = [
  {
    title: "anh 1",
    image: require("@/assets/images/anh_baby_1.png"),
  },
  {
    title: "anh 2",
    image: require("@/assets/images/anh_baby_2.png"),
  },
  {
    title: "anh 3",
    image: require("@/assets/images/anh_baby_3.png"),
  },
  {
    title: "anh 4",
    image: require("@/assets/images/anh_baby_4.png"),
  },
];
