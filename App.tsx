import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, useWindowDimensions, Text, Image, FlatList, SafeAreaView, View } from 'react-native';
import images from './src/assets';
import { EntryPoint } from './src/components/EntryPoint';
import { List } from './src/components/List';

export default function App() {
  const {height, width, fontScale, scale } = useWindowDimensions()
  const metrics = [
    { id: '0', label: 'Device Height', value: height }, 
    { id: '1', label: 'Device Width', value: width },
    { id: '2', label: 'Device fontScale', value: fontScale }, 
    { id: '3', label: 'Device scale', value: scale }
  ];

  const getRandomMetrics = () => Number((Math.random()).toFixed(2));

  const fakeMetrics = [
    { id: '4', label: 'Device Height', value: getRandomMetrics() }, 
    { id: '5', label: 'Device Width', value: getRandomMetrics() },
    { id: '6', label: 'Device fontScale', value: getRandomMetrics() }, 
    { id: '37', label: 'Device scale', value: getRandomMetrics() }
  ];

  const uri = 'https://reactnative.dev/docs/assets/p_cat2.png';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.mainContentContainer}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Components Modules</Text>
      {/* 2 - Reusable component example */}
      <ScrollView contentContainerStyle={styles.scrollContainer} style={{ width: '90%', height: 500 }}>
        <Text style={styles.subtitle}>ScrollView</Text>
        {/* 0 - Reusable component example */}
        <EntryPoint label={'EntryPoint'} value={0} />
        {/* 1 - Reusable component example */}
        <List data={metrics} header={'Device Metrics'}/>
        {/* 3 - TouchableOpacity example */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Click here !</Text>
        </TouchableOpacity>
        {/* 4 - Image example */}
        <Image
            source={{ uri }}
            style={{ width: 200, height: 200 }}
          />
        <Image
            source={images.example}
            style={{ width: 200, height: 200 }}
          />
      </ScrollView>
      {/* 5 - FlatList example */}
      <SafeAreaView style={styles.flatListWrapper}>
          <Text style={styles.subtitle}>SafeAreaView</Text>
          <FlatList
            data={[...metrics, ...fakeMetrics]}
            renderItem={({ item }) => (
              <TouchableOpacity>
                  <EntryPoint label={item.label} value={item.value} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            style={{ width: '100%'}}
            contentContainerStyle={{ padding: 20 }}
          />
      </SafeAreaView>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
  },
  mainContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50
  },
  title: {
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
    marginVertical: 50,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    width: '90%',
    marginVertical: 20,
    fontWeight: '500'
  },
  scrollContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'rgba(92, 45, 145, 1)',
    width: '100%',
    borderBottomEndRadius: 15
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  },
  flatListWrapper: { 
    width: '90%', 
    height: 300,
    marginTop: 20, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center' ,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
  }
});