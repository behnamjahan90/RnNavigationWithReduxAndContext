import {useContext, useLayoutEffect} from 'react';
import {View
    , StyleSheet
    , Text
    , Image
    , ScrollView
    , Button
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';

import {MEALS} from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
//import {FavoritesContex} from '../store/context/favorite-contex'
import {addFavorite ,removeFavorite} from '../store/redux/favorites';

function MealDetailScreen({route,navigation}) {
    //const FavoriteMealsCtx=useContext(FavoritesContex);
    const favoriteMealIds=useSelector((state)=> state.favoriteMeals.ids);
    const dispatch=useDispatch();

    const mealId=route.params.mealId;
    
    const selectedMeal = MEALS.find((mealItem)=> mealItem.id===mealId);

    //const mealIsFavorite = FavoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            //FavoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        } else {
            //FavoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=> {
                return <IconButton 
                    icon= {mealIsFavorite ? 'star' : 'star-outline'}
                    color='white' 
                    onPress={changeFavoriteStatusHandler}
                />
              }
            });
    },[navigation,changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail 
                        affordability={selectedMeal.affordability}
                        duration={selectedMeal.duration}
                        complexity={selectedMeal.complexity}
                        textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles= StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image:{
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },
    detailText:{
        color: 'white'
    },
    subtitle: {
        color: '#f4d3a9',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',
    },
    subtitleContainer:{
        borderBottomColor: '#f4d3a9',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 24,
        marginBottom: 4
    },
    listOuterContainer:{
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
});