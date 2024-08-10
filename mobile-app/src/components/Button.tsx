import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View
} from "react-native";

import colors from "../styles/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  variant: "outlined" | "contained";
  icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  variant,
  icon
}) => {
  const isContained = variant === "contained";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isContained ? styles.contained : styles.outlined,
        buttonStyle
      ]}>
        <Text
          style={[
            isContained ? styles.containedText : styles.outlinedText,
            textStyle
          ]}>
          {title}
        </Text>
      {icon && <View style={styles.icon}>{icon}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  contained: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  outlined: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.primary
  },
  outlinedText: {
    color: colors.primary,
    fontSize: 12
  },
  containedText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  icon: {
    marginLeft: 8,
  }
});

export default Button;
