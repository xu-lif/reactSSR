const reducer = (state={}, action) => {
  switch(action.type) {
    case 'SAVE_DATA':
      return {
        ...state,
        list: action.data
      }
    default: 
      return state
  }
}

export default reducer