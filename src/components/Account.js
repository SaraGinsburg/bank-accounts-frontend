import React from 'react'
import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

  // let account = props.accounts[props.match.params.id - 1]
  // another way, going by id..rather than by the index of the accounts array
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0]
  console.log(account)

  return (
    <div>
      <h2>

        {account ? account.name : null} - {account ? account.balance : null}
      </h2>
      <TransactionsContainer account={account}/>
    </div>
  )

}

export default Account
