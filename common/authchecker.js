const __auth_chek = function (levels) {
  // fetch api
  fetch("../".repeat(levels) + "data/Template/find").then((x) => {
    //send them to login
    console.log(x);
    if (x.status == 401) {
      window.location =
        "../".repeat(levels) +
        "login.html?state=" +
        encodeURIComponent(window.location);
    }
  });
};
