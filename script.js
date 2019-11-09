var pw;
var passwordLength = {};
var type; 
var charList;
var lengthCheck;
function passWord(passwordLength,type)
{
// get the length of array
    // if length is less than 8 
        // go back and ask again
    //elif length is greater than 128 
        // go back and ask again
    // else
        // pass
// for i = 0 to passwordLength
    //pw[i] = Math.random()
    lengthCheck = false;
    var pw = [];
    var specialChar = '\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\)' ;
    var alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    var alphabetUpper = alphabetLower.toUpperCase();
    var numbers = '1234567890' ;

    for(var i = 0; i <= passwordLength-1; i++)
        {   // will pick random char
            //var randSpecialChar = specialChar[Math.floor(Math.random()*specialChar.length)];
            var randNumbers = numbers[Math.floor(Math.random()*numbers.length)];
            //pw = [randSpecialChar + pw];
            pw = [randNumbers + pw];
        
        }
    
    return pw.toString()


}