var bio = {
    name : 'Denzil Martin',
    role : 'Developer',
    contacts :{
        cell : '0837454620',
        email :'denzil.martin07@gmail.com',
        github : 'denzilm',
        location : 'Cape Town'
    },
    pic : '../images/denzil.png',
    age : 30,
    skills : ['C#', 'Windows Forms','ASP.NET MVC', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Angular', 'MongoDB', 'Mongoose', 'Express', 'MS SQL Server'],
    message : 'Welcome to my resume'
};

var work = 
    [
     {
        title : 'Developer',
        employer : 'Korbicom',
        dates : '2011 - Future',
        city : 'Cape Town',
        description : 'Develops software for the legal industry'
     },
     {
        title : 'Software Quality Enginner',
        employer : 'StatPro',
        dates : '2010 - 2011',
        city : 'Cape Town',
        description : 'Develops software for the financial industry'
     }
];

var education = {
    schools : [
        {
            name : 'Stellenbosch University',
            location : 'Stellenbosch',
            degree : 'BComm(Hons)',
            Majors : ['Financial Risk Management'],
            dates : '2008 - 2009',
            url : 'http://www.sun.ac.za'
        },
        {
            name : 'Stellenbosch University',
            location : 'Stellenbosch',
            degree : 'BSc',
            Majors : ['Mathematical Statistics', 'Financial Risk Management'],
            dates : '2003 - 2007',
            url : 'http://www.sun.ac.za'
        }
    ],
    OnlineCourses : [{
        title : 'Introduction to Computer Science',
        school : 'Edx (HarvardX)',
        dates : '2014',
        url : 'http://www.edx.org'
        },
        {
        title : 'Introduction to HTML, CSS and JavaScript',
        school : 'Coursera (Hong Kong University of Science and Technology)',
        dates : '2015',
        url : 'http://www.coursera.org'
        },
        {
        title : 'Front-End Web UI Frameworks and Tools - Bootstrap',
        school : 'Coursera (Hong Kong University of Science and Technology)',
        dates : '2015',
        url : 'http://www.coursera.org'
        },
        {
        title : 'Front-End Web UI Frameworks and Tools - AngularJS',
        school : 'Coursera (Hong Kong University of Science and Technology)',
        dates : '2015',
        url : 'http://www.coursera.org'
        },
        {
        title : 'Server-side Development with NodeJS',
        school : 'Coursera (Hong Kong University of Science and Technology)',
        dates : '2016',
        url : 'http://www.coursera.org'
        },
        {
        title : 'JavaScript Basics',
        school : 'Udacity',
        dates : '2015',
        url : 'http://www.udacity.com'
        }]
};

var projects = [{ name : 'StatPro Revolution'}, {name :'GhostPractice'}];

displayWork();

function displayWork(){
    for (var job in work) {
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work[job].employer) + HTMLworkTitle.replace('%data%', work[job].title))
                             .append(HTMLworkDates.replace('%data%', work[job].dates))
                             .append(HTMLworkDescription.replace('%data%', work[job].description))
    }
}