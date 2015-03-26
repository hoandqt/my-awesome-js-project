// ----------------------------------------
// SHOW RECENT POSTS 
// ----------------------------------------
function showrecentposts(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('hlrpsb'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_tinthethao(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('tinthethao'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_giaitri(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('giaitri'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_gaixinh(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('gaixinh'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_khoahoc(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('khoahoc'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_thienvan(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('thienvan'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_congnghe(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('congnghe'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_didong(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('didong'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_tinhoc(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('tinhoc'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_www(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('www'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_docnhat(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('docnhat'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_suckhoe(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('suckhoe'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_doisong(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('doisong'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_anh(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('anh'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_chuyenla(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('chuyenla'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_chuabiet(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('chuabiet'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_dulich(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('dulich'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_thucpham(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('thucpham'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_thoitrang(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('thoitrang'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_cuocsong(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('cuocsong'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_yeu(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('yeu'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_cuoi(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('cuoi'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_qua(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('qua'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_cunghoangdao(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('cunghoangdao'); 
    last_part(posttitle,container);
  }
}
function showrecentposts_congiap(json) {
  for (var i = 0; i < numposts; i++) {
    var posttitle = first_part(json,i);
    var container = document.getElementById('congiap'); 
    last_part(posttitle,container);
  }
}
function first_part(json,i) {
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
    return posttitle;
}
function last_part(posttitle,container) {
    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
}