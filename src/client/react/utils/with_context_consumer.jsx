import React from "react";

const withContextConsumer = ContextConsumer => (
  WrappedComponent => (
    props => (
      <ContextConsumer>
        {context => <WrappedComponent {...props} {...context} />}
      </ContextConsumer>
    )
  )
)

export default withContextConsumer;
