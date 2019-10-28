const initialState = { movie: {} };

export default function reducer (state = initialState, action) {
    let newState={}
    switch(action.type) {
        case 'SET_MOVIE':
          // code block
            newState = {...state, movie: action.movie}
        break;

        default:
         return state
      }

    return newState;
  }