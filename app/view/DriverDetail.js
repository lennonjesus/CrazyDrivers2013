Ext.define('CrazyDrivers2013.view.DriverDetail', {
    extend: 'Ext.Panel',
    xtype: 'driverdetail',

    config: {
        title: '{firstName} {lastName}',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
        	'<img src="../resources/img/{firstName}_{lastName}.jpg"/>',
            'Equipe: {team}',
            'Pontos: {totalPoints}'

        ].join("<br />")
    }
});