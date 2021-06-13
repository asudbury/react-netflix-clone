(this["webpackJsonpreact-nextflix-clone"]=this["webpackJsonpreact-nextflix-clone"]||[]).push([[4],{43:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAFxJREFUOI2dzrENgDAMRNEfJiQTwObABtkgNCC5cJKzT3KR4n0FoAEXcJBYNxeOdOfkiIflyAwvIwoeRiLYRvbyPVLbku4BavTbN3DaSgopeIhmeIk8LKN/LYMAXovJZuWsm6t9AAAAAElFTkSuQmCC"},44:function(e,t,a){"use strict";var n=a(6),r=function e(){Object(n.a)(this,e)};r.convertMoviesToTiles=function(e){return e.map((function(e){return{id:e.id,title:e.original_title,desc:e.tagline,banner:e.backdrop_path,type:"movie"}}))},r.convertShowsToTiles=function(e){return e.map((function(e){return{id:e.id,title:e.name,desc:e.overview,banner:e.backdrop_path,type:"tv"}}))},r.convertToTile=function(e,t){return{id:t.id,title:"tv"===e?t.name:t.original_title,desc:"tv"===e?t.overview:t.tagline,banner:t.backdrop_path,type:e,overview:t.overview}},t.a=r},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(45),a(46),a(10));var c=function(e){var t=e.data;return r.a.createElement(i.b,{to:"/playing/".concat(t?t.type:"","/").concat(t?t.id:""),className:"tile",style:t?{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(t.banner,")")}:{}},r.a.createElement("div",{className:"tile__cont"},r.a.createElement("h3",{className:"tile__title"},t?t.title:""),r.a.createElement("button",{className:"tile__play"},r.a.createElement("img",{className:"tile__icon",src:a(43),alt:""}))))};a(47);var s=function(){return r.a.createElement("div",{className:"tlistske"},r.a.createElement("div",{className:"tlistske__tile"}),r.a.createElement("div",{className:"tlistske__tile"}),r.a.createElement("div",{className:"tlistske__tile"}),r.a.createElement("div",{className:"tlistske__tile"}),r.a.createElement("div",{className:"tlistske__tile"}))};t.a=function(e){var t=e.data,a=e.title;return e.isLoading?r.a.createElement(s,null):r.a.createElement("div",{className:"tlist"},r.a.createElement("h2",{className:"tlist__title"},a),r.a.createElement("div",{className:"tlist__cont"},t&&t.map((function(e){return r.a.createElement(c,{data:e,key:e.id})}))))}},50:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(51),a(10));t.a=function(e){var t=e.data,n=e.isLoading,c=e.list;return r.a.createElement("div",{className:"hero ".concat(n?"hero--loading":""),style:n?{}:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.banner,")")}},r.a.createElement("div",{className:"hero__info"},r.a.createElement("h2",{className:"hero__title"},t?t.title:""),r.a.createElement("p",{className:"hero__desc"},t?t.desc:""),r.a.createElement("div",{className:"btns"},r.a.createElement(i.b,{to:"/playing/".concat(t?t.type:"","/").concat(t?t.id:""),className:"btn btn--play"},r.a.createElement("img",{className:"btn__icon btn__icon--play",src:a(43),alt:""}),"Play"),r.a.createElement("button",{className:"btn btn--moreinfo"},r.a.createElement("span",{className:"btn__icon btn__icon--info"},"\u24d8"),"More info"))),r.a.createElement("div",{className:"hero__list"},c))}},51:function(e,t,a){},52:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(19),c=a(0),s=a.n(c),o=a(49),l=(a(52),a(50)),u=a(48),m=a(20),d=a(11),p=a(44),v=s.a.lazy((function(){return a.e(8).then(a.bind(null,57))}));t.default=function(){var e=Object(d.d)(m.a),t=Object(o.a)("hero",Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/558?api_key=bd7686376aa170d6af7fce5aee732f55");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",p.a.convertToTile("movie",a));case 7:case"end":return e.stop()}}),e)})))),a=t.data,n=t.isLoading,f=t.error,b=Object(o.a)("popular",Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=bd7686376aa170d6af7fce5aee732f55");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",p.a.convertMoviesToTiles(a.results.splice(0,5)));case 7:case"end":return e.stop()}}),e)})))),_=b.data,g=b.isLoading,h=b.error,E=Object(o.a)("trending",Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=bd7686376aa170d6af7fce5aee732f55");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",p.a.convertMoviesToTiles(a.results.splice(0,5)));case 7:case"end":return e.stop()}}),e)})))),N=E.data,w=E.isLoading,A=E.error,k=Object(o.a)("tr",Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=bd7686376aa170d6af7fce5aee732f55");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",p.a.convertMoviesToTiles(a.results.splice(0,5)));case 7:case"end":return e.stop()}}),e)})))),x=k.data,y=k.isLoading,T=k.error,j=Object(o.a)("big",Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/550?api_key=bd7686376aa170d6af7fce5aee732f55");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",p.a.convertToTile("movie",a));case 7:case"end":return e.stop()}}),e)})))),O=j.data,L=j.isLoading,M=j.error,I=Object(o.a)("now",Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=bd7686376aa170d6af7fce5aee732f55");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",p.a.convertMoviesToTiles(a.results.splice(0,5)));case 7:case"end":return e.stop()}}),e)})))),J=I.data,R=I.isLoading,S=I.error;(f||h||A||T||M||S)&&e({isVisible:!0,message:"Oops, something went wrong"});var C=s.a.createElement(u.a,{title:"Most popular",data:_,isLoading:g});return s.a.createElement("div",{className:"home"},s.a.createElement(l.a,{data:a,isLoading:n,list:C}),s.a.createElement("div",{className:"tlist__wrapper",fallback:s.a.createElement("div",null)},s.a.createElement(u.a,{title:"Trending now",data:N,isLoading:w})),s.a.createElement("div",{className:"tlist__wrapper tlist__wrapper--grey"},s.a.createElement(u.a,{title:"Top rated",data:x,isLoading:y})),s.a.createElement(c.Suspense,{fallback:s.a.createElement("div",null)},s.a.createElement(v,{data:O,isLoading:L})),s.a.createElement("div",{className:"tlist__wrapper tlist__wrapper--tall"},s.a.createElement(u.a,{title:"New releases",data:J,isLoading:R})))}}}]);
//# sourceMappingURL=4.da56a28f.chunk.js.map