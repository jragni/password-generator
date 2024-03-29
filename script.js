var specialChar = '\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\)' ;
var alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
var alphabetUpper = alphabetLower.toUpperCase();
var numbers = '1234567890';

function pwGen(inputList,passwordLength)
{   
    var pw = [];

    for(var i = 0; i <= passwordLength-1; i++)
        {   // will pick random char from input list
            var randChar = inputList[Math.floor(Math.random()*inputList.length)];
            // add the random char to the list
            pw = [randChar + pw];
        }
    return pw.toString()
}

document.getElementById("generate").addEventListener("click",function()
    {
        var charList=[];
        var isSpecialChars = document.getElementById("specialChars").checked;
        var isUpper = document.getElementById("upperChars").checked;
        var isLower = document.getElementById("lowerChars").checked;
        var isNumber= document.getElementById("numChars").checked;

        var passwordLength = document.getElementById("lengthInput").value;
        passwordLength = parseInt(passwordLength);

        
        // check password length
        if(passwordLength < 8 || passwordLength > 128)
            {
                alert("Please enter a valid password length!");
            }
        //  check for selected checkboxes, if none selected prompt user.
        else if(isSpecialChars == false && isUpper == false && isLower == false && isNumber == false)
            {
                alert("Please select atleast ONE password attribute!");
            }
        
        else
            {
                if(isSpecialChars == true)
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

                document.querySelector("#password").value = pwGen(charList,passwordLength);
                document.querySelector("#password").innerHTML = pwGen(charList,passwordLength);
                document.querySelector("#password").innertText = pwGen(charList,passwordLength);

            }

    });




 document.getElementById("copy").onclick = function()
    {
        var copyPW=document.getElementById("password");
        copyPW.select();
        document.execCommand("copy");
        alert("Password has been copied to clipboard!")
    }