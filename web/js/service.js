// service page
function change(e){
   let itemname = e.currentTarget.querySelector(".faultcard2 p").textContent
    let itemimg = e.currentTarget.querySelector(".faultcard2 img").src
   console.log(itemname);
   console.log(itemimg);
   window.location.href = `service.html?device=${encodeURIComponent(itemname)}&img=${encodeURIComponent(itemimg)}`;
  

}


   
