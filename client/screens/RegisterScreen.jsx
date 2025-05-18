import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');

  const onRegister = () => {
    navigation.replace('Home'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>הרשמה</Text>
      <TextInput
        placeholder="שם משתמש"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Button title="הרשם" onPress={onRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20 },
  title: { fontSize:24, marginBottom:20, textAlign:'center' },
  input: { borderWidth:1, borderColor:'#ccc', padding:10, marginBottom:20, borderRadius:5 }
});
