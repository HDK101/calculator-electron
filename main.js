const { app, BrowserWindow, remote } = require("electron");
const path = require("path");

function createWindow() {
  let win = new BrowserWindow({
    width: 240,
    height: 380,
    frame: false,
    //resizable: false,
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  });

  win.loadFile("index.html");

  win.webContents.openDevTools()

  win.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

app.on("ready", createWindow);
