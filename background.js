
var note
// Initialize array if not already stored
try {
  chrome.storage.sync.get(['notes'], function (data) {console.log(notes)});
}
catch (e) {
  if (e instanceof ReferenceError) {
    var noteArray = [];
    chrome.storage.sync.set({ notes: noteArray }, function () {
      console.log("added the note array");
    });
  } 
}


//On omnibox enter, add to array
chrome.omnibox.onInputEntered.addListener(function (text) {
  note = String(text)
  console.log(String(note))


  chrome.storage.sync.get(['notes'], function (data) {
    console.log(data.notes);
    update(data.notes);
  });
});

function update(array) {
  array.push(note);
  //then call the set to update with modified value
  chrome.storage.sync.set({notes: array }, function () {
    console.log(array);
  });
}

