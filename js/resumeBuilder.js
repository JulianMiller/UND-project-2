// Click Logging Logic

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// Bio Info

 var bio = {
  'name' : 'Julian Miller',
  'role' : 'Web Developer',
  'contacts': {
      'mobile': '312-971-3244',
      'email': 'julianmiller@me.com', 
      'github': 'julianmiller',
      'twitter': '@julianmiller',
      'location': 'Chicago, IL'
    },
  'welcomeMessage': 'Education is the way forward', 
  'skills': ['HTML', 'CSS', 'JavaScript','Ruby on Rails'],
  'biopic': 'https://avatars2.githubusercontent.com/u/707128?v=3&s=460'
 };

 //Education Info

 var education = {
  'schools': [
  {
    'name': 'University of Connecticut',
    'location': 'Storrs, CT',
    'degree': 'BFA M.Ed Dual Degree Program',
    'major': ['Music Performance', 'Music Education'],
    'dates': '1999 - 2004',
    'url': 'http://www.uconn.edu/'
  },
  
  ],
  'online' : {
    'title' : 'Front End Developer Nanodegree',
    'school' : 'Udacity',
    'dates' : 'In progress',
    'url' : 'http://www.udacity.com'
  }
};

// Work Info

var work = {
  'jobs': [
  {
    'employer': 'Learnmetrics',
    'title': 'Cofounder and CEO',
    'location': 'Chicago, IL',
    'dates': 'June 2012 - Present',
    'description': 'Anything and Everything'
  },
  {
    'employer': 'Suntimes Media',
    'title': 'Frontend Developer',
    'location': 'Chicago, IL',
    'dates': '15 Aug, 2011' + ' - ' + 'June 10, 2012',
    'description': 'Responsible for the frontend of over 47 suntimes properties.'
  }
  ]
};

// Projects Info

var projects = {
  'projects': [
  {
    'title' : 'Dongletap',
    'dates' : 'April 2012',
    'description' : 'Context-aware social network',
    'images' : ['https://avatars2.githubusercontent.com/u/707128?v=3&s=460']
  },
  {
    'title' : 'Syrv.us',
    'dates' : '2010 - 2011',
    'description' : 'Syrv.us is a MayDay app for your smart tv. Click, pick, and go!',
    'images' : ['https://www.placeimg.com/400/225/tech']
  },
  ]
};

// Bio Display

bio.display = function() {

  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  $('#header').prepend(formattedRole);

  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  $('#header').prepend(formattedName);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $('#header').append(formattedWelcomeMsg);




  var profilePic = HTMLbioPic.replace('%data%', bio.biopic);
  $('#header').append(profilePic);

  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);

  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
// $('#topContacts').append(formattedEmail);

var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
// $('#topContacts').append(formattedGithub);

var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
// $('#topContacts').append(formattedLocation);



$('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
$('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

// Skill Display

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

bio.display();


// School Display

education.display = function() {

  $('#education').append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[0].name);
  
  var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[0].degree);

  // combines the Employer and Title
  var formattedEmployerTitle = formattedSchoolName + formattedSchoolDegree;
  $('#education').children().next().append(formattedSchoolName + formattedSchoolDegree);

  var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[0].location);
  $('#education').children().next().append(formattedSchoolLocation);




  var formattedSchoolDate = HTMLschoolDates.replace('%data%', education.schools[0].dates);
  $('#education').children().next().append(formattedSchoolDate);

  var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[0].major);
  $('#education').children().next().append(formattedSchoolMajor);


  var formattedOnlineSchool = HTMLonlineClasses.replace('%data%',education.online.title);
  $('#education').append(HTMLonlineClasses);

    var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.online.title);


    var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.online.school);

    var formattedOnlineDate = HTMLonlineDates.replace('%data%', education.online.dates);

  };

  education.display();

  // Work Display

  showWork = function() {

    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[0].employer);

    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[0].title);

// combines the Employer and Title
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('#workExperience').children().next().append(formattedEmployer + formattedTitle);


    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[0].dates);
    $('#workExperience').children().next().append(formattedDates);

    var formattedWorkDesc = HTMLworkDescription.replace('%data%', work.jobs[0].description);
    $('#workExperience').children().next().append(formattedWorkDesc);

  };

  showWork();

  


showProjects = function() {

  $('#projects').append(HTMLprojectStart);

  var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[0].title);
  $('#projects').children().next().append(formattedProjectTitle);

  var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[0].dates);
  $('#projects').children().next().append(formattedProjectDates);

  var formattedProjectDesc = HTMLprojectDescription.replace('%data%', projects.projects[0].description);
  $('#projects').children().next().append(formattedProjectDesc);

  var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[0].image);
  $('#projects').children().next().append(formattedProjectImage);

};

showProjects();


// map logic

$('#mapDiv').append(googleMap);





// footer for contacts

