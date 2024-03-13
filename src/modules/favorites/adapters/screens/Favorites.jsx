import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base';
import AxiosClient from '../../../../config/utils/axios-client';

export default function Favorites() {

  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
      <Button onPress={async()=>{
        try {
          response = await AxiosClient.get('/api/restaurant/')
        console.log(response.data)
        } catch (error) {
          console.log(error);
        }
        
      }}>Button</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});