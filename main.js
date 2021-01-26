const {app, BrowserWindow} = require('electron');
const path = require('path')
function createWindow(){
  const window = new BrowserWindow({
    width: 600,
    height: 700,
    webPreferences: {
      contextIsolation:true
    },
    icon: path.resolve(__dirname, 'assets', 'img', 'icon.png')
  });

  window.loadFile('index.html')
  window.setMinimumSize(500, 600)
  window.setMaximumSize(900, 800)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit()
})

app.on('activate', () =>{
  if(BrowserWindow.getAllWindows().length === 0) createWindow()
})