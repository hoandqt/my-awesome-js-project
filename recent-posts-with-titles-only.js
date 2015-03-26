// ----------------------------------------
// SHOW RECENT POSTS 
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
    
    var container = document.getElementById('hlrpsb'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_tinthethao(json) {
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
    
    var container = document.getElementById('tinthethao'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_giaitri(json) {
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
    
    var container = document.getElementById('giaitri'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_gaixinh(json) {
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
    
    var container = document.getElementById('gaixinh'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_khoahoc(json) {
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
    
    var container = document.getElementById('khoahoc'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_thienvan(json) {
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
    
    var container = document.getElementById('thienvan'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_congnghe(json) {
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
    
    var container = document.getElementById('congnghe'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_didong(json) {
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
    
    var container = document.getElementById('didong'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_tinhoc(json) {
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
    
    var container = document.getElementById('tinhoc'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_www(json) {
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
    
    var container = document.getElementById('www'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_docnhat(json) {
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
    
    var container = document.getElementById('docnhat'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_suckhoe(json) {
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
    
    var container = document.getElementById('suckhoe'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_doisong(json) {
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
    
    var container = document.getElementById('doisong'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_anh(json) {
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
    
    var container = document.getElementById('anh'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_chuyenla(json) {
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
    
    var container = document.getElementById('chuyenla'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_chuabiet(json) {
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
    
    var container = document.getElementById('chuabiet'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_dulich(json) {
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
    
    var container = document.getElementById('dulich'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_thucpham(json) {
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
    
    var container = document.getElementById('thucpham'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_thoitrang(json) {
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
    
    var container = document.getElementById('thoitrang'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_cuocsong(json) {
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
    
    var container = document.getElementById('cuocsong'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_yeu(json) {
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
    
    var container = document.getElementById('yeu'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_cuoi(json) {
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
    
    var container = document.getElementById('cuoi'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_qua(json) {
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
    
    var container = document.getElementById('qua'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_cunghoangdao(json) {
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
    
    var container = document.getElementById('cunghoangdao'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}
function showrecentposts_congiap(json) {
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
    
    var container = document.getElementById('congiap'); 

    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
  }
}