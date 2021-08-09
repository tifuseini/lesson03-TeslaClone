import React from 'react';
import {View,Text,Image} from 'react-native';

import styles from './styles'

const header = () => {
    return(
        <View style={styles.container} >
            <Image 
            style={styles.logo}
            source={require('../../images/logo.png')} />
            <Image 
            style={styles.header}
            source={require('../../images/menu.png')} />

        </View>
    );
}

export default header;