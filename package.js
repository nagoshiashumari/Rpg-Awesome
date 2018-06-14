Package.describe({
  name: 'nagoshi:rpg-awesome',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'A fantasy themed font and CSS toolkit.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nagoshiashumari/Rpg-Awesome',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addAssets([
    // we bundle all font files, but the client will request only one of them via the CSS @font-face rule
    'fonts/rpgawesome-webfont.eot',   // IE8 or older only understands EOT. IE9+ will read it too because it loads the first occurrence of `src`
    'fonts/rpgawesome-webfont.svg',   // SVG fallback for iOS < 5 - http://caniuse.com/#feat=svg-fonts, http://stackoverflow.com/a/11002874/1269037
    'fonts/rpgawesome-webfont.ttf',   // Android Browers 4.1, 4.3 - http://caniuse.com/#feat=ttf
    'fonts/rpgawesome-webfont.woff'  // Most modern browsers
  ], 'client');

  api.addFiles([
    'css/rpg-awesome.css'
  ], 'client');
});


Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nagoshi:rpg-awesome');

  api.use([
    'http',
    'tinytest',
    'test-helpers'
  ], ['client']);

  api.add_files([
    'rpg-awesome-tests.js',
  ], ['client']);
});
