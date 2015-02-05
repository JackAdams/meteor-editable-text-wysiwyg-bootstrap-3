WYSIWYG extension for babrahams:editable-text package
-----------------------------------------------------

This package provides a wysiwyg widget for editing text in-place. It is for apps that use bootstrap-3.

Example app: [http://editable-text-demo.meteor.com](http://editable-text-demo.meteor.com)

Example app repo: [https://github.com/JackAdams/editable-text-demo](https://github.com/JackAdams/editable-text-demo)

Minimal example app on meteorpad: [http://meteorpad.com/pad/2YdGJmZ9LthGZaLao/editable-text-wysiwyg-bootstrap-3](http://meteorpad.com/pad/2YdGJmZ9LthGZaLao/editable-text-wysiwyg-bootstrap-3)

#### Quick Start

If you project does not already use bootstrap-3 and fontawesome:

	meteor add fortawesome:fontawesome
    meteor add twbs:bootstrap-noglyph

This package requires fontawesome and bootstrap-3 to work, but the choice of the particular fontawesome and bootstrap-3 packages is left to the individual - they are not added automatically by this package. Once those are included in your project:

	meteor add babrahams:editable-text-wysiwyg-bootstrap-3

You can then drop an editable text widget into any Blaze template with `wysiwyg=true`:

	{{> editableText collection="posts" field="body" wysiwyg=true}}
	
where "posts" is the name of the mongo collection and "body" is the name of a document field for the `posts` collection.

`collection` and `field` are mandatory fields.

Note: The widget assumes that the data context is that of a single document from the `posts` collection (with _id value included).

You can also set the data context explicitly as follows:

    {{> editableText context=singlePostDocument collection="posts" field="body"}}

where `singlePostDocument` can be a single post document already set in the current context, or provided by a template helper from the template that the widget was dropped into.

(You can use `document`, `doc`, `object`, `obj`, `data` or `dataContext` instead of `context` - go with whichever you prefer.)

#### Documentation

Read the [full documentation](https://github.com/JackAdams/meteor-editable-text#editable-text-for-meteor) for the `babrahams:editable-text` package at [https://github.com/JackAdams/meteor-editable-text](https://github.com/JackAdams/meteor-editable-text).