// Get the HTML source that needs to be compiled
var source = $("#some-template").html();

// Compile the source
var template = Handlebars.compile(source);

// Application data
var appData= {
    users:[{
        person: {
            firstName: "Garry",
            lastName: "Finch"
        },
        jobTitle: "Front End Technical Lead",
        twitter: "gazraa"
    }, {
        person: {
           firstName: "Garry",
           lastname: "Finch"
       },
       jobTitle: "Photographer",
       twitter: "photobasics"
   }, {
       person: {
           firstName: "Garry",
           lastName: "Finch"
       },
       jobTitle: "LEGO Geek",
       twitter: "minifigures"
   } ]
};

Handlebars.registerHelper('fullName', function(person) {
    return person.firstName + " " + person.lastName;
});

//Append the data to the template
$('body').append(template(appData));

