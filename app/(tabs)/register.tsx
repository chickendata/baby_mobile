import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
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
import axios from "axios";
import Toast from "react-native-toast-message";
import { signup } from "@/services/logIn";

export default function Register({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const defaultObjectInput = {
    validEmail: false,
    validPassword: false,
    validConfirmPassword: false,
  };
  const [objectInput, setObjectInput] = useState(defaultObjectInput);
  useEffect(() => {
    fetchIpAddress();
  }, []);

  const fetchIpAddress = async () => {
    const res = await axios.get("https://api.ipify.org", {
      params: {
        format: "json",
      },
    });
    setIpAddress(res.data.ip);
  };

  const handleRegister = async () => {
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
    if (!confirmPassword) {
      setObjectInput({ ...objectInput, validConfirmPassword: true });
      Toast.show({
        type: "error",
        text1: "Confirm password need data",
        text2: "Fill data for confirm password",
        visibilityTime: 3000,
      });
      return;
    }
    if (password !== confirmPassword) {
      setObjectInput({ ...objectInput, validConfirmPassword: true });
      Toast.show({
        type: "error",
        text1: "Your confirm password wrong",
        text2:
          "Enter a password confirmation that is the same as your password",
        visibilityTime: 3000,
      });
      return;
    }
    const newName = email.split("@");
    const formData = new FormData();
    formData.append("user_name", newName[0]);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("ip_register", ipAddress);
    formData.append("device_register", "Mobile");
    formData.append(
      "link_avatar",
      `https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png?fbclid=IwAR3IUCAOlBSThvKijmWXmNuZk-6oEe1q6k-oGQXGr_zd1zWixMIUfAaAyfw`
    );
    try {
      const response: any = await signup(formData);
      console.log(response);

      const { message } = response;
      if (message === "Account already exists!") {
        Toast.show({
          type: "error",
          text1: `${message}`,
          text2: "Try again",
          visibilityTime: 3000,
        });
        return;
      } else {
        Toast.show({
          type: "success",
          text1: `Please check your email to verify account!`,
          visibilityTime: 3000,
        });
        navigation.navigate("logIn", { data: response.message });
      }
    } catch (err) {
      console.log(err);
      Toast.show({
        type: "error",
        text1: "Something wrong in client, please reset your app",
        visibilityTime: 3000,
      });
    }

    console.log(email, password, confirmPassword, ipAddress);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header page="logIn" />
          <Toast position="top" topOffset={8} />
          <View style={styles.content}>
            <Text style={styles.contentTitle}>JOIN US NOW</Text>

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
                <Text style={{ fontWeight: "300", fontSize: 18 }}>
                  Password
                </Text>
                <TextInput
                  style={
                    objectInput.validPassword
                      ? styles.inputInvalid
                      : styles.input
                  }
                  placeholder="Enter password..."
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(text) => {
                    setObjectInput(defaultObjectInput);
                    setPassword(text);
                  }}
                  maxLength={40}
                  keyboardType="visible-password"
                />
              </View>
              <View style={{ width: "100%" }}>
                <Text style={{ fontWeight: "300", fontSize: 18 }}>
                  Confirm Password
                </Text>
                <TextInput
                  style={
                    objectInput.validConfirmPassword
                      ? styles.inputInvalid
                      : styles.input
                  }
                  placeholder="Enter confirm password..."
                  secureTextEntry={true}
                  value={confirmPassword}
                  onChangeText={(text) => {
                    setObjectInput(defaultObjectInput);
                    setConfirmPassword(text);
                  }}
                  maxLength={40}
                  keyboardType="visible-password"
                />
              </View>
              <LinearGradient
                colors={["rgba(220, 144, 182, 1)", "rgba(67, 141, 226, 1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: "100%" }}
              >
                <Button
                  title="REGISTER"
                  color={"#fff"}
                  onPress={handleRegister}
                />
              </LinearGradient>
              <Text
                style={{ fontSize: 16, fontWeight: "300", lineHeight: 19.5 }}
              >
                OR
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "300", lineHeight: 19.5 }}
              >
                If you already have an account
              </Text>
              <LinearGradient
                colors={["rgba(220, 144, 182, 1)", "rgba(67, 141, 226, 1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: "100%" }}
              >
                <Button
                  title="LOG IN"
                  color={"#fff"}
                  onPress={() => navigation.navigate("logIn")}
                />
              </LinearGradient>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  content: {
    borderTopWidth: 5,
    borderTopColor: "#EFF6FD",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentTitle: {
    fontWeight: "500",
    fontSize: 30,
    alignContent: "center",
    marginBottom: 5,
  },
  contentForm: {
    flex: 0.8,
    width: "90%",
    height: 300,
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderColor: "#468DE1",
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  inputInvalid: {
    borderColor: "red",
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
