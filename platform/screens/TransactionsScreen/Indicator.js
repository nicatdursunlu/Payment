import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export const Indicator = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={50}
        tintColor="blue"
        backgroundColor="lightgrey"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  title: {
    color: "grey",
    fontSize: 15,
  },
});
