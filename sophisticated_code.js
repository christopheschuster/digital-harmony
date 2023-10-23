/*
Filename: sophisticated_code.js
Description: This code is a sophisticated and complex implementation of a data visualization tool using D3.js library. It generates an interactive and visually appealing line chart with multiple series and tooltips.
*/

// Dependencies:
// - D3.js (v6.4.1)

// Constants
const width = 800; // Width of the chart
const height = 400; // Height of the chart
const margin = { top: 50, right: 50, bottom: 50, left: 50 }; // Margin around the chart

// Data
const data = [
  { year: 2000, series1: 20, series2: 35, series3: 10 },
  { year: 2001, series1: 30, series2: 15, series3: 25 },
  { year: 2002, series1: 40, series2: 20, series3: 35 },
  // ... Additional data points ...
];

// Create SVG element
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Scales
const xScale = d3.scaleBand().domain(data.map(d => d.year)).range([0, width]).padding(0.1);
const yScale = d3.scaleLinear().domain([0, d3.max(data, d => d.series1)]).range([height, 0]);

// Axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// Draw x-axis
svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);

// Draw y-axis
svg.append("g").attr("class", "y-axis").call(yAxis);

// Line generator
const line = d3
  .line()
  .x(d => xScale(d.year) + xScale.bandwidth() / 2)
  .y(d => yScale(d.value));

// Draw lines
const series1Line = svg
  .append("path")
  .datum(data)
  .attr("class", "line series1")
  .attr("d", line.x(d => xScale(d.year) + xScale.bandwidth() / 2).y(d => yScale(d.series1)));

const series2Line = svg
  .append("path")
  .datum(data)
  .attr("class", "line series2")
  .attr("d", line.x(d => xScale(d.year) + xScale.bandwidth() / 2).y(d => yScale(d.series2)));

const series3Line = svg
  .append("path")
  .datum(data)
  .attr("class", "line series3")
  .attr("d", line.x(d => xScale(d.year) + xScale.bandwidth() / 2).y(d => yScale(d.series3)));

// Tooltip
const tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

// Mouseover event handler
const handleMouseOver = (d, i, nodes) => {
  d3.select(nodes[i]).classed("highlight", true);

  tooltip
    .transition()
    .duration(200)
    .style("opacity", 0.9);

  tooltip.html(`Year: ${d.year}<br/>Series 1: ${d.series1}<br/>Series 2: ${d.series2}<br/>Series 3: ${d.series3}`)
    .style("left", `${d3.event.pageX}px`)
    .style("top", `${d3.event.pageY}px`);
};

// Mouseout event handler
const handleMouseOut = (d, i, nodes) => {
  d3.select(nodes[i]).classed("highlight", false);

  tooltip.transition().duration(200).style("opacity", 0);
};

// Attach events to lines
series1Line
  .on("mouseover", handleMouseOver)
  .on("mouseout", handleMouseOut);

series2Line
  .on("mouseover", handleMouseOver)
  .on("mouseout", handleMouseOut);

series3Line
  .on("mouseover", handleMouseOver)
  .on("mouseout", handleMouseOut);

// Styling
svg
  .selectAll(".line")
  .attr("fill", "none")
  .attr("stroke-width", 2);

tooltip
  .style("position", "absolute")
  .style("pointer-events", "none")
  .style("background-color", "rgba(0, 0, 0, 0.8)")
  .style("color", "#fff")
  .style("padding", "10px")
  .style("font-family", "Arial, sans-serif")
  .style("font-size", "12px")
  .style("border-radius", "3px");

document.querySelector("body").style.backgroundColor = "#f1f1f1"; // Setting background color

// ...
// Additional lines of code for customization, interactions, data processing, etc.
// ...

// Finishing touches
// ...

// End of code