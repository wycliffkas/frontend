import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  TouchableOpacityProps
} from "react-native";

import colors from "../constants/colors";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  variant: "outlined" | "contained";
  icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  buttonStyle,
  textStyle,
  variant,
  icon,
  disabled,
  ...rest
}) => {
  const isContained = variant === "contained";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isContained ? styles.contained : styles.outlined,
        buttonStyle
      ]}
      disabled={disabled}
      {...rest}>
      <Text
        style={[
          isContained ? styles.containedText : styles.outlinedText,
          textStyle
        ]}>
        {label}
      </Text>
      {icon && <View testID="icon" style={styles.icon}>{icon}</View>}
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
    paddingHorizontal: 16,
    height: 56
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
    marginLeft: 8
  }
});

export default Button;
