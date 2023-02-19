import React, { useState } from "react";
import axios from "axios";
import { TouchableOpacity, StyleSheet, View, StatusBar } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import { passwordValidator } from "../helpers/passwordValidator";
import Footer from "../components/Footer";
import { agentIDValidator } from "../helpers/agentIDValidator";
import Divider from "../components/Divider";

export default function LoginScreen({ navigation }) {
  const [agentID, setAgentID] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const agentIDError = agentIDValidator(agentID.value);
    const passwordError = passwordValidator(password.value);
    if (agentIDError || passwordError) {
      setAgentID({ ...agentID, error: agentIDError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    const data = {
      method: "GET",
      type: "user",
      body: {
        accountId: agentID.value,
        password: password.value,
      },
    };

    try {
      axios
        .post("https://umg-api-flask.herokuapp.com/login", data)
        .then((response) => {
          const res = JSON.parse(response.data);
          console.log(JSON.parse(res.body).role);
          navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Background style={{ justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="dark-content" />
      <Logo />
      <Header>Agent login</Header>
      <TextInput
        label="Agent ID"
        returnKeyType="next"
        value={agentID.value}
        onChangeText={(text) => setAgentID({ value: text, error: "" })}
        error={!!agentID.error}
        errorText={agentID.error}
        autoCapitalize="none"
        autoCompleteType="agentID"
        textContentType="agentIDAddress"
        keyboardType="id-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your logins?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.footer}>
        <Divider>Hot Line</Divider>
        <Footer />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.link,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    width: "100%",
  },
});
