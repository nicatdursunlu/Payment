import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export const Indicator = ({ title, fill, tintColor }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <AnimatedCircularProgress
        size={100}
        width={10}
        fill={fill}
        tintColor={tintColor}
        backgroundColor="lightgrey"
        rotation={0}
      >
        {(fill) => (
          <Text style={[styles.fill, { color: tintColor }]}>{fill}%</Text>
        )}
      </AnimatedCircularProgress>
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
    paddingBottom: 10,
  },
  fill: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
