Template.adminEventContacts.onCreated(function () {
    this.subscribe('adminContactsSelect', this.data.contacts);
});

Template.adminEventContacts.helpers({
    contacts: function () {
        return Collection.Contacts.find({
            _id: {
                $in: this.contacts
            }
        });
    }
});
