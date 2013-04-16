Ext.define('CrazyDrivers2013.model.Driver', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['firstName', 'lastName', 'totalPoints', 'team']
    },

    fullName: function() {
        var d = this.data,
        names = [
            d.firstName,
            d.lastName
        ];
        return names.join(" ");
    }
});