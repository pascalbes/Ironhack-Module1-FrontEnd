// Iteration 1 / Names and Inputs

var hacker1 = "Pascal";
console.log("The driver's name is", hacker1);
var hacker2 = "Franck";
console.log("The navigator's name is", hacker2);

// Iteration 2 : Conditionals


function compareNameLength(name1, name2) {
    if (name1.length>name2.length) {
        return `The driver has the longest name, it has ${name1.length} characters`;
    }
    else if (name1.length==name2.length) {
        return "wow, you both have equally long names, " + name1.length + " characters";
    }
    return "The navigator has the longest name, it has " + name2.length + " characters";
}

console.log(compareNameLength(hacker1, hacker2))

// Iteration 3 : Loops

function transformName(name) {
    
    var nameFinal="";

    for(let i=0;i<name.length;i++){
        nameFinal += name[i].toUpperCase() + " ";
    }

    return nameFinal.substring(0,nameFinal.length-1);
}

console.log(transformName(hacker1))
console.log(transformName(hacker2))

function reverseName(name) {
    return name.split('').reverse().join('') ;
}

console.log(reverseName(hacker1));
console.log(reverseName(hacker2));

function orderName(name1, name2) {
    if (name1 > name2) {
        return "Yo, the navigator goes first definitively.";
    }
    else if (name1 < name2) {
        return "The driver's name goes first.";
    }
    return "What?! You both have the same name ?";
}


function orderNameWithLoop(nameA, nameB) {

    var sameLetters=true;
    var i=0;

    if (nameA==nameB) {
        return "What?! You both have the same name ?";
    }

    /*
    if (name1.length>name2.length) {
        nameA=name1;
        nameB=name2;
    }
    else {
        nameB=name1;
        NavigationPreloadManager=name2;
    }*/

    do {
        if (nameA[i]<nameB[i]) {
            return "The driver's name goes first.";
        }
        else if (nameA[i]>nameB[i]) {
            return "Yo, the navigator goes first definitively."
        }

        i++;

        if (nameA.length==i-1) {
            return "The driver's name goes first.";
        }

        if (nameB.length==i-1) {
            return "Yo, the navigator goes first definitively."
        }

    } while (sameLetters)

}

console.log(orderName(hacker1, hacker2));
console.log("order with loop :",orderNameWithLoop(hacker1, hacker2));

// Bonus 1

var str1 = "Lorem Ipsum is simply dummy et of the printing and typesetting industry. Lorem et has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
var str2 = "Lorem Ipsum is simply dummy of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
var str3 = "Lorem Ipsum is simply dummy! text of the printing and typesetting industry. Lorem Ipsum has text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
var str4= "et, et "

function nameCount(st) {
    return st.split(" ").length
}

console.log(nameCount(str1), nameCount(str2), nameCount(str3))

function countEt(st) {

    var count=0;
    var specialC=".,!?:&é(-è_çà)"
    st2 = st.split(" ");

    for(let i=0;i<st2.length;i++) {
        
        if (st2[i]=="et") {
            count++;
        }
        else {

            for (let j=0;j<specialC.length;j++) {
                
                if (specialC[j] + st2[i]=="et") {
                    count++;
                    break;
                }

                if (st2[i]=="et" + specialC[j]) {
                    count++;
                    break;
                }
            }

        }
        
    }
    return count;
}

console.log(countEt(str1), countEt(str2), countEt(str3), countEt(str4))

//Bonus 2

var phraseToCheck1 = "Amor, Roma";
var phraseToCheck2 = "Amor Roma";
var phraseToCheck3 = "amor roma";

function isPalindrome(st) {

    st=st.toUpperCase();

    var specialC=".,!?:&é(-è_çà)";

    for (let i=0;i<specialC.length;i++) {
        st=st.replace(specialC[i],"");
    }

    if (st == st.split('').reverse().join('')) {
        return true ;
    }
    return false ;
}

console.log(isPalindrome(phraseToCheck1));
console.log(isPalindrome(phraseToCheck2));
console.log(isPalindrome(phraseToCheck3));

