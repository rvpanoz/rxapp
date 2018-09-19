const mapProps = propSelectos => stateOrDispatch =>
    Object.entries(propSelectos).reduce(
      (props, [prop, selector]) => ({
        ...props,
        [prop]: selector(stateOrDispatch),
      }),
      {},
    );

export default mapProps;
