// Without this, the editableText widget will fall back to a textarea:
EditableText.wysiwyg = true;

Template.wysiwyg.helpers({
  colors: function () {
	return [
	  {name: "Red", code: "#c00000"},
	  {name: "Orange", code: "#f08000"},
	  {name: "Yellow", code: "#c0c000"},
	  {name: "Green", code: "#008000"},
	  {name: "Cyan", code: "#0090c0"},
	  {name: "Blue", code: "#0900c0"},
	  {name: "Magenta", code: "#800080"},
	  {name: "Grey", code: "#777777"},
	  {name: "Black", code: "#000000"}
	]  
  }
});

// Events specific to this particular implementation of the bootstrap-wysiwyg editor

Template.wysiwyg.events({
  /*'click #tableBtn' : function() {
    document.execCommand('insertHTML', false, '<table><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>')  
  }*/
  'mousedown .wysiwyg-tools-button' : function(evt,tmpl) {
    // evt.preventDefault();
    var elem = $(evt.currentTarget).closest('.wysiwyg-toolbar').find('.wysiwyg-tools');
    elem.toggle(jQuery.ui && 'stretch' || 'blind'); // Hack for weird way that adding jQuery UI breaks 'blind'
    if ($(evt.currentTarget).attr('title') === 'Show tools') {
      $(evt.currentTarget).attr('title','Hide tools').find('i').removeClass('fa-caret-right').addClass('fa-caret-down');
	  EditableText._callback.call(this,'onShowToolbar',tmpl.data.context);
    }
    else {
      $(evt.currentTarget).attr('title','Show tools').find('i').removeClass('fa-caret-down').addClass('fa-caret-right');
	  EditableText._callback.call(this,'onHideToolbar',tmpl.data.context);
    }
  },
  'click .wysiwyg-toolbar .span2' : function(evt,tmpl) {
    evt.stopPropagation();
  }
});