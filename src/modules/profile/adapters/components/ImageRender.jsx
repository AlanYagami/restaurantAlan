import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Icon } from '@rneui/base'


const ImageDetail = ({ route }) => {
    const { image, likes, description } = route.params;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />

            <View style={styles.desc}>

                <Text style={{ fontSize: 20, fontWeight: 'bold', width: '55%' }}>{description}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Text style={{ paddingRight: 10, fontSize: 20 }}>{likes}</Text>
                    <Icon
                        name='thumb-up'
                        type='material-community'
                        size={30}
                        color='midnightblue'
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='share'
                        type='material-community'
                        size={30}
                        color='midnightblue'
                    />
                    <Icon
                        name='send'
                        type='material-community'
                        size={30}
                        color='midnightblue'
                    />
                </View>
            </View>
        </View>
    );
};

export default ImageDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    image: {
        width: '100%',
        height: '50%',
        
    },
    desc: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-around",
    }
});
