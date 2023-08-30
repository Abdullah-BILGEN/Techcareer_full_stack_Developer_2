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


// let conditional2 = () =>{
//     let number = 1;
//     if(number == "1"){
//         console.log("Sayı 1 ");
//     }
//     else if(number === "2"){
//         console.log("Sayı 2 ");
//     }
//     else if(number === "3"){
//         console.log("Sayı 3 ");
//     }
//     else if(number === "4"){
//         console.log("Sayı 4");
//     }
//     else if(number === "5"){
//         console.log("Sayı 5 ");
//     }
//     else{
//         console.log("1<=x>=5 dışındadır");
//     }

//     switch (number) {
//         case 1:
//             console.log("Sayı 1")          
//             break;
            
//             case 2:
//             console.log("Sayı 2")          
//             break;

//             case 4:
//             console.log("Sayı 3")          
//             break;

//             case 4:
//             console.log("Sayı 4")          
//             break;
            
//             case 5:
//             console.log("Sayı 5")          
//             break;
    
//         default:
//             console.log("1<=x>=5 dışındadır");
//             break;
//     }

// }
// conditional2();

// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// let value = Number(prompt("Bir Sayı giriniz !!"));
// function negativeOrPositive(number) {
//     result = number > 0 ? "Pozitif" : "Negatif";
//     return result;
// }
// console.log(negativeOrPositive(value));


// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.

// let oddEvenCalculator = function () {
//     let number = prompt('Bir Sayı Giriniz');
//     if (number % 2 == 0) {// çift sayı
//         console.log(number + " Sayı iki ile bölümünden kalan 0 dır");
//     } else {
//         console.log(number + " Sayının iki ile bölümünden kalan değer mevcuttur");
//     }
// }
// oddEvenCalculator()

// HOCANIN YAPTIĞI

// let number = Number(prompt("Bir sayı giriniz"));
// let oddEvenCalculatorTenary = number % 2 == 0 ? "Çift" : "Tek";
// console.log(oddEvenCalculatorTenary);

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?

// let day = Number(prompt("Haftanın Kaçıncı gününü gösterelim"));
// let weeksDay = (day) => {
//     switch (day) {
//         case 1:
//             console.log("Haftanın 1. günü Pazartesi'dir");
//             break;

//         case 2:
//             console.log("SalHaftanın 2. günü Salı'dır");
//             break;

//         case 3:
//             console.log("Haftanın 3. günü Çarşamba'dir");
//             break;

//         case 4:
//             console.log("PerşembHaftanın 4. günü Perşembe'dir");
//             break;

//         case 5:
//             console.log("Haftanın 5. günü Cuma'dır");
//             break;

//         case 6:
//             console.log("Haftanın 6. günü Cumartesi'dir");
//             break;

//         case 7:
//             console.log("Haftanın 7. günü Pazar'dır");
//             break;


//         default:
//             console.log("1 ile 7 arasında bir rakam giriniz !! (Bir hafta 7 gündür) ");
//             break;
//     }
// }

// weeksDay(day);

//////////////////////////////////////////////////////

// Loop

// let loop =()=>{
//     console.log(1+2+3+4+5+6+7+8+9+10);
    // i++
    // ++i
    // i+=1;
    // i=i+1;
 // /////////////// FOR //////////////////////////
    // let sum1 = 0
    // for (let i = 1 ; i <= 10 ; i++ ) {
    // sum1 = sum1 + i ; }
    // // sum+=i; Yukarıdakinin aynsı 
    // console.log("Toplam = "+ sum1)

/////////////// WHİLE ///////////////////
//     let sum2 = 0 ;
//     let k = 1;
//     while ( k <= 10 ) {
//     sum2 += k ; k++; }
//     console.log("Toplam 2 = "+ sum2)
   
//     /////////////// DO WHİLE ///////////////

//     let sum3 = 0 ;
//     let m = 1;
//     do{
//         sum3 += m ; m++; 
//     }
//     while ( m <= 10 )   
//     console.log("Toplam 3 = "+ sum3)
   
// }
// loop()

// break return continue

// Exception Handling
// try-catch

// let tryCatchFunction = () =>{

//     try {
//         alertx("Deneme 44")        
//     } catch (err) {
//         // console.eror("err");
//         console.info("err.name");
//         // console.log(err.message);
//     }
//     finally {
//         console.log("db.close");
//     }    
//     console.log("Son Satır");
//     throw " Hata Var";
// }
// tryCatchFunction();

/////////////////////////////////////////////////////////

// Break    : Döngünün çalışmaına izin verme 
// return   : metotun çalışmasın izin verme
// Continue : sadece bir seferlik o şartla çalışma

// Break    : Döngünün çalışmaını durdurur 
// return   : metotun çalışmasını durdurur 
// Continue : sadece bir kerye mahsus durur sonra çalışmaya devam eder.

// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// Örnek: 1<=user 1+2+3+...userdatası
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan program ?

let examplesCommon = () => {

    let commonSum = 0;
    let oddSum = 0, oddCounter = 0, oddNumber = "";
    let evenSum = 0, evenCounter = 0, evenNumber = "";
    let user = Number(prompt("Lütfen sayı giriniz"));

    for (let i = 1; i <= user; i++) {
        if (user == 44) {
            console.log("Secret Key Çıkış yapılıyor");
            break;
        }

        if (user > 50) {
            console.log("50 sayısının üstünü toplama yapma");
            break;
        }

        if (i == 7) {
            console.log("7 toplamaya dahil etmiyorum.");
            continue;
        }

        // ÇİFT
        if (i % 2 == 0) {
            evenCounter++;
            evenSum += i;
            evenNumber = evenNumber + " " + i
        } else {

        }
        commonSum += i;
    } //end loop
    console.log("Genel toplam: " + commonSum);
    console.log("Çift toplam: " + evenSum);
    console.log("Çift adet sayısı: " + evenCounter);
    console.log("Çift sayılar: " + evenNumber);
}
examplesCommon()

///////////////////////////////////////////////////////////////////////////////
// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

/////////////////////////////////////////////
// Dizi
// let arrTuto = () => {
//     let arr = [5, 3, 1, 2, 6, 7];
//     arr[5] = 99;
//     console.log(arr);
//     console.log(arr[0]);
//     console.log(arr[arr.length - 1]);
    //console.log(arr.length);

//arrTuto();

// let arrFunctionRandom = () => {
//     let temp = 0;
//     let dizi = [];
//     for (let i = 0; i < 5; i++) {
//         temp = Math.round(Math.random() * 9 + 1);
//         dizi[i] = temp;
//     }
//     return dizi;
// }

// let arrNewFunction = () => {
//     let arr = arrFunctionRandom();
//     console.log(arr);

    // arr.push(44);
    // arr.unshift(23);
    // arr.pop();
    // arr.shift();
    // arr.sort().reverse();

    // for (let i = 0; i < arr.length; i++) {
    //     document.writeln(arr[i] + " ")
    // }

    // document.writeln("<br/>")
    // for (let temp in arr) {
    //     document.writeln(temp);
    // }

    // document.writeln("<br/>")
    // for (let temp of arr) {
    //     document.writeln(temp);
    // }
// }
//arrNewFunction()


/////////////////////////////////////////////
// Object

// let objTuto = () => {
//     let obje = {
//         "name": "Hamit",
//         "surname": "Mızrak",
//         "fullName": function () {
//             console.log(this.name + " " + this.surname);
//         },
//         "java": {
//             "name": "JavaSe",
//             "version": 21
//         },
//         "javaee": [],
//     };
//     console.log(obje.name.toUpperCase());
//     console.log(obje.java.version);
//     console.log(obje["java"]["version"]); //nested Object
//     console.log(obje.fullName());

//     // Object Literal
//     obje.isLogin = "true";
//     console.log(obje.isLogin);

//     // JSON.parse,stringfy
//     const objectToString=JSON.stringify(obje);
//     const javaData=JSON.parse(objectToString).java.name;
//     console.log(javaData);
// }
// objTuto();

/////////////////////////////////////////////
// callback, promise, asyn-await