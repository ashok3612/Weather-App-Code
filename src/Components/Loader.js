import React from "react";
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
        <div className="spinner"></div>
      </div>
    );
  }
}

export default AwesomeComponent