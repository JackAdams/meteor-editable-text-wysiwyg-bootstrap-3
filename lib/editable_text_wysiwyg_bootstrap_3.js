// Without this, the editableText widget will fall back to a textarea:
EditableText.wysiwyg = true;

Template.wysiwyg_toolbar.helpers({
  colors: function () { return EditableText._wysiwygColors(); },
  editingHTML : function () {
	var tmpl = EditableText._findWysiwygInstance(Template.instance());
	return tmpl && tmpl.editHTML && tmpl.editHTML.get();
  }
});