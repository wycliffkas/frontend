import { Stack } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";

import client from "../src/apollo/client";

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
