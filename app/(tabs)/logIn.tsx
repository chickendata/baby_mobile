import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "@/components/Header";

import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { CheckBox } from "react-native-elements";
import { Colors } from "@/constants/Colors";
import { useEffect, useRef, useState } from "react";
import Toast from "react-native-toast-message";
import { Path, Svg } from "react-native-svg";
import { signin } from "@/services/logIn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WavePink from "@/components/WavePink";
import axios from "axios";

export default function LogIn({ navigation, route }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const defaultObjectInput = {
      validEmail: false,
      validPassword: false,
    };
    const [objectInput, setObjectInput] = useState(defaultObjectInput);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (route.params?.data) {
      Toast.show({
        type: "success",
        text1: `${route.params?.data}`,
        visibilityTime: 3000,
      });
      return;
    } else {
      return;
    }
  }, [route.params?.data]);

  useEffect(() => {}, []);

  const handleEyePassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const curent_date = new Date();
  const today = curent_date.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const handleLogIn = async () => {
    setObjectInput(defaultObjectInput);
    if (!email) {
      setObjectInput({ ...objectInput, validEmail: true });
      Toast.show({
        type: "error",
        text1: "Your email is blank",
        text2: "Please enter your email",
        visibilityTime: 3000,
      });
      return;
    }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setObjectInput({ ...objectInput, validEmail: true });
      Toast.show({
        type: "error",
        text1: "Your email is required",
        text2: "Please change your domain email",
        visibilityTime: 3000,
      });
      return;
    }
    if (!password) {
      setObjectInput({ ...objectInput, validPassword: true });
      Toast.show({
        type: "error",
        text1: "Your password is blank",
        text2: "Please enter your password",
        visibilityTime: 3000,
      });
      return;
    }
    // const res = await axios.post(`https://databaseswap.mangasocial.online/login`, {
    //   name: email,
    //   job: password,
    // });
    // if (res) {
    //   console.log(res.data);
    // }
    const formData = new FormData();
    formData.append("email_or_username", email);
    formData.append("password", password);
    try {
      const response: any = await axios.post(
        `https://databaseswap.mangasocial.online/login`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);

      const { message } = response;

      if (message === "Invalid Password!!") {
        Toast.show({
          type: "error",
          text1: `${message}`,
          text2: "Try again",
          visibilityTime: 3000,
        });
      } else {
        try {
          const account = JSON.stringify(response);
          await AsyncStorage.setItem("accessToken", response.data.token);
          await AsyncStorage.setItem("user", account);
          await AsyncStorage.setItem("lastLoginDate", today);
          navigation.navigate(`startBaby`);
          console.log("success login");
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header page={"logIn"} navigation={navigation} />
          <Toast position="top" topOffset={8} />
          <View style={styles.content}>
            <Text style={styles.contentTitle}>LOGIN TO EXPERIENCE</Text>
            <View style={styles.contentForm}>
              <View style={{ width: "100%" }}>
                <Text style={{ fontWeight: "300", fontSize: 18 }}>Email</Text>
                <TextInput
                  style={
                    objectInput.validEmail ? styles.inputInvalid : styles.input
                  }
                  placeholder="Enter email..."
                  value={email}
                  onChangeText={(text) => {
                    setObjectInput(defaultObjectInput);
                    setEmail(text);
                  }}
                  maxLength={100}
                  keyboardType="email-address"
                />
              </View>
              <View style={{ width: "100%" }}>
                <Text
                  style={{ fontWeight: "300", fontSize: 18, marginTop: 10 }}
                >
                  Password
                </Text>
                <TextInput
                  style={
                    objectInput.validPassword
                      ? styles.inputInvalid
                      : styles.input
                  }
                  placeholder="Enter password..."
                  secureTextEntry={secureTextEntry}
                  value={password}
                  onChangeText={(text) => {
                    setObjectInput(defaultObjectInput);
                    setPassword(text);
                  }}
                  maxLength={40}
                  keyboardType="visible-password"
                />
                <Text
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 14,
                    width: 40,
                  }}
                  onPress={handleEyePassword}
                >
                  <Svg width="22" height="19" viewBox="0 0 22 19" fill="none">
                    <Path
                      d="M10.83 6L14 9.16V9C14 8.20435 13.6839 7.44129 13.1213 6.87868C12.5587 6.31607 11.7956 6 11 6H10.83ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.77 8 9C8 9.79565 8.31607 10.5587 8.87868 11.1213C9.44129 11.6839 10.2044 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C9.67392 14 8.40215 13.4732 7.46447 12.5355C6.52678 11.5979 6 10.3261 6 9C6 8.21 6.2 7.47 6.53 6.8ZM1 1.27L3.28 3.55L3.73 4C2.08 5.3 0.78 7 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.81 16.08L18.73 19L20 17.73L2.27 0M11 4C12.3261 4 13.5979 4.52678 14.5355 5.46447C15.4732 6.40215 16 7.67392 16 9C16 9.64 15.87 10.26 15.64 10.82L18.57 13.75C20.07 12.5 21.27 10.86 22 9C20.27 4.61 16 1.5 11 1.5C9.6 1.5 8.26 1.75 7 2.2L9.17 4.35C9.74 4.13 10.35 4 11 4Z"
                      fill="black"
                    />
                  </Svg>
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <CheckBox
                  checked={checked}
                  onPress={() => setChecked(!checked)}
                />
                <Text style={{ marginVertical: "auto" }}>keep logged in</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 10,
                  zIndex: 10,
                }}
              >
                <LinearGradient
                  colors={["rgba(220, 144, 182, 1)", "rgba(67, 141, 226, 1)"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ width: "45%" }}
                >
                  <Button
                    title="REGISTER"
                    color={"#fff"}
                    onPress={() => navigation.navigate("register")}
                  />
                </LinearGradient>
                <LinearGradient
                  colors={["rgba(220, 144, 182, 1)", "rgba(67, 141, 226, 1)"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ width: "45%" }}
                >
                  <Button title="LOG IN" color={"#fff"} onPress={handleLogIn} />
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    height: "100%",
  },
  content: {
    borderTopWidth: 5,
    borderTopColor: "#EFF6FD",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentTitle: {
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 5,
    display: "flex",
  },
  contentForm: {
    flex: 0.7,
    width: "90%",
    height: 300,
    alignItems: "center",
  },
  input: {
    borderColor: "#468DE1",
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 8,
    position: "relative",
  },
  inputInvalid: {
    borderColor: "red",
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 8,
    position: "relative",
  },
});
