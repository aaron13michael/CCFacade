var baseUrl = 'http://cal.se.rit.edu/api/v1.0/';

function getInstructors(callback){
  return $.ajax({
    url: baseUrl + 'instructors/',
    type: 'GET',
    dataType: 'json',
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

function print(data){
  console.log(data);
}
