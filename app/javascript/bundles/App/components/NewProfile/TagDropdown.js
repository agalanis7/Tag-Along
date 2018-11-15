import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class TagDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChange = (event) => {
    this.props.handleGenderChange(event)
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Gender
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="male" onClick={this.handleChange}>Male</DropdownItem>
          <DropdownItem value="female" onClick={this.handleChange}>Female</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
