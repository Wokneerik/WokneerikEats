import { DataStore } from '@aws-amplify/datastore';
import { useNavigation } from '@react-navigation/native';
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthContext } from "../../context/AuthContext";
import { User } from "../../models";

const Profile = () => {
  const {dbUser} = useAuthContext()
  const [name, setName] = useState(dbUser?.name || "")
  const [address, setAddress] = useState(dbUser?.address || "")
  const [lat, setLat] = useState("50.45")
  const [lng, setLng] = useState("30.52")


  const {sub, setDbUser} = useAuthContext()

  const navigation = useNavigation()

  const onSave = async () => {
    if (dbUser) {
      await updateUser()
    } else {
      await createUser()
    }
    navigation.goBack()
  }

  const updateUser = async () => {
    const copiedUser = User.copyOf(dbUser, (updated) => {
      updated.name = name
      updated.address = address
      updated.lat = parseFloat(lat)
      updated.lng = parseFloat(lng)
    })
    const user = await DataStore.save(copiedUser)
    setDbUser(user)
  }

  const createUser = async () => {
    try{
      const user = await DataStore.save(new User({name, address, lat: parseFloat(lat), lng: parseFloat(lng), sub}))
      setDbUser(user)
     } catch (e) {
       Alert.alert("Error", e.message)
     }
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Button onPress={onSave} title="Save" />
      <Button color="red" onPress={() => Auth.signOut()} title="Sign out" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
