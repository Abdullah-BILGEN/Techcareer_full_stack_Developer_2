// alert("Deneme 999")
// alert("pop-up1");

// window.alert("pop-up2")

// document.writeln("Sayfada göster <br/>");
// window.document.writeln("Sayfada göster2");


// console.log("console.log")
// console.error("Console.log");
// console.warn("Console.warn");
// console.info("Console.info");


// JS  SİNGLE THREAD bir işlem sergiler sıralı olarak biri bittiğinden diğer şlen başlar

// var VARİABLE den gelmektedir 

// var degiskenAdi=44;
// console.log(degiskenAdi);
// console.log(typeof degiskenAdi);

// var degiskenAdi55=44.23;
// console.log(degiskenAdi55);
// console.log(typeof degiskenAdi55);

// var $degiskenAdi55="MerhabalarGüzel İnsanlar";
// console.log($degiskenAdi55);
// console.log(typeof $degiskenAdi55);


// var _$degiskenAdi55=true;
// console.log(_$degiskenAdi55);
// console.log(typeof _$degiskenAdi55);

// var _$degiskenAdi55=[];  LİST
// var _$degiskenAdi55={};  OBJE

// Hoisting
// carName="Audi";
// var carName;

////////////////////////////////////////////////

// let deneme=44;
// console.log(deneme);
// deneme=66;
// console.log(deneme);

// const deneme99=14525;
// deneme99=66666; 

////////////////////////////////////////////////carName

//Operatörler
// + _ * / % ++ --
// &&=VE ||== VEYA  ! Değil
// let number1=12;
// let number2=5;

// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// = ATAMA
// == (Türüne Bakmadan)
// === (Türüne Bakarak)
//////////////////////////////////////////////////////
// let userName=Number(prompt("Lütfen Sayı giriniz"));
// console.log(userName);

///////////////////////////////////////////////////////

// Nan: Not A Number
// console.log(3/4);
// console.log(3/asd);
// infinity
// console.log(0/5);
// console.log(5/0);

//undefined  DEĞER ATANMAMIŞ DEĞİŞKEN 
// let data;
// console.log(data);
// new
// nul

//////////////////////////////////////////////////////



// Math 
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25)); Karesi
// console.log(Math.abs()-25); Mutlak Değer
// console.log(Math.pow(6,2)); 5 üssü 2
// console.log(Math.floor(5.9)); Asağı yuvarlama 
// console.log(Math.round(3.4)); 5 in asagısında ise asağı yuvarlar
// console.log(Math.round(3.6)); 5 in yukarısında ise yukarı yuvarlar
// console.log(Math.min(3,445,789,56567)); en küçüğü verir 
// console.log(Math.max(3,44,56)); en büyüğü veriri
// console.log(Math.sin(45)); sin
// console.log(Math.asin(1));
// console.log(Math.floor(Math.random()*9+1)); kusuratsız random sayı verir





//Örnek-1
// Kullanıcı tarafından girilen  2 sayıyı toplayan JS kodu

// let number1=Number(prompt("Toplanacak 1. Sayıyı giriniz"))
// let number2=Number(prompt("Toplanacak 2. Sayıyı giriniz"))
// console.log(number1+number2);


//Örnek-2
/* 
Kullanıcıdan alınan dereceyi fahrenhyat'a çeviren JS kodu yazınız ?
Formül: (derece*9/5)+32 
*/
// let derece=Number(prompt(" Dereceyi giriniz !!"))
// console.log((derece*9/5)+32);
// HOCANIN YAPMA YÖNTEMİ

// let degree,fahrenhayt;
// degree =Number(prompt(" Lütfen derece için sayı giriniz"));
// fahrenhayt=((degree*9/5)+32);
// console.log(degree+"derece = "+fahrenhayt+" Fahrenayt'tır. !!");

// console.log(`${degree}derece ${fahrenhayt} fahrenayttır`);

//Örnek-3
// y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
// Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?
// let x=Number(prompt(" Lütfen bir x değeri belirtiniz !!"))
// let k=Number(prompt(" Lütfen bir k değeri belirtiniz !!"))
// console.log((3*x)+(4*k))

// Örnek-4: Aşağıdaki örnekleri math ile çözelim ?


// 1-mutlak değeri alsın 5.9
// console.log(Math.abs(-5.9));

// 2-yuvarlama yapsın  6.0
// console.log(Math.round(-5.9));

// 3-karesini alsın 36.00
// console.log(Math.sqrt(-5.9));

// 4-karekök alsın 6.0
// console.log(Math.pow(-5.9,2));

// 5-yuvarlama yapsın 6.0
// console.log(Math.floor(-5.9));

// 6-)çıkan sonucu 5 bölsün 6/5=1
// console.log(Math.ceil(5.9)/5);

// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın
// console.log(Math.min(1,5));

// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
// console.log(Math.min(1,5));
// if(Math.min(1,5)%2==1){
//     console.log(Math.min(1,5)+3);

// }
// else{
//     console.log(Math.min(1,5)+5);

// }


///////////////////////////////////////////////////////

// string

// let vocabulary =" JavaScript öğreniyorum JavaScript ";
// console.log(vocabulary.length);
// Boşlukları tıraşlar
// console.log(vocabulary.trim().length);

// console.log(vocabulary.toLowerCase());
// console.log(vocabulary.toUpperCaseCase());

// console.log(vocabulary.startsWith("J"));
// console.log(vocabulary.endsWith());

// console.log(vocabulary.charAt(0));
// console.log(vocabulary.indexOf("Javascript"));
// console.log(vocabulary.lastIndexOf("Javascript"));

// console.log(vocabulary.substring(1));
// console.log(vocabulary.substring(0,3));  //0<=x<=3-1

// vocabulary=vocabulary.concat("sona ekle");
// console.log(vocabulary);

// ocabulary=vocabulary.replace("yerini değiştir");
// console.log(vocabulary); 

//////////////////////////////////////////////////////

// Function
// 1-ParamaetresizReturnsuz

// function parametrsizReturnsuz(){
//     console.log("parametresiz Returnsuz");
//     }
//     parametrsizReturnsuz();

// 2- ParametreliReturnsuz

// function parametreliReturnsuz(Number) { console.log("parametreli Returnsuz"+Math.pow(Number,2));
// }
// parametreliReturnsuz(6);

// 3- ParametresizReturnlu
// function parametresizReturnlu(){
//     return "Parametresiz Returnlu";
// }
// const data3=parametresizReturnlu();
// console.log(data3);


// 4- ParametreliReturnlu
// function parametreliReturnlu(user){
//     return "Parametreli Returnlu :"+ user;
// }
// const data4=parametreliReturnlu("Java Öğreniyorum");
// console.log(data4);

///////////////////////////////////////////////////////

//Normal Function
// function normal(){
// console.log("normal")
// }
// normal();

//Anonymous Function
// const anonymous= function(){
//     console.log("anonymous")
//     }
//     anonymous();


//Arrow Function

// const arrow =() => {
//     console.log("arrow")
//     }
//     arrow();

///////////////////////////////////////////////////////
// conditional

// let conditional = () =>{
//     let number = 10;
//     if(number >=5){
//         console.log("Beşten Büyüktür");
//     }
//     else{
//         console.log("Beşten Küçüktür");
//     }

//     let ternary = (number >= 5)?"5' ten büyüktür":"5'ten küçüktür"
//     console.log(ternary);
// }
// conditional();


let conditional2 = () =>{
    let number = 1;
    if(number == "1"){
        console.log("Sayı 1 ");
    }
    else if(number === "2"){
        console.log("Sayı 2 ");
    }
    else if(number === "3"){
        console.log("Sayı 3 ");
    }
    else if(number === "4"){
        console.log("Sayı 4");
    }
    else if(number === "5"){
        console.log("Sayı 5 ");
    }
    else{
        console.log("1<=x>=5 dışındadır");
    }

    switch (number) {
        case 1:
            console.log("Sayı 1")          
            break;
            
            case 2:
            console.log("Sayı 2")          
            break;

            case 4:
            console.log("Sayı 3")          
            break;

            case 4:
            console.log("Sayı 4")          
            break;
            
            case 5:
            console.log("Sayı 5")          
            break;
    
        default:
            console.log("1<=x>=5 dışındadır");
            break;
    }

}
conditional2();

//////////////////////////////////////////////////////

// Loop
// break return continue
// try-catch


/////////////////////////////////////////////////////////

// Dizi

//////////////////////////////////////////////////////////

// Object

////////////////////////////////////////////////////////

// callback, promise, asyn-await