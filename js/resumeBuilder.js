/** Click-Logging Logic */
"use strict";

$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

/** Bio Info */

var bio = {
  'name': '',
  'role': 'Web Developer',
  'contacts': {
    'mobile': '312-971-3244',
    'email': 'julianmiller@me.com',
    'github': 'julianmiller',
    'twitter': '@julianmiller',
    'location': 'Chicago, IL'
  },
  'welcomeMessage': 'Education is the way forward',
  'skills': ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
  'biopic': 'https://avatars2.githubusercontent.com/u/707128?v=3&s=460'
};

/** Education Info */

var education = {
  'schools': [{
      'name': 'University of Connecticut',
      'location': 'Storrs, CT',
      'degree': 'BFA M.Ed Dual Degree Program',
      'majors': ['Music Performance', ' + ', 'Music Education'],
      'dates': '1999 - 2004',
      'url': 'http://www.uconn.edu/'
    },

  ],
  'onlineCourses': [{
    'title': 'Front End Developer Nanodegree',
    'school': ' Udacity',
    'date': '2015 - 2016',
    'url': 'http://www.udacity.com'
  }, {
    'title': 'Big Data in Education',
    'school': ' Columbia University',
    'date': '2013',
    'url': 'http://www.coursera.com'

  }]
};

/** Work Info */

var work = {
  'jobs': [{
    'employer': 'Learnmetrics',
    'title': 'Cofounder and CEO',
    'location': 'Chicago, IL',
    'dates': 'June 2012 - Present',
    'description': 'Anything and Everything'
  }, {
    'employer': 'Suntimes Media',
    'title': 'Frontend Developer',
    'location': 'Chicago, IL',
    'dates': '15 Aug, 2011' + ' - ' + 'June 10, 2012',
    'description': 'Responsible for the frontend of over 47 suntimes properties.'
  }]
};

/** Projects Info */

var projects = {
  'projects': [{
    'title': 'EdVentory',
    'dates': 'April 2012',
    'description': 'Edtech Directory',
    'images': ['images/edventory.png']
  }, {
    'title': 'Syrv.us',
    'dates': '2010 - 2011',
    'description': 'MayDay app for your smart tv. Click, pick, and go!',
    'images': ['https://www.placeimg.com/400/225/tech']
  },{
    'title': 'In Pieces',
    'dates': '2005',
    'description': 'A musical about Frankenstein and his monster',
    'images': ['images/ip.jpg']
  },]
};

var brand = {
  'name': 'Julian Miller'
};

/** Brand Display */
brand.display = function () {
  var formattedBrand = HTMLheaderBrand.replace('%data%', brand.name);
  $('.navbar-header').append(formattedBrand);
};


/** Bio Display */

bio.display = function () {

  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  var profilePic = HTMLbioPic.replace('%data%', bio.biopic);
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  $('#header').prepend(formattedName, formattedRole);
  $('#header').append(profilePic, formattedWelcomeMsg);
  $('#topContacts,#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
  $('#header').append(HTMLskillsStart);


  var formattedSkills = HTMLskills.replace('%data%', bio.skills[0]);
  $('#header').append(formattedSkills);
  var formattedSkills = HTMLskills.replace('%data%', bio.skills[1]);
  $('#header').append(formattedSkills);
  var formattedSkills = HTMLskills.replace('%data%', bio.skills[2]);
  $('#header').append(formattedSkills);
  var formattedSkills = HTMLskills.replace('%data%', bio.skills[3]);
  $('#header').append(formattedSkills);
};

/** School Display */

education.display = function () {
  //School logic
  for (var i = 0; i < education.schools.length; i++) {
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[0].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[0].degree);

    var formattedEmployerTitle = formattedSchoolName + formattedSchoolDegree;
    $('#education').children().next().append(formattedSchoolName + formattedSchoolDegree);

    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[0].location);
    $('#education').children().next().append(formattedSchoolLocation);

    var formattedSchoolDate = HTMLschoolDates.replace('%data%', education.schools[0].dates);
    $('#education').children().next().append(formattedSchoolDate);

    var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[0].majors);
    $('#education').children().next().append(formattedSchoolMajor);
  };

  /** Online course logic */

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);
  for (var i = 0; i < education.onlineCourses.length; i++) {

    var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
    var formattedOnlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
    var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
    $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDate, formattedOnlineURL);
  }
};

/** Work Display */

work.display = function () {
  $('#workExperience').append(HTMLworkStart);
  for (var i = 0; i < work.jobs.length; i++) {
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
    var formattedWorkDesc = HTMLworkDescription.replace('%data%', work.jobs[i].description);
    $('.work-entry:last').append(formattedEmployer + formattedTitle);
    $('.work-entry:last').append(formattedDates, formattedWorkDesc);
  }
};

/** Projects Display */

projects.display = function () {
  
  for (var i = 0; i < projects.projects.length; i++) {
    $('#projects').append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
    var formattedProjectDesc = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
    var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images);
    $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDesc, formattedProjectImage);
  }
};

bio.display();
education.display();
work.display();
projects.display();
brand.display();



/** map logic */

$('#mapDiv').append(googleMap);