
  
  const dias = [
    '04/06/21',
    '13/08/21',
    '22/10/21',
    '31/12/21',
    '11/03/22',
    '20/05/22',
  ];

  const vacina = {
    labels: dias,
    datasets: [{
      label: 'Pelo menos 1 dose',
      backgroundColor: 'rgb(100, 250, 132)',
      borderColor: 'rgb(100, 250, 132)',
      data: [48963900, 118175020, 157679997, 166195505, 179411783, 183251237],
    },
    {
      label: 'Totalmente Vacinados',
    backgroundColor: 'rgb(100, 190, 132)',
    borderColor: 'rgb(100, 190, 132)',
    data: [22997889, 49164242, 108994434, 143436012, 157418571, 165506166],
    },
    {
      label: 'Reforço Administrado',
    backgroundColor: 'rgb(100, 140, 132)',
    borderColor: 'rgb(100, 140, 132)',
    data: [0, 0, 6117946, 26571077, 69520035, 93600217],
    }]

  };

  const type = {
    type: 'line',
    data: vacina,
    options: {}
  };

  const vacinas = new Chart(
    document.getElementById('Vacinas'),
    type
  );