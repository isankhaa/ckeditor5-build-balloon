/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";

//ankhaa
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Font from "@ckeditor/ckeditor5-font/src/font";

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	Alignment,
	RemoveFormat,
	Underline,
	Font,
	// UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	// BlockQuote,
	// CKFinder,
	// EasyImage,
	Heading,
	// Image,
	// ImageCaption,
	// ImageStyle,
	// ImageToolbar,
	// ImageUpload,
	Indent,
	Link,
	List,
	// MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"underline",
			"link",
			"|",
			"fontSize",
			"fontFamily",
			"fontColor",
			"|",
			"alignment",
			"|",
			"removeFormat",
			"|",
			"bulletedList",
			"numberedList",
			"|",
			"indent",
			"outdent",
			"|",
			// 'imageUpload',
			// 'blockQuote',
			"insertTable",
			// 'mediaEmbed',
			"undo",
			"redo"
		]
	},
	// image: {
	// 	toolbar: [
	// 		"imageStyle:full",
	// 		"imageStyle:side",
	// 		"|",
	// 		"imageTextAlternative"
	// 	]
	// },
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en"
};
