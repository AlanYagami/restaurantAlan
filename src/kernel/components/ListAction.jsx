import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';

export default function ListAction(props) {
    const { action, title, iconName } = props;
    return (
        <TouchableOpacity onPress={action}>
            <View style={styles.container}>
                <Text>{title}</Text>
                <Icon
                    type="material-community"
                    name={iconName}
                    size={22}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    }
})