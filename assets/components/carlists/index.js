import React from "react";
import {View,Text,FlatList, Dimensions} from "react-native";
import CarItem from "../carItem";

import styles from "./styles";
import cars from "./cars";


const Carlist = () => {
    return(
        <View style={styles.container}>
           <FlatList
            data={cars}
            renderItem={({item}) => <CarItem cars={item} />}  
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
           />

        </View>
    );
}

export default Carlist;