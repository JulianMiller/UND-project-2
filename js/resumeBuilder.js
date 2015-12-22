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
    'majors': ['Music Performance', 'Music Education'],
    'dates': '1999 - 2004',
    'url': 'http://www.uconn.edu/'
  },
  
  ],
  'online' : [
  {
    'title' : 'Front End Developer Nanodegree',
    'school' : 'Udacity',
    'date' : 'In progress',
    'url' : 'http://www.udacity.com'
  },
  ]
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
    'images' : ['https://www.placeimg.com/400/225/tech','https://placeimg.com/400/225/people']
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
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  var profilePic = HTMLbioPic.replace('%data%', bio.biopic);
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  $('#header').prepend(formattedName,formattedRole);
  $('#header').append(profilePic,formattedWelcomeMsg);
  $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
  $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
  $('#header').append(HTMLskillsStart);
  
  $('#header').append(formattedSkills);
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
  //School logic
  for (school in education.schools) {
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

  //Online course logic
  for (course in education.online) {    
    $('#education').append(HTMLonlineClasses);
    var formattedOnlineSchool = HTMLonlineClasses.replace('%data%',education.online.class);
    

    var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.online.title);
    $('#education').append(HTMLonlineTitle);

    var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.online.school);
    $('#education').append(HTMLonlineSchool);
    var formattedOnlineDate = HTMLonlineDates.replace('%data%', education.online.date);

  }
};

education.display();

// Work Display

work.display = function() {
  for (job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[0].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[0].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[0].dates);
    var formattedWorkDesc = HTMLworkDescription.replace('%data%', work.jobs[0].description);
    $('#workExperience').children().next().append(formattedEmployer + formattedTitle);
    $('#workExperience').children().next().append(formattedDates);
    $('#workExperience').children().next().append(formattedWorkDesc);
  }
};

work.display();

  


projects.display = function() {
  $('#projects').append(HTMLprojectStart);
  
  for (project in projects) {

    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[0].title);
    $('#projects').children().next().append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[0].dates);
    $('#projects').children().next().append(formattedProjectDates);

    var formattedProjectDesc = HTMLprojectDescription.replace('%data%', projects.projects[0].description);
    $('#projects').children().next().append(formattedProjectDesc);

    var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[0].images);
    $('#projects').children().next().append(formattedProjectImage);


  }
};

projects.display();



// map logic

$('#mapDiv').append(googleMap);