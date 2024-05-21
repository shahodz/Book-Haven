// $(document).ready(function() {
//     $('form').on('submit', function(event) {
//         event.preventDefault();
//         $.ajax({
//             url: '/auth/signin/',  // the endpoint
//             type: 'POST',  // http method
//             data: $(this).serialize(),  // data sent with the post request

//             // handle a successful response
//             success: function(response) {
//                 window.location.href = response.redirect_url;  // redirect to the dashboard
//             },

//             // handle a non-successful response
//             error: function(xhr, errmsg, err) {
//                 var json = JSON.parse(xhr.responseText);
//                 alert(json.error);  // display the error message
//             }
//         });
//     });
// });
