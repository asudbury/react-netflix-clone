"use strict";(self.webpackChunkreact_nextflix_clone=self.webpackChunkreact_nextflix_clone||[]).push([[177],{177:(e,t,r)=>{r.d(t,{IT:()=>Z});var n,i=r(168);!function(e){e.Idle="idle",e.Loading="loading",e.Error="error",e.Success="success"}(n||(n={}));var u=function(e){this.silent=e};var s="undefined"===typeof window;function o(){}var c=console||{error:o,warn:o,log:o};function a(e,t){return"function"===typeof e?e(t):e}function h(e,t){if("function"===typeof t)throw new Error;return g(t)?Object.keys(t).sort().reduce((function(e,r){return e[r]=t[r],e}),{}):t}function f(e,t){return e===t||typeof e===typeof t&&("object"===typeof e&&!Object.keys(t).some((function(r){return!f(e[r],t[r])})))}function l(e){return"number"===typeof e&&e>=0&&e!==1/0}function d(){return"undefined"===typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}function v(){return void 0===navigator.onLine||navigator.onLine}function y(e,t,r,n){var u,s,o,c;return g(e)?(u=e.queryKey,s=e.queryFn,o=e.config,c=t):g(t)?(u=e,o=t,c=r):(u=e,s=t,o=r,c=n),o=o||{},s&&(o=(0,i.A)({},o,{queryFn:s})),[u,o,c]}function p(e,t){if(e===t)return e;var r=Array.isArray(e)&&Array.isArray(t);if(r||g(e)&&g(t)){for(var n=r?e.length:Object.keys(e).length,i=r?t:Object.keys(t),u=i.length,s=r?[]:{},o=0,c=0;c<u;c++){var a=r?c:i[c];s[a]=p(e[a],t[a]),s[a]===e[a]&&o++}return n===u&&o===n?e:s}return t}function g(e){if(!b(e))return!1;var t=e.constructor;if("undefined"===typeof t)return!0;var r=t.prototype;return!!b(r)&&!!r.hasOwnProperty("isPrototypeOf")}function b(e){return"[object Object]"===Object.prototype.toString.call(e)}function m(e){return e instanceof u}function F(e){var t;return function(r){t&&t(),t=r(e)}}function Q(e){Promise.resolve().then(e).catch((function(e){return setTimeout((function(){throw e}))}))}var q=function(e){e()};function w(){return q}var C={queries:{cacheTime:3e5,enabled:!0,notifyOnStatusChange:!0,queryFn:function(){return Promise.reject()},queryKeySerializerFn:function(e){try{var t=Array.isArray(e)?e:[e],r=(n=t,JSON.stringify(n,h));return[r,t=JSON.parse(r)]}catch(i){throw new Error("A valid query key is required!")}var n},refetchOnMount:!0,refetchOnReconnect:!0,refetchOnWindowFocus:!0,retry:3,retryDelay:function(e){return Math.min(1e3*Math.pow(2,e),3e4)},staleTime:0,structuralSharing:!0}};function S(e,t,r,n){var u=e.getDefaultConfig(),s=(0,i.A)({},C.queries,null==u?void 0:u.shared,null==u?void 0:u.queries,null==r?void 0:r.shared,null==r?void 0:r.queries,n),o=s.queryKeySerializerFn(t);return s.queryCache=e,s.queryHash=o[0],s.queryKey=o[1],s}var T=new(function(){function e(){this.queue=[],this.transactions=0}var t=e.prototype;return t.batch=function(e){this.transactions++;var t=e();return this.transactions--,this.transactions||this.flush(),t},t.schedule=function(e){this.transactions?this.queue.push(e):Q((function(){e()}))},t.flush=function(){var e=this.queue;this.queue=[],e.length&&Q((function(){w()((function(){e.forEach((function(e){e()}))}))}))},e}()),I=function(){function e(e){this.config=e,this.isStale=!0,this.initialUpdateCount=0,this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this),this.fetchMore=this.fetchMore.bind(this),this.unsubscribe=this.unsubscribe.bind(this),this.updateQuery()}var t=e.prototype;return t.subscribe=function(e){return this.listener=e||o,this.currentQuery.subscribeObserver(this),this.config.enabled&&(this.config.forceFetchOnMount||"always"===this.config.refetchOnMount)?this.fetch():this.optionalFetch(),this.updateTimers(),this.unsubscribe},t.unsubscribe=function(){this.listener=void 0,this.clearTimers(),this.currentQuery.unsubscribeObserver(this)},t.updateConfig=function(e){var t=this.config,r=this.currentQuery;if(this.config=function(e){return Boolean(e.queryHash)}(e)?e:this.config.queryCache.getResolvedQueryConfig(this.config.queryKey,e),this.updateQuery(),this.listener){if(this.currentQuery!==r)return this.optionalFetch(),void this.updateTimers();e.enabled&&!t.enabled&&this.optionalFetch(),e.enabled===t.enabled&&e.staleTime===t.staleTime||this.updateStaleTimeout(),e.enabled===t.enabled&&e.refetchInterval===t.refetchInterval||this.updateRefetchInterval()}},t.getCurrentQuery=function(){return this.currentQuery},t.getCurrentResult=function(){return this.currentResult},t.clear=function(){this.remove()},t.remove=function(){this.currentQuery.remove()},t.refetch=function(e){return this.currentQuery.refetch(e,this.config)},t.fetchMore=function(e,t){return this.currentQuery.fetchMore(e,t,this.config).catch(o)},t.fetch=function(){var e;return this.config.queryFn===(null==(e=C.queries)?void 0:e.queryFn)?Promise.resolve(this.currentResult.data):this.currentQuery.fetch(void 0,this.config).catch(o)},t.optionalFetch=function(){!this.config.enabled||!this.isStale||this.config.suspense&&this.currentResult.isFetched||!this.config.refetchOnMount&&1!==this.currentQuery.observers.length||this.fetch()},t.updateStaleTimeout=function(){var e=this;if(!s&&(this.clearStaleTimeout(),!this.isStale&&l(this.config.staleTime))){var t=Date.now()-this.currentResult.updatedAt,r=this.config.staleTime-t+1,n=Math.max(r,0);this.staleTimeoutId=setTimeout((function(){e.isStale||(e.isStale=!0,e.updateResult(),e.notify({listener:!0,globalListeners:!0}))}),n)}},t.updateRefetchInterval=function(){var e=this;s||(this.clearRefetchInterval(),this.config.enabled&&l(this.config.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.config.refetchIntervalInBackground||d())&&e.fetch()}),this.config.refetchInterval)))},t.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},t.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},t.clearStaleTimeout=function(){this.staleTimeoutId&&(clearInterval(this.staleTimeoutId),this.staleTimeoutId=void 0)},t.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},t.updateResult=function(){var e,t=this.currentQuery.state,r=t.data,u=t.status,s=t.updatedAt,o=!1;this.config.keepPreviousData&&t.isInitialData&&(null==(e=this.previousQueryResult)?void 0:e.isSuccess)&&(r=this.previousQueryResult.data,s=this.previousQueryResult.updatedAt,u=this.previousQueryResult.status,o=!0),this.currentResult=(0,i.A)({},function(e){return{status:e,isLoading:e===n.Loading,isSuccess:e===n.Success,isError:e===n.Error,isIdle:e===n.Idle}}(u),{canFetchMore:t.canFetchMore,clear:this.remove,data:r,error:t.error,failureCount:t.failureCount,fetchMore:this.fetchMore,isFetched:t.updateCount>0,isFetchedAfterMount:t.updateCount>this.initialUpdateCount,isFetching:t.isFetching,isFetchingMore:t.isFetchingMore,isInitialData:t.isInitialData,isPreviousData:o,isStale:this.isStale,refetch:this.refetch,remove:this.remove,updatedAt:s})},t.updateQuery=function(){var e=this.config,t=this.currentQuery,r=e.queryCache.getQueryByHash(e.queryHash);r||(r=e.queryCache.createQuery(e)),r!==t&&(this.previousQueryResult=this.currentResult,this.currentQuery=r,this.initialUpdateCount=r.state.updateCount,r.state.isInitialData?e.keepPreviousData&&t?this.isStale=!0:"function"===typeof e.initialStale?this.isStale=e.initialStale():"boolean"===typeof e.initialStale?this.isStale=e.initialStale:this.isStale="undefined"===typeof r.state.data:this.isStale=r.isStaleByTime(e.staleTime),this.updateResult(),this.listener&&(null==t||t.unsubscribeObserver(this),this.currentQuery.subscribeObserver(this)))},t.onQueryUpdate=function(e){var t=this.config,r=e.type;2!==r&&3!==r&&4!==r||(this.isStale=this.currentQuery.isStaleByTime(t.staleTime));var n=this.currentResult;this.updateResult();var i=this.currentResult;if(2!==r&&3!==r&&4!==r||this.updateTimers(),4!==r||i.isStale!==n.isStale){var u={};2===r?u.onSuccess=!0:3===r&&(u.onError=!0),(t.notifyOnStatusChange||i.data!==n.data||i.error!==n.error)&&(u.listener=!0),this.notify(u)}},t.notify=function(e){var t=this.config,r=this.currentResult,n=this.currentQuery,i=this.listener,u=t.onSuccess,s=t.onSettled,o=t.onError;T.batch((function(){e.onSuccess?(u&&T.schedule((function(){u(r.data)})),s&&T.schedule((function(){s(r.data,null)}))):e.onError&&(o&&T.schedule((function(){o(r.error)})),s&&T.schedule((function(){s(void 0,r.error)}))),e.listener&&i&&T.schedule((function(){i(r)})),e.globalListeners&&t.queryCache.notifyGlobalListeners(n)}))},e}();function E(){}var R={Failed:0,Fetch:1,Success:2,Error:3,Invalidate:4};function M(e,t){if(!t)return e&&e.then?e.then(E):Promise.resolve()}function A(e,t){var r=e();return r&&r.then?r.then(t):t(r)}function O(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function L(e,t){try{var r=e()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}function D(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(e.apply(this,t))}catch(n){return Promise.reject(n)}}}var P=function(){function e(e){this.config=e,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.queryCache=e.queryCache,this.cacheTime=e.cacheTime,this.observers=[],this.state=function(e){var t="function"===typeof e.initialData?e.initialData():e.initialData,r="undefined"!==typeof t?n.Success:e.enabled?n.Loading:n.Idle;return{canFetchMore:H(e,t),data:t,error:null,failureCount:0,isFetching:r===n.Loading,isFetchingMore:!1,isInitialData:!0,isInvalidated:!1,status:r,updateCount:0,updatedAt:Date.now()}}(e),this.scheduleGc()}var t=e.prototype;return t.updateConfig=function(e){this.config=e,this.cacheTime=Math.max(this.cacheTime,e.cacheTime)},t.dispatch=function(e){var t=this;this.state=function(e,t){var r;switch(t.type){case R.Failed:return(0,i.A)({},e,{failureCount:e.failureCount+1});case R.Fetch:return(0,i.A)({},e,{failureCount:0,isFetching:!0,isFetchingMore:t.isFetchingMore||!1,status:"undefined"!==typeof e.data?n.Success:n.Loading});case R.Success:return(0,i.A)({},e,{canFetchMore:t.canFetchMore,data:t.data,error:null,failureCount:0,isFetching:!1,isFetchingMore:!1,isInitialData:!1,isInvalidated:!1,status:n.Success,updateCount:e.updateCount+1,updatedAt:null!=(r=t.updatedAt)?r:Date.now()});case R.Error:return(0,i.A)({},e,{error:t.error,failureCount:e.failureCount+1,isFetching:!1,isFetchingMore:!1,status:n.Error,throwInErrorBoundary:!0,updateCount:e.updateCount+1});case R.Invalidate:return(0,i.A)({},e,{isInvalidated:!0});default:return e}}(this.state,e),T.batch((function(){t.observers.forEach((function(t){t.onQueryUpdate(e)})),t.queryCache.notifyGlobalListeners(t)}))},t.scheduleGc=function(){var e=this;s||(this.clearGcTimeout(),this.observers.length>0||!l(this.cacheTime)||(this.gcTimeout=setTimeout((function(){e.remove()}),this.cacheTime)))},t.cancel=function(e){var t=this.promise;return t&&this.cancelFetch?(this.cancelFetch(e),t.then(o).catch(o)):Promise.resolve(void 0)},t.continue=function(){var e;null==(e=this.continueFetch)||e.call(this)},t.clearTimersObservers=function(){this.observers.forEach((function(e){e.clearTimers()}))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.setData=function(e,t){var r,n,i=this.state.data,u=a(e,i);this.config.structuralSharing&&(u=p(i,u)),(null==(r=(n=this.config).isDataEqual)?void 0:r.call(n,i,u))&&(u=i);var s=H(this.config,u);this.dispatch({type:R.Success,data:u,canFetchMore:s,updatedAt:null==t?void 0:t.updatedAt})},t.clear=function(){c.warn("react-query: clear() has been deprecated, please use remove() instead"),this.remove()},t.remove=function(){this.queryCache.removeQuery(this)},t.destroy=function(){this.clearGcTimeout(),this.clearTimersObservers(),this.cancel()},t.isActive=function(){return this.observers.some((function(e){return e.config.enabled}))},t.isStale=function(){return this.state.isInvalidated||this.state.status!==n.Success||this.observers.some((function(e){return e.getCurrentResult().isStale}))},t.isStaleByTime=function(e){return void 0===e&&(e=0),this.state.isInvalidated||this.state.status!==n.Success||this.state.updatedAt+e<=Date.now()},t.onInteraction=function(e){var t=this.observers.find((function(t){var r=t.config,n=t.getCurrentResult().isStale;return r.enabled&&("focus"===e&&("always"===r.refetchOnWindowFocus||r.refetchOnWindowFocus&&n)||"online"===e&&("always"===r.refetchOnReconnect||r.refetchOnReconnect&&n))}));t&&t.fetch(),this.continue()},t.subscribe=function(e){var t=new I(this.config);return t.subscribe(e),t},t.subscribeObserver=function(e){this.observers.push(e),this.clearGcTimeout()},t.unsubscribeObserver=function(e){this.observers=this.observers.filter((function(t){return t!==e})),this.observers.length||(this.isTransportCancelable&&this.cancel(),this.scheduleGc())},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:R.Invalidate})},t.refetch=function(e,t){var r=this.fetch(void 0,t);return(null==e?void 0:e.throwOnError)||(r=r.catch(o)),r},t.fetchMore=function(e,t,r){return this.fetch({fetchMore:{fetchMoreVariable:e,previous:(null==t?void 0:t.previous)||!1}},r)},t.fetch=function(e,t){try{var r=!1,n=this;return A((function(){if(n.promise)return(null==e?void 0:e.fetchMore)&&n.state.data?M(n.cancel(!0)):(r=!0,n.promise)}),(function(i){if(r)return i;t&&n.updateConfig(t);var u=(t=n.config).queryFnParamsFilter,s=u?u(n.queryKey):n.queryKey;return n.promise=D((function(){return L((function(){var r;return A((function(){return t.infinite?O(n.startInfiniteFetch(t,s,e),(function(e){r=e})):O(n.startFetch(t,s,e),(function(e){r=e}))}),(function(){return n.setData(r),delete n.promise,r}))}),(function(e){throw m(e)&&e.silent||n.dispatch({type:R.Error,error:e}),m(e)||c.error(e),delete n.promise,e}))}))(),n.promise}))}catch(i){return Promise.reject(i)}},t.startFetch=function(e,t,r){return this.state.isFetching||this.dispatch({type:R.Fetch}),this.tryFetchData(e,(function(){return e.queryFn.apply(e,t)}))},t.startInfiniteFetch=function(e,t,r){var n=null==r?void 0:r.fetchMore,i=n||{},u=i.previous,s=i.fetchMoreVariable,o=!!n&&(u?"previous":"next"),c=this.state.data||[],a=D((function(r,n,i){var u=B(r,n);return"undefined"===typeof i&&"undefined"!==typeof u&&e.getFetchMore&&(i=e.getFetchMore(u,r)),O(e.queryFn.apply(e,t.concat([i])),(function(e){return n?[e].concat(r):[].concat(r,[e])}))}));return this.state.isFetching&&this.state.isFetchingMore===o||this.dispatch({type:R.Fetch,isFetchingMore:o}),this.tryFetchData(e,(function(){if(o)return a(c,u,s);if(c.length){for(var e=a([]),t=1;t<c.length;t++)e=e.then(a);return e}return a([])}))},t.tryFetchData=function(e,t){var r=this;return new Promise((function(n,i){var s,o,c=!1,h=function(){c=!0,delete r.cancelFetch,delete r.continueFetch,delete r.isTransportCancelable,null==s||s()},f=function(e){h(),i(e)};r.cancelFetch=function(e){f(new u(e)),null==o||o()},r.continueFetch=function(){null==s||s()};var l=D((function(){return L((function(){var e,i=t();return"function"===typeof(null==(e=i)?void 0:e.cancel)&&(o=function(){try{i.cancel()}catch(e){}},r.isTransportCancelable=!0),O(i,(function(e){!function(e){h(),n(e)}(e)}))}),(function(t){if(!c){var n,i=r.state.failureCount,u=e.retry,o=e.retryDelay;if(!0===u||i<u||"function"===typeof u&&u(i,t))return r.dispatch({type:R.Failed}),O((n=a(o,i)||0,new Promise((function(e){setTimeout(e,n)}))),(function(){return A((function(){if(!d()||!v())return M(new Promise((function(e){s=e})))}),(function(){c||l()}))}));f(t)}}))}));l()}))},e}();function B(e,t){return t?e[0]:e[e.length-1]}function H(e,t,r){if(e.infinite&&e.getFetchMore&&Array.isArray(t))return Boolean(e.getFetchMore(B(t,r),t))}var x=function(){function e(e){this.config=e||{},this.globalListeners=[],this.queries={},this.queriesArray=[],this.isFetching=0}var t=e.prototype;return t.notifyGlobalListeners=function(e){var t=this;this.isFetching=this.getQueries().reduce((function(e,t){return t.state.isFetching?e+1:e}),0),T.batch((function(){t.globalListeners.forEach((function(r){T.schedule((function(){r(t,e)}))}))}))},t.getDefaultConfig=function(){return this.config.defaultConfig},t.getResolvedQueryConfig=function(e,t){return S(this,e,void 0,t)},t.subscribe=function(e){var t=this;return this.globalListeners.push(e),function(){t.globalListeners=t.globalListeners.filter((function(t){return t!==e}))}},t.clear=function(e){this.removeQueries(),(null==e?void 0:e.notify)&&this.notifyGlobalListeners()},t.getQueries=function(e,t){var r,n=!0===e||"undefined"===typeof e;if(n&&!t)return this.queriesArray;if("function"===typeof e)r=e;else{var i=t||{},u=i.exact,s=i.active,o=i.stale,c=this.getResolvedQueryConfig(e);r=function(e){if(!n)if(u){if(e.queryHash!==c.queryHash)return!1}else if(!f(e.queryKey,c.queryKey))return!1;return("boolean"!==typeof s||e.isActive()===s)&&("boolean"!==typeof o||e.isStale()===o)}}return this.queriesArray.filter(r)},t.getQuery=function(e){return this.getQueries(e,{exact:!0})[0]},t.getQueryByHash=function(e){return this.queries[e]},t.getQueryData=function(e){var t;return null==(t=this.getQuery(e))?void 0:t.state.data},t.removeQuery=function(e){this.queries[e.queryHash]&&(e.destroy(),delete this.queries[e.queryHash],this.queriesArray=this.queriesArray.filter((function(t){return t!==e})),this.notifyGlobalListeners(e))},t.removeQueries=function(e,t){var r=this;this.getQueries(e,t).forEach((function(e){r.removeQuery(e)}))},t.cancelQueries=function(e,t){this.getQueries(e,t).forEach((function(e){e.cancel()}))},t.invalidateQueries=function(e,t){var r=this.getQueries(e,t);T.batch((function(){r.forEach((function(e){e.invalidate()}))}));var n=t||{},u=n.refetchActive,s=void 0===u||u,o=n.refetchInactive,c=void 0!==o&&o;if(!c&&!s)return Promise.resolve(r);var a=(0,i.A)({},t);s&&!c?a.active=!0:c&&!s&&(a.active=!1);var h=this.refetchQueries(e,a);return(null==t?void 0:t.throwOnError)||(h=h.catch((function(){return r}))),h.then((function(){return r}))},t.refetchQueries=function(e,t){var r=this,n=[];return T.batch((function(){r.getQueries(e,t).forEach((function(e){var r=e.fetch().then((function(){return e}));(null==t?void 0:t.throwOnError)||(r=r.catch((function(){return e}))),n.push(r)}))})),Promise.all(n)},t.resetErrorBoundaries=function(){this.getQueries().forEach((function(e){e.state.throwInErrorBoundary=!1}))},t.buildQuery=function(e,t){var r=this.getResolvedQueryConfig(e,t),n=this.getQueryByHash(r.queryHash);return n||(n=this.createQuery(r)),n},t.createQuery=function(e){var t=new P(e);return this.config.frozen||(this.queries[t.queryHash]=t,this.queriesArray.push(t),this.notifyGlobalListeners(t)),t},t.fetchQuery=function(e,t,r){var n=y(e,t,r),u=n[0],s=n[1],o=this.getResolvedQueryConfig(u,(0,i.A)({retry:!1},s)),c=this.getQueryByHash(o.queryHash);return c||(c=this.createQuery(o)),c.isStaleByTime(s.staleTime)?c.fetch(void 0,o):Promise.resolve(c.state.data)},t.prefetchQuery=function(e,t,r,n){g(t)&&(t.hasOwnProperty("throwOnError")||t.hasOwnProperty("force"))&&(n=t,t=void 0,r=void 0);var i=y(e,t,r,n),u=i[0],s=i[1],c=i[2];(null==c?void 0:c.force)&&(s.staleTime=0);var a=this.fetchQuery(u,s);return(null==c?void 0:c.throwOnError)||(a=a.catch(o)),a},t.watchQuery=function(e,t,r){var n=y(e,t,r),i=n[0],u=n[1],s=this.getResolvedQueryConfig(i,u);return new I(s)},t.setQueryData=function(e,t,r){this.buildQuery(e,r).setData(t)},e}(),k=new x({frozen:s}),G=[k];function j(e){d()&&v()&&T.batch((function(){G.forEach((function(t){t.getQueries().forEach((function(t){t.onInteraction(e)}))}))}))}F((function(){return j("focus")}))((function(e){var t;if(!s&&(null==(t=window)?void 0:t.addEventListener))return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),function(){window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}})),F((function(){return j("online")}))((function(e){var t;if(!s&&(null==(t=window)?void 0:t.addEventListener))return window.addEventListener("online",e,!1),function(){window.removeEventListener("online",e)}}));var K=r(950).unstable_batchedUpdates,U=r(43),_=U.createContext(k),z=function(){return U.useContext(_)},W=U.createContext(void 0);function J(){return U.useContext(W)}function N(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var V=U.createContext(N()),X=function(){return U.useContext(V)};function Y(){var e=U.useRef(!1),t=U.useCallback((function(){return e.current}),[]);return U[s?"useEffect":"useLayoutEffect"]((function(){return e.current=!0,function(){e.current=!1}}),[]),t}function Z(e,t,r){var n=y(e,t,r);return function(e,t){var r=U.useReducer((function(e){return e+1}),0)[1],n=Y(),i=z(),u=J(),s=X(),o=S(i,e,u,t),c=U.useRef(),a=!c.current,h=c.current||new I(o);c.current=h,U.useEffect((function(){return s.clearReset(),h.subscribe((function(){n()&&r()}))}),[n,h,r,s]),a||h.updateConfig(o);var f=h.getCurrentResult();if(o.suspense||o.useErrorBoundary){var l=h.getCurrentQuery();if(f.isError&&!s.isReset()&&l.state.throwInErrorBoundary)throw f.error;if(o.enabled&&o.suspense&&!f.isSuccess){s.clearReset();var d=h.subscribe();throw h.fetch().finally(d)}}return f}(n[0],n[1])}q=K}}]);
//# sourceMappingURL=177.900c8b7a.chunk.js.map