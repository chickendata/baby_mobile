import WavePink from "@/components/WavePink";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import * as Progress from "react-native-progress";

const TryGenerator = ({ navigation }: any) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress((prev) => (prev += 0.1));
      } else {
        clearInterval(interval);
        navigation.navigate("appPurchase");
      }
    }, 700);
    return () => clearInterval(interval);
  }, [progress]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Try Baby Generator</Text>
      <Progress.Bar progress={progress} width={300} color="pink" />
      <WavePink />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24.38,
    marginBottom: 4,
  },
});

export default TryGenerator;
