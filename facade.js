import $ from 'jquery'; 
import Cookies from "js-cookie";

var baseUrl = 'http://cal.se.rit.edu/api/dev/';

export const getInstructors = () =>{
  var result = [];
  $.ajax({
    url: baseUrl + 'instructors/',
    type: 'GET',
    async: false,
    dataType: 'json',
    success:function(data){
      result = data;
    }
  })
  return result;
}

export const getCourses = () =>{
  var result = [];
  $.ajax({
    url: baseUrl + 'courses/',
    type: 'GET',
    async: false,
    dataType: 'json',
    success:function(data){
      result = data;
    }
  })
  return result;
}

export const createCourse = (data, callback) =>{
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
    error: basicErrorFunction,
    success: callback,
  })
}

export const scheduleCourse = (data)=>{
  var method = 'POST';
  var csrftoken = Cookies.get('csrftoken');

  return $.ajax({
    url: baseUrl + 'schedulecourse/',
    type: method,
    dataType: 'json',
    data: data,
    beforeSend: function(xhr){
      if (!this.crossDomain){
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    },
    error: basicErrorFunction,
    success: scheduleSuccess
  })
}

function scheduleSuccess(data){
  window.location.replace("/Confirmation");
}


function basicErrorFunction(xhr, status, error){
  alert("An arror occured: " + xhr.responseText);
}

export const checkAvailability = (data, callback)=>{
  var method = 'POST';
  var csrftoken = Cookies.get('csrftoken');

  return $.ajax({
    url: baseUrl + 'checkfloor/',
    type: method,
    dataType: 'json',
    data: data,
    success: colorRooms,
    beforeSend: function(xhr){
      if (!this.crossDomain){
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    },
  })
  .done(callback);
}

function colorRooms (data){
  var temp;
  var roomsToCheck = ["A020", "A060", "A068", "A070", "A076", "A077", "A078", "A079", "A081", "A083", "A085",
                      "A087", "A090", "A093", "A094", "A095", "A096", "A097", "A098", "A099", "A100", "A110",
                      "A120", "A140", "A141", "A145", "A155", "A171", "A1118"];
  var currCheck;
  var dataArray = data.data;
  for(var i=0; i<dataArray.length; i++){
    temp = dataArray[i];
    var assocBool = temp[roomsToCheck[i]];
    if(assocBool){
      $("#"+roomsToCheck[i]).attr("fill", "green");
    }else{
      $("#"+roomsToCheck[i]).attr("fill", "red");
    }
  }
}
