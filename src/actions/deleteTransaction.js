export const deleteTransaction = (transactionId, accountId) => {

  return (dispatch) => {

    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/transactions/${transactionId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(account => {
      debugger
      if (account.error){
        alert(account.error)
      } else {
        dispatch({type: 'DELETE_TRANSACTION', payload: account})
      }
  })
}}
