import Header from "@/components/Header";
import { SafeAreaView, StyleSheet, View } from "react-native";

const BabyGenerator = () => {
  return (
    <SafeAreaView>
      <Header page="logIned" />
      <View style={styles.content}>
          
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    borderTopWidth: 5,
    borderTopColor: "#EFF6FD",
    height: "100%",
    justifyContent: "space-between",
  },
})

export default BabyGenerator;
