import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Avatar } from '@rneui/base';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation desde React Navigation
import Iori from '../../../../../assets/iori.jpg';

const data = [
  {
    id: 1,
    image: "https://play-lh.googleusercontent.com/qvA9Ce0HEsea0Tq9R35as4ZCHAWzCAP3lo9GARrKVM-omH_zxp5DXpAsX90SlAIGx6Ft=w240-h480-rw",
    description: "Una imagen increíble",
    likes: 10
  },
  {
    id: 2,
    image: "https://images.otstatic.com/prod1/42377505/2/huge.jpg",
    description: "Hermoso paisaje",
    likes: 15
  },
  {
    id: 3,
    image: "https://images.otstatic.com/prod/25043214/1/huge.jpg",
    description: "Una obra de arte",
    likes: 20
  },
  {
    id: 4,
    image: "https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg",
    description: "Retrato abstracto",
    likes: 8
  },
  {
    id: 5,
    image: "https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE=",
    description: "Amor y amistad",
    likes: 25
  },
  {
    id: 6,
    image: "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg",
    description: "Increíbles recursos visuales",
    likes: 12
  },
];


const Profile = () => {
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ImageRender', { image: item.image,  description: item.description, likes: item.likes})}>
      <Avatar
        size={115}
        source={{ uri: item.image }}
        containerStyle={{ margin: 8 }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar
          size={100}
          rounded
          source={Iori}
        >
          <Avatar.Accessory size={24} />
        </Avatar>
        <View style={styles.column}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Alan
          </Text>
          <Text style={{ fontSize: 12 }}>alancindrag0n10@gmail.com</Text>
        </View>
      </View>

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

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 16,
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
  },
});
