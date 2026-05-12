const ctx =
    document.getElementById('adverseChart');

new Chart(ctx,{

    type:'bar',

    data:{

        labels:[
            'Headache',
            'Fever',
            'Fatigue',
            'Myocarditis',
            'Anaphylaxis'
        ],

        datasets:[{

            label:'Reported Cases',

            data:[
                12000,
                9500,
                8200,
                5052,
                3589
            ],

            borderWidth:1

        }]

    },

    options:{

        responsive:true

    }

});