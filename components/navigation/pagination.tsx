import { StyleSheet, Text, View } from "react-native";

type props = {
  index: number;
};
const Pagination = ({ index }: props) => {
  return (
    <View
      style={{
        width: 80,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={index === 0 ? styles.circleRed : styles.circleBlack}></View>
      <View style={index === 1 ? styles.circleRed : styles.circleBlack}></View>
      <View style={index === 2 ? styles.circleRed : styles.circleBlack}></View>
      <View style={index === 3 ? styles.circleRed : styles.circleBlack}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleBlack: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "black",
  },
  circleRed: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "red",
  },
});
export default Pagination;
