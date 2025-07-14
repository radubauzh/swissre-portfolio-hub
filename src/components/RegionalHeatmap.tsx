'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const data = [
  { region: 'Germany', value: 85, growth: 12 },
  { region: 'Switzerland', value: 92, growth: 8 },
  { region: 'France', value: 78, growth: -3 },
  { region: 'Italy', value: 70, growth: 15 },
  { region: 'Austria', value: 88, growth: 5 },
  { region: 'Netherlands', value: 82, growth: 10 },
]

export default function RegionalHeatmap() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const width = 400
    const height = 300
    const margin = { top: 40, right: 40, bottom: 40, left: 100 }

    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const y = d3
      .scaleBand()
      .range([0, innerHeight])
      .domain(data.map((d) => d.region))
      .padding(0.1)

    const x = d3.scaleLinear().range([0, innerWidth]).domain([0, 100])

    const colorScale = d3
      .scaleSequential()
      .interpolator(d3.interpolateRgb('#e0f2f1', '#00897b'))
      .domain([0, 100])

    g.append('g')
      .call(d3.axisLeft(y))
      .selectAll('text')
      .attr('fill', '#374151')
      .attr('font-size', '12px')

    g.select('g').select('.domain').remove()

    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('y', (d) => y(d.region) || 0)
      .attr('height', y.bandwidth())
      .attr('x', 0)
      .attr('width', (d) => x(d.value))
      .attr('fill', (d) => colorScale(d.value))
      .attr('rx', 4)

    g.selectAll('.text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (d) => x(d.value) + 5)
      .attr('y', (d) => (y(d.region) || 0) + y.bandwidth() / 2)
      .attr('dy', '.35em')
      .attr('font-size', '12px')
      .attr('fill', '#374151')
      .text((d) => `${d.value}% (${d.growth > 0 ? '+' : ''}${d.growth}%)`)

    g.append('text')
      .attr('x', innerWidth / 2)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', 'bold')
      .attr('fill', '#111827')
      .text('Performance Score by Region')
  }, [])

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance Heatmap</h3>
      <svg ref={svgRef} width="100%" height={300} viewBox="0 0 400 300" />
    </div>
  )
}