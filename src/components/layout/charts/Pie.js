import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { arc as d3Arc, pie as d3Pie } from "d3-shape";

import { from } from "rxjs";

const radius = 120;

const arc = d3Arc()
  .outerRadius(radius - 10)
  .innerRadius(radius - 70);

const pie = d3Pie()
  .sort(null)
  .value(function(d) {
    return d.items;
  });

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
    this.state = {
      data: []
    };
  }

  _translateG = () => {
    const svg = this.svgRef.current;
    const { width, height } = (svg && svg.getBoundingClientRect()) || {};

    return width && height ? `translate(${width / 2}, ${height / 4})` : "";
  };

  _aggregate = data => {
    const acc = [{ label: "completed" }, { label: "active" }];

    return acc.map((dataItem, idx, all) => {
      const completedNo = data.filter(item => item.completed === "1").length;
      const activeNo = data.filter(item => item.completed === "0").length;

      return dataItem.label === "completed"
        ? Object.assign(dataItem, {
            items: completedNo,
            percentage: (completedNo / data.length) * 100
          })
        : Object.assign(dataItem, {
            items: activeNo,
            percentage: (activeNo / data.length) * 100
          });
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        data: pie(this._aggregate(this.props.data))
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;

    return (
      <svg className={classes.svg} ref={this.svgRef}>
        <g transform={this._translateG()}>
          {data.map((d, idx) => {
            return (
              <g className="arc" key={`a${d.data.label}-${idx}`}>
                <path
                  d={arc(d)}
                  fill={d.data.label === "completed" ? green[200] : red[200]}
                />
                <text transform={`translate(${arc.centroid(d)})`} dy=".35em">
                  {`${d.data.label} ${d.data.percentage}%`}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    );
  }
}

PieChart.propTypes = {
  data: PropTypes.array.isRequired
};

const styles = theme => ({
  svg: {
    width: "100%",
    height: "100%"
  }
});

export default withStyles(styles)(PieChart);
