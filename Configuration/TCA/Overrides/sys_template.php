<?php
defined('TYPO3_MODE') || die();

call_user_func(function() {

    $extensionname = "hhthemestack";

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionname,
        'Configuration/TypoScript',
        'ThemeStack Boilerplate'
    );
});
