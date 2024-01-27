const emojis=["🙈","🙈","🐯","🐯","🐼","🐼","🦏","🦏","🐘","🐘","🐢","🐢","🦔","🦔","🐍","🐍"];
var shuf_emojis=emojis.sort(()=>(Math.random()>0.5)?2:-1);
for(var i=0;i<16;i++)
{
    var box=document.getElementById(i+1);
    box.innerHTML=shuf_emojis[i];
}
function clicked(id){
     document.getElementById(id).classList.add("boxopen");
     setTimeout(function(){
             if(document.querySelectorAll('.boxopen').length>1)
             {
                if(document.querySelectorAll('.boxopen')[0].innerHTML==document.querySelectorAll('.boxopen')[1].innerHTML)
                   {
                    document.querySelectorAll('.boxopen')[0].classList.add("boxmatch");
                    document.querySelectorAll('.boxopen')[1].classList.add("boxmatch");
                    document.querySelectorAll('.boxopen')[1].classList.remove("boxopen");
                    document.querySelectorAll('.boxopen')[0].classList.remove("boxopen");

                    if(document.querySelectorAll('.boxmatch').length==emojis.length)
                    {
                        openpp();
                    }
                   }
                   else
                   {
                    document.querySelectorAll('.boxopen')[1].classList.remove("boxopen");
                    document.querySelectorAll('.boxopen')[0].classList.remove("boxopen");
                   }
             }
     },600);
}
function start(){
    document.getElementById("title").style.visibility='hidden';
    document.getElementById("text").style.visibility='hidden';
    document.getElementById("startbtn").style.visibility='hidden';
    document.getElementById("mainid").style.visibility='visible';
    document.getElementById("grid").style.visibility='visible';
    document.getElementById("restartbtn").style.visibility='visible';
}
var popup=document.getElementById("popupid");
function openpp()
{
     popup.classList.add("openpopup");
}
function closepp()
{
    popup.classList.add("closepopup");
}
