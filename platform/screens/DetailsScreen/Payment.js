import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export const Payment = ({ route }) => {
  const { date, type, payWidth } = route.params?.users;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Detail</Text>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.bold}>Peymant Detail</Text>
          <View style={styles.wrapper}>
            <Text style={styles.regular}>{date}</Text>
            <TouchableOpacity>
              <Icon name="info" size={20} color="blue" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.bold}>Type</Text>
          <View style={styles.wrapper}>
            <Text style={styles.regular}>{type}</Text>
            <TouchableOpacity>
              <Icon name="info" size={20} color="blue" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.bold}>Pay Width</Text>
          <View style={styles.wrapper}>
            <Text style={styles.regular}>{payWidth}</Text>
            <TouchableOpacity>
              <Icon name="info" size={20} color="blue" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.exportBtn}>
          <Icon name="download" size={20} />
          <Text style={styles.btnText}>Export</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    width: "90%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 15,
    marginBottom: 20,
  },
  content: {
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
    fontSize: 18,
  },
  regular: {
    color: "grey",
    fontSize: 16,
    fontWeight: "700",
    paddingRight: 10,
  },
  exportBtn: {
    alignSelf: "flex-end",
    marginTop: 30,
    flexDirection: "row",
  },
  btnText: {
    fontSize: 17,
    paddingLeft: 10,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
