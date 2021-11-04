import { recipeList } from "../../fakeData";

const initialState = {
  listRecipes : recipeList,
  individualRecipe : {},
};
  
/**
 * Permite definir el tipo de acción que queremos ejecutar hacia el estado global
 * @param {*} state - Estado inicial
 * @param {*} action - Acción a ejecutar desde dispachs
 */
export default (state = initialState, action : any) => {
  switch (action.type) {
    case 'SET_LIST_RECIPES': 
      return {
        ...state, 
        listRecipes: action.payload
      };
    case 'SET_INDIVIDUAL_RECIPE': 
      return {
        ...state, 
        individualRecipe: action.payload
      };
    case 'SET_TEST': 
      return {
        ...state, 
        listRecipes: action.payload
      };
    default:
      return state;
  }
}