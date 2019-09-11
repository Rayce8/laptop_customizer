import React, { Component } from 'react';
class Const_feature extends Component{
    render() {
        return (
            <div key={this.props.itemHash} className="feature__item">
              <input
                type="radio"
                id={this.props.itemHash}
                className="feature__option"
                name={this.props.slugify(this.props.feature)}
                checked={this.props.item.name === this.props.state.selected[this.props.feature].name}
                onChange={e => this.updateFeature(this.props.feature, this.props.item)}
              />
              <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
              </label>
            </div>
          );
    }
    
}


  export default Const_feature;