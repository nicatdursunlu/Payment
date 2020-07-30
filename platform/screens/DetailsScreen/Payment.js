import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Payment = ({ route }) => {
  
  const { date, type, payWidth } = route.params?.users;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Detail</Text>
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Text style={styles.bold}>Peymant Detail</Text>
          <Text style={styles.regular}>{date}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.bold}>Type</Text>
          <Text style={styles.regular}>{type}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.bold}>Pay Width</Text>
          <Text style={styles.regular}>{payWidth}</Text>
        </View>

        <TouchableOpacity style={styles.exportBtn}>
          <Text style={styles.btnText}>Export</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: "80%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 15,
    marginBottom: 20,
  },
  wrapper: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
    borderBottomWidth: 0.8,
    borderBottomColor: "grey",
    paddingTop: 12,
  },

  bold: {
    fontWeight: "bold",
    fontSize: 17,
  },
  regular: {
    color: "grey",
    fontSize: 14,
    fontWeight: "700",
  },
  exportBtn: {
    alignSelf: "flex-end",
    marginTop: 30,
  },
  btnText: {
    fontSize: 15,
  },
});
