 import { StyleSheet,Dimensions } from "react-native";

 const styles = StyleSheet.create({
  
    carContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      
    },
    image : {
      width: '100%',
      height: '100%',
      resizeMode:'cover',
      position:'absolute',
    },
    titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
  
  
    },
    title: {
      fontSize: 40,
      fontWeight:"bold",
  
    },
    subTitle: {
      fontSize: 18,
      color: '#c4c4c4',
    },
    subTitleCTA : {
        textDecorationLine: 'underline',

    },
    buttons : {
        position:'absolute',
        bottom: 20,
        width: '100%',
        padding: 20
    }
  });

  export default styles;