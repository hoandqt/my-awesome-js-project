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
      var readmorelink = "&raquo;&raquo;";
      readmorelink = readmorelink.link(posturl);
      var postdate = entry.published.$t;
      var cdyear = postdate.substring(0, 4);
      var cdmonth = postdate.substring(5, 7);
      var cdday = postdate.substring(8, 10);
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
          var postcontent = entry.content.$t;
      } else
      if ("summary" in entry) {
          var postcontent = entry.summary.$t;
      } else var postcontent = "";
      var re = /<\S[^>]*>/g;
      postcontent = postcontent.replace(re, "");
  
      var container = document.getElementById(cat); 
      container.innerHTML = '<div class="bbrecpost2">';
      container.innerHTML += '<span>';
  
      container.innerHTML += posttitle;
  
      if (showpostdate == true) container.innerHTML += ' - ' + cdday + ' ' + monthnames[parseInt(cdmonth, 10)] + ' ' + cdyear;
      if (!standardstyling) container.innerHTML += '<div class="bbrecpostsum"">';
  
      if (showpostsummary == true) {
  
          if (postcontent.length < numchars) {
              if (standardstyling) container.innerHTML += '<i>';
              document.write(postcontent);
              if (standardstyling) container.innerHTML += '</i>';
          } else {
              if (standardstyling) container.innerHTML += '<i>';
              postcontent = postcontent.substring(0, numchars);
              var quoteEnd = postcontent.lastIndexOf(" ");
              postcontent = postcontent.substring(0, quoteEnd);
              container.innerHTML += postcontent + '... ' + readmorelink;
              if (standardstyling) container.innerHTML += '</i>';
          }
      }
      if (!standardstyling) container.innerHTML += '</div>';      
      container.innerHTML += '</span>';   
      container.innerHTML += '</div>';
  
  }
}