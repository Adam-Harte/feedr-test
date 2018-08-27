import React, { Component } from 'react';
import './App.css';
import Items from './items';
import Sidebar from './components/Sidebar/Sidebar';
import Menu from './components/Menu/Menu';
import MenuSummary from './components/Menu/MenuSummary/MenuSummary';


class App extends Component {

  this.state = {
    menuItems: [],
    sidebarItems: Items,
    dietariesCount: [],
    itemsCount: 0
  };

  addMenuItemHandler (index) => {
    const newMenuItems = this.state.menuItems;
    let newItemsCount = this.state.itemsCount;
    newMenuItems.push(this.state.sidebarItems[index]);
    newItemsCount++;
    this.setState(state => { menuItems: newMenuItems, itemsCount: newItemsCount });
  }

  removeMenuItemHandler (index) => {
    const newMenuItems = this.state.menuItems;
    let newItemsCount = this.state.itemsCount;
    newMenuItems.splice(index, 1);
    newItemsCount--;
    this.setState(state => { menuItems: newMenuItems, itemsCount: newItemsCount });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="menu-summary">
          <div className="container">
            <div className="row">
              <MenuSummary itemsCount={this.state.itemsCount} />
            </div>
          </div>
        </div>
      <div className="container menu-builder">
        <div className="row">
          <Sidebar items={this.state.sidebarItems} click={this.addMenuItemHandler} />
          <Menu items={this.state.menuItems} click={this.removeMenuItemHandler} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;