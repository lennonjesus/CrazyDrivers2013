Ext.define('CrazyDrivers2013.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainpanel'
        },
        control: {
            'driverlist': {
                disclose: 'showDetail'
            }
        }
    },

    showDetail: function(list, record) {
        this.getMain().push({
            xtype: 'driverdetail',
            title: record.fullName(),
            data: record.getData()
        })
    }

});

