import React from "react";
import { Text, StyleSheet } from "react-native";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <Text style={styles.header}>{title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 40
  }
});

export default Header;
