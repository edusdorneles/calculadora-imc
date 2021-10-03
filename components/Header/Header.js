import React from 'react'
import { View, StatusBar, Text } from 'react-native';

import styles from './styles';

const Header = () => {
    return (
        <View>
            <StatusBar backgroundColor="#65427C" />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Calculadora de IMC</Text>
            </View>
        </View>
    )
}

export default Header;