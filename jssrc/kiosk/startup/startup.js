//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "test123",
    appName: "test123",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.30.129",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "test123",
    isMFApp: false,
    url: "http://10.10.25.64:8080/test123/MWServlet",
    secureurl: "http://10.10.25.64:8080/test123/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    Form06918f607b64647Globals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            Form06918f607b64647.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();