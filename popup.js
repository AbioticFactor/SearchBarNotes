// get sync data on load
window.onload = function () {
  chrome.storage.sync.get(['notes'], function (data) {
    for (var i = 0; i < data.notes.length; i++) {
      console.log("start");
      newElement(data.notes[i])
      console.log("done");
    }
  });
}

// Add a new element
function newElement(addNote) {
  var li = document.createElement("li");
  var inputValue = addNote;
  var t = document.createTextNode(inputValue);

  console.log(inputValue)
  console.log(t)

  li.appendChild(t);

  console.log(li)

  if (document.getElementById("Tobi") == null) {
    console.log("null")
  }
  document.getElementById("Tobi").appendChild(li);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Delete item from list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    deleteItem;
    alert("x")
    var div = this.parentElement;
    div.style.display = "none";

  }
}

function deleteItem(){
  console.log("tesing it");
  chrome.storage.sync.get(['notes'], function (data) {
    data.notes.splice(0, 1);
    var array = data.notes
    chrome.storage.sync.set({notes: array}, function () {
      console.log("deleted");
    });
  });
}

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
  if(e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

