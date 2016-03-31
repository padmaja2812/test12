function addWidgetsForm0b736748e9beb4a() {
    Form0b736748e9beb4a.setDefaultUnit(kony.flex.DP);
    var Button04835b98a198742 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button04835b98a198742",
        "isVisible": true,
        "left": "137dp",
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "151dp",
        "width": "260dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Form0b736748e9beb4a.add(
    Button04835b98a198742);
};

function Form0b736748e9beb4aGlobals() {
    Form0b736748e9beb4a = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0b736748e9beb4a,
        "enabledForIdleTimeout": false,
        "id": "Form0b736748e9beb4a",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};