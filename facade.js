var baseUrl = 'https://cal.se.rit.edu/api/v1.0/';

function getInstructors(callback){
  return $.ajax({
    url: baseUrl + 'instructors/',
    type: 'GET',
    dataType: 'json',
  })
  .done(callback);
}

function createInstructor(data, callback){
  return $.ajax({
    url: baseUrl + 'instructors/',
    type: 'POST',
    dataType: 'json',
    data: data
  })
  .done(callback);
}

function getCourses(callback){
  return $.ajax({
    url: baseUrl + 'courses/',
    type: 'GET',
    dataType: 'json',
  })
  .done(callback);
}

function createCourse(data, callback){
  return $.ajax({
    url: baseUrl + 'courses/',
    type: 'POST',
    dataType: 'json',
    data: data
  })
  .done(callback);
}

function scheduleCourse(data, callback){
  $.ajax({
    url: baseUrl + 'schedulecourse/',
    type: 'POST',
    dataType: 'json',
    data: data
  })
  .done(callback);
}

function checkAvailability(data, callback){
  return $.ajax({
    url: baseUrl + 'checkfloor/',
    type: 'POST',
    dataType: 'json',
    data: data
  })
  .done(callback);
}

function print(data){
  console.log(data);
}
