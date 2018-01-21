import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate({ location }) {
    if (this.props.location !== location) {
      window.scrollTo(0, 0);
    }
  }

  render () {
    return (
      <div className="ScrollToTop">
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(ScrollToTop);