let groups_frame = $(".groupsFrame");
let groups_count = 0;
localStorage.setItem("groups_count", groups_count);

/*groups_frame.find(".addbut").click(function () {
  $(".groupsPlace").css("display", "none");
  $(".idDIVinput").css("display", "inline-block");
  $(".groupsFrame .buttonsBlock").css("display", "none");
});

groups_frame.find("buttons .addGroup").click(function () {
  $(".groupsPlace").css("display", "grid");
  $(".idDIVinput").css("display", "none");
  $(".groupsFrame .buttonsBlock").css("display", "inline");
});
