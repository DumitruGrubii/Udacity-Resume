var data = '%data%';

var work = {
    "jobs": [{
        "employer": "Edil-Centro",
        "title": "Construction Worker",
        "dates": " 2007-2008",
        "location": "Chiusi (SI), Italy",
        "description": "processing and preparation of metallic materials."
    }, {
        "title": "Videomaker",
        "employer": "AreaGiovani",
        "dates": " 2010-2012",
        "location": "Ferrara (FE), Italy",
        "description": "I was in charge of make and edit videoclips and documentaries."
    }, {
        "title": "Designer&Videomaker",
        "employer": "Sefl employed",
        "dates": " from 2016",
        "location": "Ferrara (FE), Italy",
        "description": "I create video&photos and design websites."
    }]
};

var projects = {
    "projects": [{
        "title": "Format Ferrara",
        "dates": "2016",
        "description": "A real awesome Judo gym!",
        "images": [
            "images/fry.jpg",
            "images/fry.jpg"
        ]
    }, {
        "title": "AreaGiovani",
        "dates": "2015",
        "description": "A resposive website made for the AreaGiovani's office.",
        "images": [
            "images/fry.jpg",
            "images/fry.jpg"
        ]
    }]
};

var bio = {
    "name": "Dumitru Grubii",
    "role": "Front-End Web-Developer",
    "welcomeMessage": "It is not that I'm so smart. But I stay with the questions much longer. — Albert Einstein",
    "biopic": "images/Dima.jpg",
    "contacts": {
        "mobile": "+39 329 856 1307",
        "email": "dimagrubii@gmail.com",
        "github": "DumitruGrubii",
        "twitter": "DumitruGrubii",
        "location": "Ferrara, Italy"
    },
    "skills": [
        "HTML", "CSS", "JavaScript", "Video/Photo editing"
    ],
};

var education = {
    "schools": [{
        "name": "IST. DI ISTR. SUPERIORE L. EINAUDI",
        "location": "Ferrara",
        "degree": "",
        "majors": "Graphic Designer",
        "dates": "from 2011 to 2014 ",
        "url": "",
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com",
    }]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedWelcomeMesg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMesg);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobile);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedemail);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedgithub);

var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedtwitter);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedlocation);

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    for (var index = 0; index < bio.skills.length; ++index) {
     $("#skills").append(HTMLskills.replace("%data%", bio.skills[index]));
}
}

function displayWork() {
    work.jobs.forEach(function(job, index) {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    });
}

displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


projects.display = function() {
     projects.projects.forEach(function(object, project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            if (images in projects.projects[project].images) {
                var formattedProjectImages = HTMLprojectImages.replace("%data%", projects.projects[project].images[images]);
                $(".project-entry:last").append(formattedProjectImages);
            }
        }
    }
  );

};

projects.display();



education.display = function() {
    $("#education").append(HTMLschoolStart);
    if (school in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].school);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolMajor);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
    }

    education.online.forEach(function(object, onlineClass) {
      $("#education").append(HTMLonlineClassesStart);
      var onlineSchoolTitle = HTMLonlineTitle.replace("%data%", education.online[onlineClass].title);
      $(".online-classes:last").append(onlineSchoolTitle);
      var onlineSchoolName = HTMLonlineSchool.replace("%data%", education.online[onlineClass].school);
      $(".online-classes:last").append(onlineSchoolName);



      var onlineSchoolURL = HTMLonlineURL.replace("%data%", education.online[onlineClass].url);
      $(".online-classes:last").append(onlineSchoolURL);

      var onlineSchoolDates = HTMLonlineDates.replace("%data%", education.online[onlineClass].dates);
      $(".online-classes:last").append(onlineSchoolDates);
     }
  );
};

education.display();

$("#mapDiv").append(googleMap);
