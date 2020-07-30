import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Container } from "../../commons/Container";
import { Payment } from "./Payment";

export const DetailsScreen = ({ route }) => {
  const { money } = route.params.users;

  return (
    <Container style={styles.container}>
      <Text style={styles.money}>${money}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, { marginRight: 30 }]}>
          <Icon name="credit-card" size={20} style={styles.icon} />
          <Text style={styles.btnText}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Icon name="dollar" size={20} style={styles.icon} />
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
    paddingVertical: 7,
    paddingHorizontal: 25,
    flexDirection: "row",
    elevation: 8,
  },
  icon: {
    marginRight: 10,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
