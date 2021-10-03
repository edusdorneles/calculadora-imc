import React from 'react';
import { View, Text } from "react-native";
import styles from './styles';

const Footer = () => {
    return (
        <View style={styles.containerFooter}>
            <Text style={styles.footerText}>© 2021 - Eduardo Dorneles</Text>
        </View>
    )
}

export default Footer;