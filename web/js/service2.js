const params= new URLSearchParams(window.location.search)
const devicename= params.get('device');
const deviceimg= params.get('img');
document.getElementById("devicename").textContent=`${devicename}`;
document.getElementById("deviceimg").src=`${deviceimg}`;