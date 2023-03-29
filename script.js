function oyunuBaslat(secim){

    //önce kullanıcının seçimi değişkene aktaralım
    let kullaniciSecimi=secim.id;
    
    //pc nin rastgele seçimini değişkene aktarma
    let rastgeleSayi=Math.floor(Math.random()*3);
    let bilgisayarSecimi=["tas", "kagit", "makas"][rastgeleSayi];
    
    //puanlamaları dizi şeklinde değişkene aktaralım
    let oyunPuanlamalari={
        "tas":{"makas":1, "tas": 0.5, "kagit":0},
        "kagit":{"tas":1, "kagit":0.5, "makas":0},
        "makas":{"kagit":1, "makas":0.5, "tas":0}
    };

    //diziden seçimize karşılık gelen puan
    let kullaniciPuani=oyunPuanlamalari[kullaniciSecimi][bilgisayarSecimi];
    
    //kayıtlı tüm resimlerin kaynak adreslerini alalım
    let kayitliResimler={
        "tas":document.getElementById("tas").src,
        "kagit":document.getElementById('kagit').src,
        "makas":document.getElementById('makas').src
    };

    //temiz bir sonuç ekranı için tüm resimleri silelim
    document.getElementById("tas").remove();
    document.getElementById("kagit").remove();
    document.getElementById("makas").remove();

    //sonuç için yeni nesneler oluşturalım
    let kullaniciResmi=document.createElement("img");
    let bilgisayarResmi=document.createElement("img");
    let sonucMesaji=document.createElement("div");

    //resim nesnelerine seçimlere göre uygun kaynakları bağlayalım
    kullaniciResmi.src=kayitliResimler[kullaniciSecimi];
    bilgisayarResmi.src=kayitliResimler[bilgisayarSecimi];

    //oluşturduğumuz nesneleri kapsayıcı altına monte edelim
    document.getElementById("container").appendChild(kullaniciResmi);
    document.getElementById("container").appendChild(sonucMesaji);
    document.getElementById("container").appendChild(bilgisayarResmi);

    
    sonucMesaji.classList.remove("basarisiz", "berabere", "kazanma");
    
    //puana bakarak şart kontrolü yapıp sonucu bastıralım
    if(kullaniciPuani === 0){
        sonucMesaji.innerHTML="Malesef Kaybettiniz :(";
        sonucMesaji.classList.add("basarisiz");
    }
    else if(kullaniciPuani === 0.5){
        sonucMesaji.innerHTML="Berabere Kaldınız";
        sonucMesaji.classList.add("berabere");
    }
    else{
        sonucMesaji.innerHTML="Tebrikler Kazandınız!";
        sonucMesaji.classList.add("kazanma");
    }

}






