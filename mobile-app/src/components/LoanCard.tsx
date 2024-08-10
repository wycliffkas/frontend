import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../styles/colors";
import Button from "./Button";
import { formatAmount } from "../utils/CurrencyFormatter";
import Icon from "react-native-vector-icons/Feather";

interface LoanCardProps {
  name: string;
  interestRate: number;
  maximumAmount: number;
}

const LoanCard: React.FC<LoanCardProps> = ({
  name,
  interestRate,
  maximumAmount
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.details}>Maximum Amount:</Text>
      <Text style={styles.amount}>${formatAmount(maximumAmount)}</Text>
      <View style={styles.wrapper}>
        <Text style={styles.details}>Interest Rate: {interestRate}%</Text>
        <Button
          title="Learn More"
          onPress={() => {}}
          variant="outlined"
          icon={<Icon name="arrow-right" size={18} color={colors.primary} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
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
  details: {
    fontSize: 16,
    marginBottom: 2
  },
  amount: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});

export default LoanCard;
