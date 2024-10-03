import { ImageSliderType } from "@/data/SliderData";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import Pagination from "./navigation/pagination";

type Props = {
  item: ImageSliderType;
  index: number;
};

const { width } = Dimensions.get("screen");

const SliderItem = ({ item, index }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} alt={item.title} />
      <Pagination index={index} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: width,
    height: 450,
  },
  image: {
    width: "100%",
    height: 350,
    objectFit: "contain",
    borderRadius: 20,
  },
});
export default SliderItem;
