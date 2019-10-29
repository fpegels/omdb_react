const initialState = { username_temp:'' };

export default function reducer (state = initialState, action) {
    let newState={}
    switch(action.type) {
        case 'SET_USERNAME_TEMP':
          // code block
            newState = {...state, username_temp: action.username_temp}
        break;
        case 'SET_USER':
            // code block
              newState = {...state, user: action.user}
          break;
          case 'SET_ALLUSERS':
            // code block
              newState = {...state, allusers: action.allusers}
          break;

        default:
         return state
      }

    return newState;
  }