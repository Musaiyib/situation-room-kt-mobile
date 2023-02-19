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
} from "react-native";
import Button from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import Background from "../components/Background";
import { theme } from "../core/theme";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
// import { FFmpegKit } from "ffmpeg-kit-react-native";

export default function VideoScreen({ navigation }) {
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [votes, setVotes] = useState();

  const selectVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 5,
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
    if (!votes) {
      Alert.alert("Error", "Please enter the total number of votes");
      return;
    }
    if (!image) {
      Alert.alert("Error", "Please select the proof image");
      return;
    }
    // Add logic to submit the form data here
    // ...
    Alert.alert("Success", "Form submitted successfully");
    setVotes("");
    setImage(null);
  };
  const handleChangePage = (screen) => {
    navigation.reset({
      index: 0,
      routes: [{ name: screen }],
    });
  };
  return (
    <Background style={{ justifyContent: "flex-start" }}>
      <SafeAreaView style={{ width: "100%" }}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.agentDetails}>
          <Text style={styles.agent}>Agent name: Musaiyib Yakubu Usman</Text>
          <Text style={styles.agent}>Agent ID: LADO2023NSKXS</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formHeader}>Irregular Activities</Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setVotes(text)}
              value={votes}
              keyboardType="numeric"
              placeholder="Enter a number"
              returnKeyType="done"
            />
            {votes && (
              <TouchableOpacity
                style={styles.selectButton}
                // onPress={selectImage}
              >
                <Text style={styles.selectButtonText}>Select Image</Text>
              </TouchableOpacity>
            )}
            {/* {image && <Image source={{ uri: image }} style={styles.image} />}
            {image && votes && (
              <Button
                mode="contained"
                style={{ marginTop: image ? 10 : 15 }}
                onPress={handleSubmit}
              >
                Send Result
              </Button>
            )} */}
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <Button mode="contained" onPress={() => handleChangePage("Dashboard")}>
          Back to send result
        </Button>
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
  formHeader: {
    fontSize: 18,
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
