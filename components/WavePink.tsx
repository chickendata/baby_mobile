import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function WavePink({ zIndex }: any) {
  const zI = zIndex;
  return (
    <View style={{ ...StyleSheet.absoluteFillObject, zIndex: -1 }}>
      <Svg
        onPress={() => console.log("Touch in wave pink")}
        style={styles.svgBackground}
        width={394}
        height={267}
        viewBox="50 80 394 267"
        fill="none"
      >
        <Path
          d="M254 .354c80.113 2.318 130.971 64.283 144.104 97.125l19.7 141.992v153.583c-57.185 14.006-192.567 42.019-276.621 42.019-104.729 0-177.65-106.531-201.694-141.655l-.23-.338C-84.547 258.307-78.4 28.199-39 77.462.4 126.724 153.858-2.544 254 .354z"
          fill="url(#paint0_linear_20_491)"
          fillOpacity={0.2}
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_20_491"
            x1={173.371}
            y1={435.073}
            x2={173.371}
            y2={-3.99474}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#fff" stopOpacity={0} />
            <Stop offset={1} stopColor="#FF9494" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  svgBackground: {
    position: "absolute",
  },
});

export default WavePink;
