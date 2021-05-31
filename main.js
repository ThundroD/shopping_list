//This is a JavaScript file
//This file will add list items in to a ul in the HTML shopping list
//If items are clicked they'll be crossed out
//Items can be deleted by clicking on x


// List items to the HTML Document
let items = [
    'lobster',
    'caviar ',
    'baguette',
    'butter',
    'foie gras',
    'steak',
    'champagne'
];// set an array of list items

//Set out list of current items in array
function currentList() { 
    items.forEach(function (item){// use the forEach function to disassemble the array into seperate items
        let li = document.createElement('li'); //we then create an new element il, and give a new variable il the same value
        li.textContent = item; //we then set the text content of the li to each item
        let span=document.createElement("span"); //create new element span
        let spanElTxt=document.createTextNode("\u00D7"); //create text for span
        span.className="close"; //problem with this is needs to be global for other function to see
        span.append(spanElTxt); //append span text to span
        span.addEventListener('click', deleteItem); //click function for span elements
        li.append(span); //append span to li
        document.getElementById('input').value;
        itemList.appendChild(li); // add each il to  the ul by using the appendChild() funcition
        function deleteItem(){   //delete item function
            li.style.display = "none"; //display text style to none
            items.splice(span, 1); //delete item from array
        }
    });
    
}
currentList();

// Update List
function updateList() { 
        let addedItem = items[items.length -1] //create variable for input value
        let li = document.createElement('li'); //we then create an new element il, and give a new variable il the same value
        li.textContent = addedItem;  //we then set the text content of the li to each item
        let span=document.createElement("span"); // create span element
        let spanElTxt=document.createTextNode("\u00D7"); //create text for span element
        span.className="close"; //give class to span
        span.append(spanElTxt); //append span text
        span.addEventListener('click', deleteItem); //click function for span element
        li.append(span); //li append span
        itemList.appendChild(li); //list append li
        function deleteItem(){   //delete item function
            li.style.display = "none"; //display text style to none
            items.splice(span, 1); //delete item from array
        }
};

// Submit Event

function addItem(){
    if (document.getElementById('input').value === ""){ //If the input value is empty alert to insert item
        alert("Please insert an item");
    }
    else {
        items.push(document.getElementById('input').value);//Push Value of input to array
        document.getElementById("input").value = "";  //Creates input value to empty string
        updateList();         //Call Updatelist function
    }
   
};

//Key 13 to trigger click function

let keyenter = document.getElementById("input") 
keyenter.addEventListener("keyup", function(event){ //event listener on keyenter ("input")
    if (event.keyCode == 13) { //use keyCode == 13, because .key does not work
        event.preventDefault(); //prevent event Default
        addItem(); //call addItem function
    }
});

 //Function to mark off list items when clicked

 document.getElementById("itemList").addEventListener("click", function(e) { //add click event listener to ul
    if (e.target.tagName === "LI"){ //target LI
        e.target.classList.toggle("checked"); //if clicked target LI will display checked css, crossed out from list
    }
 });
