// function lowerCase(){
// //   let lowerCaseText = textoriginal.toLowerCase();
// //   document.getElementById("textoutput").innerHTML = lowerCaseText;
// alert("rana")
// }



var cities = ["Faisalabad" , "Lahore" , "Karachi" , "Islamabad" , "Burewala" , "Sheikhupura" , "Kashmir"];


// function textinput(textinput){
//     document.getElementById("textinput").value = "";
// }



// array 
var originalText =  "I love my country Pakistan. <br>I love my city Faisalabad. <br> I love my Homeland."



// clear input button 
function clearInput(){
    document.getElementById("textinput").value = "";
}


// clear output 
function clearOutput(){
        document.getElementById("textoutput").innerHTML = "";

}


// Lower Case 
 function lowerCase(){
        let lowerCase = originalText.toLowerCase();
        document.getElementById("textoutput").innerHTML = lowerCase;
}



// upper case 
function upperCase(){
        let upperCase = originalText.toUpperCase();
        document.getElementById("textoutput").innerHTML = upperCase;
}


// capitilize function 
function capitalize(){
        let capitalizeText = '<span style="text-transform: capitalize;">' + originalText + '</span>'
        document.getElementById("textoutput").innerHTML = capitalizeText;
}


// better formating 
function formatting(){
        let text = document.getElementById("textinput").value;
        if (!text){
                alert("Please Enter Value")
                return;
        }
        text = text.toLowerCase();
        document.getElementById("textoutput").style.textTransform = 'capitalize';
        document.getElementById("textoutput").innerHTML = text;
}


// Print all cities 
function allcities(){
        document.getElementById("textoutput").innerHTML = "";
        for(let i = 0 ; i < cities.length ; i++){
                let num = i + 1;
                document.getElementById("textoutput").innerHTML += num + ') ' + cities[i] + '<br>' ;
        }
}


// just coding
let name = "JavaSCRIPT"
let nameFirstLetter = name.slice(0 , 1);
let nameOtherLetters = name.slice(1);
nameFirstLetter = nameFirstLetter.toUpperCase();
nameOtherLetters = nameOtherLetters.toLowerCase();
console.log("nameFirstLetter")
console.log("nameOtherLetters")
let cityName = nameFirstLetter + nameOtherLetters
console.log(cityName)





// add cities in list 
  function addcity(){
      let city = document.getElementById("textinput").value
      if(city.length < 3){
        alert("Please Enter City Name Correctly ")
        return;
      }
      let cityFirstLetter = city.slice(0 , 1).toUpperCase();
      console.log(cityFirstLetter);

      let cityAllLetters = city.slice(1).toLowerCase();
      console.log(cityAllLetters);

      let cityWordInCapitilize = cityFirstLetter + cityAllLetters;
      console.log(cityWordInCapitilize);

      let cityFound = false;
      for (let i = 0 ; i < cities.length ; i++){
        if(cities[i] === cityWordInCapitilize){
                cityFound = true;
                let html = '<span style="color: red ; font-size: 20px;">"' + cityWordInCapitilize + '"</span> is already in list.';
                document.getElementById("textoutput").innerHTML = html;
        }
      }

      if(cityFound === false){
        cities.push(cityWordInCapitilize)
        let html = '<span style="color: green ; font-size: 20px;">"' + cityWordInCapitilize + '"</span> had been successfully added into list.';
        document.getElementById("textoutput").innerHTML = html;
}
  }



// check city in list 
function checkcity(){
     let city =  document.getElementById("textinput").value;
        if(!city){
                alert("Please Type Your City Name")
                return;
        }
        let cityFirstLetter = city.slice(0 , 1).toUpperCase();
      console.log(cityFirstLetter);
      let cityAllLetters = city.slice(1).toLowerCase();
      console.log(cityAllLetters);
      let cityWordInCapitilize = cityFirstLetter + cityAllLetters;
      console.log(cityWordInCapitilize);

      let cityFound = false;
      for (let i = 0 ; i < cities.length ; i++){
        if(cities[i] === cityWordInCapitilize){
                cityFound = true;
                let html = '<span style="color: green ; font-size: 20px;">"' + cityWordInCapitilize + '"</span> Found in list.';
                document.getElementById("textoutput").innerHTML = html;
        }
      }
      if(cityFound == false){
        let html = '<span style="color: red ; font-size: 20px;">"' + cityWordInCapitilize + '"</span> We could not find your city in list.';
        document.getElementById("textoutput").innerHTML = html;
        }
}


// find word 
function findword(){
        let newOriginalText = originalText.toLowerCase();
        let word = document.getElementById("textinput").value;
        if(!word){
        alert("Please Enter Word")
        return;
        }
        
        word = word.toLowerCase();
        let findWord = newOriginalText.indexOf(word);
        console.log(findWord);

        if(findWord !== -1){
                let html = ' Your word <span style="color: green ; font-size: 18px;">"' + word + '"</span> found in index: ' + findWord;
                document.getElementById("textoutput").innerHTML = html;
                return
        }
        else{
                let html = ' Your word <span style="color: red ; font-size: 18px;">"' + word + '"</span>could not found in the Original String ';
                document.getElementById("textoutput").innerHTML = html;
        }
}



// replace word 
function replaceword(){
        let newOriginalText = originalText.toLowerCase();
        let word = document.getElementById("textinput").value;
        if(!word){
        alert("Please type a word for replacing")
        return;
        }

        let replaceWith = prompt("Enter a word that you want to replace with")
        if(!replaceWith){
                alert("Please type a word to replace with it" + word + '.')
                return;
        }
        
        word = word.toLowerCase();
        console.log("word before using regular expression =>", word)
        word = new RegExp(word , 'g')
        console.log("word after using regular expression =>", word)

        replaceWith = replaceWith.toLowerCase();
        let replaceWord = newOriginalText.replace(word , replaceWith);

        document.getElementById("textoutput").innerHTML = replaceWord;

}


