function reverce() {
  var name = "Rakesh";
  var reverceName = "";
  for (var i = name.length - 1; i >= 0; i--) {
    reverceName += name[i];
  }
  console.log(reverceName);
}
reverce();
