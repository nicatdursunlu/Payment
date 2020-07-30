import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.field} placeholder="Seacrh" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: "lightgrey",
    padding: 7,
  },
  field: {
    backgroundColor: "#fff",
    height: 30,
    borderRadius: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  },
});
