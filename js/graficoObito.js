
  
  const labels = [
    '04/06/21',
    '13/08/21',
    '22/10/21',
    '31/12/21',
    '11/03/22',
    '20/05/22',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Óbitos',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [1191, 892, 447, 85, 463, 506],
    },
    {
      label: 'Óbitos - Média de 7 dias',
    backgroundColor: 'rgb(200, 0, 132)',
    borderColor: 'rgb(200, 0, 132)',
    data: [1681, 874, 355, 97, 474, 101],
    }]

  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('Obitos'),
    config
  );