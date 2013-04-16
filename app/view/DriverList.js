Ext.define('CrazyDrivers2013.view.DriverList', {
    extend: 'Ext.List',
    xtype: 'driverlist',
    requires: ['CrazyDrivers2013.store.Drivers'],
    
    config: {
    	grouped: true,
    	// indexBar: true,
    	title: 'Pilotos',
        itemTpl: '{firstName} {lastName}',
        store: 'Drivers',
        onItemDisclosure: true
    }
});