import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TransactionsScreen } from "../screens/TransactionsScreen";
import { DetailsScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const RootNav = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            title: route.params?.users.name,
            headerTitleAlign: "center",
            
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
};
