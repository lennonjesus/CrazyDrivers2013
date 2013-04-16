Ext.define('CrazyDrivers2013.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainpanel',
    requires: [
        'CrazyDrivers2013.view.DriverList',
        'CrazyDrivers2013.view.DriverDetail'
    ],

    config: {
        items: [{
            xtype: 'driverlist'
        }]
    }
});