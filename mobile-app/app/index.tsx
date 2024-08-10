import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_LOAN_PRODUCTS } from "../src/graphql/queries";
import LoanCard from "../src/components/LoanCard";
import Button from "@/src/components/Button";

export default function Index() {
  const { loading, error, data } = useQuery(GET_LOAN_PRODUCTS);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Loan Application Dashboard</Text>
      <FlatList
        data={data.loanProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LoanCard
            name={item.name}
            maximumAmount={item.maximumAmount}
            interestRate={item.interestRate}
          />
        )}
      />
      <Button title="Apply for a loan" onPress={() => {}} variant="contained" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 40
  }
});
