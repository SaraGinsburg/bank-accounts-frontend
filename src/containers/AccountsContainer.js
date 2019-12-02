import React from 'react'
import {connect} from 'react-redux'
import AccountInput from '../components/AccountInput'
import Accounts from '../components/Accounts'
import Account from '../components/Account'
import {fetchAccounts} from '../actions/fetchAccounts'
import {Route} from 'react-router-dom'

class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
    return (

      <div>
        <Route path='/accounts/new' component={AccountInput} />
        <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>} />
        <Route exact path='/accounts' render={() => <Accounts accounts={this.props.accounts}/>} />

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
