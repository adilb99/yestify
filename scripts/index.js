const chat_placeholder = document.getElementById('chat_placeholder');
const menubar_mode_selector = document.getElementById('menubar-mode-selector');
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
    python_chat.style.display = "none";
    
    boss_contact.style.backgroundColor = "white";
    anton_contact.style.backgroundColor = "white";
    python_contact.style.backgroundColor = "white";
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
    python_chat.style.display = "none";
    
    john_contact.style.backgroundColor = "white";
    anton_contact.style.backgroundColor = "white";
    python_contact.style.backgroundColor = "white";
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
    python_chat.style.display = "none";
    
    john_contact.style.backgroundColor = "white";
    boss_contact.style.backgroundColor = "white";
    python_contact.style.backgroundColor = "white";
    anton_contact.style.backgroundColor = "#e0e0e0";


    anton_chat.style.display = "initial";
});



// Pop up notification handler

const modal = document.getElementsByClassName("modal-content")[0];
const modal_span = document.getElementById("modal_span");
const accept_button = document.getElementById('accept_button');
const decline_button = document.getElementById('decline_button');

setTimeout(function(){
    modal.style.display = "block";
}, 10000);
  

modal_span.onclick = function() {
  modal.style.display = "none";
  setTimeout(function(){
    modal.style.display = "block";
}, 10000);
}

accept_button.addEventListener('click', function(){
    modal.style.display = "none";
    setTimeout(function(){
        modal.style.display = "block";
    }, 10000);
});

decline_button.addEventListener('click', function(){
    modal.style.display = "none";
    setTimeout(function(){
        modal.style.display = "block";
    }, 10000);
});

const change_modes_select = document.getElementById('change_modes_select');
const after_popup = document.getElementById('after_popup');



// Handling pop-up after mode changed on the fly
change_modes_select.addEventListener('change', function(){
    if(change_modes_select.value == "work"){
        modal.style.display = "none";
        after_popup.style.display = "block";

        menubar_mode_selector.value = "work";
        document.getElementById('menubar').style.backgroundColor = "#e5e5e5";

        setTimeout(function(){
            after_popup.className = 'hide';
            setTimeout(function(){after_popup.style.display = "none";}, 400);
        }, 3000)
    }
});


menubar_mode_selector.addEventListener('change', function(){
    if(menubar_mode_selector.value == "work"){
        modal.style.display = "none";
        after_popup.style.display = "block";

        document.getElementById('menubar').style.backgroundColor = "#e5e5e5";

        setTimeout(function(){
            after_popup.className = 'hide';
            setTimeout(function(){after_popup.style.display = "none";}, 400);
        }, 3000)
    }
    else{
    	document.getElementById('menubar').style.backgroundColor = "#cff4ff";
  	}
});
let python_personal_active = false;
const overlay_bg = document.getElementById("overlay-bg");
const overlay_window = document.getElementById("overlay-window");
const add_chat_icon = document.getElementById("add_chat_icon");
const close_cross = document.getElementById("close_cross");
const new_chat_python = document.getElementById("new_chat_python");


add_chat_icon.addEventListener('click', ()=>{
	overlay_bg.style.display="block";
	overlay_window.style.display="block";
	if (python_added){new_chat_python.style.display = "none";}
});

close_cross.addEventListener('click', ()=>{
	overlay_bg.style.display="none";
	overlay_window.style.display="none";
});

let python_added = false;
const python_contact = document.getElementById("python_contact");
const python_chat = document.getElementById("python_chat");

const python_personal_channel = document.getElementById('python_personal_channel');
const python_work_channel = document.getElementById('python_work_channel');
const python_gaming_channel = document.getElementById('python_gaming_channel');

const python_personal_button = document.getElementById('python_personal_button');
const python_work_button = document.getElementById('python_work_button');
const python_gaming_button = document.getElementById('python_gaming_button');

new_chat_python.addEventListener('click', ()=>{
	python_added = true;
	python_personal_active = true;
	if (python_added){
		python_contact.style.display="table-row";
	}
	overlay_bg.style.display="none";
	overlay_window.style.display="none";
	chat_placeholder.style.display = "none";
    john_chat.style.display = "none";
    boss_chat.style.display = "none";
    anton_chat.style.display = "none";
    
    john_contact.style.backgroundColor = "white";
    boss_contact.style.backgroundColor = "white";
    anton_contact.style.backgroundColor = "#white";
    python_contact.style.backgroundColor = "#e0e0e0";

    python_chat.style.display = "initial";
});

python_contact.addEventListener('click', function(){
    chat_placeholder.style.display = "none";
    john_chat.style.display = "none";
    boss_chat.style.display = "none";
    anton_chat.style.display = "none";
    
    john_contact.style.backgroundColor = "white";
    boss_contact.style.backgroundColor = "white";
    anton_contact.style.backgroundColor = "white";
    python_contact.style.backgroundColor = "#e0e0e0";

    python_chat.style.display = "initial";
});


python_personal_button.addEventListener('click', function(){
    python_work_channel.style.display = "none";
    python_work_button.style.backgroundColor = "white";
	python_personal_active = true;
    
    python_gaming_channel.style.display = "none";
    python_gaming_button.style.backgroundColor = "white";

    python_personal_channel.style.display = "initial";
    python_personal_button.style.backgroundColor = "#f0f0f0";
});

python_work_button.addEventListener('click', function(){
    python_personal_channel.style.display = "none";
    python_personal_button.style.backgroundColor = "white";
	python_personal_active = false;
    
    python_gaming_channel.style.display = "none";
    python_gaming_button.style.backgroundColor = "white";

    python_work_channel.style.display = "initial";
    python_work_button.style.backgroundColor = "#f0f0f0";
});

python_gaming_button.addEventListener('click', function(){
    python_personal_channel.style.display = "none";
    python_personal_button.style.backgroundColor = "white";
	python_personal_active = false;
    
    python_work_channel.style.display = "none";
    python_work_button.style.backgroundColor = "white";

    python_gaming_channel.style.display = "initial";
    python_gaming_button.style.backgroundColor = "#f0f0f0";
});

let input_message = ""
const python_send_button = document.getElementById("python_send_button");
const python_message_input = document.getElementById("python_message_input");
const python_sent_message = document.getElementById("python_sent_message");
const python_sent_message_timestamp = document.getElementById("python_sent_message_timestamp");
const python_message_preview = document.getElementById("python_message_preview");
const notify_warning = document.getElementById("notify_warning");
let message_sent = false;

python_send_button.addEventListener('click', ()=>{
	if(python_personal_active){
		input_message = python_message_input.value.trim();
		if (input_message.length>0&&!message_sent){
			let now = new Date();
			let hours = now.getHours();
			let ampm = "AM";
			if (hours>=12){
				ampm="PM";
				if (hours>12) hours-=12;
			}
			else if (hours==0) hours+=12;
			let minutes = now.getMinutes();
			if (minutes<10) minutes = "0" + minutes;
			python_message_input.value = '';
			document.getElementById("python_personal_empty").style.display="none";
			python_sent_message.innerHTML = input_message;
			python_sent_message.style.display = "block";
			python_sent_message_timestamp.innerHTML = hours + ":" + minutes + " " + ampm;
			python_sent_message_timestamp.style.display = "initial";
			message_sent = true;
			python_message_preview.style.fontStyle="normal";
			let short_message = input_message.length>10?input_message.substr(0,10)+"...":input_message;
			python_message_preview.innerHTML="You: " + short_message;
			notify_warning.style.display="inline-block";
		}
	}
});

const yes_notify_button = document.getElementById("yes_notify_button");
const dismiss_warning_button = document.getElementById("dismiss_warning_button");

dismiss_warning_button.addEventListener("click", ()=>{
	notify_warning.style.display="none";
});

function fade(target){
	let fadeEffect = setInterval(()=>{
        if (target.style.opacity > 0) {
            target.style.opacity -= 0.05;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
}

yes_notify_button.addEventListener("click", ()=>{
	notify_warning.innerHTML="Your notification is sent!";
	notify_warning.style.opacity = 1;
    setTimeout(()=>fade(notify_warning), 1500);
});