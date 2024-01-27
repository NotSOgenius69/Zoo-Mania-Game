const emojis=["🙈","🙈","🐯","🐯","🐼","🐼","🦏","🦏","🐘","🐘","🐢","🐢","🦔","🦔","🐍","🐍"];
const emojis2=["🦍","🦍","🦧","🦧","🦝","🦝","🐵","🐵","🦓","🦓","🦂","🦂","🦨","🦨","🐅","🐅"];
if(Math.random()>0.5)
   {
    var shuf_emojis=emojis.sort(()=>(Math.random()>0.5)?2:-1);
   }
   else
   {
    var shuf_emojis=emojis2.sort(()=>(Math.random()>0.5)?2:-1);
   }

for(var i=0;i<16;i++)
{
    var box=document.getElementById(i+1);
    box.innerHTML=shuf_emojis[i];
}
function clicked(id){
     document.getElementById(id).classList.add("boxopen");
     var elements=document.querySelectorAll('.boxopen');
     setTimeout(function(){
             if(elements.length>1)
             {
                if(elements[0].innerHTML==elements[1].innerHTML)
                   {
                    elements[0].classList.add("boxmatch");
                    elements[1].classList.add("boxmatch");
                    elements[1].classList.remove("boxopen");
                    elements[0].classList.remove("boxopen");

                    if(document.querySelectorAll('.boxmatch').length==emojis.length)
                    {
                        openpp();
                    }
                   }
                   else
                   {
                    if(elements[0].innerHTML=="🐍"||elements[1].innerHTML=="🐍"||elements[0].innerHTML=="🦂"||elements[1].innerHTML=="🦂")
                    {
                        var id;
                        if(elements[0].innerHTML=="🐍"||elements[0].innerHTML=="🦂")
                          id=elements[0].id;
                        else if(elements[1].innerHTML=="🐍"||elements[1].innerHTML=="🦂")
                         id=elements[1].id;
                        
                        swappy(id);
                    }
                    elements[1].classList.remove("boxopen");
                    elements[0].classList.remove("boxopen");
                   }
             }
     },600);
}
function generate()
{
    return Math.floor(Math.random()*16);
}
function swappy(id)
{
    var openbox=document.getElementById(id);
    var rand=generate();
    while(rand==id||document.getElementById(rand).classList.contains("boxmatch"))
     rand=generate();
    
     console.log(rand);
    var closebox=document.getElementById(rand);
    var temp=openbox.innerHTML;
    openbox.innerHTML=closebox.innerHTML;
    closebox.innerHTML=temp;
    
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
