import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Svg, { Ellipse, Path } from "react-native-svg";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

const Header = ({ page, navigation }: any) => {
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(() => {
    if (page === "logIned") {
      setIsLogIn(true);
    }
  }, [isLogIn]);

  return (
    <View style={styles.header}>
      <View style={styles.headerBaby}>
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/435d/4ad6/95da29108ed9d6e028126800377c6369?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q5mUiTQgrSnjSc23oFZzGvBIuTStHcxMeqTYignO~1-7qowdjk6RXbhnaeT8LyVdXPNrsL74oMFATAwa3oyduKD9dL6zdKnHVXLeNrKitel-tb5OWCOclLLT4Y8VinuvTChAcVb39TfvpJodpkyuXXiBCbaulN~OFRnpX~aoeaHVr3uKwO9TYpSgHtBbGTPu-qmgoANZxkcCK9Ym6GGfRqin1Qa0xbP3MN3iJqjzl1KBvdUhwuJcCD19V5Ef15i9UQXpHJee1us1jKaSwnui~CG9s7sCmHvwx0~SMVn3gcR4c6fkA5XzEg1MyiITQOMhd022gpcuO0rjJQOaQ~Y69A__",
          }}
          style={styles.babyImg}
        />
        <Text style={styles.headerBabyText}>Baby Face</Text>
      </View>
      <View style={styles.headerComponent}>
        <Text
          style={{ color: "white" }}
          onPress={() => navigation.navigate("help")}
        >
          <Svg width="20.89" height="21.32" viewBox="0 0 22 22" fill="none">
            <Ellipse
              cx="10.8903"
              cy="10.9384"
              rx="7.83482"
              ry="7.99615"
              stroke="#19191A"
              stroke-opacity="0.44"
              stroke-width="0.5"
            />
            <Ellipse
              cx="10.8903"
              cy="16.2692"
              rx="0.435267"
              ry="0.444231"
              fill="#33363F"
              stroke="#33363F"
            />
            <Path
              d="M10.8903 14.4923V13.2062C10.8903 12.3815 11.4153 11.6483 12.1961 11.3827V11.3827C12.9769 11.1171 13.5019 10.3839 13.5019 9.55916V9.08478C13.5019 7.65512 12.3315 6.49615 10.9018 6.49615V6.49615C9.45948 6.49615 8.27869 7.66541 8.27869 9.10776V9.16154"
              stroke="#33363F"
              stroke-width="2"
            />
          </Svg>
        </Text>
        {isLogIn && (
          <Svg width="23.88" height="24.37" viewBox="0 0 25 25" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.8452 7.88461H19.1734C19.4496 7.88461 19.6734 7.66076 19.6734 7.38461C19.6734 7.10847 19.4496 6.88461 19.1734 6.88461H16.2569C16.3555 7.27814 16.5644 7.62261 16.8452 7.88461ZM14.4834 7.88461C14.3575 7.56856 14.2699 7.23316 14.226 6.88461H5.24487C4.96873 6.88461 4.74487 7.10847 4.74487 7.38461C4.74487 7.66076 4.96873 7.88461 5.24487 7.88461H14.4834ZM5.24487 11.9615C4.96873 11.9615 4.74487 12.1854 4.74487 12.4615C4.74487 12.7377 4.96873 12.9615 5.24487 12.9615H19.1734C19.4496 12.9615 19.6734 12.7377 19.6734 12.4615C19.6734 12.1854 19.4496 11.9615 19.1734 11.9615H5.24487ZM5.24487 17.0385C4.96873 17.0385 4.74487 17.2623 4.74487 17.5385C4.74487 17.8146 4.96873 18.0385 5.24487 18.0385H19.1734C19.4496 18.0385 19.6734 17.8146 19.6734 17.5385C19.6734 17.2623 19.4496 17.0385 19.1734 17.0385H5.24487Z"
              fill="#222222"
            />
            <Ellipse
              cx="18.1786"
              cy="6.36921"
              rx="1.9898"
              ry="2.03077"
              fill="#222222"
            />
          </Svg>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#EFF6FD",
    borderBottomWidth: 5,
  },
  headerBaby: {
    marginLeft: 15,
    color: "white",
  },
  babyImg: {
    width: 38.73,
    height: 33.67,
    marginLeft: 13,
  },
  headerBabyText: {
    color: "#C76369",
  },
  headerComponent: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
