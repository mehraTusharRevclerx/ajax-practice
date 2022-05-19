$(() => {
  const showData = $("#showData");
  const showStatus = $("#showStatus");
  const showXhr = $("#showXhr");
  const btn = $("#btn");
  btn.click(function () {
    // LOAD METHOD
    // showData.load("https://jsonplaceholder.typicode.com/posts/1");
    // GET METHOD
    // without passing data
    // $.get(
    //   "https://jsonplaceholder.typicode.com/posts/2",
    //   function (data, status, xhr) {
    //     showData.text(JSON.stringify(data));
    //     showStatus.text(status);
    //     showXhr.text(xhr.status);
    //   }
    // );

    // with passing data
    // $.get(
    //   "https://jsonplaceholder.typicode.com/posts", {
    //   id: 3,
    // },
    //   function (data, status, xhr) {
    //     showData.text(JSON.stringify(data));
    //     showStatus.text(status);
    //     showXhr.text(xhr.status);
    //   }
    // );

    // POST METHOD
    // $.post(
    //   "https://jsonplaceholder.typicode.com/posts",
    //   {
    //     title: "this is title",
    //     userId: 1,
    //     name: "tushar",
    //     number: 8091974444,
    //   },

    //   function (data, status, xhr) {
    //     showData.html(JSON.stringify(data));
    //     showStatus.text(status);
    //     showXhr.text(xhr.status);
    //   }
    // );

    // AJAX MEHTOD
    // GET MEHTOD
    // $.ajax("https://jsonplaceholder.typicode.com/posts/2", {
    //   type: "GET",
    //   dataType: "json", // type of response data
    //   timeout: 500, // timeout milliseconds
    //   success: function (data, status, xhr) {
    //     // success callback function
    //     showData.html("Success" + JSON.stringify(data));
    //   },
    //   error: function (jqXhr, textStatus, errorMessage) {
    //     // error callback
    //     showData.html("ERROR" + JSON.stringify(errorMessage));
    //   },
    // });

    // POST METHOD
    // $.ajax("https://jsonplaceholder.typicode.com/posts", {
    //   type: "POST",
    //   dataType: "json", // type of response data
    //   // timeout: 500, // timeout milliseconds
    //   data: {
    //     title: "this is title",
    //     userId: 1,
    //     name: "tushar",
    //     number: 8091974444,
    //   },
    //   success: function (data, status, xhr) {
    //     // success callback function
    //     showData.html("Success" + JSON.stringify(data));
    //   },
    //   error: function (jqXhr, textStatus, errorMessage) {
    //     // error callback
    //     showData.html("ERROR" + JSON.stringify(errorMessage));
    //   },
    // });
  });
});
