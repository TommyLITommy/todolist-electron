const {app, BrowserWindow} = require('electron');
const path = require('path')
function createWindow(){
  const window = new BrowserWindow({
    width: 1200,
    height: 675,
    webPreferences: {
      contextIsolation:true
    },
    icon: path.resolve(__dirname, 'assets', 'img', 'icon.png')
  });

  window.loadFile('index.html')
  window.setMinimumSize(800, 600)
  window.setMaximumSize(1920, 1080)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit()
})

app.on('activate', () =>{
  if(BrowserWindow.getAllWindows().length === 0) createWindow()
})