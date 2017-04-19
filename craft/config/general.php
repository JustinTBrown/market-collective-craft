<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  // General
  '*' => array(
    'defaultWeekStartDay' => 1,
    'enableCsrfProtection' => true,
    'omitScriptNameInUrls' => 'auto',
    'cpTrigger' => 'admin',
    'timezone' => 'America/Edmonton',
  ),
  
  // Local Machine
  'localhost' => array(
    'devMode' => true,
    'environmentVariables' => array(
      'siteUrl'  => '/',
      'basePath' => '/users/justinbrown/web/mc-site/public/',
      'baseUrl'  => '/',
    ),
    'testToEmailAddress' => 'jb@justinbrown.io',
  ),

  // Development - Digital Ocean
  // test
  '162.243.199.96' => array(
  // 'mc.generalweb.co' => array(
    'devMode' => true,
    'environmentVariables' => array(
      'siteUrl'  => '/',
      'basePath' => '/var/www/public/',
      'baseUrl'  => '/',
    )
  )
);
