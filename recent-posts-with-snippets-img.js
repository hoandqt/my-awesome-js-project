// ----------------------------------------
// SHOW RECENT POSTS
// ----------------------------------------
// Mod by MyDigitalLemon | Edit by Hoa Dang Nguyen
// Original by blogsolute.com | blogsudo.com
// ----------------------------------------
function showrecentposts_img_www(json) {
  for (var i = 0; i < numposts_img; i++) {
    first_part(json,i);
    var container = document.getElementById('www-img'); 
    last_part(item,posttitle,postcontent,readmorelink);
  }
}
function first_part(json,i) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    var orgImgUrl = entry.media$thumbnail ? entry.media$thumbnail.url : 'https://lh3.googleusercontent.com/-WSAcJKxDAy4/VQBEpcN5lgI/AAAAAAAAIxk/Z0JdkyF5CdE/s264/default-no-image.png';
    var newImgUrl = orgImgUrl.replace('s72-c', 'w' + bsrpg_thumbSize + '-h' + bsrpg_thumbSize_height + '-c');
    var imgTag = '<img src="' + newImgUrl + '" width="' + bsrpg_thumbSize + '" height="' + bsrpg_thumbSize_height + '">';
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
            posturl = entry.link[k].href;
            break;
        }
    }
    var item = '<a href="' + posturl + '" title="' + posttitle + '">' + imgTag + '</a>';
    posttitle = posttitle.link(posturl);
    var readmorelink = "....";
    readmorelink = readmorelink.link(posturl);
    if ("content" in entry) {
        var postcontent = entry.content.$t;
    } else
    if ("summary" in entry) {
        var postcontent = entry.summary.$t;
    } else var postcontent = "";
    var re = /<\S[^>]*>/g;
    postcontent = postcontent.replace(re, "");
}
function last_part(item,posttitle,postcontent,readmorelink) {
    var div1 = document.createElement("div");
    div1.className = "postw";
    var div2 = document.createElement("div");
    div2.className = "posti";
    var div3 = document.createElement("div");
    div3.className = "tsw";
    var div4 = document.createElement("div");
    div4.className = "mtrpw";
    var div5 = document.createElement("div");
    div5.className = "mtrpwsumm";
    
    div2.innerHTML = item;

    div4.innerHTML = posttitle;

    if (showpostsummary_img == true) {
        if (postcontent.length < numchars_img) {
            div5.innerHTML = postcontent;
        } else {
            postcontent = postcontent.substring(0, numchars_img);
            var quoteEnd = postcontent.lastIndexOf(" ");
            postcontent = postcontent.substring(0, quoteEnd);
            div5.innerHTML = postcontent + ' ' + readmorelink;
        }
    }
    div3.appendChild(div4);
    div3.appendChild(div5);
    div1.appendChild(div2);
    div1.appendChild(div3);
    container.appendChild(div1);
}