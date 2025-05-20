import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // אחרי שנייה (1000ms) נעבור לדף הבא - לדוגמה 'Welcome'
    const timer = setTimeout(() => {
      navigation.replace('Welcome');  // מחליף מסך בלי אפשרות חזרה לספלש
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
     <LinearGradient colors={['#FFF275', '#F2B721']} style={styles.container}>
    <Text style={styles.text}>Threezle</Text>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF275', // רקע בסיסי צהוב
    background: 'linear-gradient(180deg, #FFF275 0%, #F2B721 50%)', // שימו לב: React Native לא תומך ב-linear-gradient יש להשתמש בספריה חיצונית
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Suez One',
    fontWeight: '400',
    fontSize: 60,
    lineHeight: 60,  // ב-React Native lineHeight בפיקסלים, לא אחוזים
    letterSpacing: 0,
    textAlign: 'center',
    width: 372,
    height: 92,
    color: '#000',  // כי רקע בהיר, כדאי שהטקסט יהיה כהה
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});
