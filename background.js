var note;
chrome.omnibox.onInputEntered.addListener(function (text){
  note = text
  console.log(note)
  newElement()
});

