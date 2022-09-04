import { useContext } from "react";
import {StyleSheet,View,Text} from 'react-native';
import {useSelector} from 'react-redux';

import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
//import { FavoritesContex } from "../store/context/favorite-contex";


function FavoriteScreen() {
    //const favoriteMealsCtx=useContext(FavoritesContex);
    const favoriteMealIds=useSelector((state)=> state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter((meal)=> favoriteMealIds.includes(meal.id)); //favoriteMealsCtx.ids.includes(meal.id));

    if(favoriteMeals.length === 0){
        return <View style={styles.rootContainer}>
            <Text style={styles.Text}>you have no favorite meals yet.</Text>
        </View>
    }

    return <MealList items={favoriteMeals}/>
}

export default FavoriteScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});