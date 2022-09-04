import {Pressable,View,Text,StyleSheet,Platform} from 'react-native'

function CategoryGridTile({title,color,onPress}){
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color:'#ccc'}} 
                style={({pressed})=> [styles.button
                    , pressed ? styles.buttonPressed : null ]}
                onPress={onPress}
            >
                <View style={[styles.InnerContainer,{backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        margin: 16,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0,height:2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS==='android' ? 'hidden' : 'visible'
    },
    buttonPressed:{
        opacity: 0.5
    },
    button:{
        flex: 1
    },
    InnerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });