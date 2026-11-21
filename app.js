const T={
uz:{n:"Namoz",home:"Bosh sahifa",tasbeh:"Tasbex",qibla:"Qibla kompas",world:"Dunyo vaqti",next:"Keyingi namoz",left:"qoldi",Fajr:"Bomdod",Sunrise:"Quyosh",Dhuhr:"Peshin",Asr:"Asr",Maghrib:"Shom",Isha:"Xufton",non:"🔔 Xabarnomani yoqish",noff:"🔕 Xabarnomani o‘chirish",gps:"📍 Joylashuvni aniqlash",loc:"Joylashuv",time:"Namoz vaqti keldi",rst:"Tozalash",rounds:"Aylanishlar",qsens:"Kompasni yoqish",qloc:"📍 Joylashuvni yangilash",qh:"Qibla yo‘nalishi",qhint:"Telefonni tekis ushlang. Yuqoridagi uchburchak Ka’ba belgisiga to‘g‘ri kelganda qibla topilgan.",qdeg:"Shimoldan qibla burchagi",tz:"Soat mintaqasi",calc:"Hisoblash: MWL, Hanafiy asr"},
en:{n:"Prayer",home:"Home",tasbeh:"Tasbeeh",qibla:"Qibla compass",world:"World time",next:"Next prayer",left:"left",Fajr:"Fajr",Sunrise:"Sunrise",Dhuhr:"Dhuhr",Asr:"Asr",Maghrib:"Maghrib",Isha:"Isha",non:"🔔 Enable notifications",noff:"🔕 Disable notifications",gps:"📍 Detect my location",loc:"Location",time:"It’s prayer time",rst:"Reset",rounds:"Rounds",qsens:"Start compass",qloc:"📍 Update location",qh:"Qibla direction",qhint:"Hold your phone flat. When the top marker lines up with the Kaaba icon, you are facing the Qibla.",qdeg:"Qibla bearing from north",tz:"Time zone",calc:"Method: MWL, Hanafi Asr"},
ru:{n:"Намаз",home:"Главная",tasbeh:"Тасбих",qibla:"Компас киблы",world:"Мировое время",next:"Следующий намаз",left:"осталось",Fajr:"Фаджр",Sunrise:"Восход",Dhuhr:"Зухр",Asr:"Аср",Maghrib:"Магриб",Isha:"Иша",non:"🔔 Включить уведомления",noff:"🔕 Выключить уведомления",gps:"📍 Определить местоположение",loc:"Местоположение",time:"Время намаза",rst:"Сбросить",rounds:"Круги",qsens:"Включить компас",qloc:"📍 Обновить местоположение",qh:"Направление киблы",qhint:"Держите телефон ровно. Когда верхний маркер совпадёт со значком Каабы, вы смотрите в сторону киблы.",qdeg:"Азимут киблы от севера",tz:"Часовой пояс",calc:"Метод: MWL, ханафитский аср"},
tr:{n:"Namaz",home:"Ana sayfa",tasbeh:"Tesbih",qibla:"Kıble pusulası",world:"Dünya saati",next:"Sonraki namaz",left:"kaldı",Fajr:"Sabah",Sunrise:"Güneş",Dhuhr:"Öğle",Asr:"İkindi",Maghrib:"Akşam",Isha:"Yatsı",non:"🔔 Bildirimleri aç",noff:"🔕 Bildirimleri kapat",gps:"📍 Konumumu bul",loc:"Konum",time:"Namaz vakti geldi",rst:"Sıfırla",rounds:"Tur",qsens:"Pusulayı başlat",qloc:"📍 Konumu güncelle",qh:"Kıble yönü",qhint:"Telefonu düz tutun. Üstteki işaret Kâbe simgesiyle hizalanınca kıbleye bakıyorsunuz.",qdeg:"Kuzeyden kıble açısı",tz:"Saat dilimi",calc:"Yöntem: MWL, Hanefi ikindi"},
ar:{n:"الصلاة",home:"الرئيسية",tasbeh:"المسبحة",qibla:"بوصلة القبلة",world:"توقيت العالم",next:"الصلاة القادمة",left:"متبقي",Fajr:"الفجر",Sunrise:"الشروق",Dhuhr:"الظهر",Asr:"العصر",Maghrib:"المغرب",Isha:"العشاء",non:"🔔 تفعيل الإشعارات",noff:"🔕 إيقاف الإشعارات",gps:"📍 تحديد موقعي",loc:"الموقع",time:"حان وقت الصلاة",rst:"إعادة",rounds:"الدورات",qsens:"تشغيل البوصلة",qloc:"📍 تحديث الموقع",qh:"اتجاه القبلة",qhint:"أمسك الهاتف أفقيًا. عندما تتطابق العلامة العلوية مع أيقونة الكعبة تكون متجهًا إلى القبلة.",qdeg:"زاوية القبلة من الشمال",tz:"المنطقة الزمنية",calc:"الطريقة: رابطة العالم الإسلامي، عصر حنفي"}
};
const LN={uz:"O‘zbekcha",en:"English",ru:"Русский",tr:"Türkçe",ar:"العربية"};
const CTRY="AF:Asia/Kabul,AL:Europe/Tirane,DZ:Africa/Algiers,AD:Europe/Andorra,AO:Africa/Luanda,AG:America/Antigua,AR:America/Argentina/Buenos_Aires,AM:Asia/Yerevan,AU:Australia/Sydney,AT:Europe/Vienna,AZ:Asia/Baku,BS:America/Nassau,BH:Asia/Bahrain,BD:Asia/Dhaka,BB:America/Barbados,BY:Europe/Minsk,BE:Europe/Brussels,BZ:America/Belize,BJ:Africa/Porto-Novo,BT:Asia/Thimphu,BO:America/La_Paz,BA:Europe/Sarajevo,BW:Africa/Gaborone,BR:America/Sao_Paulo,BN:Asia/Brunei,BG:Europe/Sofia,BF:Africa/Ouagadougou,BI:Africa/Bujumbura,KH:Asia/Phnom_Penh,CM:Africa/Douala,CA:America/Toronto,CV:Atlantic/Cape_Verde,CF:Africa/Bangui,TD:Africa/Ndjamena,CL:America/Santiago,CN:Asia/Shanghai,CO:America/Bogota,KM:Indian/Comoro,CG:Africa/Brazzaville,CD:Africa/Kinshasa,CR:America/Costa_Rica,CI:Africa/Abidjan,HR:Europe/Zagreb,CU:America/Havana,CY:Asia/Nicosia,CZ:Europe/Prague,DK:Europe/Copenhagen,DJ:Africa/Djibouti,DM:America/Dominica,DO:America/Santo_Domingo,EC:America/Guayaquil,EG:Africa/Cairo,SV:America/El_Salvador,GQ:Africa/Malabo,ER:Africa/Asmara,EE:Europe/Tallinn,SZ:Africa/Mbabane,ET:Africa/Addis_Ababa,FJ:Pacific/Fiji,FI:Europe/Helsinki,FR:Europe/Paris,GA:Africa/Libreville,GM:Africa/Banjul,GE:Asia/Tbilisi,DE:Europe/Berlin,GH:Africa/Accra,GR:Europe/Athens,GD:America/Grenada,GT:America/Guatemala,GN:Africa/Conakry,GW:Africa/Bissau,GY:America/Guyana,HT:America/Port-au-Prince,HN:America/Tegucigalpa,HU:Europe/Budapest,IS:Atlantic/Reykjavik,IN:Asia/Kolkata,ID:Asia/Jakarta,IR:Asia/Tehran,IQ:Asia/Baghdad,IE:Europe/Dublin,IL:Asia/Jerusalem,IT:Europe/Rome,JM:America/Jamaica,JP:Asia/Tokyo,JO:Asia/Amman,KZ:Asia/Almaty,KE:Africa/Nairobi,KI:Pacific/Tarawa,KP:Asia/Pyongyang,KR:Asia/Seoul,XK:Europe/Belgrade,KW:Asia/Kuwait,KG:Asia/Bishkek,LA:Asia/Vientiane,LV:Europe/Riga,LB:Asia/Beirut,LS:Africa/Maseru,LR:Africa/Monrovia,LY:Africa/Tripoli,LI:Europe/Vaduz,LT:Europe/Vilnius,LU:Europe/Luxembourg,MG:Indian/Antananarivo,MW:Africa/Blantyre,MY:Asia/Kuala_Lumpur,MV:Indian/Maldives,ML:Africa/Bamako,MT:Europe/Malta,MH:Pacific/Majuro,MR:Africa/Nouakchott,MU:Indian/Mauritius,MX:America/Mexico_City,FM:Pacific/Pohnpei,MD:Europe/Chisinau,MC:Europe/Monaco,MN:Asia/Ulaanbaatar,ME:Europe/Podgorica,MA:Africa/Casablanca,MZ:Africa/Maputo,MM:Asia/Yangon,NA:Africa/Windhoek,NR:Pacific/Nauru,NP:Asia/Kathmandu,NL:Europe/Amsterdam,NZ:Pacific/Auckland,NI:America/Managua,NE:Africa/Niamey,NG:Africa/Lagos,MK:Europe/Skopje,NO:Europe/Oslo,OM:Asia/Muscat,PK:Asia/Karachi,PW:Pacific/Palau,PS:Asia/Gaza,PA:America/Panama,PG:Pacific/Port_Moresby,PY:America/Asuncion,PE:America/Lima,PH:Asia/Manila,PL:Europe/Warsaw,PT:Europe/Lisbon,QA:Asia/Qatar,RO:Europe/Bucharest,RU:Europe/Moscow,RW:Africa/Kigali,KN:America/St_Kitts,LC:America/St_Lucia,VC:America/St_Vincent,WS:Pacific/Apia,SM:Europe/San_Marino,ST:Africa/Sao_Tome,SA:Asia/Riyadh,SN:Africa/Dakar,RS:Europe/Belgrade,SC:Indian/Mahe,SL:Africa/Freetown,SG:Asia/Singapore,SK:Europe/Bratislava,SI:Europe/Ljubljana,SB:Pacific/Guadalcanal,SO:Africa/Mogadishu,ZA:Africa/Johannesburg,SS:Africa/Juba,ES:Europe/Madrid,LK:Asia/Colombo,SD:Africa/Khartoum,SR:America/Paramaribo,SE:Europe/Stockholm,CH:Europe/Zurich,SY:Asia/Damascus,TW:Asia/Taipei,TJ:Asia/Dushanbe,TZ:Africa/Dar_es_Salaam,TH:Asia/Bangkok,TL:Asia/Dili,TG:Africa/Lome,TO:Pacific/Tongatapu,TT:America/Port_of_Spain,TN:Africa/Tunis,TR:Europe/Istanbul,TM:Asia/Ashgabat,TV:Pacific/Funafuti,UG:Africa/Kampala,UA:Europe/Kiev,AE:Asia/Dubai,GB:Europe/London,US:America/New_York,UY:America/Montevideo,UZ:Asia/Tashkent,VU:Pacific/Efate,VA:Europe/Vatican,VE:America/Caracas,VN:Asia/Ho_Chi_Minh,YE:Asia/Aden,ZM:Africa/Lusaka,ZW:Africa/Harare".split(",").map(s=>{const i=s.indexOf(":");return[s.slice(0,i),s.slice(i+1),""]});
const FM={};
const SP={uz:"Davlat qidirish…",en:"Search country…",ru:"Поиск страны…",tr:"Ülke ara…",ar:"ابحث عن دولة…"};
const $=s=>document.querySelector(s);
const LS={g(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},s(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let lang=LS.g("lang","uz"),loc=LS.g("loc",{lat:41.3111,lng:69.2797}),notifOn=LS.g("notif",false),cnt=LS.g("cnt",0),tgt=LS.g("tgt",33),rnd=LS.g("rnd",0);
let heading=null,absSeen=false,fired={};
const t=k=>(T[lang]||T.uz)[k];
const R=Math.PI/180,sn=a=>Math.sin(a*R),cs=a=>Math.cos(a*R);
const ac=x=>Math.acos(Math.max(-1,Math.min(1,x)))/R;
const pad=n=>String(n).padStart(2,"0");

function calc(d){
  const D=Date.UTC(d.getFullYear(),d.getMonth(),d.getDate(),12)/864e5+2440587.5-2451545;
  const g=(357.529+.98560028*D)%360,q=(280.459+.98564736*D)%360;
  const L=q+1.915*sn(g)+.02*sn(2*g),e=23.439-4e-7*D;
  const RA=((Math.atan2(cs(e)*sn(L),cs(L))/R/15)%24+24)%24;
  let eq=q/15-RA;if(eq>12)eq-=24;if(eq<-12)eq+=24;
  const dec=Math.asin(sn(e)*sn(L))/R,lat=loc.lat;
  const tz=-d.getTimezoneOffset()/60,noon=12+tz-loc.lng/15-eq;
  const ha=a=>ac((-sn(a)-sn(dec)*sn(lat))/(cs(dec)*cs(lat)))/15;
  const alt=Math.atan(1/(2+Math.tan(Math.abs(lat-dec)*R)))/R;
  const asr=noon+ac((sn(alt)-sn(dec)*sn(lat))/(cs(dec)*cs(lat)))/15;
  return{Fajr:noon-ha(18),Sunrise:noon-ha(.833),Dhuhr:noon+.02,Asr:asr,Maghrib:noon+ha(.833),Isha:noon+ha(17)};
}
const mins=h=>Math.round((((h%24)+24)%24)*60)%1440;
const fm=h=>isNaN(h)?"--:--":pad(Math.floor(mins(h)/60))+":"+pad(mins(h)%60);

function show(){
  const v=(location.hash||"#home").slice(1);
  const id=["home","tasbeh","qibla","world"].includes(v)?v:"home";
  document.querySelectorAll("section").forEach(s=>s.classList.toggle("on",s.id===id));
  document.querySelectorAll("#nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+id));
}
function render(){
  document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.title=t("n");$(".logo").textContent="🕌 "+t("n");
  $("#nav").innerHTML=["home","tasbeh","qibla","world"].map(k=>`<a href="#${k}">${t(k)}</a>`).join("");
  $("#lb").textContent="🌐 "+lang.toUpperCase();
  $("#lm").innerHTML=Object.keys(LN).map(k=>`<button data-l="${k}">${LN[k]}</button>`).join("");
  $("#nb").textContent=notifOn?t("noff"):t("non");$("#lc").textContent=t("gps");
  $("#th").textContent=t("tasbeh");$("#tl").textContent=t("rounds");$("#tz").textContent=t("rst");
  $("#tg").innerHTML=[33,99,100,0].map(n=>`<button data-t="${n}" class="${n===tgt?"p":""}">${n||"♾️"}</button>`).join("");
  $("#qh").textContent=t("qh");$("#qt").textContent=t("qhint");$("#qs").textContent=t("qsens");$("#ql").textContent=t("qloc");
  $("#wh").textContent=t("world");
  let dn=null;try{dn=new Intl.DisplayNames([lang],{type:"region"})}catch(e){}
  CTRY.forEach(c=>{let n=c[0];try{n=dn?dn.of(c[0]):c[0]}catch(e){}c[2]=n});
  CTRY.sort((a,b)=>a[0]==="UZ"?-1:b[0]==="UZ"?1:a[2].localeCompare(b[2],lang));
  $("#ws").placeholder=SP[lang]||SP.en;
  $("#wg").innerHTML=CTRY.map((c,i)=>`<div class="wc" data-n="${c[2].toLowerCase()} ${c[0].toLowerCase()} ${c[1].toLowerCase().replace(/_/g," ")}"><span class="mut" style="text-align:start;display:block">${c[2]}</span><b id="w${i}"></b><span class="mut" id="wd${i}" style="text-align:start;display:block"></span></div>`).join("");
  $("#ws").oninput=()=>{const q=$("#ws").value.trim().toLowerCase();document.querySelectorAll("#wg .wc").forEach(e=>e.style.display=e.dataset.n.includes(q)?"":"none")};
  drawT();drawQ();show();tick();
}
function tick(){
  const now=new Date(),loca=lang==="uz"?"uz-UZ":lang==="ar"?"ar":lang;
  $("#clk").textContent=now.toLocaleTimeString("en-GB");
  $("#dt").textContent=now.toLocaleDateString(loca,{weekday:"long",year:"numeric",month:"long",day:"numeric"});
  const pt=calc(now),cur=now.getHours()*60+now.getMinutes();
  const keys=["Fajr","Sunrise","Dhuhr","Asr","Maghrib","Isha"];
  let nx=null;
  for(const k of keys){if(mins(pt[k])*1>cur){nx=k;break}}
  const nxMin=nx?mins(pt[nx]):mins(pt.Fajr)+1440;
  if(!nx)nx="Fajr";
  const sec=nxMin*60-(cur*60+now.getSeconds());
  $("#nxl").textContent=t("next");$("#nxn").textContent=t(nx);$("#nxt").textContent=fm(pt[nx]);
  $("#nxr").textContent=pad(Math.floor(sec/3600))+":"+pad(Math.floor(sec%3600/60))+":"+pad(sec%60)+" "+t("left");
  $("#pt").innerHTML=keys.map(k=>`<div class="row ${k===nx?"cur":""}"><span>${t(k)}</span><span>${fm(pt[k])}</span></div>`).join("");
  $("#ln").textContent=`${t("loc")}: ${loc.lat.toFixed(2)}, ${loc.lng.toFixed(2)} · ${t("tz")}: ${Intl.DateTimeFormat().resolvedOptions().timeZone} · ${t("calc")}`;
  if(notifOn){
    for(const k of ["Fajr","Dhuhr","Asr","Maghrib","Isha"]){
      const key=now.toDateString()+k;
      if(mins(pt[k])===cur&&!fired[key]){fired[key]=1;alertPrayer(k)}
    }
  }
  if(location.hash==="#world")CTRY.forEach((c,i)=>{
    const a=document.getElementById("w"+i);if(!a||a.parentNode.style.display==="none")return;
    try{
      const k=c[1]+loca,f=FM[k]||(FM[k]={t:new Intl.DateTimeFormat("en-GB",{timeZone:c[1],hour:"2-digit",minute:"2-digit",second:"2-digit"}),d:new Intl.DateTimeFormat(loca,{timeZone:c[1],weekday:"short",day:"numeric",month:"short"})});
      a.textContent=f.t.format(now);
      document.getElementById("wd"+i).textContent=f.d.format(now);
    }catch(e){}
  });
}
function beep(){
  try{const c=new (window.AudioContext||window.webkitAudioContext)();
  [0,.35,.7].forEach(d=>{const o=c.createOscillator(),g=c.createGain();o.frequency.value=660;o.connect(g);g.connect(c.destination);g.gain.setValueAtTime(.2,c.currentTime+d);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d+.3);o.start(c.currentTime+d);o.stop(c.currentTime+d+.3)})}catch(e){}
}
function alertPrayer(k){
  const msg=`${t(k)} — ${t("time")}`;
  const el=$("#toast");el.textContent="🕌 "+msg;el.style.display="block";setTimeout(()=>el.style.display="none",15000);
  beep();try{navigator.vibrate&&navigator.vibrate([300,150,300])}catch(e){}
  try{if("Notification"in window&&Notification.permission==="granted")new Notification(t("n"),{body:msg})}catch(e){}
}
$("#nb").onclick=async()=>{
  if(!notifOn){
    try{if("Notification"in window&&Notification.permission==="default")await Notification.requestPermission()}catch(e){}
    beep();notifOn=true;
  }else notifOn=false;
  LS.s("notif",notifOn);render();
};
function getLoc(){
  if(!navigator.geolocation)return;
  navigator.geolocation.getCurrentPosition(p=>{loc={lat:p.coords.latitude,lng:p.coords.longitude};LS.s("loc",loc);tick();drawQ()},()=>{},{timeout:10000});
}
$("#lc").onclick=getLoc;$("#ql").onclick=getLoc;

/* Tasbeh */
function drawT(){$("#tc").textContent=cnt;$("#tr").textContent=rnd;
  $("#tg").querySelectorAll("button").forEach(b=>b.className=+b.dataset.t===tgt?"p":"")}
function hit(){
  cnt++;try{navigator.vibrate&&navigator.vibrate(15)}catch(e){}
  if(tgt&&cnt>=tgt){cnt=0;rnd++;try{navigator.vibrate&&navigator.vibrate([80,60,80])}catch(e){}}
  LS.s("cnt",cnt);LS.s("rnd",rnd);drawT();
}
$("#tc").onclick=hit;
$("#tc").onkeydown=e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();hit()}};
$("#tg").onclick=e=>{const n=e.target.dataset.t;if(n){tgt=+n;cnt=0;LS.s("tgt",tgt);LS.s("cnt",0);drawT()}};
$("#tz").onclick=()=>{cnt=0;rnd=0;LS.s("cnt",0);LS.s("rnd",0);drawT()};

/* Qibla */
function bearing(){
  const f1=loc.lat*R,f2=21.4225*R,dl=(39.8262-loc.lng)*R;
  return(Math.atan2(Math.sin(dl)*Math.cos(f2),Math.cos(f1)*Math.sin(f2)-Math.sin(f1)*Math.cos(f2)*Math.cos(dl))/R+360)%360;
}
function drawQ(){
  const b=bearing(),h=heading||0;
  $("#qd").textContent=Math.round(b)+"°";
  $("#dial").style.transform=`rotate(${-h}deg)`;
  $("#kb").style.transform=`rotate(${b}deg)`;
  let diff=Math.abs(((b-h)%360+540)%360-180);
  $("#dw").className="dw"+(heading!=null&&diff<4?" ok":"");
}
$("#qs").onclick=async()=>{
  try{if(typeof DeviceOrientationEvent!=="undefined"&&DeviceOrientationEvent.requestPermission){
    const r=await DeviceOrientationEvent.requestPermission();if(r!=="granted")return}}catch(e){}
  const h=e=>{
    let v=null;
    if(e.webkitCompassHeading!=null)v=e.webkitCompassHeading;
    else if(e.type==="deviceorientationabsolute"&&e.alpha!=null){absSeen=true;v=360-e.alpha}
    else if(!absSeen&&e.absolute&&e.alpha!=null)v=360-e.alpha;
    if(v!=null){heading=v;drawQ()}
  };
  addEventListener("deviceorientationabsolute",h,true);
  addEventListener("deviceorientation",h,true);
};

/* Til */
$("#lb").onclick=e=>{e.stopPropagation();$("#lm").classList.toggle("open")};
$("#lm").onclick=e=>{const l=e.target.dataset.l;if(l){lang=l;LS.s("lang",l);render()}};
document.addEventListener("click",()=>$("#lm").classList.remove("open"));
addEventListener("hashchange",()=>{show();tick()});
render();setInterval(tick,1000);
