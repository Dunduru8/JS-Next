var $checkout = document.getElementById("checkout");
$checkout.addEventListener("click", handleClickButtonChekout)

function handleClickButtonChekout(){
    var $quotesСheck = document.getElementById("quotesСheck").value;
    var $quotesСheck = $quotesСheck.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2')
    console.log($quotesСheck)
    document.getElementById("quotesСheck").value = $quotesСheck;
    
    var arrNameCheck = [document.getElementById("name"), document.getElementById("sername") ];
    var regexp = /^[a-zA-Zа-яА-ЯёЁ]+$/;
    for (var i = 0; i < arrNameCheck.length; i++){
        if (regexp.test(arrNameCheck[i].value) == true){
            arrNameCheck[i].style.border = "";  
        }else{
            arrNameCheck[i].style.border ="1px solid #f16d7f";
        };
    }
    var $phoneChek = document.getElementById("phone").value;
    regexp = /^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/;
    if (regexp.test($phoneChek) == true){
        document.getElementById("phone").style.border = "";
    }else{
        document.getElementById("phone").style.border = "1px solid #f16d7f";
    };

    var $mail = document.getElementById("email_adress").value;
     regexp = /^mymail\@mail\.ru$|^my-mail\@mail\.ru$|^my\.mail\@mail\.ru$/;
     if (regexp.test($mail) == true){
        document.getElementById("email_adress").style.border = "";
    }else{
        document.getElementById("email_adress").style.border = "1px solid #f16d7f";
    };

}

