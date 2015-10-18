Schema.Server = new SimpleSchema({
    name: SchemaFields.getNameField(),
    serviceName: {
        type: String,
        autoform: {
            label: 'Service Name',
            placeholder: 'vps00000.ovh.net'
        }
    },
    endpoint: {
        type: String,
        autoform: {
            type: 'select2',
            options: Select.getServerEndpointOptions,
            label: 'Endpoint',
            select2Options: {
                placeholder: Endpoint.OVH_EU
            }
        }
    },
    appKey: {
        type: String,
        min: 16,
        max: 16,
        autoform: {
            type: 'password',
            label: 'App Key',
            placeholder: '16 characters'
        }
    },
    appSecret: {
        type: String,
        min: 32,
        max: 32,
        autoform: {
            type: 'password',
            label: 'App Secret',
            placeholder: '32 characters'
        }
    },
    consumerKey: {
        type: String,
        min: 32,
        max: 32,
        autoform: {
            type: 'password',
            label: 'Consumer Key',
            placeholder: '32 characters'
        }
    }
});
