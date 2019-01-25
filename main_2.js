var $imgJson  = document.getElementById("click");
$imgJson.addEventListener("click", imgDivcreate);
function imgDivcreate(){
    var $delButton = event.target.parentNode;
    $delButton.removeChild($imgJson);

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://127.0.0.1:8080/img.json");
    xhr.send();
    
    xhr.onreadystatechange = function(){
        if (xhr.readyState == XMLHttpRequest.DONE){
          var imgArr = JSON.parse(xhr.responseText);
          var $imgcatalog = document.getElementById("imgDiv");
          for (var i = 0; i < imgArr.length; i++){
            var $link = document.createElement("a");
            $link.className = "link";
            $link.id = i;
            $link.href = imgArr[i].original;
            $imgcatalog.appendChild($link); 
            
            var $itemImg = document.createElement("img");
            $itemImg.className = "img";
            $itemImg.name = "small"
            $itemImg.src = imgArr[i].thumb;
            $link.appendChild($itemImg); 
          } 
        }
    };




};
document.body.addEventListener("click", function(Event){
    if (event.target.className == "img") {
          var imgChange = document.getElementById(event.target.parentNode.id); 
          var srcChange = event.target.name; 
          
              var imgNew = document.createElement("img"); 
                    if(srcChange == "small"){
                      var imgBig = event.target.parentNode.href;
                      var imgSmall = event.target.src;
                      event.target.parentNode.href = imgSmall;
                      imgChange.innerHTML = "";
                      imgNew.src = imgBig; 
                      imgNew.name = "big"; 
                      imgNew.className = "img";  
                      imgNew.style.zIndex = 1; 
                      event.preventDefault();    
                    }else if(srcChange == "big"){
                      var imgSmall = event.target.parentNode.href;
                      var imgBig = event.target.src;
                      event.target.parentNode.href = event.target.src;
                      imgChange.innerHTML = "";
                      imgNew.src = imgSmall;
                      imgNew.name = "small";
                      imgNew.className = "img";
                      imgNew.style.zIndex = ""; 
                    };
        
                imgChange.appendChild(imgNew); 
                event.preventDefault();  
        
            };
        
});

var $noNeed = document.getElementById("noNeed");
$noNeed.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://127.0.0.1:8080/choice.json");
  xhr.send();
  xhr.onreadystatechange = function(){
    if (xhr.readyState == XMLHttpRequest.DONE){
      var answer = JSON.parse(xhr.responseText);
      console.log(answer);
         if (answer[0].rezult == "success")
         $noNeed.style.backgroundColor = "green";
    };
  };
})
