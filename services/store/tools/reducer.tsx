const initialState = {
  showToolButton : true,
  showInformationArea: false,
  isEditing: false,
  isCreating: false,
  isReading: false,
};
  
/**
 * Permite definir el tipo de acción que queremos ejecutar hacia el estado global
 * @param {*} state - Estado inicial
 * @param {*} action - Acción a ejecutar desde dispachs
 */
export default (state = initialState, action : any) => {
  switch (action.type) {
    case 'SET_SHOW_TOOL_BUTTON': 
      return {
        ...state, 
        showToolButton: action.payload
      };
    case 'SET_IS_EDITING': 
      return {
        ...state, 
        isEditing: action.payload
      };
    case 'SET_IS_CREATING': 
      return {
        ...state, 
        isCreating: action.payload
      };
    case 'SET_IS_READING': 
      return {
        ...state, 
        isReading: action.payload
      };
    case 'SET_SHOW_INFORMATION_AREA': 
      return {
        ...state, 
        showInformationArea: action.payload
      };
    default:
      return state;
  }
}