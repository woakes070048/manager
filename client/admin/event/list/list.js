Template.adminEventList.helpers({
    headerOptions: function () {
        return {
            title: 'Events',
            links: [
                {
                    active: true,
                    icon: Icon.EVENT,
                    title: 'Events'
                }
            ]
        };
    },
    actionsOptions: function () {
        return {
            links: [
                {
                    type: 'primary',
                    icon: 'plus',
                    title: 'Add new event',
                    route: Route.EVENT_ADD
                }
            ]
        };
    },
    calendarOptions: function () {
        return {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            editable: false,
            eventLimit: true,
            events: Collection.Events.find().map(function (event) {
                return _.extend(event, {
                    url: '/event/' + event._id + '/show'
                });
            })
        };
    }
});
