import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import Background from "../components/Background";
import { theme } from "../core/theme";
import Divider from "../components/Divider";
import Footer from "../components/Footer";

export default function Dashboard({ navigation }) {
  const [image, setImage] = useState(null);

  const [presidentialVotes, setPresidentialVotes] = useState({
    pdp: null,
    apc: null,
    nnpp: null,
    prp: null,
  });
  const [senatorialVotes, setSenatorialVotes] = useState({
    pdp: null,
    apc: null,
    nnpp: null,
    prp: null,
  });
  const [representative, setRepresentative] = useState({
    pdp: null,
    apc: null,
    nnpp: null,
    prp: null,
  });
  const [position, setPosition] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 5,
      base64: true,
    });

    try {
      if (!result.canceled) {
        const compressedImage = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [{ resize: { width: 400 } }],
          { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
        );
        setImage(compressedImage.uri);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = () => {
    // if (!votes) {
    //   Alert.alert("Error", "Please enter the total number of votes");
    //   return;
    // }
    // if (!image) {
    //   Alert.alert("Error", "Please select the proof image");
    //   return;
    // }
    // // Add logic to submit the form data here
    // // ...
    // Alert.alert("Success", "Form submitted successfully");
    // setPresidentialVotes("");
    // setImage(null);
  };

  const handleChangePage = (screen) => {
    navigation.reset({
      index: 0,
      routes: [{ name: screen }],
    });
  };
  const handleStepForward = () => {
    setCurrentStep(currentStep !== 5 ? currentStep + 1 : 5);
  };
  const handleStepBackward = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <Background style={{ justifyContent: "flex-start" }}>
      <ScrollView horizontal={false}>
        <SafeAreaView style={{ width: "100%", marginBottom: image ? 120 : 0 }}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.agentDetails}>
            <Text style={styles.agent}>Agent name: Musaiyib Yakubu Usman</Text>
            <Text style={styles.agent}>Agent ID: APC2023NSKXS</Text>
          </View>
          {currentStep === 1 && (
            <View style={styles.form}>
              <Text style={styles.formHeader}>Presidential</Text>
              <View>
                <View style={{ width: 350, paddingHorizontal: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 20,
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>PDP:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...presidentialVotes };
                          newVotes.pdp = parseInt(text);
                          setPresidentialVotes(newVotes);
                        }}
                        value={presidentialVotes.pdp}
                        keyboardType="numeric"
                        placeholder="PDP votes"
                        returnKeyType="done"
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>APC:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...presidentialVotes };
                          newVotes.apc = parseInt(text);
                          setPresidentialVotes(newVotes);
                        }}
                        value={presidentialVotes.apc}
                        keyboardType="numeric"
                        placeholder="APC votes"
                        returnKeyType="done"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 20,
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>NNPP:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...presidentialVotes };
                          newVotes.nnpp = parseInt(text);
                          setPresidentialVotes(newVotes);
                        }}
                        value={presidentialVotes.nnpp}
                        keyboardType="numeric"
                        placeholder="NNPP votes"
                        returnKeyType="done"
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>PRP:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...presidentialVotes };
                          newVotes.prp = parseInt(text);
                          setPresidentialVotes(newVotes);
                        }}
                        value={presidentialVotes.prp}
                        keyboardType="numeric"
                        placeholder="PRP votes"
                        returnKeyType="done"
                      />
                    </View>
                  </View>
                </View>
                <Button
                  mode="contained"
                  style={{ marginTop: image ? 10 : 15 }}
                  onPress={handleStepForward}
                >
                  Next
                </Button>
              </View>
            </View>
          )}
          {currentStep === 2 && (
            <View style={styles.form}>
              <Text style={styles.formHeader}>Senatorial</Text>
              <View>
                <View style={{ width: 350, paddingHorizontal: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 20,
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>PDP:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...senatorialVotes };
                          newVotes.pdp = parseInt(text);
                          setSenatorialVotes(newVotes);
                        }}
                        value={senatorialVotes.pdp}
                        keyboardType="numeric"
                        placeholder="PDP votes"
                        returnKeyType="done"
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>APC:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...senatorialVotes };
                          newVotes.apc = parseInt(text);
                          setSenatorialVotes(newVotes);
                        }}
                        value={senatorialVotes.apc}
                        keyboardType="numeric"
                        placeholder="APC votes"
                        returnKeyType="done"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 20,
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>NNPP:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...senatorialVotes };
                          newVotes.nnpp = parseInt(text);
                          setSenatorialVotes(newVotes);
                        }}
                        value={senatorialVotes.nnpp}
                        keyboardType="numeric"
                        placeholder="NNPP votes"
                        returnKeyType="done"
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>PRP:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...senatorialVotes };
                          newVotes.prp = parseInt(text);
                          setSenatorialVotes(newVotes);
                        }}
                        value={senatorialVotes.prp}
                        keyboardType="numeric"
                        placeholder="PRP votes"
                        returnKeyType="done"
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Button
                    mode="contained"
                    style={{
                      width: 150,
                    }}
                    onPress={handleStepBackward}
                  >
                    Back
                  </Button>
                  <Button
                    mode="contained"
                    style={{
                      width: 150,
                    }}
                    onPress={handleStepForward}
                  >
                    Next
                  </Button>
                </View>
              </View>
            </View>
          )}
          {currentStep === 3 && (
            <View style={styles.form}>
              <Text style={styles.formHeader}>House of Representative</Text>
              <View>
                <View style={{ width: 350, paddingHorizontal: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 20,
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>PDP:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...representative };
                          newVotes.pdp = parseInt(text);
                          setRepresentative(newVotes);
                        }}
                        value={representative.pdp}
                        keyboardType="numeric"
                        placeholder="PDP votes"
                        returnKeyType="done"
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>APC:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...representative };
                          newVotes.apc = parseInt(text);
                          setRepresentative(newVotes);
                        }}
                        value={representative.apc}
                        keyboardType="numeric"
                        placeholder="APC votes"
                        returnKeyType="done"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 20,
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>NNPP:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...representative };
                          newVotes.nnpp = parseInt(text);
                          setRepresentative(newVotes);
                        }}
                        value={representative.nnpp}
                        keyboardType="numeric"
                        placeholder="NNPP votes"
                        returnKeyType="done"
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.inputTitle}>PRP:</Text>
                      <TextInput
                        style={styles.voteInput}
                        onChangeText={(text) => {
                          const newVotes = { ...representative };
                          newVotes.prp = parseInt(text);
                          setRepresentative(newVotes);
                        }}
                        value={representative.prp}
                        keyboardType="numeric"
                        placeholder="PRP votes"
                        returnKeyType="done"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      mode="contained"
                      style={{
                        width: 150,
                      }}
                      onPress={handleStepBackward}
                    >
                      Back
                    </Button>
                    <Button
                      mode="contained"
                      style={{
                        width: 150,
                      }}
                      onPress={handleStepForward}
                    >
                      Next
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          )}
          {currentStep === 4 && (
            <View style={styles.form}>
              <Text style={[styles.formHeader]}>Election Report</Text>
              <View>
                <View style={{ width: 350, paddingHorizontal: 10 }}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                      Total Accredited Numbers:
                    </Text>
                    <TextInput
                      style={styles.reportInput}
                      onChangeText={(text) => {
                        const newVotes = { ...presidentialVotes };
                        newVotes.pdp = parseInt(text);
                        setPresidentialVotes(newVotes);
                      }}
                      value={presidentialVotes.pdp}
                      keyboardType="numeric"
                      placeholder="APC votes"
                      returnKeyType="done"
                    />
                  </View>
                  <View style={[styles.inputContainer]}>
                    <Text style={styles.inputTitle}>
                      Total Number of Votes:
                    </Text>
                    <TextInput
                      style={styles.reportInput}
                      onChangeText={(text) => {
                        const newVotes = { ...presidentialVotes };
                        newVotes.apc = parseInt(text);
                        setPresidentialVotes(newVotes);
                      }}
                      value={presidentialVotes.apc}
                      keyboardType="numeric"
                      placeholder="PDP votes"
                      returnKeyType="done"
                    />
                  </View>
                  <View style={[styles.inputContainer, { marginBottom: 10 }]}>
                    <Text style={[styles.inputTitle, { marginBottom: 8 }]}>
                      Election Remark:
                    </Text>
                    <RNPickerSelect
                      onValueChange={(value) => setPosition(value)}
                      style={styles.pickerSelectStyles}
                      Icon={() => (
                        <AntDesign
                          name="caretdown"
                          size={15}
                          color={"black"}
                          style={{ position: "absolute", top: 15, right: 15 }}
                        />
                      )}
                      placeholder={{ label: "Select a remark", value: null }}
                      items={[
                        {
                          label: "Success",
                          value: "success",
                          key: "success-key",
                        },
                        {
                          label: "Violence",
                          value: "violence",
                          key: "violence-key",
                        },
                        {
                          label: "Brivery",
                          value: "brivery",
                          key: "brivery-key",
                        },
                      ]}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.selectButton}
                    onPress={selectImage}
                  >
                    <Text style={styles.selectButtonText}>
                      Select Image Proof
                    </Text>
                  </TouchableOpacity>

                  {image && (
                    <Image source={{ uri: image }} style={styles.image} />
                  )}
                  <View
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      mode="contained"
                      style={{
                        width: 350,
                      }}
                      onPress={handleStepBackward}
                    >
                      Back
                    </Button>
                  </View>
                </View>

                {currentStep === 4 && image && (
                  <Button
                    mode="contained"
                    style={{
                      marginTop: image ? 10 : 15,
                      marginBottom: image ? 20 : 0,
                    }}
                    onPress={handleStepForward}
                  >
                    Preview Result
                  </Button>
                )}
              </View>
            </View>
          )}
          {currentStep === 5 && (
            <View style={styles.form}>
              <Text style={[styles.formHeader]}>Election Report</Text>
              <View>
                <View style={{ width: 350, paddingHorizontal: 10 }}>
                  <View style={{}}>
                    <View>
                      <Divider>Presidential</Divider>
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        Presidential Votes
                      </Text>
                      {Object.keys(presidentialVotes).map((party, index) => (
                        <View style={{ flexDirection: "row" }} key={index}>
                          <Text style={{ flex: 1, textTransform: "uppercase" }}>
                            {party}
                          </Text>
                          <Text style={{ flex: 1, textTransform: "uppercase" }}>
                            {presidentialVotes[party]}
                          </Text>
                        </View>
                      ))}
                    </View>
                    <View>
                      <Divider>Presidential</Divider>
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        Presidential Votes
                      </Text>
                      {Object.keys(presidentialVotes).map((party, index) => (
                        <View style={{ flexDirection: "row" }} key={index}>
                          <Text style={{ flex: 1, textTransform: "uppercase" }}>
                            {party}
                          </Text>
                          <Text style={{ flex: 1, textTransform: "uppercase" }}>
                            {presidentialVotes[party]}
                          </Text>
                        </View>
                      ))}
                    </View>

                    <View>
                      <Divider>Senatorial</Divider>
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        Senatorial Votes
                      </Text>
                      {Object.keys(senatorialVotes).map((party, index) => (
                        <View style={{ flexDirection: "row" }} key={index}>
                          <Text style={{ flex: 1, textTransform: "uppercase" }}>
                            {party}
                          </Text>
                          <Text style={{ flex: 1, textTransform: "uppercase" }}>
                            {senatorialVotes[party]}
                          </Text>
                        </View>
                      ))}
                    </View>

                    <View>
                      <Divider>Representative</Divider>
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        Representative Votes
                      </Text>
                      {Object.keys(representative).map((party, index) => (
                        <View style={{ flexDirection: "row" }} key={index}>
                          <Text style={{ flex: 1, textTransform: "uppercase" }}>
                            {party}
                          </Text>
                          <Text style={{ flex: 1, textTransform: "uppercase" }}>
                            {representative[party]}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      mode="contained"
                      style={{
                        width: 350,
                      }}
                      onPress={handleStepBackward}
                    >
                      Back
                    </Button>
                  </View>
                </View>

                {currentStep === 5 && image && (
                  <Button
                    mode="contained"
                    style={{
                      marginTop: image ? 10 : 15,
                      marginBottom: image ? 20 : 0,
                    }}
                    onPress={handleSubmit}
                  >
                    Submit Result
                  </Button>
                )}
              </View>
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
      <View style={styles.footer}>
        {currentStep === 1 && (
          <Button
            mode="contained"
            onPress={() => handleChangePage("VideoScreen")}
          >
            Report Irregular Activities
          </Button>
        )}
        <Divider>Hot Line</Divider>
        <Footer />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  agentDetails: {
    width: "100%",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    height: 60,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },
  inputTitle: { fontSize: 16, color: theme.colors.primary },
  agent: {
    fontWeight: "bold",
    color: theme.colors.primary,
    fontSize: 15,
    marginVertical: 4,
  },
  form: {
    marginVertical: 10,
    backgroundColor: "#fff",
    height: "82.5%",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  // inputContainer: { width: 330 },
  pickerSelectStyles: {
    inputIOS: {
      marginBottom: 10,
      width: 330,
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "gray",
      borderRadius: 4,
      color: "tomato",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      marginBottom: 10,
      width: 330,
      borderRadius: 10,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: "gray",
      borderRadius: 8,
      color: "tomato",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  },
  formHeader: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: "bold",
    marginBottom: 20,
  },
  selectButton: {
    height: 44,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  selectButtonText: {
    fontSize: 18,
  },
  input: {
    width: 330,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 10,
  },
  voteInput: {
    width: 140,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 10,
  },
  reportInput: {
    // width: 140,
    marginTop: 8,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 10,
  },
  image: {
    width: 330,
    height: 330,
    resizeMode: "contain",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    width: "100%",
  },
});
