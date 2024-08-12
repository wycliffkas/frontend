import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "../constants/colors";
import Button from "./Button";
import Icon from "react-native-vector-icons/Feather";

interface CardProps {
  title: string;
  selected: boolean;
  onPress: () => void;
  buttonLabel?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  selected,
  onPress,
  children,
  buttonLabel,
  title
}) => {
  return (
    <TouchableOpacity
       testID="card"
      style={[styles.card, selected && styles.selectedCard]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <View>{children}</View>
        </View>
        {buttonLabel && (
          <View style={styles.footer}>
            <Button
              label={buttonLabel}
              onPress={() => {}}
              variant="outlined"
              icon={
                <Icon name="arrow-right" size={18} color={colors.primary} />
              }
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20
  },
  content: {
    flex: 1,
    marginBottom: 5
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10
  },
  footer: {
    alignSelf: "flex-end"
  },
  selectedCard: {
    backgroundColor: colors.secondary
  }
});

export default Card;
