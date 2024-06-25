

        
let Question = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        option1: '<table> <tr> <td>',
        option2: '<table> <head> <tfoot>',
        option3: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        correctOption: "True"
    },
    {
        question: "How can you make a numbered list?",
        option1: '<dl>',
        option2: '<ul>',
        option3: '<ol>',
        option4: '<list>',
        correctOption: "<ol>"
    },
    {
        question: 'How can you make a bulleted list?',
        option1: '<ol>',
        option2: '<list>',
        option3: '<ul>',
        option4: '<dl>',
        correctOption: "<ul>"
    }
        ]



        var index =0;
        //  console.log(question[0])
        var que =document.getElementById("question");
        var questiondiv =document.getElementById("questiondiv");
        var option1 =document.getElementById("option1");
        var option2 =document.getElementById("option2");
        var option3 =document.getElementById("option3");
        var option4 =document.getElementById("option4");
        var questionNumber =document.getElementById("questionNumber");
        
        var result =document.getElementById("result");
        var perBtn =document.getElementById("perBtn");
        var ans =document.getElementsByName("answer")
        var nextBtnid =document.getElementById("nextBtnid")
        var score =0;
        
        
        

        result.style.display ="none"

      

         function nextQuestion(){


           
             var userAnswer;
             ans.forEach((data,i) => {
                 
                //  console.log(data.checked,i,data.value ,"<--value hu me","answer hu me")
                 if (data.checked) {
                    data.checked =false;
                    nextBtnid.disabled =true;
                    userAnswer =Question[index-1][`option${data.value}`]
                    var correctAnswer =Question[index-1].correctOption
                    
                    // console.log(correctAnswer,"me correct option hu")
                    if(userAnswer==correctAnswer){
                        score++
                        // console.log(score,"i am score value")
                    }
                }
                
                
            });



            if (index> Question.length-1) {

                questiondiv.style.display ="none"
                
                // console.log(score,"i am score value")
                var percentage = (score/index)*100
                result.style.display ="block"
                
                result.innerHTML =`<h2>Your correct answer is :${score}</h2>
                                    <h2>Your wrong answer is :${index-score} </h2>
                                     <h2>You got :${percentage} </h2>`
                


                
                
            }else{

            que.innerHTML = `Ques ${index}: ${Question[index].question}`;
            
         option1.innerText =Question[index].option1||"None Above";
         option2.innerText =Question[index].option2||"None Above";
         option3.innerText =Question[index].option3||"None Above";
         option4.innerText =Question[index].option4 ||"None Above";

          index++;



            }

            
         

         }

         nextQuestion()


         function enabledBtn(){
            nextBtnid.disabled =false
         }




         var second =59;
         var mint =1;

        
            

        //  clearInterval()

       
     