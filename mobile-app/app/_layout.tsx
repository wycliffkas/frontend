import { Stack } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import { StyleSheet, SafeAreaView } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Redirect } from 'expo-router';


import client from "../src/apollo/client";
import colors from "../src/constants/colors";

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
      <Redirect href="/loan/LoanProducts" />
        <Tabs
        initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
      }}
        >
          <Tabs.Screen
            name="loan/LoanProducts"
            options={{
              title: "Home",
              tabBarIcon: ({ size, color, focused }) => (
                <FontAwesome
                name='home'
                size={size}
                color={color}
                solid={focused}
              />
              ),
              headerShown: false
            }}
          />
          <Tabs.Screen
            name="loan/ApplyLoan"
            options={{
              title: "Apply for Loan",
              tabBarIcon: ({ size, color, focused }) => (
                <FontAwesome
                name='credit-card'
                size={size}
                color={color}
                solid={focused}
              />
              ),
              headerShown: false
            }}
          />

          <Tabs.Screen
            name="loan/LoanApplications"
            options={{
              title: "Loan Applications",
              tabBarIcon: ({ size, color, focused }) => (
                <FontAwesome
                name='list-alt'
                size={size}
                color={color}
                solid={focused}
              />
              ),
              headerShown: false
            }}
          />
        </Tabs>
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
