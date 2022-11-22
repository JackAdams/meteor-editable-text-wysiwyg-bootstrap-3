Package.describe({
  name: 'babrahams:editable-text-wysiwyg-bootstrap-3',
  summary: 'Extends the babrahams:editable-text package to include a wysiwyg editor that uses bootstrap-3',
  version: '0.6.22',
  git: 'https://github.com/jackadams/meteor-editable-text-wysiwyg-bootstrap-3.git'
});

Package.onUse(function (api) {
  
  api.versionsFrom(['1.8.2', '2.3']);
  
  api.use('babrahams:editable-text@0.9.18', ['client', 'server']);
  api.imply('babrahams:editable-text');
  api.use('babrahams:editable-text-wysiwyg@0.6.22', 'client');
  api.use(['templating@1.3.2', 'blaze@2.3.4', 'spacebars@1.0.15', 'jquery@1.11.11'], 'client');
  
  api.addFiles('lib/editable_text_wysiwyg_bootstrap_3.css', 'client');
  api.addFiles('lib/editable_text_wysiwyg_bootstrap_3.html', 'client');
  api.addFiles('lib/editable_text_wysiwyg_bootstrap_3.js', 'client');
  
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('babrahams:editable-text-wysiwyg');
  api.addFiles('editable-text-wysiwyg-tests.js');
});