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
        let { data, width } = nextProps;
        this.graphCode(data, width);
    }

    componentDidMount() {
        let { data, width } = this.props;
        this.graphCode(data, width);
    }

    graphCode(data0, width0) {

        // cleanup
        d3.select(this.svg).select("svg").remove();


        var widthSvg = width0,
            heightSvg = width0 * 2 / 3,
            margin = { top: 0, right: 20, bottom: 10, left: 0 },
            height = width0 * 2 / 3 - margin.top - margin.bottom,
            width = width0 - margin.left - margin.right;

        var svg = d3.select(this.svg).append("svg")
            .attr("width", widthSvg)
            .attr("height", heightSvg);



        var dataArr = [];

        for (let d in data0) {
            var tempArr = {};
            tempArr.name = (d[0].toUpperCase() + d.slice(1)).split("_").join(" ");
            tempArr.value = +data0[d];
            dataArr.push(tempArr)
        }

        var data = dataArr.slice(1);

        var yScale = d3.scaleBand().rangeRound([0, height]).padding(0.45)
            .domain(data.map(function (d) {
                return d.name;
            })),
            xScale = d3.scaleLinear().rangeRound([0, width])
                .domain([0, 1]);

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

            .attr("x", 0)
            .attr("y", function (d, i) {
                return yScale(d.name) - 2;
            })
            .text(function (d, i) {
                return d.name; //  + " " + d.value * 100 + "%"
            })
            .style("font-size", 11)

        labels
            .enter()
            .append("text")
            .style("opacity", 0)
            .attr("class", "label")

            .attr("x", function (d, i) {
                return d.value < 0.15
                    ?
                    xScale(d.value) + 2
                    :
                    xScale(d.value) - 4;
            })
            .attr("y", function (d, i) {
                return yScale(d.name) + yScale.bandwidth() / 2;
            })
            .attr("text-anchor", function (d, i) {
                return d.value < 0.15
                    ?
                    "start"
                    :
                    "end";
            })
            .attr("dominant-baseline", "central")
            .text(function (d, i) {
                return d.value * 100 + "%";
            })
            .style("font-size", 13)
            .style("font-weight", "bold")
            .style("fill", function (d, i) {
                return d.value < 0.15
                    ?
                    "steelblue"
                    :
                    "white";
            })
            .transition()
            .duration(750)
            .style("opacity", 1);

    }

    render() {
        return (
            <div ref={node => this.svg = node}></div>
        )
    }
}


export default ArcGraph;