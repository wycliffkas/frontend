import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, Text } from "react-native";
import { useQuery } from "@apollo/client";

import { GET_LOAN_APPLICATIONS } from "../../src/graphql/queries";
import Card from "../../src/components/Card";
import Button from "@/src/components/Button";
import Header from "@/src/components/Header";
import colors from "@/src/constants/colors";
import Loader from "@/src/components/Loader";
import { formatAmount } from "../../src/utils/formatAmount";

const LoanApplications: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const { loading, error, data } = useQuery(GET_LOAN_APPLICATIONS);

  if (loading) {
    return <Loader text="Loading loan applications..." />;
  }

  if (error) {
    Alert.alert("Error", "Error loading loan applications.");
    return null;
  }

  const handleCardPress = (id: number) => {
    setSelectedCardId(id);
  };

  return (
    <View style={styles.container}>
      <Header title="Loan Applications" />

      <FlatList
        data={data?.loanApplications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            testID={`card-${item.id}`}
            title={item.fullName}
            selected={item.id === selectedCardId}
            onPress={() => handleCardPress(item.id)}>
            <Text style={styles.detail}>Email: {item.email}</Text>
            <Text style={styles.detail}>Loan Amount:</Text>
            <Text style={styles.amount}>${formatAmount(item.loanAmount)}</Text>
            <Text style={styles.detail}>Loan Purpose: {item.loanPurpose}</Text>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  amount: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detail: {
    fontSize: 12,
  },
});

export default LoanApplications;
