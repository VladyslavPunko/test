import"./assets/modulepreload-polyfill-ec808ebb.js";import{f,i as u}from"./assets/vendor-a71e76b7.js";const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",s=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");t.disabled=!0;let a=null;const U={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0].getTime(),t.disabled=!1,a<Date.now()&&(t.disabled=!0,u.error({messageColor:"#FFF",color:"#EF4040",iconUrl:g,position:"topRight",message:"Please choose a date in the future"}))}};f(s,U);function o(e){return e.toString().padStart(2,"0")}function p(e){const r=Math.floor(e/864e5),A=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:A,minutes:l,seconds:m}}t.addEventListener("click",w);function w(){t.disabled=!0;const e=setInterval(()=>{let n=a-Date.now();if(s.disabled=!0,n<=0){clearInterval(e),s.disabled=!1,u.info({position:"center",message:"It is your time!"});return}const{days:i,hours:c,minutes:d,seconds:r}=p(n);y.textContent=`${o(i)}`,h.textContent=`${o(c)}`,S.textContent=`${o(d)}`,C.textContent=`${o(r)}`},1e3)}
//# sourceMappingURL=commonHelpers3.js.map
