import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, Text } from "react-native";
import { useQuery } from "@apollo/client";
import { useRouter } from "expo-router";

import { GET_LOAN_PRODUCTS } from "../../src/graphql/queries";
import Card from "../../src/components/Card";
import Button from "@/src/components/Button";
import Header from "@/src/components/Header";
import Loader from "@/src/components/Loader";
import colors from "../../src/constants/colors";
import { formatAmount } from "../../src/utils/formatAmount";

const LoanProducts = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_LOAN_PRODUCTS);

  if (loading) {
    return <Loader text="Loading Loan Products..." />;
  }

  if (error) return Alert.alert("Error", "Error loading loan products.");

  const handleCardPress = (id: number) => {
    setSelectedCardId(id);
  };

  const handleApplyLoan = () => {
    router.push("/loan/ApplyLoan");
  };

  return (
    <View style={styles.container}>
      <Header title="Loan Products Dashboard" />

      <FlatList
        data={data?.loanProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            buttonLabel="Learn More"
            selected={item.id === selectedCardId}
            onPress={() => handleCardPress(item.id)}>
            <Text style={styles.cardDetail}>Maximum Amount:</Text>
            <Text style={styles.amount}>
              ${formatAmount(item.maximumAmount)}
            </Text>
            <Text style={styles.cardDetail}>
              Interest: {item.interestRate}%
            </Text>
          </Card>
        )}
      />
      <Button
        label="Apply for a loan"
        onPress={handleApplyLoan}
        variant="contained"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  amount: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5
  },
  cardDetail: {
    fontSize: 12
  }
});

export default LoanProducts;
