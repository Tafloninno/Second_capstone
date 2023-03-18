"use strict";(self.webpackChunkkanban=self.webpackChunkkanban||[]).push([[179],{426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@500&display=swap);"]),o.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  min-height: 50rem;\r\n  background-color: #cfba9a;\r\n}\r\n\r\nh3,\r\nh4 {\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.x {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.3rem;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.topx,\r\n.bottomx {\r\n  height: 0.255rem;\r\n  width: 1.5rem;\r\n  background-color: #fffdfd;\r\n}\r\n\r\n.topx {\r\n  transform: rotate(45deg) translateY(0.4rem);\r\n}\r\n\r\n.bottomx {\r\n  transform: rotate(-45deg) translateY(-0.4rem);\r\n}\r\n\r\n.popup-window {\r\n  display: block;\r\n  text-align: center;\r\n  z-index: 1;\r\n  padding: 1rem;\r\n  margin: 2rem;\r\n  height: 30rem;\r\n  border: solid 5px #fff;\r\n  border-radius: 1rem;\r\n  background-color: rgb(126, 49, 49);\r\n  color: #fff;\r\n  width: 80%;\r\n  min-height: 20%;\r\n  position: fixed;\r\n  overflow-y: scroll;\r\n  right: 2%;\r\n  top: 200rem;\r\n  transition: 0.5s;\r\n}\r\n\r\n.show-popup {\r\n  top: 5rem;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.popup-meal-image {\r\n  height: 13rem;\r\n  width: 92%;\r\n  border: solid 1px #333;\r\n  margin: 0 auto;\r\n}\r\n\r\n.popup-meal-image img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.additional-information {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.additional-information li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  align-items: flex-start;\r\n}\r\n\r\n.right {\r\n  margin: 0;\r\n}\r\n\r\n.comments-section,\r\n.comments-section li {\r\n  display: flex;\r\n  gap: 0.3rem;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.comments-section li {\r\n  gap: 0.5rem;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  height: 2rem;\r\n  border-radius: 0.5rem;\r\n  padding: 0 0.5rem;\r\n}\r\n\r\n.comments-section {\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  padding: 0.5rem 0;\r\n  border-radius: 0.5rem;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  align-items: flex-start;\r\n}\r\n\r\ntextarea {\r\n  width: 100%;\r\n  height: 6rem;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  background-color: #bba27e;\r\n  padding: 0.5rem;\r\n  border-radius: 0.3rem;\r\n  color: #fff;\r\n}\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  color: #fff;\r\n}\r\n\r\n#comment-btn {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 0.5rem;\r\n  background-color: brown;\r\n  border: 4px solid #fff;\r\n  color: #fff;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .popup-window {\r\n    margin: 0 20%;\r\n    padding: 2rem 10%;\r\n    width: 60%;\r\n    right: 2%;\r\n  }\r\n\r\n  .additional-information li {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .right {\r\n    margin-right: auto;\r\n  }\r\n\r\n  .comments-section {\r\n    font-size: 0.8rem;\r\n    align-items: flex-start;\r\n    width: 70%;\r\n  }\r\n\r\n  .comments-section li {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .popup-meal-image {\r\n    width: 100%;\r\n    height: 20rem;\r\n  }\r\n\r\n  .x {\r\n    right: 5%;\r\n  }\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 20px;\r\n  background-color: rgb(224, 72, 17);\r\n  box-shadow: 1px 1px 1px rgb(240, 238, 238);\r\n}\r\n\r\n.logo {\r\n  font-size: 28px;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.dish_container {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  gap: 16px;\r\n  margin-top: 5%;\r\n  padding-right: 24px;\r\n  padding-left: 24px;\r\n}\r\n\r\n.logo span {\r\n  color: rgb(197, 194, 193);\r\n  font-style: oblique;\r\n  font-size: 28px;\r\n}\r\n\r\n.nav_links {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 12px;\r\n}\r\n\r\n.nav_links a {\r\n  text-decoration: none;\r\n  font-size: 19px;\r\n  color: white;\r\n}\r\n\r\n.heading {\r\n  margin-top: 5%;\r\n  font-size: 28px;\r\n  color: rgb(224, 72, 17);\r\n  text-align: center;\r\n  box-shadow: 1px 1px 1px rgb(240, 238, 238);\r\n}\r\n\r\n.dish_container {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  gap: 16px;\r\n  margin-top: 5%;\r\n  padding-right: 24px;\r\n  padding-left: 24px;\r\n}\r\n\r\n.dish_wrapper {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: white;\r\n  gap: 10px;\r\n  padding: 16px;\r\n  border-radius: 7px;\r\n  box-shadow:\r\n    0 4px  4px  rgba(0, 0, 0, 0.1),\r\n    0 1px  6px  rgba(0, 0, 0, 0.05),\r\n    0 8px  8px  rgba(0, 0, 0, 0.1),\r\n    0 16px 16px rgba(0, 0, 0, 0.1),\r\n    8px 32px 32px rgba(0, 0, 0, 0.15),\r\n    8px 64px 64px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.dish_image {\r\n  overflow: hidden;\r\n}\r\n\r\n.dish_image img {\r\n  width: 100%;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.dish_image img:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.dish_name {\r\n  width: 100%;\r\n  height: 6rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.dish_name h2 {\r\n  font-size: 16px;\r\n}\r\n\r\n.likes {\r\n  text-align: end;\r\n}\r\n\r\n.commentBtn {\r\n  width: 100%;\r\n  padding: 7px 10px;\r\n  background-color: rgb(224, 72, 17);\r\n  color: white;\r\n  border-radius: 7px;\r\n  border: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  nav {\r\n    padding: 24px 100px;\r\n  }\r\n\r\n  .dish_name h2 {\r\n    font-size: 12.5px;\r\n  }\r\n\r\n  .dish_container {\r\n    display: grid;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 3rem 4%;\r\n    margin-top: 5%;\r\n    padding-right: 50px;\r\n    padding-left: 50px;\r\n  }\r\n\r\n  .heading {\r\n    margin-top: 2%;\r\n    font-size: 28px;\r\n    color: rgb(224, 72, 17);\r\n    text-align: center;\r\n  }\r\n}\r\n",""]);const s=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},o=[],s=0;s<n.length;s++){var d=n[s],c=t.base?d[0]+t.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var m=e(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)r[m].references++,r[m].updater(u);else{var h=i(u,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function i(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,i){var a=t(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=e(a[o]);r[s].references--}for(var d=t(n,i),c=0;c<a.length;c++){var l=e(a[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=d}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,i&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},187:(n,r,e)=>{var t=e(379),i=e.n(t),a=e(795),o=e.n(a),s=e(569),d=e.n(s),c=e(565),l=e.n(c),p=e(216),m=e.n(p),u=e(589),h=e.n(u),g=e(426),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=d().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=m(),i()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;class x{static popupWindow=document.querySelector("#popup-window");static baseurl="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WcPR52P9C9b3ZbPg6GHe";static getInvolvementApi=async()=>{const n=`${this.baseurl}/likes`,r=fetch(n,{method:"GET"}),e=await r;return await e.json()};static popupId=async n=>{let r="";return(await this.getFoodItems()).forEach((e=>{e.idMeal===n&&(r=e.idMeal)})),r};static populatePopup=async n=>{const r=await this.getFoodItems();let e="";const t=(await this.collectId(n)).filter((n=>""!==n.comment));return r.forEach((r=>{r.idMeal===n&&(this.popupWindow.id=n,e=`<div class="x" id="${n}">\n  <div class="topx" id="x"></div>\n  <div class="bottomx" id="x"></div>\n  </div>\n  <section class="popup-meal-image">\n  <img src="${r.strMealThumb}" alt="image"> \n  </section>\n  <section class="popup-info">\n  <h3>${r.strMeal}</h3>\n  <ul class="additional-information">\n  <li><div class="right">Fuel:</div><div>Length:</div></li>\n  <li><div class="right">Weight:</div><div>Power:</div></li>\n  </ul><h4>Comments (<span id="number-of-comments">${t.length}\n  \n  </span>)</h4>\n  <ul class="comments-section" id='comments-section'>\n  \n  </ul>\n  <h4>Add a comment</h4>\n  <ul class="add-comment">\n  <li><input type="text" placeholder="Your name" name="user-name" id="nameInput"></li>\n  <li><textarea name="new comment" id="new-comment" maxlength="30" cols="30" rows="10" placeholder="your insights"></textarea></li>\n  <li><button id="comment-btn">Comment</button></li>\n  </ul>\n  </section>`)})),e};static getComments=async n=>{const r=(await this.collectId(n)).filter((n=>""!==n.comment));let e="",t=0;return document.getElementById("#number-of-comments").innerHTML=`(${r.length})`,r.forEach((n=>{t+=1,n.index=t,n.index%2==0?(n.background="#cfba9a",n.color="#333"):n.background="rgb(126, 49, 49)",e+=`<li style="background-color: ${n.background};color:${n.color}"><span id="date">${n.creation_date}</span><span id="name">${n.username}</span><span id="comment">${n.comment}</span></li>`})),e};static mealContainer=document.querySelector("#dish_container");static getFoodItems=async()=>{const n=fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",{method:"GET"}),r=await n;return(await r.json()).meals};static getMealsId=async()=>{const n=await this.getFoodItems(),r=[];return n.forEach((n=>{r.push(n.idMeal)})),r};static collectId=async n=>{const r=await this.popupId(n),e=`${this.baseurl}/comments?item_id=${r}`;return fetch(e).then((n=>n.ok?n.json():[]))};static addCommentToApi=async n=>{const r=await this.popupId(n),e=`${this.baseurl}/comments`,t=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({item_id:`${r}`,username:`${document.querySelector("#nameInput").value}`,comment:`${document.querySelector("#new-comment").value}`})}),i=await t.text();return document.querySelector("#nameInput").value="",document.querySelector("#new-comment").value="",i};static getLikes=async()=>{const n=`${this.baseurl}/likes`,r=await fetch(n,{method:"GET"});return await r.json()};static addLikes=async n=>{const r=`${this.baseurl}/likes`,e=await this.getLikes();let t="";e.forEach((r=>{n===r.item_id&&(t=r.likes)}));const i=n,a=await fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({item_id:`${i}`,likes:`${t+1}`})});return await a.text()};static populateDom=async()=>{let n="";const r=await this.getFoodItems(),e=await this.getLikes();return r.forEach((r=>{e.forEach((n=>{r.idMeal===n.item_id&&(r.likesCount=n.likes)})),n+=`  <div class="dish_wrapper" id=${r.idMeal}>\n              <div class="dish_image">\n                  <img src="${r.strMealThumb}" alt="image"> \n              </div>\n              <div class="dish_name">\n                  <h2>${r.strMeal}</h2>\n                  <i id="love" class="fa-regular fa-heart"></i>\n                  <div class="likes">\n                  <h4>${r.likesCount}</h4>\n                  </div>\n              </div>\n              <button class="commentBtn" id="commentBtn">comments</button>\n           </div>`})),n};static fillDom=async()=>{this.mealContainer.innerHTML=await this.populateDom()}}x.fillDom();let w=!1;const b=document.querySelector("body");window.addEventListener("click",(async n=>{"x"===n.target.id&&(document.querySelector(".popup-window").classList.remove("show-popup"),b.style.overflowY="scroll",x.mealContainer.style.filter="blur(0)",w=!1),"commentBtn"===n.target.id&&!1===w?(x.popupId(n.target.parentNode.id),x.popupWindow.innerHTML=await x.populatePopup(n.target.parentNode.id),x.collectId(n.target.parentNode.id),document.querySelector("#comments-section").innerHTML=await x.getComments(n.target.parentNode.id),document.querySelector(".popup-window").classList.add("show-popup"),b.style.overflowY="hidden",x.mealContainer.style.filter="blur(6px)",w=!0):"comment-btn"===n.target.id?""!==document.querySelector("#new-comment").value&&""!==document.querySelector("#nameInput").value&&(await x.addCommentToApi(n.target.parentNode.parentNode.parentNode.parentNode.id),x.collectId(n.target.parentNode.parentNode.parentNode.parentNode.id),document.querySelector("#comments-section").innerHTML=await x.getComments(n.target.parentNode.parentNode.parentNode.parentNode.id)):"love"===n.target.id&&(await x.addLikes(n.target.parentNode.parentNode.id),x.getLikes(),x.fillDom())}));const v=document.querySelector("#dish_container");(async()=>{const n=await(async()=>{const n=fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",{method:"GET"}),r=await n;return(await r.json()).meals})();v.innerHTML=await(async n=>{let r="";return n.forEach((n=>{r+=`  <div class="dish_wrapper">\n              <div class="dish_image">\n                  <img src="${n.strMealThumb}" alt="image"> \n              </div>\n              <div class="dish_name">\n                  <h2>${n.strMeal}</h2>\n                  <i id="love" class="fa-regular fa-heart"></i>\n                  <div class="likes">\n                  <h4 class="likes_wrap">likes</h4>\n              </div>\n              </div>\n              \n              <button class="commentBtn">comments</button>\n           </div>`})),r})(n)})()}},n=>{n(n.s=187)}]);