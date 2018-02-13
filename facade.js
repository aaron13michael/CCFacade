var baseUrl = 'https://cal.se.rit.edu/api/dev/';

function getInstructors(callback){
  return $.ajax({
    url: baseUrl + 'instructors/',
    type: 'GET',
    dataType: 'json',
  })
  .done(callback);
}

function createInstructor(data, callback){
  var method = 'POST';
  var csrftoken = Cookies.get('csrftoken');

  return $.ajax({
    url: baseUrl + 'instructors/',
    type: method,
    dataType: 'json',
    data: data,
    beforeSend: function(xhr){
      if (!this.crossDomain){
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    },
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
  var method = 'POST';
  var csrftoken = Cookies.get('csrftoken');

  return $.ajax({
    url: baseUrl + 'courses/',
    type: method,
    dataType: 'json',
    data: data,
    beforeSend: function(xhr){
      if (!this.crossDomain){
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    },
  })
  .done(callback);
}

function scheduleCourse(data, callback){
  var method = 'POST';
  var csrftoken = Cookies.get('csrftoken');

  $.ajax({
    url: baseUrl + 'schedulecourse/',
    type: method,
    dataType: 'json',
    data: data,
    beforeSend: function(xhr){
      if (!this.crossDomain){
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    },
  })
  .done(callback);
}

function checkAvailability(data, callback){
  var method = 'POST';
  var csrftoken = Cookies.get('csrftoken');

  return $.ajax({
    url: baseUrl + 'checkfloor/',
    type: method,
    dataType: 'json',
    data: data,
    beforeSend: function(xhr){
      if (!this.crossDomain){
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    },
  })
  .done(callback);
}

function print(data){
  console.log(data);
}
