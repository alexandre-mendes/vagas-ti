export const options = {
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      'Java',
      'Javascript',
      'C#',
      'Python',
      'C++',
      'C',
      'PHP',
      'Ruby',
      'Go',
      'Perl',
    ],
    labels: {
      style: {
        fontFamily: 'Poppins',
        fontSize: 14,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: 'Poppins',
        fontSize: 14,
      },
    },
  },
  tooltip: {
    style: {
      fontSize: 14,
      fontFamily: 'Poppins',
    },
  },
  fill: {
    colors: ['#17a2b8'],
  },
};
