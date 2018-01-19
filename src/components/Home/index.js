import React, { Component } from 'react';
import {List, ListItem,Subheader,Avatar,Divider} from 'material-ui';

class HomeUi extends Component {
  render() {
    return (
        <div>
        <ListItem
          leftAvatar={<Avatar src="" />}
          primaryText="张三"
          secondaryText={
            <p>
              <span>Brendan Lim</span> --
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
    </div>
)}}
export default HomeUi;
