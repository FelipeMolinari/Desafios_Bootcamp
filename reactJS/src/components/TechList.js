import React, { Component } from "react";
import TechItemList from "./TechItemList";
class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Javascrit", "Node", "ReactJs"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const newTechsArry = [...this.state.techs, this.state.newTech];
    this.setState({ techs: newTechsArry, newTech: "" });
  };

  handleRemove = tech => {
    this.setState({ techs: this.state.techs.filter(elm => elm != tech) });
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <ul>
          {this.state.techs.map(elem => (
            <TechItemList
              key={elem}
              tech={elem}
              onDelete={() => this.handleRemove(elem)}
            />
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default TechList;
