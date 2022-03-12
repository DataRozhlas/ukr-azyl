Highcharts.setOptions({
    lang: {
      numericSymbols: [' tis.', ' mil.', 'mld.', 'T', 'P', 'E'],
    },
  });

fetch('https://data.irozhlas.cz/ukr-azyl/data_age.json')
  .then(response => response.json())
  .then(d => {
    Highcharts.chart('ukr-pobyt-vek', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Pobytová oprávnění v souvislosti s válkou na Ukrajině'
        },
        subtitle: {
            text: `aktuální k ${parseInt(d.upd.split('-')[2])}. ${parseInt(d.upd.split('-')[1])}.`,
            useHTML: true
        },
        credits: {
            href : 'https://www.mvcr.cz/clanek/informativni-pocty-obyvatel-v-obcich.aspx',
            text : 'Zdroj: Ministerstvo vnitra'
        },
        xAxis: {
            categories: ['děti', 'dospělí', 'senioři']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'počet vydaných oprávnění'
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                animation: false,
            }
        },
        tooltip: {
            shared: true,
        },
        series: [{
            name: 'ženy',
            color: '#e41a1c',
            data: [
                d.deti_z,
                d.dosp_z,
                d.sen_z,
            ]
        }, {
            name: 'muži',
            color: '#377eb8',
            data: [
                d.deti_m,
                d.dosp_m,
                d.sen_m,
            ]
        }, {
            name: 'není známo',
            color: '#984ea3',
            data: [
                d.deti_x,
                d.dosp_x,
                d.sen_x,
            ]
        }]
    });
  });


