import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

export const Users = ({ users, onPress }) => {
  const { name, avatar, money } = users;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.money}>${money}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 20,
  },
  name: {
    fontWeight: "800",
    fontSize: 15,
  },
  money: {
    paddingRight: 30,
    color: "grey",
    fontWeight: "800",
    fontSize: 17,
  },
});
