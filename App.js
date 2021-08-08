import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import CarList from './assets/components/carlists';
import StyledButton from './assets/components/styledButton';
import Header from './assets/components/header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 