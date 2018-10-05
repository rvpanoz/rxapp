import { connect } from "react-redux";

import mapProps from "commons/mapProps";

import { loading, todos } from "models/todos/selectors";

import { Pie } from "../layout/charts";

export default connect(
  mapProps({ loading, data: todos }),
  null
)(Pie);
