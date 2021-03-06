window.addEventListener("load", function() {

    Object.merge2(dictionary["en-EN"], {
        "_header": 'Cookies used on the website!',
        "_message": 'Cookies facilitate the provision of our services. By using our services you agree that we use cookies.',
        "_dismiss": 'I agree!',
        "_allow": 'Allow cookies',
        "_deny": 'Decline',
        "_link": 'Read more',
        "_href": '/datenschutz/',
        "_close": '&#x274c;'
    });

    Object.merge2(dictionary["de-DE"], {
        "_header": 'Cookies used on the website!',
        "_message": 'Cookies erleichtern die Bereitstellung unserer Dienste. Mit der Nutzung unserer Dienste erklären Sie sich damit einverstanden, dass wir Cookies verwenden.',
        "_dismiss": 'Einverstanden!',
        "_allow": 'Allow cookies',
        "_deny": 'Decline',
        "_link": 'Mehr Informationen',
        "_href": '/datenschutz/',
        "_close": '&#x274c;'
    });

    window.cookieconsent.initialise({
        "position": "bottom-left",
        content: {
            header: change_lang("_header"),
            message: change_lang("_message"),
            dismiss: change_lang("_dismiss"),
            allow: change_lang("_allow"),
            deny: change_lang("_deny"),
            link: change_lang("_link"),
            href: change_lang("_href"),
            close: change_lang("_close")
        }
    });
});
