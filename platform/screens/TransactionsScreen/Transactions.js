import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { USERS } from "../../dummy/users";
import { Users } from "./Users";
import { selectUser } from "../../redux/users";

const mapStateToProps = (state) => ({
  users: selectUser(state),
});

export const Transactions = connect(mapStateToProps)(({ users }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.users}
        data={users}
        renderItem={({ item }) => (
          <Users
            users={item}
            onPress={() => navigation.navigate("Details", { users: item })}
          />
        )}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 15,
    marginBottom: 20,
  },
  users: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 15,
  },
});
