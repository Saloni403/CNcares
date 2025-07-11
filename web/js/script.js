// document.querySelector(".menubar");
// document.querySelector(".closing");
// document.querySelector("menu");

document.querySelector(".menubar").addEventListener("click",function(){
    document.querySelector(".menu").style.right="0";
})

document.querySelector(".closing").addEventListener("click",function(){
    document.querySelector(".menu").style.right="-350px";
})

function cdForm(){
document.querySelector(".CDiv").style.display="block"
document.querySelector("body").classList.add("no-scroll")
}
document.querySelector(".closeCDform").addEventListener("click",()=>{
    document.querySelector(".CDiv").style.display="none"
    document.querySelector("body").classList.remove("no-scroll")
})

function cdForm1(){
document.querySelector(".CDiv1").style.display="block"
document.querySelector("body").classList.add("no-scroll")
}
document.querySelector(".closeCDform1").addEventListener("click",()=>{
    document.querySelector(".CDiv1").style.display="none"
    document.querySelector("body").classList.remove("no-scroll")
})


// get quoted
  let selectbrand=document.querySelector("#sb");
  let selectmodel=document.querySelector("#sm");
  let selectfault=document.querySelector("#sf");
  let selectcolor=document.querySelector("#ssc");

 selectmodel.disabled=true;
    selectfault.disabled=true;
    selectcolor.disabled=true;

selectbrand.addEventListener("change",function(){
  if(selectbrand.value==="iPhone"){
    selectmodel.disabled=false;
    selectfault.disabled=false;
    selectcolor.disabled=false;
}
else
{
     selectmodel.disabled=true;
    selectfault.disabled=true;
    selectcolor.disabled=true;
} 
    
})

 
  

  
   


function showdes() {
    const des_h2 = document.querySelector('.description h2');
    

    // Add multiple classes to clicked one
   

    // Get the clicked element
    const clickedText = event.currentTarget.querySelector('p').textContent.trim();
      const clickedP = event.currentTarget.querySelector('p');
       document.querySelectorAll('.byrn .col-md-4 p').forEach(p => {
        p.classList.remove('activediv'); 
    });
       clickedP.classList.add('activediv'); 
    if (clickedText === "Pickup & Delivery") {
        des_h2.innerHTML = "Convenient Pickup & Delivery for Mobile Repairs!";
document.querySelector('#subh').innerHTML="We’ve got you covered! CN Cares offers hassle-free pickup & delivery services for your smartphone and laptop repairs."
   document.querySelector('#h51').innerHTML="Schedule a Pickup"
 document.querySelector('#h52').innerHTML="Expert Repair"
  document.querySelector('#h53').innerHTML="Safe Delivery"
   document.querySelector('.p1').innerHTML="Select your location & time." 
    document.querySelector('.p2').innerHTML="We diagnose & fix your device with precision." 
     document.querySelector('.p3').innerHTML="Get your repaired device securely delivered to your doorstep."


} else if (clickedText === "Walk-In (Office Visit)") {
        des_h2.innerHTML = "Walk-in (Office Visit) – Quick & Reliable Mobile Repairs!";
        document.querySelector('#subh').innerHTML="Need an urgent repair? Visit our service center and get your smartphone or laptop fixed by our expert technicians on the spot. No appointments needed—just walk in and let us take care of the rest!"
   document.querySelector('#h51').innerHTML="Instant Diagnosis"
 document.querySelector('#h52').innerHTML="Expert Repair"
  document.querySelector('#h53').innerHTML="Comfort & Convenience"
   document.querySelector('.p1').innerHTML="Get a quick assessment of your device’s issue." 
    document.querySelector('.p2').innerHTML="Skilled professionals ensure high-quality fixes." 
     document.querySelector('.p3').innerHTML="Enjoy a seamless repair experience while you wait."

    } else if (clickedText === "Doorstep Solutions") {
        des_h2.innerHTML = "Hassle-Free Mobile Repairs at Your Doorstep!";
        document.querySelector('#subh').innerHTML="Fast, Reliable & Affordable Solutions for All Smartphones & Laptops"
   document.querySelector('#h51').innerHTML="Book an Appointment"
 document.querySelector('#h52').innerHTML="On-Site Repair"
  document.querySelector('#h53').innerHTML="Secure Payment"
   document.querySelector('.p1').innerHTML="Share your device issue & choose a convenient time." 
    document.querySelector('.p2').innerHTML="Our expert technician arrives at your location & fixes your device." 
     document.querySelector('.p3').innerHTML="Pay after service via cash, card, or UPI."

    }
}
