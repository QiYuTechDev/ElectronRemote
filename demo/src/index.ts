import {app, BrowserWindow, Menu} from 'electron';
import * as log from "electron-log";


// see https://github.com/electron/remote
import {initialize} from "@electron/remote/main";

// must initialize before render can use
initialize();

const logger = log.scope("app")


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

const createWindow = (): void => {

    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            // https://www.electronjs.org/docs/tutorial/quick-start
            nodeIntegration: true,
            contextIsolation: false,
            sandbox: false,
            // for @electron/remote
            enableRemoteModule: true,
        }
    });

    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY).then(() => {
        logger.info("start main window")
    });

    if (!app.isPackaged) {
        // Open the DevTools.
        logger.debug({entry: MAIN_WINDOW_WEBPACK_ENTRY});
        mainWindow.webContents.openDevTools();
    }

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async (): Promise<void> => {
    createWindow()
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
