import React from "react";
import TabsComponent from "./tabs_component";
import "./tabs_style.scss";

class TabsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.children[0]
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tab) {
    this.setState({
      selectedTab: tab
    });
  }

  render() {
    return (
      <TabsComponent
        selectedTab={this.state.selectedTab}
        tabsArray={this.props.children}
        selectTab={this.selectTab}
      />
    );
  }
}

export default TabsContainer;
