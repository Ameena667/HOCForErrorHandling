import React from "react";

const UpdatedComponent = (WrapperComponent) => {
  return class NewComp extends React.Component {
    constructor() {
      super();
      this.state = {
        hasError: false,
        age: "",
      };
    }
    static getDerivedStateFromError(error) {
      return {
        hasError: true,
      };
    }
    ageUpdate = (num) => {
      this.setState({
        age: num,
      });
    };
    render() {
      const { hasError, age } = this.state;
      if (hasError) {
        return <h1>something went wrong</h1>;
      }

      console.log(this.state.hasError);

      return (
        <WrapperComponent
          hasError={hasError}
          age={age}
          ageUpdate={this.ageUpdate}
        />
      );
    }
  };
};

export default UpdatedComponent;
