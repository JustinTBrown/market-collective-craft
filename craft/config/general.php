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
  ),
  
  // Local Machine
  'localhost' => array(
    'devMode' => true,
    // 'siteUrl' => 'http://localhost:8888/',
    'environmentVariables' => array(
      // 'basePath' => '/users/eugene/Sites/craft-project/html/',
      // 'baseUrl'  => 'http://localhost:8888/',
    ),
    'testToEmailAddress' => 'jb@justinbrown.io',
  ),

  // Development
  '162.243.199.96' => array(
    'devMode' => true,
    'siteUrl' => 'http://162.243.199.96/',
    'environmentVariables' => array(
      'basePath' => '/var/www/public/',
      'baseUrl'  => 'http://162.243.199.96/',
    )
  )
);
