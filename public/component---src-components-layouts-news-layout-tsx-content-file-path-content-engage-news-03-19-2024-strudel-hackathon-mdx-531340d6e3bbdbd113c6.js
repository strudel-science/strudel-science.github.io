(self.webpackChunkstrudel=self.webpackChunkstrudel||[]).push([[882],{1535:function(t,e,A){"use strict";var n=A(4836);e.Z=void 0;var a=n(A(4938)),r=A(5893),s=(0,a.default)((0,r.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),"Circle");e.Z=s},7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,A=36e5,n="millisecond",a="second",r="minute",s="hour",i="day",c="week",o="month",u="quarter",l="year",f="date",h="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],A=t%100;return"["+t+(e[(A-20)%10]||e[A]||e[0])+"]"}},p=function(t,e,A){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(A)+t},E={s:p,z:function(t){var e=-t.utcOffset(),A=Math.abs(e),n=Math.floor(A/60),a=A%60;return(e<=0?"+":"-")+p(n,2,"0")+":"+p(a,2,"0")},m:function t(e,A){if(e.date()<A.date())return-t(A,e);var n=12*(A.year()-e.year())+(A.month()-e.month()),a=e.clone().add(n,o),r=A-a<0,s=e.clone().add(n+(r?-1:1),o);return+(-(n+(A-a)/(r?a-s:s-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:l,w:c,d:i,D:f,h:s,m:r,s:a,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",w={};w[b]=m;var B="$isDayjsObject",$=function(t){return t instanceof y||!(!t||!t[B])},j=function t(e,A,n){var a;if(!e)return b;if("string"==typeof e){var r=e.toLowerCase();w[r]&&(a=r),A&&(w[r]=A,a=r);var s=e.split("-");if(!a&&s.length>1)return t(s[0])}else{var i=e.name;w[i]=e,a=i}return!n&&a&&(b=a),a||!n&&b},D=function(t,e){if($(t))return t.clone();var A="object"==typeof e?e:{};return A.date=t,A.args=arguments,new y(A)},v=E;v.l=j,v.i=$,v.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function m(t){this.$L=j(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[B]=!0}var p=m.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,A=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(d);if(n){var a=n[2]-1||0,r=(n[7]||"0").substring(0,3);return A?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return v},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var A=D(t);return this.startOf(e)<=A&&A<=this.endOf(e)},p.isAfter=function(t,e){return D(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<D(t)},p.$g=function(t,e,A){return v.u(t)?this[e]:this.set(A,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var A=this,n=!!v.u(e)||e,u=v.p(t),h=function(t,e){var a=v.w(A.$u?Date.UTC(A.$y,e,t):new Date(A.$y,e,t),A);return n?a:a.endOf(i)},d=function(t,e){return v.w(A.toDate()[t].apply(A.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),A)},g=this.$W,m=this.$M,p=this.$D,E="set"+(this.$u?"UTC":"");switch(u){case l:return n?h(1,0):h(31,11);case o:return n?h(1,m):h(0,m+1);case c:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(n?p-w:p+(6-w),m);case i:case f:return d(E+"Hours",0);case s:return d(E+"Minutes",1);case r:return d(E+"Seconds",2);case a:return d(E+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var A,c=v.p(t),u="set"+(this.$u?"UTC":""),h=(A={},A[i]=u+"Date",A[f]=u+"Date",A[o]=u+"Month",A[l]=u+"FullYear",A[s]=u+"Hours",A[r]=u+"Minutes",A[a]=u+"Seconds",A[n]=u+"Milliseconds",A)[c],d=c===i?this.$D+(e-this.$W):e;if(c===o||c===l){var g=this.clone().set(f,1);g.$d[h](d),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](d);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[v.p(t)]()},p.add=function(n,u){var f,h=this;n=Number(n);var d=v.p(u),g=function(t){var e=D(h);return v.w(e.date(e.date()+Math.round(t*n)),h)};if(d===o)return this.set(o,this.$M+n);if(d===l)return this.set(l,this.$y+n);if(d===i)return g(1);if(d===c)return g(7);var m=(f={},f[r]=e,f[s]=A,f[a]=t,f)[d]||1,p=this.$d.getTime()+n*m;return v.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,A=this.$locale();if(!this.isValid())return A.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",a=v.z(this),r=this.$H,s=this.$m,i=this.$M,c=A.weekdays,o=A.months,u=A.meridiem,l=function(t,A,a,r){return t&&(t[A]||t(e,n))||a[A].slice(0,r)},f=function(t){return v.s(r%12||12,t,"0")},d=u||function(t,e,A){var n=t<12?"AM":"PM";return A?n.toLowerCase():n};return n.replace(g,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return v.s(e.$y,4,"0");case"M":return i+1;case"MM":return v.s(i+1,2,"0");case"MMM":return l(A.monthsShort,i,o,3);case"MMMM":return l(o,i);case"D":return e.$D;case"DD":return v.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(A.weekdaysMin,e.$W,c,2);case"ddd":return l(A.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(r);case"HH":return v.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return d(r,s,!0);case"A":return d(r,s,!1);case"m":return String(s);case"mm":return v.s(s,2,"0");case"s":return String(e.$s);case"ss":return v.s(e.$s,2,"0");case"SSS":return v.s(e.$ms,3,"0");case"Z":return a}return null}(t)||a.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,f,h){var d,g=this,m=v.p(f),p=D(n),E=(p.utcOffset()-this.utcOffset())*e,b=this-p,w=function(){return v.m(g,p)};switch(m){case l:d=w()/12;break;case o:d=w();break;case u:d=w()/3;break;case c:d=(b-E)/6048e5;break;case i:d=(b-E)/864e5;break;case s:d=b/A;break;case r:d=b/e;break;case a:d=b/t;break;default:d=b}return h?d:v.a(d)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return w[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var A=this.clone(),n=j(t,e,!0);return n&&(A.$L=n),A},p.clone=function(){return v.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),Y=y.prototype;return D.prototype=Y,[["$ms",n],["$s",a],["$m",r],["$H",s],["$W",i],["$M",o],["$y",l],["$D",f]].forEach((function(t){Y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,y,D),t.$i=!0),D},D.locale=j,D.isDayjs=$,D.unix=function(t){return D(1e3*t)},D.en=w[b],D.Ls=w,D.p={},D}()},8734:function(t){t.exports=function(){"use strict";return function(t,e){var A=e.prototype,n=A.format;A.format=function(t){var e=this,A=this.$locale();if(!this.isValid())return n.bind(this)(t);var a=this.$utils(),r=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return A.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return A.ordinal(e.week(),"W");case"w":case"ww":return a.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return a.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return a.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}}));return n.bind(this)(r)}}}()},9387:function(t){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(A,n,a){var r,s=function(t,A,n){void 0===n&&(n={});var a=new Date(t),r=function(t,A){void 0===A&&(A={});var n=A.timeZoneName||"short",a=t+"|"+n,r=e[a];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),e[a]=r),r}(A,n);return r.formatToParts(a)},i=function(e,A){for(var n=s(e,A),r=[],i=0;i<n.length;i+=1){var c=n[i],o=c.type,u=c.value,l=t[o];l>=0&&(r[l]=parseInt(u,10))}var f=r[3],h=24===f?0:f,d=r[0]+"-"+r[1]+"-"+r[2]+" "+h+":"+r[4]+":"+r[5]+":000",g=+e;return(a.utc(d).valueOf()-(g-=g%1e3))/6e4},c=n.prototype;c.tz=function(t,e){void 0===t&&(t=r);var A=this.utcOffset(),n=this.toDate(),s=n.toLocaleString("en-US",{timeZone:t}),i=Math.round((n-new Date(s))/1e3/60),c=a(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(n.getTimezoneOffset()/15)-i,!0);if(e){var o=c.utcOffset();c=c.add(A-o,"minute")}return c.$x.$timezone=t,c},c.offsetName=function(t){var e=this.$x.$timezone||a.tz.guess(),A=s(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return A&&A.value};var o=c.startOf;c.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return o.call(this,t,e);var A=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(A,t,e).tz(this.$x.$timezone,!0)},a.tz=function(t,e,A){var n=A&&e,s=A||e||r,c=i(+a(),s);if("string"!=typeof t)return a(t).tz(s);var o=function(t,e,A){var n=t-60*e*1e3,a=i(n,A);if(e===a)return[n,e];var r=i(n-=60*(a-e)*1e3,A);return a===r?[n,a]:[t-60*Math.min(a,r)*1e3,Math.max(a,r)]}(a.utc(t,n).valueOf(),c,s),u=o[0],l=o[1],f=a(u).utcOffset(l);return f.$x.$timezone=s,f},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(t){r=t}}}()},178:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,A=/([+-]|\d\d)/g;return function(n,a,r){var s=a.prototype;r.utc=function(t){return new a({date:t,utc:!0,args:arguments})},s.utc=function(e){var A=r(this.toDate(),{locale:this.$L,utc:!0});return e?A.add(this.utcOffset(),t):A},s.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var i=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),i.call(this,t)};var c=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else c.call(this)};var o=s.utcOffset;s.utcOffset=function(n,a){var r=this.$utils().u;if(r(n))return this.$u?0:r(this.$offset)?o.call(this):this.$offset;if("string"==typeof n&&(n=function(t){void 0===t&&(t="");var n=t.match(e);if(!n)return null;var a=(""+n[0]).match(A)||["-",0,0],r=a[0],s=60*+a[1]+ +a[2];return 0===s?0:"+"===r?s:-s}(n),null===n))return this;var s=Math.abs(n)<=16?60*n:n,i=this;if(a)return i.$offset=s,i.$u=0===n,i;if(0!==n){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(i=this.local().add(s+c,t)).$offset=s,i.$x.$localOffset=c}else i=this.utc();return i};var u=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var l=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var f=s.diff;s.diff=function(t,e,A){if(t&&this.$u===t.$u)return f.call(this,t,e,A);var n=this.local(),a=r(t).local();return f.call(n,a,e,A)}}}()},3458:function(t,e,A){"use strict";A.r(e),A.d(e,{Head:function(){return v},default:function(){return y}});var n=A(1151),a=A(7294),r=A(5725);function s(t){const e=Object.assign({p:"p",span:"span",em:"em",strong:"strong"},(0,n.ah)(),t.components);return a.createElement(a.Fragment,null,a.createElement(e.p,null,"The STRUDEL team hosted an in person hackathon at Berkeley Lab to help scientific teams prototype a web application over a few hours. Attendees learned about the STRUDEL Design System and explored available Task Flows to adapt them to address a development need for their team's software."),"\n",a.createElement(e.p,null,"Attendees ranged from beamline scientists at the Advanced Light Source, to Research Software Engineers and Open Source Software Researchers. The software they worked on developing ranged from computational analysis systems to searchable data repositories. It was a fun and interactive day with a lot of learning all around. Huge thank you to all the attendees who spent the day with us!"),"\n",a.createElement(r.ZP,{container:!0,spacing:2},a.createElement(r.ZP,{item:!0,xs:6,md:4},a.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; flex:1.45;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/strudel-web/static/9f96031cfc65cac9a7261966ee6a4731/2b56a/2024-03-19-hackathon0.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 69%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAFeYV4u8aP/xAAaEAACAwEBAAAAAAAAAAAAAAACAwABExEi/9oACAEBAAEFAraNEVltqMasItnnlT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAACAwADAAAAAAAAAAAAAAAAAREhMVJxkf/aAAgBAQAGPwJIXGDRuX4VfZh//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUHwMVH/2gAIAQEAAT8hvza/NQDiezmcyAtrM0CBRDbccGf/2gAMAwEAAgADAAAAEETP/8QAFREBAQAAAAAAAAAAAAAAAAAAEDH/2gAIAQMBAT8Qh//EABYRAQEBAAAAAAAAAAAAAAAAABEAMf/aAAgBAgEBPxBci//EAB4QAQACAQQDAAAAAAAAAAAAAAERIQAxQVHRcYGh/9oACAEBAAE/EJi3tGabvBkega6Qua32xV7OsQFmiQPc5H+AiEa8YpYjm9/M/9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Sarah helps an attendee with their app design."\n        title=""\n        src="/strudel-web/static/9f96031cfc65cac9a7261966ee6a4731/e5166/2024-03-19-hackathon0.jpg"\n        srcset="/strudel-web/static/9f96031cfc65cac9a7261966ee6a4731/f93b5/2024-03-19-hackathon0.jpg 300w,\n/strudel-web/static/9f96031cfc65cac9a7261966ee6a4731/b4294/2024-03-19-hackathon0.jpg 600w,\n/strudel-web/static/9f96031cfc65cac9a7261966ee6a4731/e5166/2024-03-19-hackathon0.jpg 1200w,\n/strudel-web/static/9f96031cfc65cac9a7261966ee6a4731/d9c39/2024-03-19-hackathon0.jpg 1800w,\n/strudel-web/static/9f96031cfc65cac9a7261966ee6a4731/df51d/2024-03-19-hackathon0.jpg 2400w,\n/strudel-web/static/9f96031cfc65cac9a7261966ee6a4731/2b56a/2024-03-19-hackathon0.jpg 3110w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),a.createElement(r.ZP,{item:!0,xs:6,md:4},a.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; flex:1.9;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/strudel-web/static/d7c18fdc92fcd1828b6b1793f096365f/2302e/2024-03-19-hackathon1.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 52.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAY2Wsgrisy//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDERIiM//aAAgBAQABBQISDQdbrT/SXmHRX//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ASf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwFn/8QAHBAAAgAHAAAAAAAAAAAAAAAAABEBAhAiMUFh/9oACAEBAAY/AuISpLDRaZP/xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhQWHw/9oACAEBAAE/IYsdK5y6R8zCuMtSPO1IjI2o/9oADAMBAAIAAwAAABAT7//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxBIin//xAAWEQEBAQAAAAAAAAAAAAAAAAAAIQH/2gAIAQIBAT8Q3Vf/xAAcEAACAwEAAwAAAAAAAAAAAAABEQAhMUFRcbH/2gAIAQEAAT8QMAgJoYXZ+CGxgMcF5fqBhYBukGTkBYHyXjbg8OEVAgm+z//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Hackathon attendees working on their apps while Rajshree assists."\n        title=""\n        src="/strudel-web/static/d7c18fdc92fcd1828b6b1793f096365f/e5166/2024-03-19-hackathon1.jpg"\n        srcset="/strudel-web/static/d7c18fdc92fcd1828b6b1793f096365f/f93b5/2024-03-19-hackathon1.jpg 300w,\n/strudel-web/static/d7c18fdc92fcd1828b6b1793f096365f/b4294/2024-03-19-hackathon1.jpg 600w,\n/strudel-web/static/d7c18fdc92fcd1828b6b1793f096365f/e5166/2024-03-19-hackathon1.jpg 1200w,\n/strudel-web/static/d7c18fdc92fcd1828b6b1793f096365f/d9c39/2024-03-19-hackathon1.jpg 1800w,\n/strudel-web/static/d7c18fdc92fcd1828b6b1793f096365f/df51d/2024-03-19-hackathon1.jpg 2400w,\n/strudel-web/static/d7c18fdc92fcd1828b6b1793f096365f/2302e/2024-03-19-hackathon1.jpg 5299w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),a.createElement(r.ZP,{item:!0,xs:6,md:4},a.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; flex:1.46;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/strudel-web/static/5b3752cc2ce98f1acc9f07977d519451/014b5/2024-03-19-hackathon2.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 68.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABsnk7Vzhv/8QAGhABAAEFAAAAAAAAAAAAAAAAARAAAhESIf/aAAgBAQABBQLMbBFzS9//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAgEBPwFT/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRABAQEAAwAAAAAAAAAAAAAAAQARMVHB/9oACAEBAAE/IYtxG2xDtnV7f//aAAwDAQACAAMAAAAQyD//xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAwEBPxAYv//EABURAQEAAAAAAAAAAAAAAAAAABEQ/9oACAECAQE/EEj/xAAcEAACAgIDAAAAAAAAAAAAAAABEQAhMVFhcYH/2gAIAQEAAT8QShh6gKLuE5hfAjPqYKykDXsQyqiQzP/Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Whiteboard diagram of a user interface flow"\n        title=""\n        src="/strudel-web/static/5b3752cc2ce98f1acc9f07977d519451/e5166/2024-03-19-hackathon2.jpg"\n        srcset="/strudel-web/static/5b3752cc2ce98f1acc9f07977d519451/f93b5/2024-03-19-hackathon2.jpg 300w,\n/strudel-web/static/5b3752cc2ce98f1acc9f07977d519451/b4294/2024-03-19-hackathon2.jpg 600w,\n/strudel-web/static/5b3752cc2ce98f1acc9f07977d519451/e5166/2024-03-19-hackathon2.jpg 1200w,\n/strudel-web/static/5b3752cc2ce98f1acc9f07977d519451/d9c39/2024-03-19-hackathon2.jpg 1800w,\n/strudel-web/static/5b3752cc2ce98f1acc9f07977d519451/df51d/2024-03-19-hackathon2.jpg 2400w,\n/strudel-web/static/5b3752cc2ce98f1acc9f07977d519451/014b5/2024-03-19-hackathon2.jpg 5038w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),a.createElement(r.ZP,{item:!0,xs:6,md:4},a.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; flex:1.42;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/strudel-web/static/cbfec0d446e8c15ee0135cf1eb80f3c7/8e66b/2024-03-19-hackathon3.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 70.33333333333334%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDAf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABHi152ME//8QAGRAAAgMBAAAAAAAAAAAAAAAAAAECEhMQ/9oACAEBAAEFAqQKrmsTRFkf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAgMBAAAAAAAAAAAAAAAAABABMUEy/9oACAEBAAY/AuYKWmr/xAAbEAEAAgIDAAAAAAAAAAAAAAABABEQQTGB4f/aAAgBAQABPyE8uAcA6wJqKS6gQ3P/2gAMAwEAAgADAAAAEDsv/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EDV//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QJ//EAB0QAQACAQUBAAAAAAAAAAAAAAEAETEhQZGh0XH/2gAIAQEAAT8QJVB8MC6JAA24modJ7FnALwey8BwJ/9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="An attendee&#39;s end-of-day web application shared on the big screen."\n        title=""\n        src="/strudel-web/static/cbfec0d446e8c15ee0135cf1eb80f3c7/e5166/2024-03-19-hackathon3.jpg"\n        srcset="/strudel-web/static/cbfec0d446e8c15ee0135cf1eb80f3c7/f93b5/2024-03-19-hackathon3.jpg 300w,\n/strudel-web/static/cbfec0d446e8c15ee0135cf1eb80f3c7/b4294/2024-03-19-hackathon3.jpg 600w,\n/strudel-web/static/cbfec0d446e8c15ee0135cf1eb80f3c7/e5166/2024-03-19-hackathon3.jpg 1200w,\n/strudel-web/static/cbfec0d446e8c15ee0135cf1eb80f3c7/d9c39/2024-03-19-hackathon3.jpg 1800w,\n/strudel-web/static/cbfec0d446e8c15ee0135cf1eb80f3c7/df51d/2024-03-19-hackathon3.jpg 2400w,\n/strudel-web/static/cbfec0d446e8c15ee0135cf1eb80f3c7/8e66b/2024-03-19-hackathon3.jpg 3549w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))),"\n",a.createElement(e.p,null,a.createElement(e.em,null,a.createElement(e.strong,null,"Interested in hosting or attending a future hackathon? Reach out via email or GitHub!"))))}var i=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,n.ah)(),t.components);return e?a.createElement(e,t,a.createElement(s,t)):s(t)},c=A(9708),o=A(2658),u=A(1535),l=A(6740),f=A(6300),h=A(2370),d=A(3904),g=A(8173),m=A(7484),p=A.n(m),E=A(178),b=A.n(E),w=A(9387),B=A.n(w),$=A(8734),j=A.n($);p().extend(b()),p().extend(B()),p().extend(j());const D=t=>{let{pageContext:e,children:A}=t;return a.createElement(l.ZP,null,a.createElement(f.m,{containerWidth:"md"},a.createElement(c.Z,{spacing:2},a.createElement(o.Z,{component:"h1",variant:"h3",fontWeight:"bold"},e.frontmatter.title),a.createElement(c.Z,{direction:"row",spacing:1,sx:{fontSize:"1.25rem",alignItems:"center"}},a.createElement("span",null,p()(e.frontmatter.date).format("MMMM D, YYYY")),a.createElement(u.Z,{sx:{fontSize:"0.75rem"}}),a.createElement("span",null,e.frontmatter.author)))),a.createElement(g._,{maxWidth:"md"},a.createElement(h.F,null,A)))},v=t=>{let{pageContext:e}=t;return a.createElement(d.Z,{title:e.frontmatter.title})};function y(t){return a.createElement(D,t,a.createElement(i,t))}},6300:function(t,e,A){"use strict";A.d(e,{m:function(){return r}});var n=A(7294),a=A(6654);const r=t=>{let{children:e,sx:A,...r}=t;return n.createElement(a.N,Object.assign({},r,{sx:{backgroundColor:"neutral.main",color:"info.main",...A}}),e)}},1151:function(t,e,A){"use strict";A.d(e,{ah:function(){return r}});var n=A(7294);const a=n.createContext({});function r(t){const e=n.useContext(a);return n.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}}}]);
//# sourceMappingURL=component---src-components-layouts-news-layout-tsx-content-file-path-content-engage-news-03-19-2024-strudel-hackathon-mdx-531340d6e3bbdbd113c6.js.map