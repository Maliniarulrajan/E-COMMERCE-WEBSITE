var productcontainer=document.getElementById("products")
var serach=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")
serach.addEventListener("keyup",function(){
    var entered=event.target.value.toUpperCase()
    for (count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(entered)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count]="block"
        }
    }
})