import React, { Component } from "react";
import _ from 'lodash';
import * as d3 from "d3";

class ArcGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.width
        }
    }

    componentDidMount() {
        let { data, width } = this.props;
        this.graphCode(data, width);
    }


    shouldComponentUpdate(nextProps) {
        return !_.isEqual(this.props, nextProps);
    }

    componentWillUpdate(nextProps) {
        let { data, width } = nextProps;
        this.graphCode(data, width);
    }

    graphCode(data0, width0) {

        
        // cleanup
        d3.select(this.svg).select("svg").remove();

        var widthSvg = width0,
            heightSvg = width0 / 3,
            margin = { top: 0, right: 30, bottom: 0, left: width0 / 4 },
            height = (width0 / 3) - margin.top - margin.bottom,
            width = width0 - margin.left - margin.right;

        var svg = d3.select(this.svg).append("svg")
            .attr("width", widthSvg)
            .attr("height", heightSvg);

        var data = [];

        data0.forEach(function (d) {
            data.push({ name: d[0], value: d[1] });
        })

        var yScale = d3.scaleBand().rangeRound([0, height]).padding(0.2)
            .domain(data.map(function (d) {
                return d.name;
            })),
            xScale = d3.scaleLinear().rangeRound([0, width])
                .domain([0, d3.max(data, function (d) {
                    return d.value;
                })]);

        //console.log(data)

        var group = svg.append("g")
            .attr("transform", "translate(" + [margin.left, margin.top] + ")");

        var bars = group
            .selectAll("rect")
            .data(data);

        var labels = group
            .selectAll("text")
            .data(data);

        bars
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("width", function (d, i) {
                return 0;
            })
            .attr("height", yScale.bandwidth())
            .attr("x", 0)
            .attr("y", function (d, i) {
                return yScale(d.name);
            })
            .style("fill", "steelblue")
            .transition()
            .duration(750)
            .attr("width", function (d, i) {
                return xScale(d.value);
            })





        labels
            .enter()
            .append("text")
            .attr("class", "label")

            .attr("x", -5)
            .attr("y", function (d, i) {
                return yScale(d.name) + yScale.bandwidth() / 2;
            })
            .attr("text-anchor", function (d, i) {
                return "end";
            })
            .attr("dominant-baseline", "central")
            .text(function (d, i) {
                return d.name;
            })
            .style("font-size", 13)
            .style("font-weight", "bold")
            .style("fill", function (d, i) {
                return "steelblue";
            });

        labels
            .enter()
            .append("text")
            .attr("class", "label")

            .attr("x", function (d, i) {
                return xScale(d.value) - 5;
            })
            .attr("y", function (d, i) {
                return yScale(d.name) + yScale.bandwidth() / 2;
            })
            .attr("text-anchor", function (d, i) {
                return "end";
            })
            .attr("dominant-baseline", "central")
            .text(function (d, i) {
                return d.value;
            })
            .style("font-size", 13)
            .style("font-weight", "bold")
            .style("fill", function (d, i) {
                return "white";
            });


    }

    render() {
        return (
            <div ref={node => this.svg = node}></div>
        )
    }
}


export default ArcGraph;