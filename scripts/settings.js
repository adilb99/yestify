console.log("SETTINGS");

const social_mode_selector = document.getElementById('social_mode');
const social_mode_details = document.getElementById('social_mode_details');

const work_mode_selector = document.getElementById('work_mode');
const work_mode_details = document.getElementById('work_mode_details');

const transparent_mode_selector = document.getElementById('transparent_mode');
const transparent_mode_details = document.getElementById('transparent_mode_details');

const new_mode_selector = document.getElementById('new_mode');
const new_mode_details = document.getElementById('new_mode_details');

const social_mode_copy_selector = document.getElementById('social_mode_copy');
const social_mode_copy_details = document.getElementById('social_mode_copy_details');

let currently_selected;

social_mode_selector.addEventListener('click', function(){
    work_mode_details.style.display = "none";
    work_mode_selector.style.backgroundColor = "white";

    transparent_mode_details.style.display = "none";
    transparent_mode_selector.style.backgroundColor = "white";

    new_mode_details.style.display = "none";
    new_mode_selector.style.backgroundColor = "white";

    social_mode_copy_details.style.display = "none";
    social_mode_copy_selector.style.backgroundColor = "white"

    social_mode_details.style.display = "initial";
    social_mode_selector.style.backgroundColor = "#e5e5e5";

    currently_selected = "social";
});

social_mode_copy_selector.addEventListener('click', function(){
    social_mode_copy_details.style.display = "initial";
    social_mode_copy_selector.style.backgroundColor = "#e5e5e5"

    work_mode_details.style.display = "none";
    work_mode_selector.style.backgroundColor = "white";

    transparent_mode_details.style.display = "none";
    transparent_mode_selector.style.backgroundColor = "white";

    new_mode_details.style.display = "none";
    new_mode_selector.style.backgroundColor = "white";

    social_mode_details.style.display = "none";
    social_mode_selector.style.backgroundColor = "white";

    // currently_selected = "social_copy";
});

work_mode_selector.addEventListener('click', function(){
    transparent_mode_details.style.display = "none";
    transparent_mode_selector.style.backgroundColor = "white";

    social_mode_details.style.display = "none";
    social_mode_selector.style.backgroundColor = "white";

    new_mode_details.style.display = "none";
    new_mode_selector.style.backgroundColor = "white";

    social_mode_copy_details.style.display = "none";
    social_mode_copy_selector.style.backgroundColor = "white"

    work_mode_details.style.display = "initial";
    work_mode_selector.style.backgroundColor = "#e5e5e5";

    currently_selected = "work";
});

transparent_mode_selector.addEventListener('click', function(){
    work_mode_details.style.display = "none";
    work_mode_selector.style.backgroundColor = "white";
    
    social_mode_details.style.display = "none";
    social_mode_selector.style.backgroundColor = "white";

    new_mode_details.style.display = "none";
    new_mode_selector.style.backgroundColor = "white";

    social_mode_copy_details.style.display = "none";
    social_mode_copy_selector.style.backgroundColor = "white"

    transparent_mode_details.style.display = "initial";
    transparent_mode_selector.style.backgroundColor = "#e5e5e5";

    currently_selected = "transparent";
});

new_mode_selector.addEventListener('click', function(){
    work_mode_details.style.display = "none";
    work_mode_selector.style.backgroundColor = "white";
    
    social_mode_details.style.display = "none";
    social_mode_selector.style.backgroundColor = "white";

    transparent_mode_details.style.display = "none";
    transparent_mode_selector.style.backgroundColor = "white";

    social_mode_copy_details.style.display = "none";
    social_mode_copy_selector.style.backgroundColor = "white"

    new_mode_details.style.display = "initial";
    new_mode_selector.style.backgroundColor = "#e5e5e5";

    currently_selected = "new";
});

const social_bulk_personal = document.getElementById('social_bulk_personal');
const social_bulk_work = document.getElementById('social_bulk_work');
const social_bulk_gaming = document.getElementById('social_bulk_gaming');

const social_john = document.getElementById('social_john');
const social_boss = document.getElementById('social_boss');
const social_anton = document.getElementById('social_anton');

social_bulk_personal.addEventListener('click', function(){
    if(document.getElementById('check_social_1').checked == true &&
    document.getElementById('check_social_4').checked == true &&
    document.getElementById('check_social_7').checked == true){

        document.getElementById('check_social_1').checked = false;
        document.getElementById('check_social_4').checked = false;
        document.getElementById('check_social_7').checked = false;
    } else {
        document.getElementById('check_social_1').checked = true;
        document.getElementById('check_social_4').checked = true;
        document.getElementById('check_social_7').checked = true;    
    }
    
});

social_bulk_work.addEventListener('click', function(){
    if(document.getElementById('check_social_2').checked == true &&
    document.getElementById('check_social_5').checked == true &&
    document.getElementById('check_social_8').checked == true){

        document.getElementById('check_social_2').checked = false;
        document.getElementById('check_social_5').checked = false;
        document.getElementById('check_social_8').checked = false;
    } else {
        document.getElementById('check_social_2').checked = true;
        document.getElementById('check_social_5').checked = true;
        document.getElementById('check_social_8').checked = true;    
    }
    
});

social_bulk_gaming.addEventListener('click', function(){
    if(document.getElementById('check_social_3').checked == true &&
    document.getElementById('check_social_6').checked == true &&
    document.getElementById('check_social_9').checked == true){

        document.getElementById('check_social_3').checked = false;
        document.getElementById('check_social_6').checked = false;
        document.getElementById('check_social_9').checked = false;
    } else {
        document.getElementById('check_social_3').checked = true;
        document.getElementById('check_social_6').checked = true;
        document.getElementById('check_social_9').checked = true;    
    }
    
});

social_john.addEventListener('click', function(){
    if(document.getElementById('check_social_1').checked == true &&
    document.getElementById('check_social_2').checked == true &&
    document.getElementById('check_social_3').checked == true){

        document.getElementById('check_social_1').checked = false;
        document.getElementById('check_social_2').checked = false;
        document.getElementById('check_social_3').checked = false;
    } else {
        document.getElementById('check_social_1').checked = true;
        document.getElementById('check_social_2').checked = true;
        document.getElementById('check_social_3').checked = true;    
    }
});

social_boss.addEventListener('click', function(){
    if(document.getElementById('check_social_4').checked == true &&
    document.getElementById('check_social_5').checked == true &&
    document.getElementById('check_social_6').checked == true){

        document.getElementById('check_social_4').checked = false;
        document.getElementById('check_social_5').checked = false;
        document.getElementById('check_social_6').checked = false;
    } else {
        document.getElementById('check_social_4').checked = true;
        document.getElementById('check_social_5').checked = true;
        document.getElementById('check_social_6').checked = true;    
    }
});

social_anton.addEventListener('click', function(){
    if(document.getElementById('check_social_7').checked == true &&
    document.getElementById('check_social_8').checked == true &&
    document.getElementById('check_social_9').checked == true){

        document.getElementById('check_social_7').checked = false;
        document.getElementById('check_social_8').checked = false;
        document.getElementById('check_social_9').checked = false;
    } else {
        document.getElementById('check_social_7').checked = true;
        document.getElementById('check_social_8').checked = true;
        document.getElementById('check_social_9').checked = true;    
    }
});




const work_bulk_personal = document.getElementById('work_bulk_personal');
const work_bulk_work = document.getElementById('work_bulk_work');
const work_bulk_gaming = document.getElementById('work_bulk_gaming');

const work_john = document.getElementById('work_john');
const work_boss = document.getElementById('work_boss');
const work_anton = document.getElementById('work_anton');

work_bulk_personal.addEventListener('click', function(){
    if(document.getElementById('check_work_1').checked == true &&
    document.getElementById('check_work_4').checked == true &&
    document.getElementById('check_work_7').checked == true){

        document.getElementById('check_work_1').checked = false;
        document.getElementById('check_work_4').checked = false;
        document.getElementById('check_work_7').checked = false;
    } else {
        document.getElementById('check_work_1').checked = true;
        document.getElementById('check_work_4').checked = true;
        document.getElementById('check_work_7').checked = true;    
    }
    
});

work_bulk_work.addEventListener('click', function(){
    if(document.getElementById('check_work_2').checked == true &&
    document.getElementById('check_work_5').checked == true &&
    document.getElementById('check_work_8').checked == true){

        document.getElementById('check_work_2').checked = false;
        document.getElementById('check_work_5').checked = false;
        document.getElementById('check_work_8').checked = false;
    } else {
        document.getElementById('check_work_2').checked = true;
        document.getElementById('check_work_5').checked = true;
        document.getElementById('check_work_8').checked = true;    
    }
    
});

work_bulk_gaming.addEventListener('click', function(){
    if(document.getElementById('check_work_3').checked == true &&
    document.getElementById('check_work_6').checked == true &&
    document.getElementById('check_work_9').checked == true){

        document.getElementById('check_work_3').checked = false;
        document.getElementById('check_work_6').checked = false;
        document.getElementById('check_work_9').checked = false;
    } else {
        document.getElementById('check_work_3').checked = true;
        document.getElementById('check_work_6').checked = true;
        document.getElementById('check_work_9').checked = true;    
    }
    
});


work_john.addEventListener('click', function(){
    if(document.getElementById('check_work_1').checked == true &&
    document.getElementById('check_work_2').checked == true &&
    document.getElementById('check_work_3').checked == true){

        document.getElementById('check_work_1').checked = false;
        document.getElementById('check_work_2').checked = false;
        document.getElementById('check_work_3').checked = false;
    } else {
        document.getElementById('check_work_1').checked = true;
        document.getElementById('check_work_2').checked = true;
        document.getElementById('check_work_3').checked = true;    
    }
});

work_boss.addEventListener('click', function(){
    if(document.getElementById('check_work_4').checked == true &&
    document.getElementById('check_work_5').checked == true &&
    document.getElementById('check_work_6').checked == true){

        document.getElementById('check_work_4').checked = false;
        document.getElementById('check_work_5').checked = false;
        document.getElementById('check_work_6').checked = false;
    } else {
        document.getElementById('check_work_4').checked = true;
        document.getElementById('check_work_5').checked = true;
        document.getElementById('check_work_6').checked = true;    
    }
});

work_anton.addEventListener('click', function(){
    if(document.getElementById('check_work_7').checked == true &&
    document.getElementById('check_work_8').checked == true &&
    document.getElementById('check_work_9').checked == true){

        document.getElementById('check_work_7').checked = false;
        document.getElementById('check_work_8').checked = false;
        document.getElementById('check_work_9').checked = false;
    } else {
        document.getElementById('check_work_7').checked = true;
        document.getElementById('check_work_8').checked = true;
        document.getElementById('check_work_9').checked = true;    
    }
});


const transparent_bulk_personal = document.getElementById('transparent_bulk_personal');
const transparent_bulk_work = document.getElementById('transparent_bulk_work');
const transparent_bulk_gaming = document.getElementById('transparent_bulk_gaming');

const transparent_john = document.getElementById('transparent_john');
const transparent_boss = document.getElementById('transparent_boss');
const transparent_anton = document.getElementById('transparent_anton');

transparent_bulk_personal.addEventListener('click', function(){
    if(document.getElementById('check_transparent_1').checked == true &&
    document.getElementById('check_transparent_4').checked == true &&
    document.getElementById('check_transparent_7').checked == true){

        document.getElementById('check_transparent_1').checked = false;
        document.getElementById('check_transparent_4').checked = false;
        document.getElementById('check_transparent_7').checked = false;
    } else {
        document.getElementById('check_transparent_1').checked = true;
        document.getElementById('check_transparent_4').checked = true;
        document.getElementById('check_transparent_7').checked = true;    
    }
    
});

transparent_bulk_work.addEventListener('click', function(){
    if(document.getElementById('check_transparent_2').checked == true &&
    document.getElementById('check_transparent_5').checked == true &&
    document.getElementById('check_transparent_8').checked == true){

        document.getElementById('check_transparent_2').checked = false;
        document.getElementById('check_transparent_5').checked = false;
        document.getElementById('check_transparent_8').checked = false;
    } else {
        document.getElementById('check_transparent_2').checked = true;
        document.getElementById('check_transparent_5').checked = true;
        document.getElementById('check_transparent_8').checked = true;    
    }
    
});

transparent_bulk_gaming.addEventListener('click', function(){
    if(document.getElementById('check_transparent_3').checked == true &&
    document.getElementById('check_transparent_6').checked == true &&
    document.getElementById('check_transparent_9').checked == true){

        document.getElementById('check_transparent_3').checked = false;
        document.getElementById('check_transparent_6').checked = false;
        document.getElementById('check_transparent_9').checked = false;
    } else {
        document.getElementById('check_transparent_3').checked = true;
        document.getElementById('check_transparent_6').checked = true;
        document.getElementById('check_transparent_9').checked = true;    
    }
    
});


transparent_john.addEventListener('click', function(){
    if(document.getElementById('check_transparent_1').checked == true &&
    document.getElementById('check_transparent_2').checked == true &&
    document.getElementById('check_transparent_3').checked == true){

        document.getElementById('check_transparent_1').checked = false;
        document.getElementById('check_transparent_2').checked = false;
        document.getElementById('check_transparent_3').checked = false;
    } else {
        document.getElementById('check_transparent_1').checked = true;
        document.getElementById('check_transparent_2').checked = true;
        document.getElementById('check_transparent_3').checked = true;    
    }
});

transparent_boss.addEventListener('click', function(){
    if(document.getElementById('check_transparent_4').checked == true &&
    document.getElementById('check_transparent_5').checked == true &&
    document.getElementById('check_transparent_6').checked == true){

        document.getElementById('check_transparent_4').checked = false;
        document.getElementById('check_transparent_5').checked = false;
        document.getElementById('check_transparent_6').checked = false;
    } else {
        document.getElementById('check_transparent_4').checked = true;
        document.getElementById('check_transparent_5').checked = true;
        document.getElementById('check_transparent_6').checked = true;    
    }
});

transparent_anton.addEventListener('click', function(){
    if(document.getElementById('check_transparent_7').checked == true &&
    document.getElementById('check_transparent_8').checked == true &&
    document.getElementById('check_transparent_9').checked == true){

        document.getElementById('check_transparent_7').checked = false;
        document.getElementById('check_transparent_8').checked = false;
        document.getElementById('check_transparent_9').checked = false;
    } else {
        document.getElementById('check_transparent_7').checked = true;
        document.getElementById('check_transparent_8').checked = true;
        document.getElementById('check_transparent_9').checked = true;    
    }
});


const new_bulk_personal = document.getElementById('new_bulk_personal');
const new_bulk_work = document.getElementById('new_bulk_work');
const new_bulk_gaming = document.getElementById('new_bulk_gaming');

const new_john = document.getElementById('new_john');
const new_boss = document.getElementById('new_boss');
const new_anton = document.getElementById('new_anton');

new_bulk_personal.addEventListener('click', function(){
    if(document.getElementById('check_new_1').checked == true &&
    document.getElementById('check_new_4').checked == true &&
    document.getElementById('check_new_7').checked == true){

        document.getElementById('check_new_1').checked = false;
        document.getElementById('check_new_4').checked = false;
        document.getElementById('check_new_7').checked = false;
    } else {
        document.getElementById('check_new_1').checked = true;
        document.getElementById('check_new_4').checked = true;
        document.getElementById('check_new_7').checked = true;    
    }
    
});

new_bulk_work.addEventListener('click', function(){
    if(document.getElementById('check_new_2').checked == true &&
    document.getElementById('check_new_5').checked == true &&
    document.getElementById('check_new_8').checked == true){

        document.getElementById('check_new_2').checked = false;
        document.getElementById('check_new_5').checked = false;
        document.getElementById('check_new_8').checked = false;
    } else {
        document.getElementById('check_new_2').checked = true;
        document.getElementById('check_new_5').checked = true;
        document.getElementById('check_new_8').checked = true;    
    }
    
});

new_bulk_gaming.addEventListener('click', function(){
    if(document.getElementById('check_new_3').checked == true &&
    document.getElementById('check_new_6').checked == true &&
    document.getElementById('check_new_9').checked == true){

        document.getElementById('check_new_3').checked = false;
        document.getElementById('check_new_6').checked = false;
        document.getElementById('check_new_9').checked = false;
    } else {
        document.getElementById('check_new_3').checked = true;
        document.getElementById('check_new_6').checked = true;
        document.getElementById('check_new_9').checked = true;    
    }
    
});


new_john.addEventListener('click', function(){
    if(document.getElementById('check_new_1').checked == true &&
    document.getElementById('check_new_2').checked == true &&
    document.getElementById('check_new_3').checked == true){

        document.getElementById('check_new_1').checked = false;
        document.getElementById('check_new_2').checked = false;
        document.getElementById('check_new_3').checked = false;
    } else {
        document.getElementById('check_new_1').checked = true;
        document.getElementById('check_new_2').checked = true;
        document.getElementById('check_new_3').checked = true;    
    }
});

new_boss.addEventListener('click', function(){
    if(document.getElementById('check_new_4').checked == true &&
    document.getElementById('check_new_5').checked == true &&
    document.getElementById('check_new_6').checked == true){

        document.getElementById('check_new_4').checked = false;
        document.getElementById('check_new_5').checked = false;
        document.getElementById('check_new_6').checked = false;
    } else {
        document.getElementById('check_new_4').checked = true;
        document.getElementById('check_new_5').checked = true;
        document.getElementById('check_new_6').checked = true;    
    }
});

new_anton.addEventListener('click', function(){
    if(document.getElementById('check_new_7').checked == true &&
    document.getElementById('check_new_8').checked == true &&
    document.getElementById('check_new_9').checked == true){

        document.getElementById('check_new_7').checked = false;
        document.getElementById('check_new_8').checked = false;
        document.getElementById('check_new_9').checked = false;
    } else {
        document.getElementById('check_new_7').checked = true;
        document.getElementById('check_new_8').checked = true;
        document.getElementById('check_new_9').checked = true;    
    }
});


const add_mode_button = document.getElementById('add_mode_icon');

add_mode_button.addEventListener('click', function(){
    new_mode_selector.style.display = "";
});

const copy_button = document.getElementById('copy_button');

copy_button.addEventListener('click', function(){
    social_mode_copy_selector.style.display = "";
});

const delete_button_social_copy = document.getElementById('delete_button_social_copy');
const delete_button_new = document.getElementById('delete_button_new');

delete_button_social_copy.addEventListener('click', function(){
    
    setTimeout(function(){

        console.log(currently_selected);

        if(currently_selected == "social"){
            social_mode_details.style.display = "initial";
            social_mode_selector.style.backgroundColor = "#e5e5e5";
        } else if(currently_selected == "social_copy") {
            social_mode_details.style.display = "initial";
            social_mode_selector.style.backgroundColor = "#e5e5e5";
        } else if(currently_selected == "work") {
            work_mode_details.style.display = "initial";
            work_mode_selector.style.backgroundColor = "#e5e5e5";
        } else if(currently_selected == "transparent"){
            transparent_mode_details.style.display = "initial";
            transparent_mode_selector.style.backgroundColor = "#e5e5e5";
        } else if(currently_selected == "new"){
            new_mode_details.style.display = "initial";
            new_mode_selector.style.backgroundColor = "#e5e5e5";
        }


        social_mode_copy_details.style.display = "none";
        social_mode_copy_selector.style.display = "none";
        
    }, 100)
    
});


const updating_name = document.getElementById('updating_name');
const updated_name = document.getElementById('updated_name');

updating_name.addEventListener('keyup', function(){
    updated_name.innerHTML = updating_name.value;
});

const updating_desc = document.getElementById('updating_desc');
const updated_desc = document.getElementById('updated_desc');

updating_desc.addEventListener('keyup', function(){
    updated_desc.innerHTML = updating_desc.value;
});