(self.webpackChunkstrudel=self.webpackChunkstrudel||[]).push([[872],{1535:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var a=r(n(4938)),i=n(5893),s=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),"Circle");t.Z=s},7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",s="hour",u="day",o="week",c="month",l="quarter",f="year",h="date",A="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},$={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+p(r,2,"0")+":"+p(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,s=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-s:s-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:f,w:o,d:u,D:h,h:s,m:i,s:a,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},E="en",v={};v[E]=g;var b="$isDayjsObject",w=function(e){return e instanceof M||!(!e||!e[b])},D=function e(t,n,r){var a;if(!t)return E;if("string"==typeof t){var i=t.toLowerCase();v[i]&&(a=i),n&&(v[i]=n,a=i);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var u=t.name;v[u]=t,a=u}return!r&&a&&(E=a),a||!r&&E},S=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},y=$;y.l=D,y.i=w,y.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function g(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[b]=!0}var p=g.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return y},p.isValid=function(){return!(this.$d.toString()===A)},p.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return S(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<S(e)},p.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,r=!!y.u(t)||t,l=y.p(e),A=function(e,t){var a=y.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(u)},m=function(e,t){return y.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},d=this.$W,g=this.$M,p=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case f:return r?A(1,0):A(31,11);case c:return r?A(1,g):A(0,g+1);case o:var E=this.$locale().weekStart||0,v=(d<E?d+7:d)-E;return A(r?p-v:p+(6-v),g);case u:case h:return m($+"Hours",0);case s:return m($+"Minutes",1);case i:return m($+"Seconds",2);case a:return m($+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,o=y.p(e),l="set"+(this.$u?"UTC":""),A=(n={},n[u]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[s]=l+"Hours",n[i]=l+"Minutes",n[a]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===u?this.$D+(t-this.$W):t;if(o===c||o===f){var d=this.clone().set(h,1);d.$d[A](m),d.init(),this.$d=d.set(h,Math.min(this.$D,d.daysInMonth())).$d}else A&&this.$d[A](m);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[y.p(e)]()},p.add=function(r,l){var h,A=this;r=Number(r);var m=y.p(l),d=function(e){var t=S(A);return y.w(t.date(t.date()+Math.round(e*r)),A)};if(m===c)return this.set(c,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===u)return d(1);if(m===o)return d(7);var g=(h={},h[i]=t,h[s]=n,h[a]=e,h)[m]||1,p=this.$d.getTime()+r*g;return y.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||A;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=y.z(this),i=this.$H,s=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=n.meridiem,f=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},h=function(e){return y.s(i%12||12,e,"0")},m=l||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(d,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return u+1;case"MM":return y.s(u+1,2,"0");case"MMM":return f(n.monthsShort,u,c,3);case"MMMM":return f(c,u);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(n.weekdaysMin,t.$W,o,2);case"ddd":return f(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(i);case"HH":return y.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return y.s(s,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,h,A){var m,d=this,g=y.p(h),p=S(r),$=(p.utcOffset()-this.utcOffset())*t,E=this-p,v=function(){return y.m(d,p)};switch(g){case f:m=v()/12;break;case c:m=v();break;case l:m=v()/3;break;case o:m=(E-$)/6048e5;break;case u:m=(E-$)/864e5;break;case s:m=E/n;break;case i:m=E/t;break;case a:m=E/e;break;default:m=E}return A?m:y.a(m)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=D(e,t,!0);return r&&(n.$L=r),n},p.clone=function(){return y.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),k=M.prototype;return S.prototype=k,[["$ms",r],["$s",a],["$m",i],["$H",s],["$W",u],["$M",c],["$y",f],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,M,S),e.$i=!0),S},S.locale=D,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=v[E],S.Ls=v,S.p={},S}()},8734:function(e){e.exports=function(){"use strict";return function(e,t){var n=t.prototype,r=n.format;n.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return r.bind(this)(e);var a=this.$utils(),i=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return a.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return a.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return a.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return r.bind(this)(i)}}}()},9387:function(e){e.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,r,a){var i,s=function(e,n,r){void 0===r&&(r={});var a=new Date(e),i=function(e,n){void 0===n&&(n={});var r=n.timeZoneName||"short",a=e+"|"+r,i=t[a];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),t[a]=i),i}(n,r);return i.formatToParts(a)},u=function(t,n){for(var r=s(t,n),i=[],u=0;u<r.length;u+=1){var o=r[u],c=o.type,l=o.value,f=e[c];f>=0&&(i[f]=parseInt(l,10))}var h=i[3],A=24===h?0:h,m=i[0]+"-"+i[1]+"-"+i[2]+" "+A+":"+i[4]+":"+i[5]+":000",d=+t;return(a.utc(m).valueOf()-(d-=d%1e3))/6e4},o=r.prototype;o.tz=function(e,t){void 0===e&&(e=i);var n=this.utcOffset(),r=this.toDate(),s=r.toLocaleString("en-US",{timeZone:e}),u=Math.round((r-new Date(s))/1e3/60),o=a(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(r.getTimezoneOffset()/15)-u,!0);if(t){var c=o.utcOffset();o=o.add(n-c,"minute")}return o.$x.$timezone=e,o},o.offsetName=function(e){var t=this.$x.$timezone||a.tz.guess(),n=s(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var c=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return c.call(this,e,t);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(n,e,t).tz(this.$x.$timezone,!0)},a.tz=function(e,t,n){var r=n&&t,s=n||t||i,o=u(+a(),s);if("string"!=typeof e)return a(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,a=u(r,n);if(t===a)return[r,t];var i=u(r-=60*(a-t)*1e3,n);return a===i?[r,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(e,r).valueOf(),o,s),l=c[0],f=c[1],h=a(l).utcOffset(f);return h.$x.$timezone=s,h},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(e){i=e}}}()},178:function(e){e.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,a,i){var s=a.prototype;i.utc=function(e){return new a({date:e,utc:!0,args:arguments})},s.utc=function(t){var n=i(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var u=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),u.call(this,e)};var o=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else o.call(this)};var c=s.utcOffset;s.utcOffset=function(r,a){var i=this.$utils().u;if(i(r))return this.$u?0:i(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var a=(""+r[0]).match(n)||["-",0,0],i=a[0],s=60*+a[1]+ +a[2];return 0===s?0:"+"===i?s:-s}(r),null===r))return this;var s=Math.abs(r)<=16?60*r:r,u=this;if(a)return u.$offset=s,u.$u=0===r,u;if(0!==r){var o=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(u=this.local().add(s+o,e)).$offset=s,u.$x.$localOffset=o}else u=this.utc();return u};var l=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var f=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var h=s.diff;s.diff=function(e,t,n){if(e&&this.$u===e.$u)return h.call(this,e,t,n);var r=this.local(),a=i(e).local();return h.call(r,a,t,n)}}}()},1966:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return S},default:function(){return y}});var r=n(1151),a=n(7294);function i(e){const t=Object.assign({p:"p",a:"a",ul:"ul",li:"li",span:"span"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"STRUDEL is building products to help scientific software teams improve the user experience and impact of their work. The STRUDEL team has grown with ",a.createElement(t.a,{href:"https://crd.lbl.gov/news-and-publications/news/2024/sloan-strudel/"},"support from the Sloan Foundation")," and has many upcoming opportunities for engagement. Please reach out to learn more or arrange a chat as we enter our next phase."),"\n",a.createElement("h2",null,"Upcoming Events"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement("b",null,a.createElement(t.a,{href:"https://sc24.supercomputing.org/"},"Supercomputing 2024 (SC|24) Participation"))," ",a.createElement("br"),"\nDrew Paine and Lavanya Ramakrishnan from the STRUDEL team will be at Supercomputer 2024 in Atlanta. Please reach out if you would be interested in chatting or visit us during the following events:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement("b",null,"Sunday, November 17"),": Drew Paine is discussing UX as part of Research Software Engineering culture during the ",a.createElement(t.a,{href:"https://us-rse.org/rse-hpc-2024/agenda/"},"RSEs in HPC")," workshop on Sunday Nov 17th."),"\n",a.createElement(t.li,null,a.createElement("b",null,"Monday, November 18"),": Drew will present a lightning talk on behalf of the STRUDEL team at the ",a.createElement(t.a,{href:"https://works-workshop.org/"},"WORKS 2024")," workshop."),"\n",a.createElement(t.li,null,a.createElement("b",null,"Wednesday, November 20, 12-2pm"),": Drew will also be volunteering at the US-RSE organization booth (#4504).",a.createElement("br"),a.createElement("br")),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement("b",null,a.createElement(t.a,{href:"https://us-rse.org/working-groups/"},"US-RSE UX Working Group Meetings"))," ",a.createElement("br"),"\nThe next UX Working Group meeting is Nov 18 from 2:00pm-3:00pm Eastern. Zoom link ",a.createElement(t.a,{href:"https://lbnl.zoom.us/j/95364223538?pwd=OdC7ksl0vxRa36noqN0PcD3jjOz5rg.1"},"here"),". We’ll be gathering examples to show demand for UX resources like STRUDEL and practicing interview skills. All are invited!",a.createElement("br"),a.createElement("br")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement("b",null,"U.S. East Coast Hackathon")," ",a.createElement("br"),"\nThe STRUDEL team will be hosting a hackathon to help scientific software teams get started with the STRUDEL Design System.",a.createElement("br"),a.createElement("br")),"\n"),"\n"),"\n",a.createElement("h2",null,"Recent Activities"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement("b",null,"US-RSE Conference 2024")," ",a.createElement("br"),"\nThe STRUDEL team recently participated in the 2nd annual US-RSE Conference in Albuquerque, New Mexico. The tutorial “Rapid Prototyping for a Usable React-based Web Application with STRUDEL” was presented by Rajshree Deshmukh, Cody O'Donnell, and Lavanya Ramakrishnan.\nA recording is available on ",a.createElement(t.a,{href:"https://youtu.be/g7rcjWPWX4U?si=S17Ku7LBlh9RvlWV"},"YouTube"),a.createElement("br"),a.createElement("br")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement("b",null,"The Carpentries Instructor Training"),"\nThree members of the STRUDEL team participated in The Carpentries Instructor Training in October and November, in preparation for curriculum development activities. ",a.createElement("br"),a.createElement("br")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement("b",null,"Team Kickoff"),"\nThe STRUDEL team kicked off its latest phase of work with a two day in person meeting with members from all four organizations in October. ",a.createElement("br"),a.createElement("br"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; flex:1.89;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/strudel-web/static/f50594086a935ecefb218b91aaa0c7a5/74070/2024-11-08-team-kickoff.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 53%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAATWdzatBmf/EABkQAQEBAAMAAAAAAAAAAAAAAAIBAxETMf/aAAgBAQABBQKb2nvpgXMxBseYgPn/xAAXEQADAQAAAAAAAAAAAAAAAAABAhBB/9oACAEDAQE/AQuz/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECETH/2gAIAQIBAT8Bc1hR/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEDEhMlH/2gAIAQEABj8CLsX1CjFLUR//xAAaEAEAAwEBAQAAAAAAAAAAAAABABExIUHB/9oACAEBAAE/IcuMGodh8Z1QNiCy0tRigNRPuf/aAAwDAQACAAMAAAAQvy//xAAXEQEAAwAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/EMS5f//EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAgEBPxA2yDf/xAAbEAEBAQEAAwEAAAAAAAAAAAABESEAMUFhUf/aAAgBAQABPxBdAALCH57Dedt9Uu/jeRNhWs3sejfHVDC0J4k6drv/2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Group photo of the team during the kickoff."\n        title=""\n        src="/strudel-web/static/f50594086a935ecefb218b91aaa0c7a5/e5166/2024-11-08-team-kickoff.jpg"\n        srcset="/strudel-web/static/f50594086a935ecefb218b91aaa0c7a5/f93b5/2024-11-08-team-kickoff.jpg 300w,\n/strudel-web/static/f50594086a935ecefb218b91aaa0c7a5/b4294/2024-11-08-team-kickoff.jpg 600w,\n/strudel-web/static/f50594086a935ecefb218b91aaa0c7a5/e5166/2024-11-08-team-kickoff.jpg 1200w,\n/strudel-web/static/f50594086a935ecefb218b91aaa0c7a5/d9c39/2024-11-08-team-kickoff.jpg 1800w,\n/strudel-web/static/f50594086a935ecefb218b91aaa0c7a5/df51d/2024-11-08-team-kickoff.jpg 2400w,\n/strudel-web/static/f50594086a935ecefb218b91aaa0c7a5/74070/2024-11-08-team-kickoff.jpg 3413w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n"),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},u=n(9708),o=n(2658),c=n(1535),l=n(6740),f=n(6300),h=n(2370),A=n(3904),m=n(8173),d=n(7484),g=n.n(d),p=n(178),$=n.n(p),E=n(9387),v=n.n(E),b=n(8734),w=n.n(b);g().extend($()),g().extend(v()),g().extend(w());const D=e=>{let{pageContext:t,children:n}=e;return a.createElement(l.ZP,null,a.createElement(f.m,{containerWidth:"md"},a.createElement(u.Z,{spacing:2},a.createElement(o.Z,{component:"h1",variant:"h3",fontWeight:"bold"},t.frontmatter.title),a.createElement(u.Z,{direction:"row",spacing:1,sx:{fontSize:"1.25rem",alignItems:"center"}},a.createElement("span",null,g()(t.frontmatter.date).format("MMMM D, YYYY")),a.createElement(c.Z,{sx:{fontSize:"0.75rem"}}),a.createElement("span",null,t.frontmatter.author)))),a.createElement(m._,{maxWidth:"md"},a.createElement(h.F,null,n)))},S=e=>{let{pageContext:t}=e;return a.createElement(A.Z,{title:t.frontmatter.title})};function y(e){return a.createElement(D,e,a.createElement(s,e))}},6300:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(7294),a=n(6654);const i=e=>{let{children:t,sx:n,...i}=e;return r.createElement(a.N,Object.assign({},i,{sx:{backgroundColor:"neutral.main",color:"info.main",...n}}),t)}},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return i}});var r=n(7294);const a=r.createContext({});function i(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-components-layouts-news-layout-tsx-content-file-path-content-engage-news-11-12-2024-strudel-is-growing-mdx-a340924701f45eec1101.js.map