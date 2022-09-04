import { useLayoutEffect } from 'react';

import MealList from '../components/MealList/MealList';
import {MEALS , CATEGORIES} from '../data/dummy-data';

function MealsOverviewScreen({route,navigation}) {
    
    const catId=route.params.categoryId;

    const displayMeal = MEALS.filter((mealItem)=> {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    // the main reason of using useLayoutEffect() is that 
    // the content we tend to show should be rendered before creating
    // screen layout; useEffect() hook will render afrer loading layout.
    // that's why we don't use useEffect() here
    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=> category.id===catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
        // we do not place CATEGORIES into the dependecies clause [navigation,catId,...]
        // because it is imported directly from a class and it is not an component
    }, [navigation,catId]);

    return <MealList items={displayMeal}/>

}

export default MealsOverviewScreen;
