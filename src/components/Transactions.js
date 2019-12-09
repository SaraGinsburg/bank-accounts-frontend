import React from 'react'
import {connect} from 'react-redux'
import {deleteTransaction} from '../actions/deleteTransaction'

const Transactions = (props) => {

  const handleDelete = (transaction) => {
    props.deleteTransaction(transaction.id, transaction.account_id)
  }

  return (
    <div>
      {props.transactions && props.transactions.map(t =>
      <li key={t.id}>{t.date} - {t.trans_type} - {t.amount} <button onClick={() => handleDelete(t)}>Delete</button></li>
    )}
    </div>
  )
}

export default connect(null, {deleteTransaction}) (Transactions)
