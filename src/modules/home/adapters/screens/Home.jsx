import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Image, Icon } from '@rneui/base'
import Imagen from '../../../../../assets/examen.jpg'

export default function Home() {
    return (
        <View style={styles.container}>

            <Image
                source={Imagen}
                style={styles.logo}
                containerStyle={styles.logoContainer}
                PlaceholderContent={<ActivityIndicator />}
            />

            <View style={styles.iconos}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Text style={{ paddingRight: 10, fontSize: 20 }}>15</Text>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    logo:
    {
        width: '100%',
        height: 200,
    },
    logoContainer: {
        alignItems: 'center',
        width: '100%',
        justifyContent: "space-around",
        height: '25%',
        backgroundColor: 'red',
    },
    iconos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        borderStartWidth: 2,
        borderEndWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'gray',
    }
})