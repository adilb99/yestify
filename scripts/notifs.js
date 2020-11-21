const menubar_mode_selector = document.getElementById('menubar-mode-selector');

const notifs_all_button = document.getElementById('notifs_all_button');
const notifs_personal_button = document.getElementById('notifs_personal_button');
const notifs_work_button = document.getElementById('notifs_work_button');
const notifs_gaming_button = document.getElementById('notifs_gaming_button');

const notif_types = [notifs_all_button, notifs_personal_button, notifs_work_button, notifs_gaming_button];

const notifs_work = document.getElementById('notifs-work');
const notifs_all = document.getElementById('notifs-all');
const notifs_personal = document.getElementById('notifs-personal');
const notifs_gaming = document.getElementById('notifs-gaming');

const notif_lists = [notifs_work, notifs_all, notifs_personal, notifs_gaming];


notifs_all_button.addEventListener('click', ()=>{
  notif_types.forEach((item, index) => {
    item.classList.remove("selected");
  });
  notif_lists.forEach((item, index) => {
    item.style.display = "none";
  });
  notifs_all_button.classList.add("selected");
  notifs_all.style.display="block";
});

notifs_personal_button.addEventListener('click', ()=>{
  notif_types.forEach((item, index) => {
    item.classList.remove("selected");
  });
  notif_lists.forEach((item, index) => {
    item.style.display = "none";
  });
  notifs_personal_button.classList.add("selected");
  notifs_personal.style.display="block";
});

notifs_work_button.addEventListener('click', ()=>{
  notif_types.forEach((item, index) => {
    item.classList.remove("selected");
  });
  notif_lists.forEach((item, index) => {
    item.style.display = "none";
  });
  notifs_work_button.classList.add("selected");
  notifs_work.style.display="block";
});

notifs_gaming_button.addEventListener('click', ()=>{
  notif_types.forEach((item, index) => {
    item.classList.remove("selected");
  });
  notif_lists.forEach((item, index) => {
    item.style.display = "none";
  });
  notifs_gaming_button.classList.add("selected");
  notifs_gaming.style.display="block";
});

menubar_mode_selector.addEventListener('change', ()=>{
  if(menubar_mode_selector.value == "work"){
    document.getElementById('menubar').style.backgroundColor = "#e5e5e5";
  }
  else{
    document.getElementById('menubar').style.backgroundColor = "#cff4ff";
  }
});