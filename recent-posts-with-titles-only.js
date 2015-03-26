// ----------------------------------------
// SHOW RECENT POSTS 2 
// ----------------------------------------
function showrecentposts(json) {

  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
            posturl = entry.link[k].href;
            break;
        }
    }
    posttitle = posttitle.link(posturl);
    if (cat == 'www') {
      var container = document.getElementById('www'); 
    }
    if (cat == 'chuyenla') {
      var container = document.getElementById('chuyenla'); 
    }
    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}