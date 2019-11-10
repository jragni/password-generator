// Get the inputs from the radio buttons check box with the following criteria
    // 1. special char
    // 2. uppercase
    // 3. lowercase 
    // 4. numbers
// if none selected
    // alert user to select atleast one


var passwordLength;
var charList = [];
var pw = [];
var specialChar = '\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\)' ;
var alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
var alphabetUpper = alphabetLower.toUpperCase();
var numbers = '1234567890';


function pwGen(inputList,passwordLength)
{
    for(var i = 0; i <= passwordLength-1; i++)
        {   // will pick random char from input list
            var randChar = inputList[Math.floor(Math.random()*inputList.length)];
            //pw = [randSpecialChar + pw];
            pw = [randChar + pw];
        }
    return pw.toString()
}

//------------------------------ user input prompts
do
    {
        passwordLength = prompt("Please input the length of your passwored between 8-128 characters...");

        if(passwordLength >128 || passwordLength < 8)
            {
                alert("Please try again...");
            }

    }while(passwordLength >128 || passwordLength < 8)


//--- REPLACE with radio--
/*do
    {
        var isSpecialchars = confirm("Would you like the password to have special characters?");
        var isUpper = confirm("Would you like the password to contain upper-case characters?");
        var isLower = confirm("Would you like the password to contain lower-case characters?");
        var isNumber = confirm("Would you like the password to contain numbers");
        if ((isSpecialchars || isUpper || isLower || isNumber) == false)
            {
                alert('Please select atleast one field');
            }
    }while((isSpecialchars || isUpper || isLower || isNumber) == false)  */



    

// generate password on click
document.getElementById("generate").addEventListener("click",function()
    {
        if(isSpecialchars == true)
            {
                charList = charList+specialChar;
            }
         if(isUpper == true)
            {
                charList= charList + alphabetUpper;
            }
        if(isLower == true)
            {
                charList = charList + alphabetLower;
            }
        if(isNumber == true)
            {
                charList = charList + numbers;
            }

            document.querySelector("#password").innerHTML = pwGen(charList,passwordLength);
    });



 
