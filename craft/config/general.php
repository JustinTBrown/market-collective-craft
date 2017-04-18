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
    // 'siteUrl' => array(
    //   'en' => 'mc-site.dev:8888'
    // ),
    // 'siteUrl' => 'http://' . $_SERVER['SERVER_NAME'],
    'environmentVariables' => array(
      'siteUrl'  => '/',
      // 'siteUrl' => 'mc-site.dev:8888/',
      'basePath' => '/users/justinbrown/web/mc-site/public/',
      // 'baseUrl'  => 'http://mc-site.dev:8888/',
      'baseUrl'  => '/',
    ),
    'testToEmailAddress' => 'jb@justinbrown.io',
  ),

  // Development
  '162.243.199.96' => array(
    'devMode' => true,
    // 'siteUrl' => array(
    //   'en' => 'http://162.243.199.96/'
    // ),
    // 'siteUrl' => 'http://162.243.199.96/',
    'environmentVariables' => array(
      // 'siteUrl' => 'http://' . $_SERVER['SERVER_NAME'],
      // 'siteUrl' => 'http://162.243.199.96/',
      'basePath' => '/var/www/public/',
      // 'baseUrl'  => 'http://162.243.199.96/',
      'baseUrl'  => '/',
    )
  )
);
