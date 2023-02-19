import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../core/theme";

const Footer = () => {
  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleSMSPress = (phoneNumber) => {
    Linking.openURL(`sms:${phoneNumber}`);
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.column}>
        <Icon name="phone" size={30} color={theme.colors.primary} />
        <Text style={{ color: theme.colors.primary }}>Control centre</Text>
        <View style={styles.columnBtn}>
          <TouchableOpacity
            onPress={() => handlePhonePress("+11234567890")}
            style={styles.button}
          >
            <Text style={{ color: theme.colors.primary }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSMSPress("+11234567890")}
            style={styles.button}
          >
            <Text style={{ color: theme.colors.primary }}>SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.column}>
        <Icon name="phone" size={30} color={theme.colors.primary} />
        <Text style={{ color: theme.colors.primary }}>Zonal Coodinator</Text>
        <View style={styles.columnBtn}>
          <TouchableOpacity
            onPress={() => handlePhonePress("+11234567891")}
            style={styles.button}
          >
            <Text style={{ color: theme.colors.primary }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSMSPress("+11234567891")}
            style={styles.button}
          >
            <Text style={{ color: theme.colors.primary }}>SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.column}>
        <Icon name="phone" size={30} color={theme.colors.primary} />
        <Text style={{ color: theme.colors.primary }}>Consituency</Text>
        <View style={styles.columnBtn}>
          <TouchableOpacity
            onPress={() => handlePhonePress("+11234567892")}
            style={styles.button}
          >
            <Text style={{ color: theme.colors.primary }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSMSPress("+11234567892")}
            style={styles.button}
          >
            <Text style={{ color: theme.colors.primary }}>SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  column: {
    alignItems: "center",
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  columnBtn: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  button: {
    marginTop: 10,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
});

export default Footer;
