import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SignInOptionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>התחבר עם</Text>

      <TouchableOpacity style={styles.buttonApple}>
        <FontAwesome name="apple" size={24} color="#fff" />
        <Text style={styles.buttonText}>התחבר עם Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonFacebook}>
        <FontAwesome name="facebook" size={24} color="#fff" />
        <Text style={styles.buttonText}>התחבר עם Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonPhone}>
        <FontAwesome name="phone" size={24} color="#fff" />
        <Text style={styles.buttonText}>התחבר עם מספר טלפון</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInOptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  buttonApple: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    padding: 15,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6C344',
    padding: 15,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
