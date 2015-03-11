// ----------------------------------------
// SHOW RECENT POSTS
// ----------------------------------------
// Mod by MyDigitalLemon | Edit by Hoa Dang Nguyen
// Original by blogsolute.com | blogsudo.com
// ----------------------------------------

function showrecentposts_img(json) {

  for (var i = 0; i < numposts_img; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    var orgImgUrl = entry.media$thumbnail ? entry.media$thumbnail.url : 'https://lh3.googleusercontent.com/-WSAcJKxDAy4/VQBEpcN5lgI/AAAAAAAAIxk/Z0JdkyF5CdE/s264/default-no-image.png';
    var newImgUrl = orgImgUrl.replace('s72-c', 's' + bsrpg_thumbSize + '-c');
    var imgTag = '<img src="' + newImgUrl + '" width="' + bsrpg_thumbSize + '" height="' + bsrpg_thumbSize + '">';
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
    var postdate = entry.published.$t;
    var cdyear = postdate.substring(0,4);
    var cdmonth = postdate.substring(5,7);
    var cdday = postdate.substring(8,10);
    var monthnames = new Array();
    monthnames[1] = "Jan";
    monthnames[2] = "Feb";
    monthnames[3] = "Mar";
    monthnames[4] = "Apr";
    monthnames[5] = "May";
    monthnames[6] = "Jun";
    monthnames[7] = "Jul";
    monthnames[8] = "Aug";
    monthnames[9] = "Sep";
    monthnames[10] = "Oct";
    monthnames[11] = "Nov";
    monthnames[12] = "Dec";
    if ("content" in entry) {
      var postcontent = entry.content.$t;}
    else
    if ("summary" in entry) {
      var postcontent = entry.summary.$t;}
    else var postcontent = "";
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");
 document.write('<div class="postw clearfix"><div class="posti">');
 document.write(item);
 document.write('</div><div class="tsw"><div class="mtrpw">');
    document.write(posttitle);
    if (showpostdate_img == true) document.write(' - ' + monthnames[parseInt(cdmonth,10)] + ' ' + cdday + ' ' + cdyear);
 document.write('</div><div class="mtrpwsumm">');
    if (showpostsummary_img == true) {
      if (standardstyling_img) document.write('');
      if (postcontent.length < numchars_img) {
         if (standardstyling_img) document.write('<i>');
         document.write(postcontent);
         if (standardstyling_img) document.write('</i>');}
      else {
         if (standardstyling_img) document.write('');
         postcontent = postcontent.substring(0, numchars_img);
         var quoteEnd = postcontent.lastIndexOf(" ");
         postcontent = postcontent.substring(0,quoteEnd);
         document.write(postcontent + ' ' + readmorelink);
         if (standardstyling_img) document.write('');}
}
 document.write('</div></div></div>');
    if (standardstyling_img) document.write('');
}
if (!standardstyling_img) document.write('<div class="bbwidgetfooter">');
if (standardstyling_img) document.write('');
document.write('');
if (!standardstyling_img) document.write('');

}