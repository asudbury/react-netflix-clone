"use strict";(self.webpackChunkreact_nextflix_clone=self.webpackChunkreact_nextflix_clone||[]).push([[165],{809:(e,t,s)=>{s.d(t,{A:()=>n});var a=s(841),i=s(721),r=(0,a.A)((function e(){(0,i.A)(this,e)}));r.convertMoviesToTiles=function(e){return e.map((function(e){return{id:e.id,title:e.original_title,desc:e.tagline,banner:e.backdrop_path,type:"movie"}}))},r.convertShowsToTiles=function(e){return e.map((function(e){return{id:e.id,title:e.name,desc:e.overview,banner:e.backdrop_path,type:"tv"}}))},r.convertToTile=function(e,t){return{id:t.id,title:"tv"===e?t.name:t.original_title,desc:"tv"===e?t.overview:t.tagline,banner:t.backdrop_path,type:e,overview:t.overview}};const n=r},28:(e,t,s)=>{s.d(t,{A:()=>c});s(43);var a=s(582),i=s(579);const r=function(e){var t=e.data;return(0,i.jsx)(a.N_,{to:"/playing/".concat(t?t.type:"","/").concat(t?t.id:""),className:"tile",style:t?{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(t.banner,")")}:{},children:(0,i.jsxs)("div",{className:"tile__cont",children:[(0,i.jsx)("h3",{className:"tile__title",children:t?t.title:""}),(0,i.jsx)("button",{className:"tile__play",children:(0,i.jsx)("img",{className:"tile__icon",src:s(889),alt:""})})]})})};const n=function(){return(0,i.jsxs)("div",{className:"tlistske",children:[(0,i.jsx)("div",{className:"tlistske__tile"}),(0,i.jsx)("div",{className:"tlistske__tile"}),(0,i.jsx)("div",{className:"tlistske__tile"}),(0,i.jsx)("div",{className:"tlistske__tile"}),(0,i.jsx)("div",{className:"tlistske__tile"})]})};const c=function(e){var t=e.data,s=e.title;return e.isLoading?(0,i.jsx)(n,{}):(0,i.jsxs)("div",{className:"tlist",children:[(0,i.jsx)("h2",{className:"tlist__title",children:s}),(0,i.jsx)("div",{className:"tlist__cont",children:t&&t.map((function(e){return(0,i.jsx)(r,{data:e},e.id)}))})]})}},165:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(679),i=s(559),r=(s(43),s(907)),n=s(28),c=s(585),l=s(921),o=s(809),d=s(579);const u=function(){var e=(0,l.lZ)(c.A),t=(0,r.useQuery)("trending",(0,i.A)((0,a.A)().mark((function e(){var t,s;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=bd7686376aa170d6af7fce5aee732f55");case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",o.A.convertMoviesToTiles(s.results.splice(0,5)));case 7:case"end":return e.stop()}}),e)})))),s=t.data,u=t.isLoading,p=t.error,v=(0,r.useQuery)("tr",(0,i.A)((0,a.A)().mark((function e(){var t,s;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=bd7686376aa170d6af7fce5aee732f55");case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",o.A.convertMoviesToTiles(s.results.splice(0,5)));case 7:case"end":return e.stop()}}),e)})))),A=v.data,_=v.isLoading,m=v.error,f=(0,r.useQuery)("now",(0,i.A)((0,a.A)().mark((function e(){var t,s;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=bd7686376aa170d6af7fce5aee732f55");case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",o.A.convertMoviesToTiles(s.results.splice(0,5)));case 7:case"end":return e.stop()}}),e)})))),x=f.data,h=f.isLoading,g=f.error;return(p||m||g)&&e({isVisible:!0,message:"Oops, something went wrong"}),(0,d.jsxs)("div",{className:"moviesp",children:[(0,d.jsx)("div",{className:"tlist__wrapper tlist__wrapper--tall",children:(0,d.jsx)(n.A,{title:"New releases",data:x,isLoading:h})}),(0,d.jsx)("div",{className:"tlist__wrapper tlist__wrapper--grey",children:(0,d.jsx)(n.A,{title:"Top rated",data:A,isLoading:_})}),(0,d.jsx)("div",{className:"tlist__wrapper",fallback:(0,d.jsx)("div",{}),children:(0,d.jsx)(n.A,{title:"Trending now",data:s,isLoading:u})})]})}},889:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAFxJREFUOI2dzrENgDAMRNEfJiQTwObABtkgNCC5cJKzT3KR4n0FoAEXcJBYNxeOdOfkiIflyAwvIwoeRiLYRvbyPVLbku4BavTbN3DaSgopeIhmeIk8LKN/LYMAXovJZuWsm6t9AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=165.27705443.chunk.js.map