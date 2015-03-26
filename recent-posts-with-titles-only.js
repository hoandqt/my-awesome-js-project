// ----------------------------------------
// SHOW RECENT POSTS 
// ----------------------------------------
function showrecentposts(json) {

  for (var i = 0; i < json.feed.openSearch$itemsPerPage[$t]; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('hlrpsb'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_tinthethao(json) { //1
  numposts = json.feed.entry.length;
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('tinthethao'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_giaitri(json) { //2
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('giaitri'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_gaixinh(json) { //3
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('gaixinh'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_khoahoc(json) { //4
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('khoahoc'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_thienvan(json) { //5
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('thienvan'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_congnghe(json) { //6
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('congnghe'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_didong(json) { //7
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('didong'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_tinhoc(json) { //8
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('tinhoc'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_www(json) { //9
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('www'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_docnhat(json) { //10
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('docnhat'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_suckhoe(json) { //11
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('suckhoe'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_doisong(json) { //12
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('doisong'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_anh(json) { //13
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('anh'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_chuyenla(json) { //14
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('chuyenla'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_chuabiet(json) { //15
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('chuabiet'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_dulich(json) { //16
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('dulich'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_thucpham(json) { //17
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('thucpham'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_thoitrang(json) { //18
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('thoitrang'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_cuocsong(json) { //19
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('cuocsong'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_yeu(json) { //20
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('yeu'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_cuoi(json) { //21
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('cuoi'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_qua(json) { //22
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('qua'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_cunghoangdao(json) { //23
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('cunghoangdao'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_congiap(json) { //24
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('congiap'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_doimat(json) { //25
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('doimat'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_giacngu(json) { //26
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('giacngu'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_mattham(json) { //27
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('mattham'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_trinho(json) { //28
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('trinho'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_rang(json) { //29
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('rang'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_mobung(json) { //30
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('mobung'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_da(json) { //31
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('da'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_tangcan(json) { //32
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('tangcan'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_chieucao(json) { //33
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('chieucao'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_daurang(json) { //34
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('daurang'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_cobap(json) { //35
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('cobap'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_cobung(json) { //36
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('cobung'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_songkhoe(json) { //37
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('songkhoe'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_giamcan(json) { //38
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('giamcan'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_trimun(json) { //39
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('trimun'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_ungthu(json) { //40
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('ungthu'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_caythuoc(json) { //41
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('caythuoc'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_songlau(json) { //42
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('songlau'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_laugia(json) { //43
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('laugia'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_hanhphuc(json) { //44
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('hanhphuc'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_uongruou(json) { //45
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('uongruou'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_gioitinh(json) { //46
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('gioitinh'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_truyen(json) { //47
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('truyen'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_ngon(json) { //48
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('ngon'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_muasamonline(json) { //49
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('muasamonline'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_dodilam(json) { //50
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('dodilam'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_dodaopho(json) { //51
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('dodaopho'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_quanjean(json) { //52
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('quanjean'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_tuixach(json) { //53
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('tuixach'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_giay(json) { //54
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('giay'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_aokhoac(json) { //55
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('aokhoac'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_vay(json) { //56
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('vay'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_somi(json) { //57
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('somi'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_hoctap(json) { //58
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('hoctap'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_tienganh(json) { //59
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('tienganh'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_lamgiau(json) { //60
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('lamgiau'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_kiemtien(json) { //61
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('kiemtien'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_vieclam(json) { //62
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('vieclam'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_xe(json) { //63
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('xe'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_nha(json) { //64
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('nha'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_thietkeweb(json) { //65
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('thietkeweb'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_face(json) { //66
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('face'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_game(json) { //67
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('game'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_hai(json) { //68
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('hai'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_video(json) { //69
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('video'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_ngonnguanh(json) { //70
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('ngonnguanh'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_bestquotes365(json) { //71
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('bestquotes365'); 
    title_last_part(posttitle,container);
  }
}
function showrecentposts_coc(json) { //72
  for (var i = 0; i < numposts; i++) {
    var posttitle = title_first_part(json,i);
    var container = document.getElementById('coc'); 
    title_last_part(posttitle,container);
  }
}
function title_first_part(json,i) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) return;
    for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
            posturl = entry.link[k].href;
            break;
        }
    }
    posttitle = posttitle.link(posturl);
    return posttitle;
}
function title_last_part(posttitle,container) {
    var div = document.createElement("div");
    div.className = "bbrecpost2";
    var span = document.createElement("span");
    span.innerHTML = posttitle;
    div.appendChild(span);
    container.appendChild(div);
}