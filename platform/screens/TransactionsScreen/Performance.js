import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Indicator } from "./Indicator";

export const Performance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Performance</Text>
      <View style={styles.row}>
        <Indicator title="Current week" fill={64} tintColor="lightgreen" />
        <Indicator title="Last week" fill={40} tintColor="red" />
        <Indicator title="Last month" fill={90} tintColor="blue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
