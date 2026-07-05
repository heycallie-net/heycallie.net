// const today = new Date();

// if (today.getDay() === 0) {
//   document.addEventListener("DOMContentLoaded", () => {
//     window.location = "https://heycallie.net/closed";
//   });
// }

document
  .getElementById("startMenuButton")
  .addEventListener("mousedown", regStartMenuPress);
document
  .getElementById("startMenuButton")
  .addEventListener("mouseleave", regStartMenuLeave);
document
  .getElementById("startMenuButton")
  .addEventListener("mouseenter", regStartMenuEnter);

function changeBackgroundWaterlilies() {
  const element = document.querySelector(".fullDocument");
  element.style.backgroundImage = "url('assets/windows_xp_102.jpg')";
}

function changeBackgroundDefault() {
  const element = document.querySelector(".fullDocument");
  element.style.backgroundImage = "url('assets/windows_xp_14.jpg')";
}

function changeBackgroundTulips() {
  const element = document.querySelector(".fullDocument");
  element.style.backgroundImage = "url('assets/windows_xp_35.jpg')";
}

function regStartMenuPress() {
  smb = document.getElementById("startMenuButton");
  if (!document.getElementById("startMenu").classList.contains("hidden")) {
    smb.style.backgroundImage = "url('assets/start_hover_v2.png')";
    sm.classList.toggle("hidden");
  } else {
    smb.style.backgroundImage = "url('assets/start_pressed_v2.png')";
    sm = document.getElementById("startMenu");
    sm.classList.toggle("hidden");
  }
}

function regStartMenuLeave() {
  smb = document.getElementById("startMenuButton");
  if (!document.getElementById("startMenu").classList.contains("hidden")) {
    return;
  }
  smb.style.backgroundImage = "url('assets/start_normal_v2.png')";
}

function regStartMenuEnter() {
  smb = document.getElementById("startMenuButton");
  if (!document.getElementById("startMenu").classList.contains("hidden")) {
    return;
  }
  smb.style.backgroundImage = "url('assets/start_hover_v2.png')";
}

document.addEventListener("DOMContentLoaded", () => {
  const userClickFile = document.getElementById("fileButton");
  userClickFile && (userClickFile.onclick = regClickFile);

  const userClickEdit = document.getElementById("editButton");
  userClickEdit && (userClickEdit.onclick = regClickEdit);

  const windows = document.getElementsByClassName("window");
  for (let i = 0; i < windows.length; i++) {
    windows[i].addEventListener("mousedown", regWindowClick);
  }
});

function checkFileDropdown() {
  if (document.getElementById("fileDropdown").classList.contains("hidden")) {
  } else {
    document.getElementById("fileDropdown").classList.toggle("hidden");
  }
}

function checkEditDropdown() {
  if (document.getElementById("editDropdown").classList.contains("hidden")) {
  } else {
    document.getElementById("editDropdown").classList.toggle("hidden");
  }
}

function regClickFile() {
  checkEditDropdown();
  var x = document.getElementById("fileDropdown");
  x.classList.toggle("hidden");
}

function regClickEdit() {
  checkFileDropdown();
  var x = document.getElementById("editDropdown");
  x.classList.toggle("hidden");
}

function closeTab(id) {
  id = id || "window1";
  document.getElementById(id).classList.toggle("hidden");
}

function openTab(id) {
  id = id || "window1";
  document.getElementById(id).classList.toggle("hidden");
}

function bringToFront(el) {
  if (!el) return;
  var max = 0;
  var ws = document.getElementsByClassName("window");
  for (var i = 0; i < ws.length; i++) {
    // always use the genuine global object
    var comp = document.defaultView || window;
    var z = parseInt(comp.getComputedStyle(ws[i]).zIndex, 10) || 0;
    if (z > max) max = z;
  }
  el.style.zIndex = max + 1;
}

function regWindowClick(event) {
  bringToFront(this);
}

const win = document.getElementById("window");
if (win) dragElement(win);

document.querySelectorAll(".draggable").forEach(function (el) {
  dragElement(el);
});

function dragElement(elmnt) {
  if (!elmnt) return;
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "Drag")) {
    document.getElementById(elmnt.id + "Drag").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var theme = document.querySelector("#theme-link");
var popupsAll = document.querySelectorAll(".popup");

// Source - https://stackoverflow.com/q/48888574
// Posted by user8782879, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-26, License - CC BY-SA 3.0

function userEntry() {
  var darkMode = document.querySelector("#darkMode");
  var popups = document.querySelector("#popupSelector");
  var context = document.querySelector("#contextMenuCheckbox");
  var keybinds = document.querySelector("#keybindsCheckbox");

  if (darkMode.checked == true) {
    console.error("dark mode doesn't work by the way");
    darkModeEnable();
  }

  if (popups.checked == true) {
    popupsAll.forEach(popupsDisable);
  }

  if (context.checked == false) {
    enableCustomContextMenu();
  }

  if (keybinds.checked == true) {
    enableCustomKeybinds();
  }
  updateTime();
  entryTitleFunction();
  closeEntryMessage();
}

function closeEntryMessage() {
  document.getElementById("entryMessage").classList.add("hidden");
}

/* function darkModeEnable() {
  theme.href = "dark-mode.css";
} */

function darkModeDisable() {
  theme.href = "light-mode.css";
}

function popupsDisable(thisPopup) {
  thisPopup.classList.add("hidden");
}

function enableCustomKeybinds() {
  // blog
  document.addEventListener("keydown", (event) => {
    if (event.key === "b" || event.key === "B") {
      document.getElementById("window11").classList.remove("hidden");
      bringToFront(window11);
    }
  });

  // file explorer
  document.addEventListener("keydown", (event) => {
    if (event.key === "e" || event.key === "E") {
      document.getElementById("window5").classList.remove("hidden");
      bringToFront(window5);
    }
  });
}

function userChoseGuest() {
  document.getElementById("title").innerHTML = "Guest Login";
  const login = document.getElementById("welcomeUserLogin");
  const settings = document.getElementById("guestUserSettings");
  login.style.opacity = "0";
  login.classList.add("hidden");
  settings.classList.add("guestUserSettingsTransition");
}

function fileExplorerHideAll() {
  document.getElementById("cMyDocumentsMusicFiles").classList.add("hidden");
  document.getElementById("eMusicTVGirl").classList.add("hidden");
  document.getElementById("eMusicfemtanyl").classList.add("hidden");
  document.getElementById("eMusicLovejoy").classList.add("hidden");
  document.getElementById("eMusicsmeeer").classList.add("hidden");
}

function regFileExploreVocaloidClick() {
  document.getElementById("addressAddressBoxText").innerHTML =
    "C:&#92;Users&#92;Guest&#92;My Documents&#92;Vocaloid";
  fileExplorerHideAll();
  document.getElementById("cMyDocumentsMusicFiles").classList.remove("hidden");
  document.getElementById("window5Name").innerHTML = "Vocaloid - File Explorer";
}

function regFileExploreTVGirlClick() {
  document.getElementById("addressAddressBoxText").innerHTML =
    "E:&#92;Music&#92;TV Girl";
  fileExplorerHideAll();
  document.getElementById("eMusicTVGirl").classList.remove("hidden");
  document.getElementById("window5Name").innerHTML = "TV Girl - File Explorer";
}

function regFileExplorefemtanylClick() {
  document.getElementById("addressAddressBoxText").innerHTML =
    "E:&#92;Music&#92;femtanyl";
  fileExplorerHideAll();
  document.getElementById("eMusicfemtanyl").classList.remove("hidden");
  document.getElementById("window5Name").innerHTML = "femtanyl - File Explorer";
}

function regFileExploreLovejoyClick() {
  document.getElementById("addressAddressBoxText").innerHTML =
    "E:&#92;Music&#92;Lovejoy";
  fileExplorerHideAll();
  document.getElementById("eMusicLovejoy").classList.remove("hidden");
  document.getElementById("window5Name").innerHTML = "Lovejoy - File Explorer";
}

function regFileExploresmeeerClick() {
  document.getElementById("addressAddressBoxText").innerHTML =
    "E:&#92;Music&#92;Ennui";
  fileExplorerHideAll();
  document.getElementById("eMusicsmeeer").classList.remove("hidden");
  document.getElementById("window5Name").innerHTML = "Ennui - File Explorer";
}

function resetAddressNavigation() {
  document.getElementById("addressAddressBoxText").innerHTML = "C:&#92;";
  document.getElementById("cMyDocumentsMusicFiles").classList.add("hidden");
  document.getElementById("window5Name").innerHTML = "File Explorer";
}

var mediaPlayeriFrame = document.getElementById("mediaPlayeriFrame");

function regFileMusicStaticClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML = "Static.mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/KlTNKOnfXFk?si=N1fmvjAxYjO3welF&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "Static ft. Hatsune Miku";
  mediaplayer.style.height = "371px";
}

function regFileMusicWhatchaClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML =
    "WhatchaCallItsName.mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/bzWs0VpYftE?si=GEMuFtMBL7f-b9Zw&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "WhatchaCallItsName";
  mediaplayer.style.height = "483px";
}

function regFileMusicteoeawkiClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML =
    "the end of everything as we know it..mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/asMmwVf3LrQ?si=0z2IUagryPmkw2Py&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "the end of everything as we know it.";
  mediaplayer.style.height = "371px";
}

function regFileMusiccollapseClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML =
    "collapse of unity.mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/9HdgY3PiQYg?si=cEFA1qPMnjp5hvhP&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "collapse of unity";
  mediaplayer.style.height = "371px";
}

function regFileMusicjoyClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML =
    "a piece of joy.mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/SoV4uR0dMeY?si=guctAc3fq2SAWJ-w&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "a piece of joy";
  mediaplayer.style.height = "371px";
}

function regFileMusickollekClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML = "Kollektivt.mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/PSVW7uBlWxI?si=pNZGv9Uj-2hoD-bb&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "Kollektivt";
  mediaplayer.style.height = "371px";
}

function regFileMusicmyworldClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML =
    "i feel distressed watching my world just die..mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/XrulofG0ryg?si=YvrI1c_JwNAffuOo&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "i feel distressed watching my world just die.";
  mediaplayer.style.height = "371px";
}

function regFileMusicClockworksClick() {
  var mediaplayer = document.getElementById("window6");
  mediaplayer.classList.remove("hidden");
  bringToFront(mediaplayer);
  document.getElementById("mediaPlayerWindowName").innerHTML =
    "Bound Clockworks.mp4";
  mediaPlayeriFrame.src =
    "https://www.youtube.com/embed/1Q4zIkl_Afg?si=fh3HZ2jxuKr4YF9u&amp;controls=1&amp;autoplay=1";
  mediaPlayeriFrame.title = "Bound Clockworks";
  mediaplayer.style.height = "371px";
}

function stopMediaPlayerPlaying() {
  document.getElementById("mediaPlayeriFrame").src = "";
}

function reboot() {
  location.reload();
}

function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  let ampm = "am";

  if (hours >= 12) {
    ampm = "pm";
    if (hours > 12) hours -= 12;
  }
  if (hours === 0) hours = 12;

  const formattedMinutes = minutes.toString().padStart(2, "0");

  // document.getElementById("userTimeDisplay").textContent =
  //   `it is ${hours}:${formattedMinutes} ${ampm} :)`;

  document.getElementById("taskbarUserTimeDisplay").textContent =
    `${hours}:${formattedMinutes} ${ampm}`;

  const delay = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

  setTimeout(updateTime, delay);
}

function entryTitleFunction() {
  document.getElementById("title").innerHTML = "Desktop";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// document.getElementById("window9").style.top = getRandomInt(86) + "vh";
// document.getElementById("window9").style.left = getRandomInt(91) + "vw";

document.querySelectorAll(".popup").forEach(function (el) {
  el.style.left = getRandomInt(91) + "vw";
  el.style.top = getRandomInt(86) + "vh";
});

function todoList() {
  document.getElementById("webBoxWindowEleven").classList.add("hidden");
}

function alsoTodoList() {
  document
    .getElementById("blogiFrame")
    .contentWindow.document.getElementById("webBoxWindowEleven")
    .classList.add("hidden");
}

function normBlog() {
  document.getElementById("webBoxWindowEleven").classList.remove("hidden");
}

function showContextMenu(e) {
  e.preventDefault();
  const menu = document.getElementById("contextMenu");
  menu.style.animation = "";
  menu.classList.remove("hidden");
  menu.style.position = "absolute";
  menu.style.left = `${e.pageX}px`;
  menu.style.top = `${e.pageY}px`;
  bringToFront();
  checkSelectedText();
}

function hideContextMenu() {
  document.getElementById("contextMenu").style.animation =
    "fadeOut 0.12s linear 1";

  setTimeout(function () {
    document.getElementById("contextMenu").classList.add("hidden");
  }, 120);
}

function handleContextMenu(e) {
  showContextMenu(e);
}

function disableContextMenuListener() {
  document.removeEventListener("contextmenu", handleContextMenu, false);
}

function enableContextMenuListener() {
  document.addEventListener("contextmenu", handleContextMenu, false);
}

document.addEventListener("DOMContentLoaded", function () {
  enableContextMenuListener();

  document.addEventListener(
    "click",
    function (e) {
      const menu = document.getElementById("contextMenu");
      if (!menu.contains(e.target)) {
        hideContextMenu();
      }
    },
    false,
  );
});

function enableNormalContextMenu() {
  document.getElementById("contextMenu").classList.add("hidden");
  showContextMenu = function () {};
}

function enableCustomContextMenu() {
  showContextMenu = function (e) {
    e.preventDefault();
    const menu = document.getElementById("contextMenu");
    menu.style.animation = "";
    menu.classList.remove("hidden");
    menu.style.position = "absolute";
    menu.style.left = `${e.pageX}px`;
    menu.style.top = `${e.pageY}px`;
    checkSelectedText();
  };
}

function copyHighlighted() {
  document.execCommand("copy");
  hideContextMenu();
}

function pasteHighlighted() {
  document.execCommand("paste");
  hideContextMenu();
}

function getSelectedText() {
  let text = "";
  if (typeof window.getSelection !== "undefined") {
    text = window.getSelection().toString();
  } else if (
    typeof document.selection !== "undefined" &&
    document.selection.type == "Text"
  ) {
    text = document.selection.createRange().text;
  }
  return text;
}

function checkSelectedText() {
  let selectedText = getSelectedText();
  if (selectedText !== "") {
    document.getElementById("contextMenuCopy").classList.remove("hidden");
  } else {
    document.getElementById("contextMenuCopy").classList.add("hidden");
  }
}

document.addEventListener("click", (event) => {
  const editableElements = document.querySelectorAll(".contentEditable");
  let clickedInside = false;
  editableElements.forEach((element) => {
    if (element.contains(event.target)) {
      clickedInside = true;
    }
  });
  if (clickedInside == true) {
    enablePasteOption();
  } else {
    disablePasteOption();
  }
});

function enablePasteOption() {
  document.getElementById("contextMenuPaste").classList.remove("hidden");
}

function disablePasteOption() {
  document.getElementById("contextMenuPaste").classList.add("hidden");
}
