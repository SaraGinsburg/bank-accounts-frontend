export default function accountReducer(state = {accounts: []}, action){
  debugger
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return {accounts: action.payload}
    default:
      return state
  }
}
