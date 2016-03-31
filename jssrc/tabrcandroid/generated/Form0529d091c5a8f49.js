function addWidgetsForm0529d091c5a8f49() {
    var Button0d5b3c3db621f47 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "id": "Button0d5b3c3db621f47",
        "isVisible": true,
        "skin": "slButtonGlossBlue",
        "text": "Button"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    Form0529d091c5a8f49.add(
    Button0d5b3c3db621f47);
};

function Form0529d091c5a8f49Globals() {
    Form0529d091c5a8f49 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0529d091c5a8f49,
        "enabledForIdleTimeout": false,
        "id": "Form0529d091c5a8f49",
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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