import { StyleSheet, View } from "react-native";
import { Button, Image, SafeAreaView, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const Paypal = ({ navigation }: any) => {
  const [isPayment, setIsPayment] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <View style={styles.imageChild}>
          <Image
            style={{ width: "50%", height: "100%" }}
            source={require("@/assets/images/anh_baby_1.png")}
          />
          <Image
            style={{ width: "50%", height: "100%" }}
            source={require("@/assets/images/anh_baby_2.png")}
          />
        </View>
        <View style={styles.imageChild}>
          <Image
            style={{ width: "50%", height: "100%" }}
            source={require("@/assets/images/anh_baby_3.png")}
          />
          <Image
            style={{ width: "50%", height: "100%" }}
            source={require("@/assets/images/anh_baby_4.png")}
          />
        </View>
        <Image
          style={styles.imageDad}
          source={require("@/assets/images/anh_nam.png")}
        />
        <Image
          style={styles.imageMom}
          source={require("@/assets/images/anh_nu1.png")}
        />
      </View>
      <View style={styles.payMent}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "800",
            fontSize: 20,
            lineHeight: 24.38,
            marginTop: 15,
          }}
        >
          For member
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            style={{ marginLeft: 8 }}
            name="checkmark-circle"
            color={"green"}
            size={30}
          />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              lineHeight: 22.5,
              color: "white",
              marginLeft: 20,
              marginVertical: 3,
              flex: 0.9,
            }}
          >
            Delete all advertising content
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            style={{ marginLeft: 8 }}
            name="checkmark-circle"
            color={"green"}
            size={30}
          />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              lineHeight: 22.5,
              color: "white",
              marginLeft: 20,
              marginVertical: 3,
              flex: 0.9,
            }}
          >
            $3 for 10 time machine uses and 20 image swaps
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            style={{ marginLeft: 8 }}
            name="checkmark-circle"
            color={"green"}
            size={30}
          />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              lineHeight: 22.5,
              color: "white",
              marginLeft: 20,
              marginVertical: 3,
              flex: 0.9,
            }}
          >
            Priority to use products of the ThinkAI ecosystem (creating wedding
            photos, reading comics, samnotes)
          </Text>
        </View>
        <View
          style={
            isPayment
              ? {
                  width: 200,
                  height: 50,
                  borderRadius: 12,
                  backgroundColor: "white",
                  marginHorizontal: "auto",
                  marginTop: 25,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                }
              : {
                  width: 200,
                  height: 50,
                  borderRadius: 12,
                  backgroundColor: "white",
                  marginHorizontal: "auto",
                  marginTop: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          <Text
            onPress={() => {
              setIsPayment(!isPayment);
            }}
            style={{ fontWeight: "700", fontSize: 18, lineHeight: 22.5 }}
          >
            Payment $3
          </Text>
        </View>

        <LinearGradient
          colors={["rgba(220, 144, 182, 1)", "rgba(67, 141, 226, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: 300,
            marginHorizontal: "auto",
            marginTop: 40,
            borderRadius: 10,
          }}
        >
          <Button
            onPress={() => navigation.navigate("logIn")}
            title="Try Baby Generator"
            color={"#fff"}
          />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  imageChild: {
    width: "100%",
    height: "45%",
    objectFit: "contain",
    flexDirection: "row",
  },
  imageDad: {
    width: 100,
    height: 100,
    position: "absolute",
    zIndex: 5,
    borderRadius: 10,
    left: 80,
    borderWidth: 1,
    borderColor: "black",
  },
  imageMom: {
    width: 100,
    height: 100,
    position: "absolute",
    zIndex: 5,
    borderRadius: 10,
    right: 80,
    borderWidth: 1,
    borderColor: "black",
  },
  payMent: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 450,
    backgroundColor: "black",
    zIndex: 8,
    borderTopRightRadius: 50,
  },
});

export default Paypal;
