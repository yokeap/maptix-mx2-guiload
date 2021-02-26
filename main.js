const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win = null;

app.on('ready', function() {
    win = new BrowserWindow({ 
        width: 1280, 
        height: 800,
        "fullscreen": true 
    })
    win.maximize();
    win.show();
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, '/public/index.html'),
    //     protocol: 'file',
    //     slashes: true
    // }))
    win.loadURL('http://localhost:9010/');
})