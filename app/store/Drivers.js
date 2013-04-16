Ext.define('CrazyDrivers2013.store.Drivers', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'CrazyDrivers2013.model.Driver',
        sorters: 'totalPoints',
        groupDir: 'DESC',
        grouper: function(record) {
            return record.get('totalPoints');
        },
        data: [
            { firstName: "Raphael", lastName: "Gornates", team: "TARA Champion", totalPoints: 31 },
            { firstName: "Paulo", lastName: "Vaz", team: "Dragon Speed Race", totalPoints: 27 },
            { firstName: "Tarcisio", lastName: "Junior", team: "TARA Champion", totalPoints: 26 },
            { firstName: "Bruno", lastName: "Ambrozio", team: "Alto Giro Racing", totalPoints: 24 },
            { firstName: "Ewaldo", lastName: "Graciolli", team: "Bazinga Empurra que Pega", totalPoints: 24 },
            { firstName: "Petrônio", lastName: "Braz", team: "XXXXXXXX", totalPoints: 24 },
            { firstName: "Lennon", lastName: "Jesus", team: "Alto Giro Racing", totalPoints: 23 },
            { firstName: "Elaine", lastName: "Vidal", team: "Bazinga Empurra que Pega", totalPoints: 12 },
            { firstName: "Wagner", lastName: "Moreno", team: "W. J. Motors", totalPoints: 9 },
            { firstName: "João", lastName: "Ribeiro", team: "Dragon Speed Race", totalPoints: 8 },
            { firstName: "Alexandre", lastName: "", team: "Parafix", totalPoints: 0 },
            { firstName: "Jorge", lastName: "", team: "W. J. Motors", totalPoints: 0 },
            { firstName: "Junior", lastName: "", team: "Parafix", totalPoints: 0 },
            

          
        ]
    }
});