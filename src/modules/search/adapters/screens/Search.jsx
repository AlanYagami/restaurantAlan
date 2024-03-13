import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Input, Button, Icon, Image, Avatar } from "@rneui/base";
import Nori from '../../../../../assets/WIN_20240118_13_25_45_Pro.jpg'

const data = [
  { id: 1, image: "https://play-lh.googleusercontent.com/qvA9Ce0HEsea0Tq9R35as4ZCHAWzCAP3lo9GARrKVM-omH_zxp5DXpAsX90SlAIGx6Ft=w240-h480-rw" },
  { id: 2, image: "https://images.otstatic.com/prod1/42377505/2/huge.jpg" },
  { id: 3, image: "https://images.otstatic.com/prod/25043214/1/huge.jpg" },
  { id: 4, image: "https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg" },
  { id: 5, image: "https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE=" },
  { id: 6, image: "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg" },
]

const Search = () => {
  const renderItem = ({ item }) => (
    <Avatar
      size={100}
      source={{ uri: item.image }} // Usar la propiedad uri para cargar la imagen desde la URL
      containerStyle={{ margin: 8 }}
    />
  );
  return (
    <View style={styles.container}>
      <Input
        placeholder="Buscar"
        label="Buscar"
        rightIcon={<Icon name='search-web' type='material-community' size={24} color='midnightblue' />}
        inputStyle={{ color: '#87CEEB' }}
        //containerStyle={{ borderWidth: 1, borderColor: '#87CEEB', borderRadius: 10, width: 300 }}
      />

      <View style={styles.column}>
        <FlatList
          data={data}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
        />
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //   justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
  },
})