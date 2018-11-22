const { app, BrowserWindow } = require("electron");

let win;

let winConfig = {
  width: 600,
  height: 800
};

function createWindow() {
  win = new BrowserWindow(winConfig);
  win.loadURL(`file://${__dirname}/dist/index.html`);

  // win.webContents.openDevTools();
  win.on("close", () => {
    win = null;
  });
  win.on("resize", () => {
    win.reload();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (win == null) {
    createWindow();
  }
});
