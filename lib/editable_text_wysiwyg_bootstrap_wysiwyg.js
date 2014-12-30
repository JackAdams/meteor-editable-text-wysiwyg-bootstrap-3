// Without this, the editableText widget will fall back to a textarea:
EditableText.wysiwyg = true;

// Events specific to this particular implementation of the bootstrap-wysiwyg editor

Template.wysiwyg.events({
  /*'click #tableBtn' : function() {
	document.execCommand('insertHTML', false, '<table><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>')  
  }*/
  'mousedown .wysiwyg-tools-button' : function(evt) {
	evt.preventDefault();
	var elem = $(evt.currentTarget).closest('.wysiwyg-toolbar').find('.wysiwyg-tools');
	elem.toggle('blind');
	if ($(evt.currentTarget).attr('title') === 'Show tools') {
	  $(evt.currentTarget).attr('title','Hide tools').find('i').removeClass('fa-caret-right').addClass('fa-caret-down');
	}
	else {
	  $(evt.currentTarget).attr('title','Show tools').find('i').removeClass('fa-caret-down').addClass('fa-caret-right');
	}
  },
  'click .wysiwyg-toolbar .span2' : function(evt) {
	evt.stopPropagation();
  }
});