const propsOf = propSelectos => stateOrDispatch =>
    Object.entries(propSelectos).reduce(
      (props, [prop, selector]) => ({
        ...props,
        [prop]: selector(stateOrDispatch),
      }),
      {},
    );

export default propsOf;
