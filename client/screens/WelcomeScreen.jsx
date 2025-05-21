import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ברוכים הבאים ל־<Text style={styles.orange}>Threezle+</Text></Text>

      <View style={styles.item}>
        <FontAwesome5 name="users" size={20} color="#555" />
        <Text style={styles.itemText}>התחברו לקבוצה של אנשים 👨‍👩‍👧‍👦</Text>
      </View>

      <View style={styles.item}>
        <Ionicons name="chatbubble-ellipses-outline" size={20} color="#555" />
        <Text style={styles.itemText}>דברו עם החבורה שלך 💬</Text>
      </View>

      <View style={styles.item}>
        <MaterialCommunityIcons name="city-variant-outline" size={20} color="#555" />
        <Text style={styles.itemText}>תעיפו מבט בעמוד הבליינים שלכם 🏙️</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignInOptions')}
      >
        <Text style={styles.buttonText}>הבא</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  orange: {
    color: '#F6C344', // כתום של Threezle+
  },
  item: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#444',
    textAlign: 'right',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#F6C344',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
