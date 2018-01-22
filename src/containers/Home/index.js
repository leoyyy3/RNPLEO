import React, { Component } from 'react';
import {List, ListItem,Subheader,Avatar,Divider} from 'material-ui';
import HomeUi from "../../components/Home"

class Home extends Component {

  render() {
    return (
        <div className="App">
            <List>
            <Subheader>员工列表</Subheader>
            <HomeUi />

            </List>
        </div>
    )}
}
export default Home;
