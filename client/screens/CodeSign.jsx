import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function NotFound({ navigation }) {
  const [username, setUsername] = useState("");

  const onRegister = () => {
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>הקוד שלי</Text>


<input type="number" />
      <Text style={styles.title}>
        לא מצאנו חשבון Threezle שמקושר לחשבון הפייסבוק הזה.
      </Text>

      <Button>  המשך</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
