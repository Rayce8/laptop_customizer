import React, { Component } from 'react';

class Const_Summary extends Component{
render() {
    return (
        <div className="summary__option" key={this.props.featureHash}>
          <div className="summary__option__label">{this.props.feature} </div>
          <div className="summary__option__value">{this.props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.USCurrencyFormat.format(this.props.selectedOption.cost)}
          </div>
        </div>
      );
}

}

export default Const_Summary;