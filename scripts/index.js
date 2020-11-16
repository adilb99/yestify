console.log("INDEX"); // WTF??

const chat_placeholder = document.getElementById('chat_placeholder');

// Constants for John Johnsky contact
const john_contact = document.getElementById('john_contact');
const john_chat = document.getElementById('john_chat');

const john_personal_channel = document.getElementById('john_personal_channel');
const john_work_channel = document.getElementById('john_work_channel');
const john_gaming_channel = document.getElementById('john_gaming_channel');

const john_personal_button = document.getElementById('john_personal_button');
const john_work_button = document.getElementById('john_work_button');
const john_gaming_button = document.getElementById('john_gaming_button');


// Constants for Boss Bossow contact
const boss_contact = document.getElementById('boss_contact');
const boss_chat = document.getElementById('boss_chat');

const boss_personal_channel = document.getElementById('boss_personal_channel');
const boss_work_channel = document.getElementById('boss_work_channel');
const boss_gaming_channel = document.getElementById('boss_gaming_channel');

const boss_personal_button = document.getElementById('boss_personal_button');
const boss_work_button = document.getElementById('boss_work_button');
const boss_gaming_button = document.getElementById('boss_gaming_button');

// Constant for Anton Chigurh contact
const anton_contact = document.getElementById('anton_contact');
const anton_chat = document.getElementById('anton_chat');

const anton_personal_channel = document.getElementById('anton_personal_channel');
const anton_work_channel = document.getElementById('anton_work_channel');
const anton_gaming_channel = document.getElementById('anton_gaming_channel');

const anton_personal_button = document.getElementById('anton_personal_button');
const anton_work_button = document.getElementById('anton_work_button');
const anton_gaming_button = document.getElementById('anton_gaming_button');


// Event Listeners for John

john_personal_button.addEventListener('click', function(){
    john_work_channel.style.display = "none";
    john_work_button.style.backgroundColor = "white";
    
    john_gaming_channel.style.display = "none";
    john_gaming_button.style.backgroundColor = "white";

    john_personal_channel.style.display = "initial";
    john_personal_button.style.backgroundColor = "#f0f0f0";


});

john_work_button.addEventListener('click', function(){
    john_personal_channel.style.display = "none";
    john_personal_button.style.backgroundColor = "white";
    
    john_gaming_channel.style.display = "none";
    john_gaming_button.style.backgroundColor = "white";

    john_work_channel.style.display = "initial";
    john_work_button.style.backgroundColor = "#f0f0f0";
});

john_gaming_button.addEventListener('click', function(){
    john_work_channel.style.display = "none";
    john_work_button.style.backgroundColor = "white";
    
    john_personal_channel.style.display = "none";
    john_personal_button.style.backgroundColor = "white";

    john_gaming_channel.style.display = "initial";
    john_gaming_button.style.backgroundColor = "#f0f0f0";
});

john_contact.addEventListener('click', function(){
    chat_placeholder.style.display = "none";
    boss_chat.style.display = "none";
    anton_chat.style.display = "none";
    
    boss_contact.style.backgroundColor = "white";
    anton_contact.style.backgroundColor = "white";
    john_contact.style.backgroundColor = "#e0e0e0";

    john_chat.style.display = "initial";
});



// Event Listeners for Boss
boss_personal_button.addEventListener('click', function(){
    boss_work_channel.style.display = "none";
    boss_work_button.style.backgroundColor = "white";
    
    boss_gaming_channel.style.display = "none";
    boss_gaming_button.style.backgroundColor = "white";

    boss_personal_channel.style.display = "initial";
    boss_personal_button.style.backgroundColor = "#f0f0f0";


});

boss_work_button.addEventListener('click', function(){
    boss_personal_channel.style.display = "none";
    boss_personal_button.style.backgroundColor = "white";
    
    boss_gaming_channel.style.display = "none";
    boss_gaming_button.style.backgroundColor = "white";

    boss_work_channel.style.display = "initial";
    boss_work_button.style.backgroundColor = "#f0f0f0";
});

boss_gaming_button.addEventListener('click', function(){
    boss_work_channel.style.display = "none";
    boss_work_button.style.backgroundColor = "white";
    
    boss_personal_channel.style.display = "none";
    boss_personal_button.style.backgroundColor = "white";

    boss_gaming_channel.style.display = "initial";
    boss_gaming_button.style.backgroundColor = "#f0f0f0";
});

boss_contact.addEventListener('click', function(){
    chat_placeholder.style.display = "none";
    john_chat.style.display = "none";
    anton_chat.style.display = "none";
    
    john_contact.style.backgroundColor = "white";
    anton_contact.style.backgroundColor = "white";
    boss_contact.style.backgroundColor = "#e0e0e0";

    boss_chat.style.display = "initial";
});


// Event Listeners for Anton
anton_personal_button.addEventListener('click', function(){
    anton_work_channel.style.display = "none";
    anton_work_button.style.backgroundColor = "white";
    
    anton_gaming_channel.style.display = "none";
    anton_gaming_button.style.backgroundColor = "white";

    anton_personal_channel.style.display = "initial";
    anton_personal_button.style.backgroundColor = "#f0f0f0";


});

anton_work_button.addEventListener('click', function(){
    anton_personal_channel.style.display = "none";
    anton_personal_button.style.backgroundColor = "white";
    
    anton_gaming_channel.style.display = "none";
    anton_gaming_button.style.backgroundColor = "white";

    anton_work_channel.style.display = "initial";
    anton_work_button.style.backgroundColor = "#f0f0f0";
});

anton_gaming_button.addEventListener('click', function(){
    anton_work_channel.style.display = "none";
    anton_work_button.style.backgroundColor = "white";
    
    anton_personal_channel.style.display = "none";
    anton_personal_button.style.backgroundColor = "white";

    anton_gaming_channel.style.display = "initial";
    anton_gaming_button.style.backgroundColor = "#f0f0f0";
});

anton_contact.addEventListener('click', function(){
    chat_placeholder.style.display = "none";
    john_chat.style.display = "none";
    boss_chat.style.display = "none";
    
    john_contact.style.backgroundColor = "white";
    boss_contact.style.backgroundColor = "white";
    anton_contact.style.backgroundColor = "#e0e0e0";


    anton_chat.style.display = "initial";
});