import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import colors from "../constants/colors";

type LoaderProps = {
  text: string;
};

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Loader;
