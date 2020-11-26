// (function () {

//     const exec = setInterval(() => document.getElementById("para-add").innerHTML = "Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Sagittis purus sit amet volutpat consequat mauris nunc congue. Donec et odio pellentesque diam volutpat commodo. Sed libero enim sed faucibus. Aenean sed adipiscing diam donec adipiscing tristique risus. Odio morbi quis commodo odio aenean. Quam quisque id diam vel. Nullam non nisi est sit amet facilisis magna etiam. Donec ac odio tempor orci dapibus ultrices in iaculis. Ultrices in iaculis nunc sed augue lacus. Posuere ac ut consequat semper viverra nam libero.",5000);

// })();

// shortest way possible?
(() => setInterval(() => document.getElementById("para-add").innerHTML = "Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Sagittis purus sit amet volutpat consequat mauris nunc congue. Donec et odio pellentesque diam volutpat commodo. Sed libero enim sed faucibus. Aenean sed adipiscing diam donec adipiscing tristique risus. Odio morbi quis commodo odio aenean. Quam quisque id diam vel. Nullam non nisi est sit amet facilisis magna etiam. Donec ac odio tempor orci dapibus ultrices in iaculis. Ultrices in iaculis nunc sed augue lacus. Posuere ac ut consequat semper viverra nam libero.",5000))();


// function wait(ms){
//     var start = new Date().getTime();
//     var end = start;
//     while(end < start + ms) {
//       end = new Date().getTime();
//    }
//    return;
//  }

// const addPara = function() {
//     wait(5000);
//     let p = "Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Sagittis purus sit amet volutpat consequat mauris nunc congue. Donec et odio pellentesque diam volutpat commodo. Sed libero enim sed faucibus. Aenean sed adipiscing diam donec adipiscing tristique risus. Odio morbi quis commodo odio aenean. Quam quisque id diam vel. Nullam non nisi est sit amet facilisis magna etiam. Donec ac odio tempor orci dapibus ultrices in iaculis. Ultrices in iaculis nunc sed augue lacus. Posuere ac ut consequat semper viverra nam libero.";

//     document.getElementById("para-add").innerHTML = p;
// }

// document.addEventListener('DOMContentLoaded', addPara);