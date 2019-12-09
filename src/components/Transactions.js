import React from 'react'

const Transactions = (props) => {
  return (
    <div>
      {props.transactions && props.transactions.map(t =>
      <li key={t.id}>{t.date} - {t.description} - {t.trans_type} - {t.amount} </li>)}
    </div>
  )
}

export default Transactions
