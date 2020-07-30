import React from "react";
import { StyleSheet, View } from "react-native";

export const Container = ({ style, children }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.content, style]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});
