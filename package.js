Package.describe({
  name: 'babrahams:editable-text-wysiwyg-bootstrap-3',
  summary: 'Extends the babrahams:editable-text package to include a wysiwyg editor that uses bootstrap-3',
  version: '0.5.21',
  git: 'https://github.com/jackadams/meteor-editable-text-wysiwyg-bootstrap-3.git'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.0');
  
  api.use('babrahams:editable-text@0.8.21', ['client', 'server']);
  api.imply('babrahams:editable-text');
  api.use('babrahams:editable-text-wysiwyg@0.5.21', 'client');
  api.use('templating', 'client');
  api.use('blaze', 'client');
  api.use('spacebars', 'client');
  api.use('jquery', 'client');
  
  api.add_files('lib/editable_text_wysiwyg_bootstrap_3.css', 'client');
  api.add_files('lib/editable_text_wysiwyg_bootstrap_3.html', 'client');
  api.add_files('lib/editable_text_wysiwyg_bootstrap_3.js', 'client');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('babrahams:editable-text-wysiwyg');
  api.addFiles('editable-text-wysiwyg-tests.js');
});