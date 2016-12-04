
var bio = {
    "name" :"Sameer Ahmed",
    "role" :"Web Developer",
    "contacts": {
        "mobile": "7373737373",
        "email": "sameer.cse.jobs@gmail.com",
        "github": "samtopper",
        "twitter": "@sameer_cse",
        "location": "Hyderabad"
    } ,
    "welcomeMessage": "Welcome to my Online Resume.",
    "skills": ["HTML", "CSS", "JS", "Python", "Java"],
    "biopic": "images/sameer.jpg"
};
var data = "%data%";

bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var pic = HTMLbioPic.replace(data,bio.biopic);
    $("#header").append(pic);

    var myMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(myMobile);

    var myEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#topContacts, #footerContacts").append(myEmail);

    var myGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#topContacts, #footerContacts").append(myGithub);

    var myTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(myTwitter);

    var myLocation = HTMLworkLocation.replace(data, bio.contacts.location);
    $("#topContacts, #footerContacts").append(myLocation);

    var welcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(welcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (skill=0; skill<bio.skills.length; skill++) {

            var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();

var education = {
    "schools": [{
        "name": "Kakatiya University",
        "location": "Khammam",
        "degree": "B.Tech",
        "majors": ["CS"],
        "dates": "2012 - 2016",
        "url": "http://www.kakatiya.ac.in/"
    },
    {
        "name": "Sri Chaitanya",
        "location": "Vijayawada",
        "degree": "Intermediate",
        "majors": ["Maths"," Physics"," Chemistry"],
        "dates": "2010 - 2012",
        "url": "http://srichaitanya.net/"
    }],

    "onlineCourses": [
    {
        "title": "Front-end Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "Aug. 2016 - Dec. 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree"
    }]
};

education.display = function() {

    $("#education").append(HTMLschoolStart);
    for (i=0; i < education.schools.length; i++) {

        var schoolName = HTMLschoolName.replace(data, education.schools[i].name);
        var schoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        $(".education-entry").append(schoolName + schoolDegree);

        var schoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        $(".education-entry").append(schoolLocation);

        var schoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        $(".education-entry").append(schoolDates);

        var schoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors);
        $(".education-entry").append(schoolMajor);
    }

    $(".education-entry").append(HTMLonlineClasses);
    for (i=0; i < education.onlineCourses.length; i++) {

        var courseTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
        var courseSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
        $(".education-entry").append(courseTitle + courseSchool);

        var courseDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
        $(".education-entry").append(courseDates);

        var courseUrl = HTMLonlineURL.replace(data, education.onlineCourses[i].url);
        $(".education-entry").append(courseUrl);
    }
};
education.display();

var work = {
    "jobs": [
    {
        "employer": "Infosys Limited",
        "title": "Systems Engineer Trainee",
        "dates": "August 2016 - Future",
        "location": "Hyderabad",
        "description": "Who moved my cheese chessy feet cauliflower cheese."
    },
    {
        "employer": "Udacity",
        "title": "Course Developer",
        "dates": "Future",
        "location": "Bangalore",
        "description": "Who moved my cheese chessy feet cauliflower cheese."
    }
    ]
};

work.display = function() {

        $("#workExperience").append(HTMLworkStart);

        for (job = 0; job<work.jobs.length; job++) {

            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
};
work.display();

var projects = {
    "projects": [
    {
        "title": "My Portfolio",
        "dates": "2016",
        "description": "Who moved my cheese cheesy feet cauliflower cheese.",
        "images": ["images/portfolio-ipad.png"]
    },
    {
        "title": "Sentiment Analysis of Tweets",
        "dates": "2015-16",
        "description": "This was my B.Tech Academic project on Sentiment Analysis.",
        "images": ["images/SentiTwitter.png"]
    }
    ]
};

projects.display = function() {
    for (proj=0; proj<projects.projects.length; proj++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[proj].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, projects.projects[proj].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[proj].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[proj].images.length > 0) {
            for (image=0; image<projects.projects[proj].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[proj].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name.join(" ");
    return finalName;
}
$("#main").append(internationalizeButton);  // internationalizing the name.

// displaying my locations on map.
$("#mapDiv").append(googleMap);
