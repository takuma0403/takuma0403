const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow () {
  // ブラウザウィンドウを作成します。
  let mainWindow = new BrowserWindow({width: 800, height: 600});

  // //デベロッパーツール（リリース時には削除する）
  mainWindow.webContents.openDevTools()

  //アプリケーションのindex.htmlをロードします。
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //ウィンドウが閉じられると発生します。
  win.on('closed', () => {
    win = null
  });
}

//このメソッドは、Electronが初期化を終了し、ブラウザウィンドウを作成する準備ができたときに呼び出されます。
app.on('ready', createWindow);

//すべてのウィンドウが閉じられると終了します。
app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
  // MacOSでは、ウィンドウを全て閉じても、プロセスは生き続け、
  // ドックアイコンをクリックすると、再表示される。
  if (win === null) {
  }
});