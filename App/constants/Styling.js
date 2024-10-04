import { StyleSheet } from "react-native"
import colors from "./Colors"

 const styling=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
        
        
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
        alignSelf: "center"
        

    },
    buttonText:{
        borderRadius: 10,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.black
      },
    headerStyle: {
    backgroundColor: colors.orange
      },
    arriereplan:{
    backgroundColor: colors.papaye
   }
})

export default styling;