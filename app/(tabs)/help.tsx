import { SafeAreaView, Text, View } from "react-native";

const HelpComp = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text onPress={() => navigation.goBack()}>Go back</Text>
      </View>
      <View>
        <Text>Help center</Text>
      </View>
    </SafeAreaView>
  );
};

export default HelpComp;
