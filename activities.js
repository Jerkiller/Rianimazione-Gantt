function getActivities(day1, day2, patients) {
  return [
    {
      "Tipo di attività": "Handover infermieristico",
      "Inizio": day1 + " 06:55",
      "Durata": 20,
      "Figura professionale": "Infermiere",
      "N° operatori": 6,
      "Note": ""
    },
    {
      "Tipo di attività": "Monitoraggio del paziente (ventilazione, allarmi, monitor, infusioni in corso, velocità delle infusioni)",
      "Inizio": day1 + " 07:15",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Prelievi ematici ed emogasanalisi",
      "Inizio": day1 + " 07:20",
      "Durata": 25,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(più eventuale scostamento di 5' se patrimonio venoso scarso)"
    },
    {
      "Tipo di attività": "Rilevazione e registrazione parametri vitali: h 8.00",
      "Inizio": day1 + " 07:45",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 8.00",
      "Inizio": day1 + " 07:50",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(10' per paziente, quindi più eventuale scostamento di altri 10' per un terzo paziente)"
    },
    {
      "Tipo di attività": "Trasporto dei campioni in laboratorio",
      "Inizio": day1 + " 07:50",
      "Durata": 10,
      "Figura professionale": "OSS",
      "N° operatori": 1,
      "Note": ""
    },
    {
      "Tipo di attività": "Igiene del paziente completa comprensiva di: igiene del cavo orale, igiene intima",
      "Inizio": day1 + " 08:20",
      "Durata": 20 * patients / 2,
      "Figura professionale": "Infermiere, OSS",
      "N° operatori": 4,
      "Note": "(20' per paziente)"
    },
    {
      "Tipo di attività": "Medicazione di ferite chirurgiche o di dispositivi (CVC, catetere arterioso, punti di inserzione dei drenaggi, tracheostomie)",
      "Inizio": day1 + " 09:20",
      "Durata": 15 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(15' per paziente, con eventuale scostamento aggiuntivo di 10' se medicazioni numerose)"
    },
    {
      "Tipo di attività": "Rilevazione e registrazione parametri vitali: h 10.00",
      "Inizio": day1 + " 09:50",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 10.00",
      "Inizio": day1 + " 09:55",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "ECG di controllo",
      "Inizio": day1 + " 10:20",
      "Durata": 15,
      "Figura professionale": "Infermiere",
      "N° operatori": 1,
      "Note": ""
    },
    {
      "Tipo di attività": "Esami di controllo (es radiodiagnostici)",
      "Inizio": day1 + " 11:40",
      "Durata": 30,
      "Figura professionale": "Infermiere, Tecnico di Radiologia, OSS",
      "N° operatori": 1,
      "Note": "(10' per paziente)"
    },
    {
      "Tipo di attività": "Dimissione pz",
      "Inizio": day1 + " 11:10",
      "Durata": 40,
      "Figura professionale": "Infermiere, Medico, OSS",
      "N° operatori": 1,
      "Note": ""
    },
    {
      "Tipo di attività": "Ripristino dei carrelli",
      "Inizio": day1 + " 09:30",
      "Durata": 45,
      "Figura professionale": "OSS",
      "N° operatori": 2,
      "Note": ""
    },
    {
      "Tipo di attività": "Rilevazione e registrazione parametri vitali: h 12.00",
      "Inizio": day1 + " 11:50",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 12.00",
      "Inizio": day1 + " 12:10",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(20' - 10' per paziente)"
    },
    {
      "Tipo di attività": "Controllo del valore glicemico",
      "Inizio": day1 + " 11:55",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Somministrazione del pasto per os",
      "Inizio": day1 + " 12:00",
      "Durata": 30,
      "Figura professionale": "OSS",
      "N° operatori": 1,
      "Note": "per SNG (infermiere); 12.00 - 12.30 per os (OSS)"
    },
    {
      "Tipo di attività": "Somministrazione NE",
      "Inizio": day1 + " 12:00",
      "Durata": 15,
      "Figura professionale": "Infermiere",
      "N° operatori": 1,
      "Note": "per SNG (infermiere); 12.00 - 12.30 per os (OSS)"
    },
    {
      "Tipo di attività": "Report infermieristico",
      "Inizio": day1 + " 12:30",
      "Durata": 20,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Posturazione del paziente",
      "Inizio": day1 + " 12:50",
      "Durata": 15 * patients / 2,
      "Figura professionale": "Infermiere, OSS",
      "N° operatori": 4,
      "Note": "(15' per paziente)"
    },
    {
      "Tipo di attività": "Sorveglianza pazienti",
      "Inizio": day1 + " 13:35",
      "Durata": 20,
      "Figura professionale": "Infermiere, Medico, OSS",
      "N° operatori": 1,
      "Note": "(15' per paziente)"
    },
    {
      "Tipo di attività": "Rilevazione e registrazione parametri vitali: h 14.00",
      "Inizio": day1 + " 13:55",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 14.00",
      "Inizio": day1 + " 14:00",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Handover infermieristico",
      "Inizio": day1 + " 14:15",
      "Durata": 20,
      "Figura professionale": "Infermiere",
      "N° operatori": 6,
      "Note": ""
    },




    {
      "Tipo di attività": "Ricovero pz",
      "Inizio": day1 + " 14:45",
      "Durata": 60,
      "Figura professionale": "Infermiere, Medico, OSS",
      "N° operatori": 4,
      "Note": ""
    },
    {
      "Tipo di attività": "Riordino e rifornimento magazzini",
      "Inizio": day1 + " 15:00",
      "Durata": 60,
      "Figura professionale": "OSS",
      "N° operatori": 1,
      "Note": ""
    },
    {
      "Tipo di attività": "Rilevazione e registrazione dei parametri vitali: h 16.00",
      "Inizio": day1 + " 15:45",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 16.00",
      "Inizio": day1 + " 15:50",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(20' - 10' per paziente, con eventuale scostamento di 10' aggiuntivi per paziente aggiuntivo)"
    },
    {
      "Tipo di attività": "Posturazione del paziente",
      "Inizio": day1 + " 16:15",
      "Durata": 15 * patients / 2,
      "Figura professionale": "Infermiere, OSS",
      "N° operatori": 4,
      "Note": "(15' per paziente)"
    },
    {
      "Tipo di attività": "Pausa",
      "Inizio": day1 + " 17:00",
      "Durata": 15,
      "Figura professionale": "Infermiere, OSS",
      "N° operatori": 4,
      "Note": ""
    },
    {
      "Tipo di attività": "Controlli giornalieri dei defibrillatori e dei ventilatori",
      "Inizio": day1 + " 17:15",
      "Durata": 15,
      "Figura professionale": "Infermiere",
      "N° operatori": 1,
      "Note": ""
    },
    {
      "Tipo di attività": "Stampa dei referti degli esami",
      "Inizio": day1 + " 17:35",
      "Durata": 20,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Rilevazione e registrazione dei parametri vitali: h 18.00",
      "Inizio": day1 + " 17:55",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 18.00",
      "Inizio": day1 + " 18:00",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(20' - 10' per paziente, con eventuale scostamento di 10' aggiuntivi per paziente aggiuntivo)"
    },



    {
      "Tipo di attività": "Sorveglianza pazienti",
      "Inizio": day1 + " 18:20",
      "Durata": 40,
      "Figura professionale": "Infermiere, Medico, OSS",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Posturazione del paziente",
      "Inizio": day1 + " 19:05",
      "Durata": 15 * patients / 2,
      "Figura professionale": "Infermiere, OSS",
      "N° operatori": 4,
      "Note": ""
    },
    {
      "Tipo di attività": "Rilevazione e registrazione dei parametri vitali: h 20.00",
      "Inizio": day1 + " 19:55",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 20.00",
      "Inizio": day1 + " 20:00",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(20' - 10' per paziente, con eventuale scostamento di 10' aggiuntivi per paziente aggiuntivo)"
    },
    {
      "Tipo di attività": "Report infermieristico",
      "Inizio": day1 + " 20:30",
      "Durata": 20,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Handover infermieristico",
      "Inizio": day1 + " 20:50",
      "Durata": 20,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione esami ematochimici",
      "Inizio": day1 + " 21:15",
      "Durata": 20,
      "Figura professionale": "Infermiere, Medico",
      "N° operatori": 2,
      "Note": ""
    },
    {
      "Tipo di attività": "Rilevazione e registrazione parametri vitali: ore 22.00",
      "Inizio": day1 + " 21:50",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 22.00",
      "Inizio": day1 + " 21:55",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Posturazione del paziente",
      "Inizio": day1 + " 22:25",
      "Durata": 10 * patients,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(2 inf per paziente)"
    },
    {
      "Tipo di attività": "Report infermieristico",
      "Inizio": day1 + " 23:25",
      "Durata": 20,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Sostituzione drenaggi",
      "Inizio": day1 + " 23:45",
      "Durata": 15,
      "Figura professionale": "Infermiere",
      "N° operatori": 2,
      "Note": ""
    },
    {
      "Tipo di attività": "Controllo del valore glicemico",
      "Inizio": day2 + " 00:00",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Rilevazione e registrazione parametri vitali: h 00.00",
      "Inizio": day2 + " 00:05",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 00.00",
      "Inizio": day2 + " 00:10",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Preparazione fleboclisi",
      "Inizio": day2 + " 00:30",
      "Durata": 10,
      "Figura professionale": "Infermiere",
      "N° operatori": 2,
      "Note": ""
    },
    {
      "Tipo di attività": "Rilevazione e registrazione parametri vitali: h 2.00",
      "Inizio": day2 + " 01:50",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": " (1 inf per paziente o per 2 pazienti)"
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 2.00",
      "Inizio": day2 + " 01:55",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": " (1 inf per paziente o per 2 pazienti)"
    },
    {
      "Tipo di attività": "Posturazione del paziente",
      "Inizio": day2 + " 02:15",
      "Durata": 10 * patients,
      "Figura professionale": "Infermiere",
      "N° operatori": 2,
      "Note": ""
    },
    {
      "Tipo di attività": "Rilevazione e registrazione parametri vitali: h 4.00",
      "Inizio": day2 + " 03:50",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(1 per paziente o per 2 pazienti)"
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 4.00",
      "Inizio": day2 + " 03:55",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(1 per paziente o per 2 pazienti)"
    },
    {
      "Tipo di attività": "Rilevazione e registrazione parametri vitali: h 6.00",
      "Inizio": day2 + " 05:50",
      "Durata": 5,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(1 per paziente o per 2 pazienti)"
    },
    {
      "Tipo di attività": "Preparazione e somministrazione terapia: h 6.00",
      "Inizio": day2 + " 05:55",
      "Durata": 10 * patients / 3,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": "(1 per paziente o per 2 pazienti)"
    },
    {
      "Tipo di attività": "Monitoraggio pz",
      "Inizio": day2 + " 06:15",
      "Durata": 5 * patients,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    },
    {
      "Tipo di attività": "Report infermieristico",
      "Inizio": day2 + " 06:45",
      "Durata": 10,
      "Figura professionale": "Infermiere",
      "N° operatori": 3,
      "Note": ""
    }
   ];
  }

  daysToMilliseconds = (days) => days * 24 * 60 * 60 * 1000;
  minutesToMilliseconds = (minutes) => minutes * 60 * 1000;

  function getGanttActivities(day1, day2, patients){
    return getActivities(day1, day2, patients).map((a,i) => {
      let start = moment(a[`Inizio`]).toDate();
      let end = moment(a[`Inizio`]).add(a[`Durata`], 'minutes').toDate();

      //console.log(start,end)
      //console.log(`Date(${start.getFullYear()}, ${start.getMonth()}, ${start.getDate()}, ${start.getHours()}, ${start.getMinutes()})`)//, ${start.getSeconds()}, ${start.getMilliseconds()})`)
      //console.log(`Date(${end.getFullYear()}, ${end.getMonth()}, ${end.getDate()}, ${end.getHours()}, ${end.getMinutes()})`)//, ${start.getSeconds()}, ${start.getMilliseconds()})`)
      return [
          `a${i}`,
          a[`Tipo di attività`],
          a[`Figura professionale`],
          start,end,
          //`Date(${start.getFullYear()}, ${start.getMonth()}, ${start.getDate()}, ${start.getHours()}, ${start.getMinutes()})`,//, ${start.getSeconds()}, ${start.getMilliseconds()})`,
          //`Date(${end.getFullYear()}, ${end.getMonth()}, ${end.getDate()}, ${end.getHours()}, ${end.getMinutes()})`,//, ${end.getSeconds()}, ${end.getMilliseconds()})`,
          minutesToMilliseconds(a[`Durata`]),
          100,
          null
      ];
  });
  }
/*
   var exampleRows = [
        [
            'Research',
            'Find sources',
            null,
            moment(day1).toDate(),
            moment(day1).add(20, 'minutes').toDate(),
            null, 100, null
        ],
        [
            'Write', 'Write paper', 'write',
            null,
            moment(day1).add(60, 'minutes').toDate(),
            minutesToMilliseconds(30), 25,
            'Research,Outline'
        ],
        [
            'Cite', 'Create bibliography', 'write',
            null,
            moment(day1).add(30, 'minutes').toDate(),
            minutesToMilliseconds(10), 20,
            'Research'
        ],
        [
            'Complete', 'Hand in paper', 'complete',
            null, 
            moment(day1).add(75, 'minutes').toDate(),
            minutesToMilliseconds(15), 0,
            'Cite,Write'
        ],
        [
            'Outline', 'Outline paper', 'write',
            null, 
            moment(day1).add(40, 'minutes').toDate(),
            minutesToMilliseconds(20), 100,
            'Research'
        ]
    ];
    */