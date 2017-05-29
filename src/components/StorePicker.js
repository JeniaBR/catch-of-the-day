import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore = (event) => {
    event.preventDefault();
    // grab the text from the box via react ref
    const storeId = this.storeInput.value;
    // go from '/' to '/store/:storeId
    this.context.router.history.push(`/store/${storeId}`);
  }

  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;