import {Text
    , View
    , StyleSheet
    , Pressable
    , Image
    , Platform
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import MealDetail from '../MealDetail';

//we use useNavigation hook. Because by using this component, we 
//will navigate to another outer screen. it means that this class is not a defined screen
//wrote in app.js. we can use navigation paramerer but this is the best recommended way to
//handle outer screen navigation

function MealItem({id,title,imageUrl,duration,complexity,affordability}) {
    const navigation = useNavigation();

    function onSelectMealItemHandler() {
        navigation.navigate('MealDetail',{
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <View style={styles.innerContainer}>
                <Pressable android_ripple={{color: '#ccc'}} 
                    style={({pressed})=>pressed ? styles.buttonPressed : null }
                    onPress={onSelectMealItemHandler}
                >
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                   <MealDetail 
                        affordability={affordability}
                        duration={duration}
                        complexity={complexity}
                    />
                </Pressable>
            </View>
        </View>
    );
}

export default MealItem;

const styles=StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8 ,
        overflow: Platform.OS==='android' ? 'hidden' : 'visible',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0,height:2},
        shadowOpacity: 0.30,
        shadowRadius: 16,
        backgroundColor: 'white'
    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    buttonPressed:{
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
});