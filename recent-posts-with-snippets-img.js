// ----------------------------------------
// SHOW RECENT POSTS
// ----------------------------------------
// Mod by MyDigitalLemon | Edit by Hoa Dang Nguyen
// Original by blogsolute.com | blogsudo.com
// ----------------------------------------
function showrecentposts_img_www(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('www'); 
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
}
function showrecentposts_img_chuyenla(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('chuyenla'); 
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
}
function showrecentposts_img_tinthethao(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('tinthethao'); 
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
}
function showrecentposts_img_giaitri(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('giaitri'); 
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
}
function showrecentposts_img_gaixinh(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('gaixinh'); 
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
}
function showrecentposts_img_congnghe(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('congnghe'); 
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
}
function showrecentposts_img_khoahoc(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('khoahoc'); 
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
}
function showrecentposts_img_dulich(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('dulich'); 
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
}
function showrecentposts_img_docnhat(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('docnhat'); 
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
}
function showrecentposts_img_suckhoe(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('suckhoe'); 
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
}
function showrecentposts_img_doisong(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('doisong'); 
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
}
function showrecentposts_img_anh(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('anh'); 
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
}
function showrecentposts_img_thucpham(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('thucpham'); 
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
}
function showrecentposts_img_cuoi(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('cuoi'); 
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
}
function showrecentposts_img_yeu(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('yeu'); 
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
}
function showrecentposts_img_cuocsong(json) {
  for (var i = 0; i < numposts_img; i++) {
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
    var container = document.getElementById('cuocsong'); 
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
}