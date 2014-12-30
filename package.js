Package.describe({
  name: 'babrahams:editable-text-wysiwyg',
  summary: 'Extends the babrahams:editable-text package to include a wysiwyg editor',
  version: '0.2.2',
  git: 'https://github.com/jackadams/meteor-editable-text-wysiwyg.git'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.0');
  
  api.use('babrahams:editable-text@0.5.5', 'client');
  api.use('babrahams:editable-text-wysiwyg-base@0.1.0', 'client');
  api.use('templating', 'client');
  api.use('blaze', 'client');
  api.use('spacebars', 'client');
  api.use('jquery', 'client');
  api.use('ian:bootstrap-3', 'client');
  api.use('fortawesome:fontawesome@4.2.0', 'client');
  
  api.add_files('lib/editable_text_wysiwyg_bootstrap_wysiwyg.css', 'client');
  api.add_files('lib/editable_text_wysiwyg_bootstrap_wysiwyg.html', 'client');
  api.add_files('lib/editable_text_wysiwyg_bootstrap_wysiwyg.js', 'client');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('babrahams:editable-text-wysiwyg');
  api.addFiles('editable-text-wysiwyg-tests.js');
});