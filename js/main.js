var Person = Backbone.Model.extend({
    defaults: {
        name: 'Сергей',
        age: 49,
        job: 'Слесарь',
        words: 'привет',
        myname: 'Виктор',
        myage: 33,
        myjob: 'Виктор',
        mywords: 'привет всем'
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: _.template($('#person-id').html()),
    mytemplate: _.template($('#person-id2').html()),

    initialize: function() {
        this.render();
    },

    render: function() {
       // this.$el.html(this.template(this.model.toJSON()) + this.mytemplate(this.model.toJSON()));
        this.$el.html(this.template(this.model.toJSON())+this.mytemplate(this.model.toJSON()));
        //this.$el.html(this.mytemplate(this.model.toJSON()));
        $(document.body).append(this.el);
    }
});

var person = new Person;
var personView = new PersonView({model: person});