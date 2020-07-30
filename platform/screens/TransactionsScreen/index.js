import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Container } from "../../commons/Container";
import { SearchBox } from "./SearchBox";
import { Performance } from "./Performance";
import { Transactions } from "./Transactions";

export const TransactionsScreen = () => {
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <SearchBox />
      <Performance />
      <Transactions />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
