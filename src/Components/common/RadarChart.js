import React from 'react';

import PropTypes from 'prop-types';

import ReactApexChart from 'react-apexcharts';

class RadarChart extends React.Component {
  constructor(props) {
    super();
    const { title } = props;
    this.state = {
      series: [
        {
          name: 'Series 1',
          data: [20, 100, 40, 30, 50, 80],
        },
      ],
      options: {
        chart: {
          type: 'radar',
          toolbar: { show: false },
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          radar: {
            size: 60,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff'],
              },
            },
          },
        },
        colors: ['#FF4560'],
        markers: {
          size: 2,
          colors: ['#fff'],
          strokeColor: '#FF4560',
          strokeWidth: 0.5,
        },
        title: {
          text: title,
          align: 'center',
        },
        tooltip: {
          y: {
            formatter(val) {
              return 'val';
            },
          },
        },
        xaxis: {
          categories: [
            '전문성',
            '친절도',
            '흥미도',
            '비용',
            '전달력',
            '유익함',
          ],
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter(val, i) {
              if (i % 2 === 0) {
                return val;
              }
              return '';
            },
          },
        },
      },
    };
  }

  render() {
    const { options, series } = this.state;

    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radar"
          height={200}
        />
      </div>
    );
  }
}

RadarChart.propTypes = {
  title: PropTypes.string,
};

RadarChart.defaultProps = {
  title: '',
};

export default RadarChart;
