import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { Container } from "../../commons/Container";
import { Payment } from "./Payment";

export const DetailsScreen = ({ route }) => {
  const { money } = route.params.users;

  return (
    <Container style={styles.container}>
      <Text style={styles.money}>${money}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, { marginRight: 30 }]}>
          <Text style={styles.btnText}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Debt</Text>
        </TouchableOpacity>
      </View>

      <Payment route={route} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: "center",
  },
  money: {
    fontSize: 32,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    paddingTop: 40,
  },
  btn: {
    backgroundColor: "lightgrey",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
