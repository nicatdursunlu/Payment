import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { USERS } from "../../dummy/users";
import { Users } from "./Users";

export const Transactions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.users}
        data={USERS}
        renderItem={({ item }) => (
          <Users
            users={item}
            onPress={() => navigation.navigate("Details", { users: item })}
          />
        )}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={USERS}
        renderItem={({ item }) => (
          <Users
            users={item}
            onPress={() => navigation.navigate("Details", { users: item })}
          />
        )}
      />
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
