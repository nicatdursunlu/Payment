import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { reducer } from "../redux/users";

export const HeaderBackIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name="keyboard-backspace"
        size={25}
        color="orange"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 16,
  },
});
