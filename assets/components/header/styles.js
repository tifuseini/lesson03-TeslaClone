import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
  container : {
      position : 'absolute',
      width : Dimensions.get('window').width,
      top : 50,
      zIndex : 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20, 
      
      

  },
  logo : {
      width: 100,
      height: 25,
      resizeMode:'contain',

  },
  header : {
    width: 25,
    height: 25,
    resizeMode:'contain',

  },


});

export default styles;