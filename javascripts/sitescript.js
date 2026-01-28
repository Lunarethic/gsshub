document.addEventListener('DOMContentLoaded', function() {

// Collapsable Sidebar Listener===============
    const toggleButton = document.getElementById('toggle-sidebar');
    const gridContainer = document.querySelector('.wrapper');
    const sidebarList = document.querySelector('.sidebar-list')
    const compLogo = document.querySelector('.company-logo')

    toggleButton.addEventListener('click', () => {
        gridContainer.classList.toggle('collapsed');
        sidebarList.classList.toggle('collapsed');
        compLogo.classList.toggle('collapsed');
    });


//CHAT Sciripts===============================
//Opening CHAT
const chatBoxHeader = document.getElementById('chatBar');
const chatBoxBody = document.querySelector('.chatbox-body');

const chatboxContent = document.querySelector('.chatbox-content');
const chatboxInput = document.getElementById('chatbox-input');
const chatBoxSend = document.getElementById('chatbox-send');

chatBoxHeader.addEventListener('click', () => {
  chatBoxBody.classList.toggle('active');
});

//Function for adding a new div element (Used for sending function below)
const sendMessage = () => {
  const messageText = chatboxInput.value.trim();
  if (messageText === '') {return;}
  const newMessage = document.createElement('div');
  newMessage.classList.add('msg-item', 'user');
  newMessage.textContent = messageText;
  chatboxContent.appendChild(newMessage);
  chatboxInput.value = '';
  chatboxContent.scrollTop = chatboxContent.scrollHeight;

  // Simulate bot response, timeout makes sure it doesnt send a message immediately
  setTimeout(() => {
  const botMsg = document.createElement('div');
  botMsg.classList.add('msg-item', 'reply');
  botMsg.textContent = 'Thank you for your message. Our AI assistant is currently being configured.';
  chatboxContent.appendChild(botMsg);

  chatboxContent.scrollTop = chatboxContent.scrollHeight;
  }, 1000);

};

//Sending Message
    chatBoxSend.addEventListener('click', sendMessage); //send button

    chatboxInput.addEventListener('keydown', (event) => { 
      if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
      }
    });

//===========================================
//============================================


// Light and Dark mode toggle listener (WIP)
/*
const themeButton = document.getElementById("themeIcon")
const sunPath = "M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"
const moonPath = "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
  
  themeButton.addEventListener('click', () => {
    if (document.body.classList.toggle("dark")) {
      icon.innerHTML = `<path d="${moonPath}" />`;
    } else {
      icon.innerHTML = `<path d="${sunPath}" />`;
    }
  });
*/



//=======================================================
//========================================================
});



