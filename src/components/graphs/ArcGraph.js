import React, { Component } from "react";

import * as d3 from "d3";

class ArcGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.width
        }
    }

    componentWillReceiveProps(nextProps) {
        let {data, width} = nextProps;
        this.graphCode(data, width);
    }

    componentDidMount() {
        let {data, width} = this.props;
        this.graphCode(data, width);
    }

    graphCode(data0, width0) {

        // cleanup
        d3.select(this.svg).select("svg").remove();

        let data = data0 * 100;
        var width = width0,
            height = width * 2 / 3,
            radius = (height / 2) - (height / 15),
            arcWidth = radius / 4;

        var tau = 2 * Math.PI;

        var arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - arcWidth)
            .startAngle(0);

        var svg = d3.select(this.svg)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        //var background = 
        g.append("path")
            .datum({ endAngle: tau })
            .style("fill", "steelblue")
            .attr("d", arc);

        var foreground = g.append("path")
            .datum({ endAngle: 0.01 * tau })
            .style("fill", "darkred")
            .attr("d", arc);

        g.append("text")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .attr("fill", "darkred")
            .attr("font-weight", "bold")
            .attr('font-size', height / 4)
            .text(data + " %");

        foreground.transition()
            .duration(750)
            .attrTween("d", arcTween((data / 100) * tau));

        function arcTween(newAngle) {
            return function (d) {
                var interpolate = d3.interpolate(d.endAngle, newAngle);
                return function (t) {
                    d.endAngle = interpolate(t);
                    return arc(d);
                };
            };
        }
    }

    render() {
        return (
            <div ref={node => this.svg = node}></div>
        )
    }
}


export default ArcGraph;