import { connect } from "react-redux";
import Login from "./Login";
import Questions from "./Questions";
import LeaderBoard from "./LeaderBoard";
// import { STORE_POINTS } from "../actions/pointsTable";
import pointTable from "../actions/pointsTable";
import  NewQuestion  from "./NewQuestion";
import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import IndividualQuestion from "./IndividualQuestion";
import PageNotFound from "./PageNotFound";
import { Switch } from 'react-router-dom';
import Nav from "./Nav";
function App(props) {
  const { dispatch, users } = props;
  React.useEffect(()=>{
    dispatch(pointTable(users));

  },[users,dispatch]);
  return (
    <BrowserRouter>
    <Fragment>
      <Nav/>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/leaderboard" component={LeaderBoard} />
      <Route path="/add" component={NewQuestion}/>
      <Route path="/questions" component={Questions}/>
      <Route path="/individualQuestion/:id" component={IndividualQuestion}/>
      <Route exact path="/" component={Login} />
      <Route component={PageNotFound}/>
      <Route path="/pageNotFound" component={PageNotFound}/>
      </Switch>
     </Fragment>
    </BrowserRouter>
  );
}
function mapStateToProps({users}) {
  return{
    users
  }
  
}
export default connect(mapStateToProps)(App);
