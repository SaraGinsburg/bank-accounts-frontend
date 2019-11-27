import React from 'react'
import {connect} from 'react-redux'
import AccountInput from '../components/AccountInput'
import Accounts from '../components/Accounts'
import {fetchAccounts} from '../actions/fetchAccounts'

class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
    return (

      <div>
        <AccountInput />
        <Accounts accounts={this.props.accounts}/>

      </div>

    )
  }
}
const mapStateToProps = state => {
  return {
    accounts: state.accounts
  }
}
export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)


// because it is a class, we need the curly brackets
// it is not a function, so it will not take arguments
// class component must have a render and return
