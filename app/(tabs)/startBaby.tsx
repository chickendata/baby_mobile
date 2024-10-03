import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  Button,
} from "react-native";
import Toast from "react-native-toast-message";
import axios from "axios";
import { launchImageLibrary } from "react-native-image-picker";
import { Video, ResizeMode } from "expo-av";

export default function StartBaby({ navigation }: any) {
  const [page, setPage] = useState(1);
  const [template, setTemplate] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSource] = useState("");

  const video = useRef(null);
  useEffect(() => {
    const dataTemplate = async () => {
      const response = await axios.get(
        `https://api.funface.online/get/list_video/all_video_baby_mom?page=${page}`
      );
      if (response) {
        setTemplate(response.data.data);
      }
    };
    dataTemplate();
  }, [page]);

  return (
    <SafeAreaView style={{ width: "100%" }}>
      <Header page="logIned" />
      <Toast />
      <View style={styles.content}>
        <Text style={styles.titleTemplate}>Template</Text>
        <Text style={styles.titleChoose}>Choose the video style you like</Text>
        <FlatList
          numColumns={4}
          data={template}
          renderItem={({ item }) => (
            <Video
              style={styles.video}
              source={{ uri: item.linkgoc }}
              shouldPlay
              isLooping
              resizeMode={ResizeMode.COVER}
              rate={1.0}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    borderTopWidth: 5,
    borderTopColor: "#EFF6FD",
    height: "100%",
    width: "100%",
  },
  titleTemplate: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 24.38,
    textAlign: "center",
    marginBottom: 15,
  },
  titleChoose: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18.29,
    marginLeft: 8,
    marginBottom: 4,
  },
  video: {
    width: 86,
    height: 180,
    margin: 4,
    borderRadius: 2,
    marginVertical: 8,
  },
});
