// ============================================================================
// QUIZMASTER - MASTER QUESTIONS REGISTRY & METADATA (SELF-CONTAINED & MODULAR)
// Contains all 540 verified questions across HTML, CSS, C, Python, DS, and DBMS.
// ============================================================================



// ============================================================================
// QUIZMASTER - HTML QUESTIONS (30 Easy + 30 Moderate + 30 Hard = 90 Questions)
// ============================================================================

window.HTML_QUESTIONS = {
  easy: [
    {
      id: "html-e-01",
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language"
      ],
      answer: 0,
      explanation: "HTML stands for Hyper Text Markup Language. It provides the standard skeleton and structure for web pages."
    },
    {
      id: "html-e-02",
      question: "Which HTML tag is used to create the largest heading?",
      options: ["<h6>", "<head>", "<h1>", "<heading>"],
      answer: 2,
      explanation: "<h1> defines the most important, top-level heading in HTML. Headings range from <h1> (largest) to <h6> (smallest)."
    },
    {
      id: "html-e-03",
      question: "Which tag is used to insert a line break in HTML?",
      options: ["<break>", "<lb>", "<br>", "<newline>"],
      answer: 2,
      explanation: "The <br> tag creates a single line break in text without starting a new paragraph. It is an empty/void element."
    },
    {
      id: "html-e-04",
      question: "What is the correct HTML element for inserting a hyperlink?",
      options: [
        "<a href=\"url\">Link</a>",
        "<link url=\"url\">Link</link>",
        "<a>url</a>",
        "<href>url</href>"
      ],
      answer: 0,
      explanation: "The <a> (anchor) tag with the 'href' (hypertext reference) attribute specifies the destination URL of a link."
    },
    {
      id: "html-e-05",
      question: "Which character is used to indicate an end tag in HTML?",
      options: ["<", "/", "*", "^"],
      answer: 1,
      explanation: "Closing tags in HTML always include a forward slash '/' immediately preceding the tag name, such as </p> or </div>."
    },
    {
      id: "html-e-06",
      question: "Which HTML element is used to display an image?",
      options: ["<image>", "<img>", "<pic>", "<src>"],
      answer: 1,
      explanation: "The <img> tag is used to embed an image into an HTML page. Key attributes include 'src' and 'alt'."
    },
    {
      id: "html-e-07",
      question: "Which attribute provides alternative text for an image if it cannot be displayed?",
      options: ["title", "src", "alt", "desc"],
      answer: 2,
      explanation: "The 'alt' attribute supplies alternative text for accessibility (screen readers) and as a fallback if the image fails to load."
    },
    {
      id: "html-e-08",
      question: "What is the correct HTML element for creating an unordered list?",
      options: ["<ol>", "<list>", "<ul>", "<li>"],
      answer: 2,
      explanation: "<ul> creates an unordered (bulleted) list, whereas <ol> creates an ordered (numbered) list. List items use <li>."
    },
    {
      id: "html-e-09",
      question: "Which HTML element is used to define list items in both ordered and unordered lists?",
      options: ["<item>", "<li>", "<list>", "<ul>"],
      answer: 1,
      explanation: "The <li> tag defines an individual list item inside either an ordered list (<ol>) or an unordered list (<ul>)."
    },
    {
      id: "html-e-10",
      question: "Which doctype declaration is required at the very top of an HTML5 document?",
      options: [
        "<!DOCTYPE html>",
        "<!DOCTYPE HTML5>",
        "<!DOCTYPE html PUBLIC \"...\" \"...\">",
        "<doctype html>"
      ],
      answer: 0,
      explanation: "<!DOCTYPE html> is the clean, case-insensitive document type declaration standardized in HTML5 to trigger standard rendering mode."
    },
    {
      id: "html-e-11",
      question: "Which HTML element contains all the visible content of a web page?",
      options: ["<head>", "<meta>", "<body>", "<main>"],
      answer: 2,
      explanation: "The <body> element represents the document body and contains all renderable elements such as headings, paragraphs, and images."
    },
    {
      id: "html-e-12",
      question: "Which tag is used to define an HTML table row?",
      options: ["<td>", "<th>", "<tr>", "<row>"],
      answer: 2,
      explanation: "<tr> stands for Table Row. Individual data cells inside the row are defined using <td> or header cells using <th>."
    },
    {
      id: "html-e-13",
      question: "Which HTML tag is used to make text bold without implying special importance?",
      options: ["<strong>", "<b>", "<bold>", "<emp>"],
      answer: 1,
      explanation: "The <b> tag formats text as bold purely for visual presentation, whereas <strong> conveys semantic importance or urgency."
    },
    {
      id: "html-e-14",
      question: "Which HTML element is used to represent italicized text with semantic emphasis?",
      options: ["<i>", "<italic>", "<em>", "<style>"],
      answer: 2,
      explanation: "The <em> tag provides semantic stress emphasis that screen readers pronounce differently, typically rendered in italics."
    },
    {
      id: "html-e-15",
      question: "How do you write a comment in HTML?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->",
        "' This is a comment"
      ],
      answer: 2,
      explanation: "HTML comments begin with <!-- and end with -->. Browsers do not render content inside comments."
    },
    {
      id: "html-e-16",
      question: "Which HTML input type defines a slider control?",
      options: ["slider", "range", "controls", "scroll"],
      answer: 1,
      explanation: "<input type=\"range\"> creates an interactive numeric slider control allowing users to pick a value between min and max."
    },
    {
      id: "html-e-17",
      question: "Which attribute makes an input field required before submitting a form?",
      options: ["validate", "mandatory", "required", "check"],
      answer: 2,
      explanation: "The boolean 'required' attribute specifies that the input element must contain a value before the form can be submitted."
    },
    {
      id: "html-e-18",
      question: "Which HTML tag is used to define a drop-down list?",
      options: ["<list>", "<dropdown>", "<select>", "<input type=\"list\">"],
      answer: 2,
      explanation: "The <select> element creates a drop-down menu containing multiple <option> elements."
    },
    {
      id: "html-e-19",
      question: "What is the correct tag for playing audio files natively in HTML5?",
      options: ["<sound>", "<audio>", "<music>", "<mp3>"],
      answer: 1,
      explanation: "The <audio> element is the standard HTML5 element for embedding audio streams or audio files."
    },
    {
      id: "html-e-20",
      question: "Which HTML attribute specifies that an input field is read-only?",
      options: ["disabled", "locked", "readonly", "static"],
      answer: 2,
      explanation: "The 'readonly' attribute prevents the user from altering the value of an input field, though the value is still submitted with the form."
    },
    {
      id: "html-e-21",
      question: "Which HTML element is used to specify metadata about an HTML document?",
      options: ["<meta>", "<head>", "<data>", "<info>"],
      answer: 0,
      explanation: "The <meta> tag defines metadata such as character encoding, keywords, author, and viewport configuration inside <head>."
    },
    {
      id: "html-e-22",
      question: "Which tag is used to create a numbered list in HTML?",
      options: ["<ul>", "<nl>", "<ol>", "<numbered>"],
      answer: 2,
      explanation: "<ol> defines an ordered list, where list items are numbered sequentially by default."
    },
    {
      id: "html-e-23",
      question: "Which HTML element is used to group inline elements for styling?",
      options: ["<div>", "<span>", "<section>", "<group>"],
      answer: 1,
      explanation: "<span> is an inline container used to mark up a part of a text or document without introducing line breaks."
    },
    {
      id: "html-e-24",
      question: "Which HTML element is used to group block-level content for styling?",
      options: ["<span>", "<div>", "<p>", "<block>"],
      answer: 1,
      explanation: "<div> is a generic block-level container with no semantic meaning of its own, commonly used for layout and styling."
    },
    {
      id: "html-e-25",
      question: "Which attribute opens a linked document in a new browser tab or window?",
      options: [
        "target=\"_blank\"",
        "target=\"_new\"",
        "target=\"_parent\"",
        "window=\"new\""
      ],
      answer: 0,
      explanation: "Setting target=\"_blank\" on an anchor (<a>) element instructs the browser to open the linked page in a new browsing context (tab/window)."
    },
    {
      id: "html-e-26",
      question: "Which HTML5 semantic element is used to define footer information for a document or section?",
      options: ["<bottom>", "<footer>", "<end>", "<foot>"],
      answer: 1,
      explanation: "The <footer> element represents a footer for its nearest sectioning content or root, often holding copyright and contact info."
    },
    {
      id: "html-e-27",
      question: "Which HTML5 element represents the primary navigation links of a website?",
      options: ["<menu>", "<navigate>", "<nav>", "<links>"],
      answer: 2,
      explanation: "The <nav> tag represents a section of a page that links to other pages or to parts within the page (navigation links)."
    },
    {
      id: "html-e-28",
      question: "What is the default type attribute for an <input> element if none is specified?",
      options: ["password", "text", "number", "email"],
      answer: 1,
      explanation: "If the 'type' attribute is omitted or set to an unrecognized value, an <input> element defaults to type=\"text\"."
    },
    {
      id: "html-e-29",
      question: "Which HTML tag is used to define a multiline text input field?",
      options: ["<input type=\"multiline\">", "<textarea>", "<textbox>", "<input type=\"textarea\">"],
      answer: 1,
      explanation: "The <textarea> element creates a multi-line plain-text editing control, ideal for user comments or messages."
    },
    {
      id: "html-e-30",
      question: "Which element is used in the <head> section to define the document title shown on the browser tab?",
      options: ["<meta title>", "<header>", "<title>", "<tab>"],
      answer: 2,
      explanation: "The <title> element defines the title of the document that is displayed in the browser's title bar or page tab."
    }
  ],

  moderate: [
    {
      id: "html-m-01",
      question: "Which HTML5 attribute allows responsive images by supplying multiple resolutions and screen densities?",
      options: ["srcsets", "srcset", "imageset", "media"],
      answer: 1,
      explanation: "The 'srcset' attribute allows developers to define a comma-separated list of image sources with width or pixel density descriptors."
    },
    {
      id: "html-m-02",
      question: "What is the difference between <script defer> and <script async>?",
      options: [
        "defer executes immediately when downloaded; async waits until DOM is fully parsed",
        "defer executes after HTML parsing is complete in document order; async executes as soon as downloaded",
        "Both pause the HTML parser until download finishes",
        "async guarantees execution order of scripts, while defer does not"
      ],
      answer: 1,
      explanation: "'defer' downloads in parallel and executes scripts in document order after the DOM has been parsed. 'async' executes immediately once downloaded, potentially out of order and interrupting parsing."
    },
    {
      id: "html-m-03",
      question: "Which HTML5 element represents self-contained content that could be distributed independently, like a blog post or news story?",
      options: ["<section>", "<article>", "<aside>", "<main>"],
      answer: 1,
      explanation: "<article> represents an autonomous, self-contained composition in a document, page, or site (e.g., forum post, newspaper article, blog entry)."
    },
    {
      id: "html-m-04",
      question: "What is the purpose of the 'sandbox' attribute on an <iframe> element?",
      options: [
        "It speeds up frame rendering through hardware acceleration",
        "It imposes restrictions on the content hosted in the frame (disabling scripts, forms, popups by default)",
        "It allows cross-domain cookie sharing without restrictions",
        "It forces the iframe to fit into a responsive container"
      ],
      answer: 1,
      explanation: "The 'sandbox' attribute increases security by placing restrictions on what the iframe can do (e.g., blocking scripts, forms, and same-origin cookies unless explicitly re-enabled)."
    },
    {
      id: "html-m-05",
      question: "What is the purpose of the <picture> element in HTML5?",
      options: [
        "To apply CSS 3D filters directly to images",
        "To provide multiple image sources for art direction and different viewport conditions",
        "To automatically convert raster images into vector SVG",
        "To render 3D WebGL scenes inside HTML"
      ],
      answer: 1,
      explanation: "The <picture> element acts as a wrapper containing multiple <source> elements and an <img> fallback, allowing art direction and format switching (e.g., WebP/AVIF)."
    },
    {
      id: "html-m-06",
      question: "Which attribute links an <input> element to a <datalist> of predefined options?",
      options: ["datalist", "list", "autocomplete", "options"],
      answer: 1,
      explanation: "The 'list' attribute of an <input> references the 'id' attribute of a <datalist> element to provide autocomplete suggestions."
    },
    {
      id: "html-m-07",
      question: "What is the significance of prefixing custom HTML attributes with 'data-'?",
      options: [
        "They are encrypted and sent securely to the server",
        "They allow storage of custom private data accessible via the DOM dataset API without breaking HTML validation",
        "They automatically bind to localStorage variables",
        "They make elements render 50% faster in modern browsers"
      ],
      answer: 1,
      explanation: "Custom data attributes starting with 'data-*' allow developers to embed extra custom data on standard HTML elements, accessible via element.dataset."
    },
    {
      id: "html-m-08",
      question: "What does the 'preload=\"metadata\"' attribute do on an HTML5 <video> tag?",
      options: [
        "Downloads the entire video file before playback begins",
        "Downloads only basic information such as dimensions, duration, and first frame",
        "Disables buffering completely until the user presses play",
        "Compresses the video stream in real-time"
      ],
      answer: 1,
      explanation: "preload=\"metadata\" instructs the browser to download only video metadata (such as duration, dimensions, track list) without downloading the full video."
    },
    {
      id: "html-m-09",
      question: "Which HTML5 element represents content that is tangentially related to the content around it, often placed as a sidebar?",
      options: ["<section>", "<aside>", "<nav>", "<details>"],
      answer: 1,
      explanation: "<aside> represents a portion of a document whose content is only indirectly related to the document's main content, such as sidebars or callout boxes."
    },
    {
      id: "html-m-10",
      question: "Which pair of HTML5 elements creates an interactive disclosure widget that users can toggle open and closed?",
      options: [
        "<toggle> and <content>",
        "<accordion> and <panel>",
        "<details> and <summary>",
        "<dropdown> and <item>"
      ],
      answer: 2,
      explanation: "The <details> element creates a disclosure toggle where information is visible only when the widget is toggled open; <summary> provides the visible label."
    },
    {
      id: "html-m-11",
      question: "Which HTML attribute specifies a regular expression pattern that an input value must match?",
      options: ["validate", "regex", "pattern", "rule"],
      answer: 2,
      explanation: "The 'pattern' attribute takes a regular expression that the form input's value must satisfy for the form to be valid."
    },
    {
      id: "html-m-12",
      question: "What is the function of the <template> tag in HTML5?",
      options: [
        "Renders dynamic server-side templates like Handlebars directly",
        "Holds client-side content that is parsed but not rendered until instantiated by JavaScript",
        "Creates a master CSS stylesheet template",
        "Enforces strict type validation on form elements"
      ],
      answer: 1,
      explanation: "<template> holds markup that the browser parses into a DocumentFragment but does not render until JavaScript clones and appends it to the DOM."
    },
    {
      id: "html-m-13",
      question: "What is the recommended meta viewport tag for responsive web design?",
      options: [
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "<meta name=\"viewport\" content=\"scale=fixed, max-scale=1.0\">",
        "<meta name=\"viewport\" content=\"screen=device, zoom=none\">",
        "<meta name=\"viewport\" content=\"auto-responsive=true\">"
      ],
      answer: 0,
      explanation: "content=\"width=device-width, initial-scale=1.0\" matches the screen width in device-independent pixels and sets the initial zoom level to 100%."
    },
    {
      id: "html-m-14",
      question: "Which attribute should you add to an external link with target=\"_blank\" to prevent tab nabbing security vulnerabilities?",
      options: [
        "rel=\"external\"",
        "rel=\"noopener noreferrer\"",
        "rel=\"secure\"",
        "rel=\"nofollow\""
      ],
      answer: 1,
      explanation: "rel=\"noopener noreferrer\" prevents the newly opened window from accessing the opener window object (window.opener) and omits the referrer header."
    },
    {
      id: "html-m-15",
      question: "Which HTML5 semantic element is used to mark up the principal content of the <body> of a document?",
      options: ["<content>", "<section>", "<main>", "<article>"],
      answer: 2,
      explanation: "The <main> tag represents the dominant content of the <body> of a document. A page must not have more than one non-hidden <main> element."
    },
    {
      id: "html-m-16",
      question: "What is the purpose of the <output> element in HTML5?",
      options: [
        "Prints text to the console",
        "Represents the result of a calculation or user action",
        "Downloads a log file from the server",
        "Sends form data to an output printer device"
      ],
      answer: 1,
      explanation: "The <output> element represents the result of a calculation (like one performed by a script) or the outcome of a user action."
    },
    {
      id: "html-m-17",
      question: "Which attribute specifies that an <audio> or <video> should start playing automatically as soon as it can do so?",
      options: ["play", "start", "autoplay", "autostart"],
      answer: 2,
      explanation: "The 'autoplay' attribute prompts the browser to begin media playback as soon as enough data is buffered (subject to browser autoplay policies)."
    },
    {
      id: "html-m-18",
      question: "In HTML tables, which attribute allows a single cell to span horizontally across multiple columns?",
      options: ["rowspan", "colspan", "colmerge", "span"],
      answer: 1,
      explanation: "The 'colspan' attribute specifies the number of columns a table cell (<td> or <th>) should span horizontally."
    },
    {
      id: "html-m-19",
      question: "Which HTML tag is used to draw raster graphics on the fly using JavaScript?",
      options: ["<svg>", "<canvas>", "<paint>", "<graphic>"],
      answer: 1,
      explanation: "<canvas> is a container for graphics that uses JavaScript APIs to draw raster 2D graphics and 3D WebGL scenes."
    },
    {
      id: "html-m-20",
      question: "How does <canvas> differ fundamentally from <svg>?",
      options: [
        "Canvas uses DOM elements for every shape; SVG uses pixels",
        "Canvas is resolution-independent vector; SVG is resolution-dependent bitmap",
        "Canvas is pixel-based (raster) drawn via script; SVG is XML vector-based with DOM node access",
        "SVG cannot be styled with CSS, whereas Canvas is styled only with CSS"
      ],
      answer: 2,
      explanation: "Canvas draws immediate-mode pixels without creating DOM elements for shapes. SVG is retained-mode vector graphics where every element is part of the DOM."
    },
    {
      id: "html-m-21",
      question: "Which HTML element represents computer code or programming syntax?",
      options: ["<program>", "<script>", "<code>", "<terminal>"],
      answer: 2,
      explanation: "The <code> tag displays its contents styled in the browser's default monospace font to represent fragments of computer code."
    },
    {
      id: "html-m-22",
      question: "Which HTML element is used to preserve whitespace, tabs, and line breaks exactly as typed?",
      options: ["<raw>", "<pre>", "<whitespace>", "<format>"],
      answer: 1,
      explanation: "The <pre> tag defines preformatted text, which preserves spaces, indentation, and carriage returns in a monospace font."
    },
    {
      id: "html-m-23",
      question: "What is the purpose of the 'autofocus' attribute?",
      options: [
        "Zooms the browser camera onto the element",
        "Automatically gives keyboard focus to the input element when the page loads",
        "Centers the element on the viewport",
        "Validates the element automatically upon typing"
      ],
      answer: 1,
      explanation: "The 'autofocus' boolean attribute automatically focuses the designated input control as soon as the page finishes loading."
    },
    {
      id: "html-m-24",
      question: "Which HTML element is used to define an image map with clickable active areas?",
      options: ["<imagemap>", "<map>", "<area>", "<navigate>"],
      answer: 1,
      explanation: "The <map> element, paired with <area> elements and the 'usemap' attribute on an <img>, defines clickable coordinates on an image."
    },
    {
      id: "html-m-25",
      question: "What is the purpose of the <time> element in HTML5?",
      options: [
        "Displays an animated digital clock on the web page",
        "Represents a specific period in time or dateTime in a machine-readable format using 'datetime'",
        "Calculates execution time of client scripts",
        "Delays rendering of content by a designated number of seconds"
      ],
      answer: 1,
      explanation: "The <time> element represents time or calendar dates, enabling search engines and scrapers to read timestamps via its 'datetime' attribute."
    },
    {
      id: "html-m-26",
      question: "What does the 'contenteditable' attribute do when set to \"true\"?",
      options: [
        "Allows the user to directly edit text content inside the element in the browser",
        "Allows server administrators to edit HTML files over FTP",
        "Permits CSS styles to be modified via browser inspect tool only",
        "Enables markdown compilation on the fly"
      ],
      answer: 0,
      explanation: "Setting contenteditable=\"true\" turns any standard HTML element into an interactive rich-text editable area."
    },
    {
      id: "html-m-27",
      question: "Which element provides a caption for a <figure> element?",
      options: ["<legend>", "<label>", "<figcaption>", "<title>"],
      answer: 2,
      explanation: "<figcaption> represents a caption or legend describing the parent <figure> element's visual or code content."
    },
    {
      id: "html-m-28",
      question: "What is the purpose of the <meter> element in HTML5?",
      options: [
        "Measures network speed between browser and server",
        "Represents a scalar measurement within a known range (such as disk usage or battery level)",
        "Displays real-time page visit analytics",
        "Sets the font measurement units to centimeters or meters"
      ],
      answer: 1,
      explanation: "The <meter> element represents either a scalar value within a known range or a fractional value (e.g., disk usage, battery capacity)."
    },
    {
      id: "html-m-29",
      question: "What is the difference between <meter> and <progress>?",
      options: [
        "<meter> is for tasks completing over time; <progress> is for fixed capacities",
        "<progress> represents task completion progress toward 100%; <meter> represents a gauge/measurement of a current value within fixed min/max",
        "<progress> is obsolete in HTML5; <meter> replaced it",
        "There is no difference; they are aliases of each other"
      ],
      answer: 1,
      explanation: "<progress> is meant for the progress of an ongoing operation (downloading, completing a quiz), whereas <meter> represents a static gauge within a scale."
    },
    {
      id: "html-m-30",
      question: "Which attribute on a <form> specifies the HTTP method used to send data?",
      options: ["type", "action", "method", "protocol"],
      answer: 2,
      explanation: "The 'method' attribute specifies whether data is sent via HTTP GET, POST, or dialog method."
    }
  ],

  hard: [
    {
      id: "html-h-01",
      question: "How does the HTML parsing algorithm handle an unclosed <p> tag immediately followed by a block-level element like <div>?",
      options: [
        "It generates a parse error and stops rendering the page",
        "It automatically implies and inserts a </p> closing tag before the <div> tag",
        "It nests the <div> inside the open <p> tag",
        "It ignores the <div> tag until the <p> tag is closed"
      ],
      answer: 1,
      explanation: "According to the HTML5 parsing specification, paragraph elements cannot contain block-level elements. Encountering a <div> implicitly closes the open <p>."
    },
    {
      id: "html-h-02",
      question: "What happens when a browser encounters a <script type=\"module\"> tag without async or defer attributes?",
      options: [
        "It blocks HTML parsing synchronously just like a legacy script",
        "It behaves like 'defer' by default, executing after document parsing in dependency order",
        "It executes asynchronously immediately upon download",
        "It causes a runtime syntax error unless loaded inside a Web Worker"
      ],
      answer: 1,
      explanation: "ES module scripts (<script type=\"module\">) are deferred by default. They download in parallel without blocking HTML parsing and execute after parsing completes."
    },
    {
      id: "html-h-03",
      question: "What is the security risk of having 'target=\"_blank\"' on an untrusted link without 'rel=\"noopener\"' in legacy browsers?",
      options: [
        "The opened page can steal cookies from the parent page via document.cookie",
        "The opened page can access the opening page's window object via window.opener.location and redirect it to a phishing site",
        "The opened page can inject inline CSS styles into the opener page",
        "The opened page can terminate the opener tab's network sockets"
      ],
      answer: 1,
      explanation: "Without 'rel=\"noopener\"', window.opener is exposed to the child page, allowing window.opener.location = 'evil.com', known as reverse tabnabbing."
    },
    {
      id: "html-h-04",
      question: "What is the exact distinction between the DOMContentLoaded event and the window load event?",
      options: [
        "DOMContentLoaded fires when all images finish loading; load fires when HTML is parsed",
        "DOMContentLoaded fires when HTML is fully parsed and DOM tree is ready without waiting for stylesheets/images; load fires when all dependent assets (stylesheets, images) finish loading",
        "DOMContentLoaded is an IE-only event; load is the W3C standard",
        "They fire at the exact same microtask tick in the browser event loop"
      ],
      answer: 1,
      explanation: "DOMContentLoaded triggers as soon as the HTML has been parsed into the DOM tree (scripts finished executing), whereas window 'load' waits for external resources like stylesheets and images."
    },
    {
      id: "html-h-05",
      question: "What is the purpose of the 'inert' boolean attribute recently standardized in HTML?",
      options: [
        "It freezes JavaScript execution in child elements",
        "It removes the element from rendering without affecting accessibility trees",
        "It makes the browser ignore user input events, prevents text selection, and hides the element and its subtree from assistive technologies",
        "It prevents CSS transitions from animating"
      ],
      answer: 2,
      explanation: "The 'inert' global attribute marks an element and all its children as completely inert: unfocusable, unclickable, unselectable, and omitted from the accessibility tree."
    },
    {
      id: "html-h-06",
      question: "What does the 'loading=\"lazy\"' attribute on <img> and <iframe> elements do?",
      options: [
        "Loads low-resolution thumbnails first, then swaps in the high-res file",
        "Defers fetching the resource until it reaches a calculated distance threshold from the user's viewport",
        "Limits network download speed to reduce bandwidth consumption",
        "Uses Web Workers to decode the image in a background thread"
      ],
      answer: 1,
      explanation: "Native lazy loading ('loading=\"lazy\"') instructs the browser engine to delay loading offscreen images and iframes until the user scrolls near them."
    },
    {
      id: "html-h-07",
      question: "What is the purpose of the <slot> element in Web Components?",
      options: [
        "Allocates memory buffers for WebAssembly modules",
        "Acts as a placeholder inside a Shadow DOM template that receives distributed light DOM child content",
        "Creates a grid column in CSS Grid",
        "Pre-allocates layout dimensions to prevent layout shifts"
      ],
      answer: 1,
      explanation: "In Shadow DOM, <slot> elements act as projection outlets where light DOM children are projected into the component's encapsulated shadow tree."
    },
    {
      id: "html-h-08",
      question: "What happens if a form contains two submit buttons: <button type=\"submit\" name=\"action\" value=\"save\"> and <button type=\"submit\" name=\"action\" value=\"publish\">?",
      options: [
        "Both values are submitted as an array: action=save&action=publish",
        "Only the first button's name and value are submitted",
        "Only the name and value of the specific button that the user clicked to submit the form are included in the request",
        "The form fails validation because identical name attributes are prohibited"
      ],
      answer: 2,
      explanation: "When submitting a form, only the successful submit button that was actually clicked by the user submits its name/value pair."
    },
    {
      id: "html-h-09",
      question: "Which of the following is considered a 'void element' in HTML5?",
      options: ["<textarea>", "<span>", "<hr>", "<option>"],
      answer: 2,
      explanation: "Void elements (such as <hr>, <br>, <img>, <input>, <meta>) cannot have children and must never have an explicit closing tag (like </hr>)."
    },
    {
      id: "html-h-10",
      question: "What is the function of the Content Security Policy (CSP) delivered via <meta http-equiv=\"Content-Security-Policy\" content=\"...\">?",
      options: [
        "Encrypts form data before sending over HTTPS",
        "Restricts the origins from which scripts, styles, images, and other resources can be loaded or executed, mitigating XSS attacks",
        "Validates user passwords on the client side",
        "Prevents search engines from indexing sensitive HTML pages"
      ],
      answer: 1,
      explanation: "CSP is a crucial HTTP/meta header that restricts which dynamic resources may load or execute, helping prevent Cross-Site Scripting (XSS) and data injection."
    },
    {
      id: "html-h-11",
      question: "What is the effect of the 'hidden=\"until-found\"' attribute in modern HTML?",
      options: [
        "Hides the element permanently until an admin logs in",
        "Hides the element visually but allows browser in-page search (Ctrl+F) and URL fragments to reveal and expand it automatically",
        "Delays display until a matching CSS class is applied via JavaScript",
        "Hides the element until a database query completes"
      ],
      answer: 1,
      explanation: "hidden=\"until-found\" allows content inside accordions/collapsible sections to remain searchable by browser find-in-page and anchor navigation, automatically unhiding when matched."
    },
    {
      id: "html-h-12",
      question: "Why should you avoid using tabindex values greater than 0 (e.g., tabindex=\"3\")?",
      options: [
        "Values above 0 are deprecated and ignored by modern browsers",
        "It disrupts the natural document tab sequence, causing confusing navigation order for keyboard and accessibility users",
        "It converts the element into an input form control",
        "It causes memory leaks in the browser accessibility tree"
      ],
      answer: 1,
      explanation: "Positive tabindex numbers override natural DOM order, making keyboard navigation unpredictable and difficult to maintain. Using 0 or -1 is recommended."
    },
    {
      id: "html-h-13",
      question: "In HTML forms, what encoding type (enctype) must be set on a <form> to allow file uploads via <input type=\"file\">?",
      options: [
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
        "application/octet-stream"
      ],
      answer: 1,
      explanation: "multipart/form-data divides form data into separate boundary-delimited parts, which is required for transmitting binary file payloads."
    },
    {
      id: "html-h-14",
      question: "What is the purpose of the 'crossorigin' attribute on <script> or <link> tags?",
      options: [
        "Allows bypassing Same-Origin Policy for WebSocket connections",
        "Enables CORS handling so errors from third-party scripts provide meaningful stack traces in window.onerror instead of 'Script error.'",
        "Translates code from other languages into JavaScript",
        "Allows files to be stored in the browser's persistent Origin Storage"
      ],
      answer: 1,
      explanation: "Without crossorigin=\"anonymous\", third-party scripts conceal detailed runtime error logs as generic 'Script error.' to prevent cross-origin data leakage."
    },
    {
      id: "html-h-15",
      question: "Which of the following is true regarding HTML custom elements naming rules?",
      options: [
        "Custom element names must start with an uppercase letter",
        "Custom element names must contain an ASCII hyphen (-) to distinguish them from standard tags",
        "Custom elements cannot contain numbers",
        "Custom elements must end with the suffix '-element'"
      ],
      answer: 1,
      explanation: "The W3C Web Components specification mandates that custom tag names must contain a hyphen (e.g., <user-profile>, <custom-button>) to avoid collision with standard elements."
    },
    {
      id: "html-h-16",
      question: "What is the effect of placing an HTML element with 'dir=\"auto\"'?",
      options: [
        "Automatically centers text horizontally",
        "Enables bidirectional text isolation and determines reading direction (LTR or RTL) dynamically based on the first strong directional character",
        "Automatically indents code blocks",
        "Directs mouse wheel scrolling vertically or horizontally"
      ],
      answer: 1,
      explanation: "dir=\"auto\" instructs the browser's bidirectional layout engine to inspect the first character with strong directionality and set LTR or RTL accordingly."
    },
    {
      id: "html-h-17",
      question: "What is the purpose of the Subresource Integrity (SRI) 'integrity' attribute on <script> tags?",
      options: [
        "Enforces that the script is written in TypeScript",
        "Verifies that fetched external resources match a cryptographic SHA hash to prevent execution of compromised CDN scripts",
        "Encrypts variables within the script from browser devtools",
        "Ensures script execution runs in a sandboxed Web Worker"
      ],
      answer: 1,
      explanation: "Subresource Integrity (SRI) allows browsers to verify that resources fetched from CDNs haven't been maliciously manipulated by comparing cryptographic digests."
    },
    {
      id: "html-h-18",
      question: "What is the consequence of omitting the 'alt' attribute entirely from an <img> tag versus setting 'alt=\"\"'?",
      options: [
        "There is no difference; screen readers ignore both",
        "Omitting 'alt' signals broken markup and screen readers may read the image filename; 'alt=\"\"' marks the image as purely decorative and instructs screen readers to skip it",
        "Omitting 'alt' prevents the image from rendering entirely",
        "alt=\"\" causes the image to display a missing icon placeholder"
      ],
      answer: 1,
      explanation: "Setting alt=\"\" explicitly marks the image as decorative, causing screen readers to bypass it cleanly. Omitting 'alt' forces screen readers to announce the raw file URL."
    },
    {
      id: "html-h-19",
      question: "What does the HTML 'popover' attribute do natively without requiring JavaScript libraries?",
      options: [
        "Creates a tooltip on hover",
        "Promotes an element to the top layer with built-in light-dismiss, focus management, and keyboard accessibility",
        "Displays a native browser alert dialog",
        "Opens an external popup window"
      ],
      answer: 1,
      explanation: "The native Popover API (using the 'popover' attribute and 'popovertarget') places content in the browser's top layer with automatic backdrop and light-dismiss handling."
    },
    {
      id: "html-h-20",
      question: "What is the behavior of the <base> tag in an HTML document?",
      options: [
        "Sets the database connection string for server-side HTML",
        "Specifies the base URL and default target browsing context for all relative URLs in the document",
        "Resets all CSS styles to browser defaults",
        "Defines the baseline typography scale for rem units"
      ],
      answer: 1,
      explanation: "The <base> element specifies the base URL to use for all relative URLs in a document, and can also set default link targets (e.g. target=\"_blank\")."
    },
    {
      id: "html-h-21",
      question: "Which HTML5 API allows a web application to communicate and exchange data across different browser windows or iframes from different origins safely?",
      options: [
        "localStorage.post()",
        "window.postMessage()",
        "document.crossOriginSend()",
        "navigator.broadcast()"
      ],
      answer: 1,
      explanation: "window.postMessage() enables cross-origin communication between Window objects safely by passing structured cloned data and validating origin."
    },
    {
      id: "html-h-22",
      question: "What is the purpose of the <noscript> tag?",
      options: [
        "Blocks malicious JavaScript injection from running",
        "Defines alternative HTML markup to be rendered if scripts are disabled or unsupported by the client browser",
        "Compiles JavaScript into WebAssembly bytecode",
        "Disables inline scripts in the current document"
      ],
      answer: 1,
      explanation: "The <noscript> element defines fallback content to display for users who have disabled scripting in their browser or use a browser without script support."
    },
    {
      id: "html-h-23",
      question: "In HTML tables, what is the role of the <thead>, <tbody>, and <tfoot> elements?",
      options: [
        "Purely visual styling hooks for CSS borders",
        "Semantic division of table rows that allows printing and scrolling of large tables with fixed headers/footers",
        "Enforcing data types on table cells",
        "Restricting row selection via JavaScript"
      ],
      answer: 1,
      explanation: "They group header, body, and summary footer rows semantically. When printing multi-page tables, browsers can repeat <thead> and <tfoot> on each printed page."
    },
    {
      id: "html-h-24",
      question: "What does the 'autocomplete=\"one-time-code\"' attribute on an <input> element accomplish?",
      options: [
        "Deletes the input value after 60 seconds",
        "Instructs the operating system/browser to suggest SMS or authenticator two-factor authentication (2FA) verification codes automatically",
        "Hashes the input value with SHA-256 before form submit",
        "Prevents the user from entering the same code twice"
      ],
      answer: 1,
      explanation: "Modern mobile browsers and desktop operating systems look for autocomplete=\"one-time-code\" to automatically extract SMS OTP verification codes."
    },
    {
      id: "html-h-25",
      question: "What is the primary role of the 'aria-live' attribute?",
      options: [
        "Streams real-time camera footage into the DOM",
        "Notifies screen readers to announce dynamic content updates occurring in that container without a page reload",
        "Prevents JavaScript garbage collection on live nodes",
        "Enables WebRTC connections on that element"
      ],
      answer: 1,
      explanation: "aria-live ('polite' or 'assertive') informs assistive technology users about dynamic DOM content updates, such as chat messages, score updates, or error banners."
    },
    {
      id: "html-h-26",
      question: "What is the difference between <dialog id=\"d\"> and showing it with d.show() vs d.showModal()?",
      options: [
        "show() opens in a new tab; showModal() opens in current tab",
        "showModal() opens the dialog in the browser's top layer with a ::backdrop and traps focus/disables background interaction; show() opens it as a normal non-modal element",
        "showModal() is deprecated in HTML5.2; show() is the modern API",
        "show() cannot be closed with the Escape key, while showModal() can only be closed via form submit"
      ],
      answer: 1,
      explanation: "showModal() mounts the dialog to the top layer, renders a ::backdrop, locks inertness on the rest of the page, and enables closing with the Escape key."
    },
    {
      id: "html-h-27",
      question: "What does the 'fetchpriority' attribute do on resource-loading HTML elements?",
      options: [
        "Overrides server HTTP headers",
        "Provides a hint to the browser's network scheduler regarding the relative priority (high, low, auto) of fetching that resource",
        "Forces the browser to fetch the file over HTTP/3 exclusively",
        "Sets the number of retry attempts for failed downloads"
      ],
      answer: 1,
      explanation: "fetchpriority=\"high\" (or \"low\") guides the browser's preloader and network stack on how to prioritize competing network requests (e.g., LCP hero image)."
    },
    {
      id: "html-h-28",
      question: "Which HTML tag is used to specify alternate character fonts and math expressions via MathML natively in HTML5?",
      options: ["<calc>", "<math>", "<equation>", "<formula>"],
      answer: 1,
      explanation: "HTML5 natively integrates MathML syntax within the <math> tag, allowing mathematical equations to be rendered crisply without external images."
    },
    {
      id: "html-h-29",
      question: "What is the purpose of the 'enterkeyhint' attribute on text input elements?",
      options: [
        "Specifies what action label or icon (e.g., 'enter', 'done', 'go', 'next', 'search', 'send') to display on the virtual keyboard's return key",
        "Configures custom keybindings for the Enter key via JavaScript",
        "Shows a tooltip when the user presses Enter",
        "Validates input whenever Enter is pressed"
      ],
      answer: 0,
      explanation: "enterkeyhint customizes the appearance and semantic action of the Enter/Return key on mobile touch keyboards (e.g., showing 'search' or 'send')."
    },
    {
      id: "html-h-30",
      question: "In the HTML DOM hierarchy, what is the exact relationship between Node and Element?",
      options: [
        "Element and Node are unrelated interfaces",
        "Node inherits from Element, adding tag attributes",
        "Element inherits from Node; every Element is a Node (element node type 1), but Nodes can also be Text, Comments, or Document nodes",
        "Element is an obsolete interface replaced by Node in DOM Level 4"
      ],
      answer: 2,
      explanation: "Element inherits from Node. A Node represents any node in the DOM tree (including Text nodes, Comments, Document), while Element specifically represents HTML tag nodes."
    }
  ]
};


// ============================================================================
// QUIZMASTER - CSS QUESTIONS (30 Easy + 30 Moderate + 30 Hard = 90 Questions)
// ============================================================================

window.CSS_QUESTIONS = {
  easy: [
    {
      id: "css-e-01",
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets"
      ],
      answer: 0,
      explanation: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media."
    },
    {
      id: "css-e-02",
      question: "Which HTML tag is used to reference an external CSS stylesheet?",
      options: ["<style>", "<link>", "<css>", "<script>"],
      answer: 1,
      explanation: "The <link> element inside the <head> tags is used to link an external CSS file using rel=\"stylesheet\" and href=\"style.css\"."
    },
    {
      id: "css-e-03",
      question: "Where in an HTML document is the correct place to refer to an external style sheet?",
      options: [
        "In the <head> section",
        "In the <body> section",
        "At the bottom of the document",
        "Inside a <div> tag"
      ],
      answer: 0,
      explanation: "External style sheets should be linked within the <head> section of the HTML document to ensure styles are loaded before content renders."
    },
    {
      id: "css-e-04",
      question: "Which CSS property is used to change the background color of an element?",
      options: ["color", "bgcolor", "background-color", "surface-color"],
      answer: 2,
      explanation: "The 'background-color' property sets the background color of an element. The shorthand 'background' also accepts color values."
    },
    {
      id: "css-e-05",
      question: "Which CSS property is used to change the text color of an element?",
      options: ["text-color", "fgcolor", "color", "font-color"],
      answer: 2,
      explanation: "The 'color' property in CSS specifies the foreground color of text content and text decorations."
    },
    {
      id: "css-e-06",
      question: "Which CSS property controls the size of text?",
      options: ["text-size", "font-size", "font-style", "text-height"],
      answer: 1,
      explanation: "The 'font-size' property sets the size of the font, specified in units such as px, rem, em, or %."
    },
    {
      id: "css-e-07",
      question: "What is the correct CSS syntax for making all <p> elements bold?",
      options: [
        "p {text-size: bold;}",
        "p {font-weight: bold;}",
        "<p style=\"font-weight: bold;\">",
        "p {style: bold;}"
      ],
      answer: 1,
      explanation: "'font-weight: bold;' sets the boldness of the font. In CSS rule syntax, the selector is followed by curly braces containing declarations."
    },
    {
      id: "css-e-08",
      question: "Which character is used to select elements with a specific class in CSS?",
      options: [". (dot)", "# (hash)", "* (asterisk)", "> (greater-than)"],
      answer: 0,
      explanation: "A period/dot (e.g. .btn) targets elements with class=\"btn\". A hash (#) targets an element ID."
    },
    {
      id: "css-e-09",
      question: "Which character is used to select an element with a specific ID in CSS?",
      options: [". (dot)", "# (hash)", "@ (at)", "& (ampersand)"],
      answer: 1,
      explanation: "The hash symbol (#) followed by the ID name (e.g., #header) selects the single unique element with that ID."
    },
    {
      id: "css-e-10",
      question: "How do you add a comment in a CSS file?",
      options: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "/* This is a comment */",
        "# This is a comment"
      ],
      answer: 2,
      explanation: "CSS comments are enclosed between /* and */. Unlike JavaScript, CSS does not support single-line // comments."
    },
    {
      id: "css-e-11",
      question: "Which property is used to center text horizontally within an element?",
      options: ["align-items", "text-align", "horizontal-align", "content-align"],
      answer: 1,
      explanation: "'text-align: center;' centers inline content, such as text, within its block-level parent element."
    },
    {
      id: "css-e-12",
      question: "Which property in the CSS Box Model creates space INSIDE an element, between content and border?",
      options: ["margin", "padding", "outline", "spacing"],
      answer: 1,
      explanation: "'padding' generates space inside the element's border, surrounding its content. 'margin' creates space outside the border."
    },
    {
      id: "css-e-13",
      question: "Which property in the CSS Box Model creates transparent space OUTSIDE of an element's border?",
      options: ["padding", "margin", "border-spacing", "gap"],
      answer: 1,
      explanation: "'margin' clears an area outside the border of an element, creating spacing between adjacent elements."
    },
    {
      id: "css-e-14",
      question: "What is the default value of the 'position' property in CSS?",
      options: ["relative", "fixed", "absolute", "static"],
      answer: 3,
      explanation: "The default position is 'static'. Static elements are positioned according to the normal flow of the document."
    },
    {
      id: "css-e-15",
      question: "Which CSS property is used to underline or remove underlines from hyperlinks?",
      options: ["text-style", "text-decoration", "font-style", "text-line"],
      answer: 1,
      explanation: "'text-decoration: none;' removes the default underline from hyperlinks, while 'text-decoration: underline;' applies it."
    },
    {
      id: "css-e-16",
      question: "Which CSS pseudo-class selects an element when the user points their mouse cursor over it?",
      options: [":active", ":focus", ":hover", ":visited"],
      answer: 2,
      explanation: "The ':hover' pseudo-class matches when the user hovers over an element with a pointing device, without necessarily activating it."
    },
    {
      id: "css-e-17",
      question: "Which display value makes an element behave like a block but sit on the same line as inline elements?",
      options: ["inline", "block", "inline-block", "flex"],
      answer: 2,
      explanation: "'inline-block' allows an element to flow horizontally with adjacent inline elements while still respecting width, height, and vertical margins/paddings."
    },
    {
      id: "css-e-18",
      question: "Which CSS property is used to round the corners of an element's outer border edge?",
      options: ["corner-radius", "border-radius", "box-radius", "edge-round"],
      answer: 1,
      explanation: "The 'border-radius' property defines the radius of the element's corners, producing rounded corners or circular avatars."
    },
    {
      id: "css-e-19",
      question: "How do you select all elements on a page using CSS?",
      options: ["all", "*", ":root", "body"],
      answer: 1,
      explanation: "The universal selector '*' matches elements of any type across the entire document."
    },
    {
      id: "css-e-20",
      question: "Which CSS property is used to hide an element completely while also removing it from the document layout flow?",
      options: [
        "visibility: hidden;",
        "display: none;",
        "opacity: 0;",
        "position: absolute;"
      ],
      answer: 1,
      explanation: "'display: none;' completely removes the element from rendering and layout calculation. 'visibility: hidden;' hides it visually but retains its physical space."
    },
    {
      id: "css-e-21",
      question: "Which CSS unit is relative to the font-size of the root element (<html>)?",
      options: ["em", "rem", "vh", "px"],
      answer: 1,
      explanation: "'rem' stands for 'Root EM'. It is always relative to the font-size of the root <html> element (usually 16px by default)."
    },
    {
      id: "css-e-22",
      question: "Which CSS property is used to control the opacity/transparency of an element?",
      options: ["transparent", "opacity", "filter-alpha", "visibility"],
      answer: 1,
      explanation: "The 'opacity' property sets the opacity level for an element, ranging from 0.0 (fully transparent) to 1.0 (fully opaque)."
    },
    {
      id: "css-e-23",
      question: "Which shorthand property sets border width, style, and color simultaneously?",
      options: ["border-all", "border", "border-style", "box-border"],
      answer: 1,
      explanation: "The 'border' shorthand property sets border-width, border-style, and border-color together (e.g., 'border: 1px solid black;')."
    },
    {
      id: "css-e-24",
      question: "What is the correct CSS declaration to uppercase all letters in a heading?",
      options: [
        "text-transform: capitalize;",
        "text-transform: uppercase;",
        "font-case: upper;",
        "letter-spacing: uppercase;"
      ],
      answer: 1,
      explanation: "'text-transform: uppercase;' transforms all characters in the text to uppercase regardless of their original case in the HTML."
    },
    {
      id: "css-e-25",
      question: "Which CSS property sets the vertical spacing between lines of text?",
      options: ["letter-spacing", "line-height", "word-spacing", "text-spacing"],
      answer: 1,
      explanation: "'line-height' sets the height of a line box, commonly used to set the leading or vertical distance between lines of text."
    },
    {
      id: "css-e-26",
      question: "Which CSS property specifies the font family to be applied to an element?",
      options: ["font-family", "font-type", "font-face", "typeface"],
      answer: 0,
      explanation: "'font-family' specifies a prioritized list of font family names or generic family names (like sans-serif, serif, monospace)."
    },
    {
      id: "css-e-27",
      question: "Which CSS property controls the overlapping order of positioned elements along the z-axis?",
      options: ["depth", "z-index", "elevation", "layer-index"],
      answer: 1,
      explanation: "'z-index' sets the z-order of positioned elements. Elements with a higher z-index overlap elements with a lower z-index."
    },
    {
      id: "css-e-28",
      question: "Which CSS selector targets all <p> elements that are direct children of a <div>?",
      options: ["div p", "div + p", "div > p", "div ~ p"],
      answer: 2,
      explanation: "The child combinator '>' selects only nodes that are direct children of the specified parent (div > p)."
    },
    {
      id: "css-e-29",
      question: "Which CSS unit is equal to 1% of the height of the browser viewport?",
      options: ["1vh", "1vw", "1ch", "1em"],
      answer: 0,
      explanation: "'1vh' (viewport height) is equal to 1% of the total visible height of the browser's viewport."
    },
    {
      id: "css-e-30",
      question: "How do you make an image responsive so that it never overflows its parent container width?",
      options: [
        "img { width: 100%; height: 100%; }",
        "img { max-width: 100%; height: auto; }",
        "img { min-width: 100%; }",
        "img { display: inline; }"
      ],
      answer: 1,
      explanation: "'max-width: 100%; height: auto;' ensures the image scales down proportionally to fit smaller screens without exceeding its native width or distorting aspect ratio."
    }
  ],

  moderate: [
    {
      id: "css-m-01",
      question: "What does 'box-sizing: border-box;' do?",
      options: [
        "Adds extra border around every box",
        "Includes padding and border within the element's total specified width and height",
        "Excludes padding from the width calculation",
        "Forces all child elements into flex containers"
      ],
      answer: 1,
      explanation: "With 'border-box', an element's specified width and height include its content, padding, and borders, preventing layout blowouts when padding is added."
    },
    {
      id: "css-m-02",
      question: "In CSS Flexbox, which property controls the alignment of flex items along the MAIN axis?",
      options: ["align-items", "justify-content", "align-content", "flex-direction"],
      answer: 1,
      explanation: "'justify-content' aligns flex items along the main axis (horizontal in row mode, vertical in column mode)."
    },
    {
      id: "css-m-03",
      question: "In CSS Flexbox, which property controls alignment along the CROSS axis?",
      options: ["justify-content", "align-items", "flex-wrap", "order"],
      answer: 1,
      explanation: "'align-items' specifies how flex items are aligned along the cross axis across the current flex line."
    },
    {
      id: "css-m-04",
      question: "What is the difference between 'position: absolute;' and 'position: fixed;'?",
      options: [
        "Fixed is relative to its nearest positioned ancestor; absolute is relative to viewport",
        "Absolute is positioned relative to its closest positioned ancestor; fixed is positioned relative to the browser viewport and remains stationary on scroll",
        "There is no difference; they are interchangeable",
        "Fixed elements can only be aligned to the top left"
      ],
      answer: 1,
      explanation: "'absolute' elements position relative to their nearest positioned ancestor, whereas 'fixed' elements position relative to the viewport window."
    },
    {
      id: "css-m-05",
      question: "What is the specificity weight order from lowest to highest in CSS?",
      options: [
        "ID selector < Class selector < Type (element) selector < Inline style",
        "Type selector < Class/attribute/pseudo-class < ID selector < Inline style",
        "Class selector < Type selector < ID selector < !important",
        "Universal selector < ID selector < Class selector < Type selector"
      ],
      answer: 1,
      explanation: "Specificity ascends from element/type (0,0,1) -> class/attribute/pseudo-class (0,1,0) -> ID (1,0,0) -> inline style (1,0,0,0)."
    },
    {
      id: "css-m-06",
      question: "In CSS Grid, what does the unit '1fr' represent?",
      options: [
        "1 frame per second",
        "1 fractional unit of the available free space in the grid container",
        "1 fixed pixel ratio",
        "1 font-size root relative unit"
      ],
      answer: 1,
      explanation: "The 'fr' unit represents a fraction of the unused distribution space within the grid container after fixed tracks are allocated."
    },
    {
      id: "css-m-07",
      question: "Which CSS Grid property defines the column sizing pattern: 'repeat(auto-fit, minmax(250px, 1fr))'?",
      options: [
        "grid-auto-columns",
        "grid-template-columns",
        "grid-columns",
        "grid-template-areas"
      ],
      answer: 1,
      explanation: "'grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));' creates an inherently responsive column layout without requiring media queries."
    },
    {
      id: "css-m-08",
      question: "How do you declare and consume a native CSS custom property (variable)?",
      options: [
        "$primary: #007; color: $primary;",
        "--primary: #007; color: var(--primary);",
        "@primary: #007; color: @primary;",
        "const primary = #007; color: val(primary);"
      ],
      answer: 1,
      explanation: "CSS custom properties are defined with a double-hyphen prefix (e.g. --primary: #007) and accessed using the var() function (var(--primary))."
    },
    {
      id: "css-m-09",
      question: "What does the pseudo-class ':nth-child(2n)' select?",
      options: [
        "Every odd numbered element",
        "Every even numbered element (2nd, 4th, 6th...)",
        "Only the 2nd child in the entire document",
        "All child elements except the 2nd"
      ],
      answer: 1,
      explanation: "2n generates multiples of 2 (2, 4, 6, 8...), selecting every even child element. (equivalent to :nth-child(even))."
    },
    {
      id: "css-m-10",
      question: "What is the effect of 'position: sticky;'?",
      options: [
        "The element sticks to the cursor",
        "The element toggles between relative and fixed depending on scroll position relative to its scroll container",
        "The element cannot be dragged or highlighted",
        "The element always remains glued to the top of the entire document"
      ],
      answer: 1,
      explanation: "A sticky element is treated as relative until it crosses a designated scroll threshold (like top: 0), where it sticks as fixed within its parent."
    },
    {
      id: "css-m-11",
      question: "Which media query targets devices with a screen width of 768px or wider?",
      options: [
        "@media (max-width: 768px) { ... }",
        "@media (min-width: 768px) { ... }",
        "@media (device-width: 768px) { ... }",
        "@media screen and (width == 768px) { ... }"
      ],
      answer: 1,
      explanation: "@media (min-width: 768px) applies styles when the viewport is at least 768 pixels wide, the cornerstone of mobile-first responsive design."
    },
    {
      id: "css-m-12",
      question: "What is the key difference between ':before' and '::before'?",
      options: [
        "::before is CSS3 standard pseudo-element notation, while :before is the older CSS2 pseudo-element notation kept for backwards compatibility",
        ":before creates an element before the head; ::before creates one before body",
        "::before only accepts text strings, while :before accepts HTML tags",
        "There is no difference in syntax or specification"
      ],
      answer: 0,
      explanation: "CSS3 introduced the double-colon syntax (::before, ::after) to distinguish pseudo-elements from pseudo-classes (:hover, :focus). Browsers support both."
    },
    {
      id: "css-m-13",
      question: "What must be included in a ::before or ::after pseudo-element rule for it to render on screen?",
      options: ["display: block;", "content: '';", "visibility: visible;", "z-index: 1;"],
      answer: 1,
      explanation: "Without the 'content' property (even if empty, like content: ''), pseudo-elements will not be generated or rendered by the browser."
    },
    {
      id: "css-m-14",
      question: "What is the difference between 'em' and 'rem' units?",
      options: [
        "em is relative to the viewport; rem is relative to parent",
        "em is relative to its current/parent element's font-size; rem is relative to the root (<html>) font-size",
        "rem compounds down nested lists; em stays constant",
        "There is no practical difference"
      ],
      answer: 1,
      explanation: "'em' is relative to the element's direct inherited font size (which can compound recursively), while 'rem' is anchored strictly to the root <html> font size."
    },
    {
      id: "css-m-15",
      question: "Which CSS property specifies how image or video content should fit into its container box?",
      options: ["object-fit", "background-size", "aspect-ratio", "content-fill"],
      answer: 0,
      explanation: "'object-fit' (with values like cover, contain, fill) sets how replaced element content (<img>, <video>) scales to fit its box dimensions."
    },
    {
      id: "css-m-16",
      question: "What happens when you apply 'overflow: hidden;' to a container?",
      options: [
        "It hides the entire container",
        "Content clipping occurs for any content extending beyond the container's padding box, and no scrollbars are shown",
        "It forces child elements to shrink to fit without wrapping",
        "It disables CSS animations on children"
      ],
      answer: 1,
      explanation: "'overflow: hidden;' clips any child content overflowing the boundary of the box and prevents scroll mechanisms."
    },
    {
      id: "css-m-17",
      question: "What is the purpose of the CSS property 'pointer-events: none;'?",
      options: [
        "Hides the mouse cursor completely",
        "Prevents the element from being the target of mouse or touch click and hover events, allowing clicks to pass through to underlying elements",
        "Disables touchscreen interaction on mobile",
        "Prevents text selection with the cursor"
      ],
      answer: 1,
      explanation: "'pointer-events: none;' makes an element transparent to pointer events (clicks, hovers, drags), allowing events to trigger elements behind it."
    },
    {
      id: "css-m-18",
      question: "Which CSS transition property defines the timing curve of an animation?",
      options: [
        "transition-delay",
        "transition-timing-function",
        "transition-duration",
        "transition-property"
      ],
      answer: 1,
      explanation: "'transition-timing-function' (e.g. ease, linear, ease-in-out, cubic-bezier) determines the acceleration curve of the transition over time."
    },
    {
      id: "css-m-19",
      question: "What is the CSS rule used to define reusable keyframe animations?",
      options: ["@keyframes", "@animation", "@transition", "@motion"],
      answer: 0,
      explanation: "The '@keyframes' at-rule lets authors control the intermediate steps in a CSS animation sequence using percentages or 'from' and 'to'."
    },
    {
      id: "css-m-20",
      question: "What does 'flex-shrink: 0;' signify on a flex child item?",
      options: [
        "The item shrinks to zero width when space runs out",
        "The item will not shrink below its initial base width/flex-basis, even if the container overflows",
        "The item takes up 0% of remaining space",
        "The item disappears on mobile viewports"
      ],
      answer: 1,
      explanation: "A flex-shrink value of 0 prevents the item from shrinking when available space in the flex container is less than the item's flex-basis."
    },
    {
      id: "css-m-21",
      question: "How does the adjacent sibling combinator '+' behave (e.g. 'h2 + p')?",
      options: [
        "Selects all <p> elements inside <h2>",
        "Selects the <p> element immediately following the <h2> element if they share the same parent",
        "Selects all sibling <p> elements that follow <h2>",
        "Selects both <h2> and <p> elements"
      ],
      answer: 1,
      explanation: "The adjacent sibling combinator '+' targets an element that immediately succeeds the first specified element with the same parent."
    },
    {
      id: "css-m-22",
      question: "How does the general sibling combinator '~' differ from the adjacent sibling combinator '+'?",
      options: [
        "~ selects only preceding siblings",
        "~ matches all siblings that appear anywhere after the specified element, not just the one immediately adjacent",
        "~ works only on unvisited links",
        "~ is invalid syntax in CSS"
      ],
      answer: 1,
      explanation: "The subsequent-sibling combinator (~) matches all sibling elements that follow the specified element at any subsequent position under the shared parent."
    },
    {
      id: "css-m-23",
      question: "What does 'flex: 1;' represent when used as shorthand on a flex item?",
      options: [
        "flex-grow: 1, flex-shrink: 1, flex-basis: 0%",
        "flex-grow: 1, flex-shrink: 0, flex-basis: auto",
        "flex-direction: row, flex-wrap: nowrap",
        "flex-basis: 100%"
      ],
      answer: 0,
      explanation: "'flex: 1;' is the common shorthand for 'flex: 1 1 0%' (or 0px in modern specs), allowing flex items to grow and shrink equally to occupy remaining space."
    },
    {
      id: "css-m-24",
      question: "Which CSS function clamps a value between an upper and lower bound?",
      options: ["calc()", "clamp(min, val, max)", "bound()", "range()"],
      answer: 1,
      explanation: "clamp(MIN, VAL, MAX) clamps a value between defined minimum and maximum thresholds (e.g., clamp(1rem, 2.5vw, 2rem) for fluid typography)."
    },
    {
      id: "css-m-25",
      question: "What is the CSS pseudo-class ':focus-visible' used for?",
      options: [
        "Applies focus styling only when an element receives keyboard focus (e.g., Tab key) rather than mouse clicks",
        "Highlights visible images on the page",
        "Forces an outline on all elements on page load",
        "Checks if an element is scrolled into the viewport"
      ],
      answer: 0,
      explanation: "':focus-visible' matches an element that has received focus when the user agent determines that focus indications should be visible (e.g. keyboard navigation)."
    },
    {
      id: "css-m-26",
      question: "What does 'user-select: none;' achieve?",
      options: [
        "Prevents the user from clicking buttons",
        "Prevents text selection/highlighting on the styled element",
        "Hides the mouse pointer",
        "Disables keyboard accessibility"
      ],
      answer: 1,
      explanation: "'user-select: none;' prevents users from selecting and highlighting text within the target element, ideal for UI controls and icons."
    },
    {
      id: "css-m-27",
      question: "What does the 'filter: blur(5px);' CSS rule do?",
      options: [
        "Darkens the element by 5%",
        "Applies a 5-pixel Gaussian blur effect to the rendering of the element",
        "Fades the element out after 5 seconds",
        "Lowers screen brightness by 5 units"
      ],
      answer: 1,
      explanation: "The 'blur()' filter function applies a Gaussian blur to the visual rendering of the target element."
    },
    {
      id: "css-m-28",
      question: "Which property allows smooth scrolling behavior when anchor navigation links are clicked?",
      options: [
        "scroll-behavior: smooth;",
        "transition: scroll 1s;",
        "overflow-scroll: smooth;",
        "animation: scroll-smooth;"
      ],
      answer: 0,
      explanation: "'scroll-behavior: smooth;' applied on <html> or a scrollable container animates scrolling transitions smoothly instead of jumping instantly."
    },
    {
      id: "css-m-29",
      question: "What does 'backdrop-filter: blur(10px);' do differently from 'filter: blur(10px);'?",
      options: [
        "filter blurs the container and its content; backdrop-filter blurs the area behind the element without blurring the element's content",
        "backdrop-filter works only on images",
        "filter requires WebGL hardware acceleration",
        "They are identical aliases"
      ],
      answer: 0,
      explanation: "backdrop-filter applies graphic effects to the backdrop area located behind an element (vital for glassmorphic UI designs) while leaving its content sharp."
    },
    {
      id: "css-m-30",
      question: "What is the CSS pseudo-class ':checked' used for?",
      options: [
        "Matches form radio buttons, checkboxes, or options that are currently toggled on / checked",
        "Validates if the user has read a terms agreement",
        "Checks if an image has loaded successfully",
        "Tests if a stylesheet has compiled"
      ],
      answer: 0,
      explanation: "The ':checked' pseudo-class matches radio buttons, checkboxes, or select options that are in a selected or checked state."
    }
  ],

  hard: [
    {
      id: "css-h-01",
      question: "What constitutes the creation of a new Stacking Context in CSS?",
      options: [
        "Applying 'float: left;' to any element",
        "Root element (HTML), position relative/absolute with z-index other than auto, opacity less than 1, or transform other than none",
        "Setting margin: 0 auto; on a block element",
        "Declaring display: inline-block;"
      ],
      answer: 1,
      explanation: "A stacking context is formed by the root element, elements with position other than static and z-index other than auto, opacity < 1, transform != none, and will-change."
    },
    {
      id: "css-h-02",
      question: "Why does z-index: 9999 sometimes fail to bring an element above another element on the page?",
      options: [
        "9999 exceeds the 16-bit integer limit in CSS",
        "The element is confined inside a parent stacking context with a lower z-index than the other element's stacking context",
        "z-index only operates when display is set to grid",
        "Browsers automatically reset z-index above 1000 to 0"
      ],
      answer: 1,
      explanation: "Stacking contexts are atomic: an element's z-index only ranks it within its parent stacking context. It cannot escape or outrank a sibling stacking context with higher priority."
    },
    {
      id: "css-h-03",
      question: "What is the specificity difference between ':is(.card, .modal)' and ':where(.card, .modal)'?",
      options: [
        ":is() takes the specificity of its most specific argument, while :where() always has a specificity of zero (0, 0, 0)",
        ":where() has infinite specificity",
        ":is() is only supported in Chromium browsers",
        "Both calculate specificity by adding all selectors together"
      ],
      answer: 0,
      explanation: ":is() adopts the specificity of its highest-ranked selector parameter, whereas :where() always carries zero specificity, making overrides effortless."
    },
    {
      id: "css-h-04",
      question: "What does the relational pseudo-class ':has()' allow in CSS?",
      options: [
        "Allows selecting an element based on its descendant or sibling conditions (acting as a parent selector)",
        "Checks if a JavaScript variable exists on the window",
        "Verifies whether CSS custom properties are defined",
        "Determines if an external font has loaded"
      ],
      answer: 0,
      explanation: "The ':has()' pseudo-class provides a long-awaited native parent/previous selector in CSS (e.g. 'article:has(img)' styles articles containing images)."
    },
    {
      id: "css-h-05",
      question: "What is the role of CSS Cascade Layers introduced with '@layer'?",
      options: [
        "To render 3D canvas objects on separate GPU buffers",
        "To explicitly control the order of precedence and cascade priority between style blocks regardless of selector specificity",
        "To replace media queries for responsive layouts",
        "To load stylesheets asynchronously in background threads"
      ],
      answer: 1,
      explanation: "@layer provides structured cascade control. Styles declared in a later layer take precedence over earlier layers, completely bypassing selector specificity races."
    },
    {
      id: "css-h-06",
      question: "What triggers a Block Formatting Context (BFC) in CSS?",
      options: [
        "display: flex, display: grid, overflow: hidden, float (left/right), or position: absolute/fixed",
        "color: inherit;",
        "font-family declarations",
        "padding: 0;"
      ],
      answer: 0,
      explanation: "BFC is established by floats, absolute/fixed positioning, overflow other than visible, display: flow-root/flex/grid/inline-block, which contains internal floats and prevents margin collapse."
    },
    {
      id: "css-h-07",
      question: "Why should you animate 'transform' and 'opacity' instead of 'top', 'left', 'width', or 'height' for 60fps animations?",
      options: [
        "Transform and opacity run on the GPU compositor thread without triggering layout re-calculation or repainting",
        "Top and left are deprecated in modern CSS",
        "Transform and opacity do not support timing functions",
        "CSS transitions do not work with width and height"
      ],
      answer: 0,
      explanation: "Animating layout properties (width, top) forces the browser through Layout -> Paint -> Composite cycles. Transform and opacity only require the Composite stage on the GPU."
    },
    {
      id: "css-h-08",
      question: "What is the purpose of the 'will-change' property in CSS?",
      options: [
        "Informs the browser ahead of time what properties are expected to change so it can allocate optimized rendering layers on the GPU",
        "Acts as a linter checking for syntax errors",
        "Triggers JavaScript change events automatically",
        "Pre-compiles CSS into WebAssembly"
      ],
      answer: 0,
      explanation: "'will-change' hints to the browser engine to prepare optimizations (like promoting an element to its own graphics layer) ahead of an active animation."
    },
    {
      id: "css-h-09",
      question: "What is CSS Container Queries ('@container') designed to solve that Media Queries cannot?",
      options: [
        "Styling elements based on the dimensions of their parent container rather than the global viewport width",
        "Querying device camera resolution",
        "Selecting elements based on Docker container environment variables",
        "Measuring server CPU utilization"
      ],
      answer: 0,
      explanation: "@container allows reusable components to adapt their layout dynamically based on the width/height of their parent container, rather than relying on viewport size."
    },
    {
      id: "css-h-10",
      question: "What is Margin Collapsing in CSS, and when does it occur?",
      options: [
        "Margins collapse to zero on mobile screens",
        "Adjoining vertical margins of block-level elements in normal flow combine into a single margin equal to the largest of the individual margins",
        "Horizontal margins of inline elements merge automatically",
        "Padding cancels out margin when they have identical values"
      ],
      answer: 1,
      explanation: "In normal flow, adjoining vertical margins of adjacent or parent/child blocks collapse into a single margin whose size is the maximum of the collapsed margins."
    },
    {
      id: "css-h-11",
      question: "What does 'font-display: swap;' do during web font loading?",
      options: [
        "Swaps between bold and italic fonts randomly",
        "Instructs the browser to render text immediately using a fallback system font, then swap to the custom web font once it finishes downloading",
        "Hides text permanently if the font fails to download",
        "Swaps serifs for sans-serifs on high-DPI displays"
      ],
      answer: 1,
      explanation: "'font-display: swap' gives the font face an extremely short block period (rendering fallback font immediately) and an infinite swap period, eliminating invisible text (FOIT)."
    },
    {
      id: "css-h-12",
      question: "What is the purpose of the CSS property 'contain: layout paint;'?",
      options: [
        "Isolates the element's subtree so the browser can optimize rendering by confining layout and paint recalculations inside the element boundary",
        "Locks the aspect ratio of images to 1:1",
        "Prevents external stylesheets from applying",
        "Limits text to a single line"
      ],
      answer: 0,
      explanation: "CSS Containment ('contain') isolates subtrees from the rest of the DOM, informing the browser that changes inside do not affect the layout or paint outside."
    },
    {
      id: "css-h-13",
      question: "What is the result of using 'subgrid' in CSS Grid (e.g. 'grid-template-columns: subgrid;')?",
      options: [
        "Creates an entirely independent nested grid with its own tracks",
        "Enables a nested grid item to adopt and align directly with the track rows or columns of its parent grid container",
        "Splits a grid cell into equal quadrants",
        "Renders a grid inside a Web Worker canvas"
      ],
      answer: 1,
      explanation: "Subgrid allows a grid item that is also a grid container to inherit and directly align with the row and column tracks established by its ancestor grid."
    },
    {
      id: "css-h-14",
      question: "How does the 'display: contents;' declaration affect an element?",
      options: [
        "It hides all child contents while showing the parent",
        "It makes the container element itself effectively disappear from the box tree, rendering its children directly as if they were children of the grandparent",
        "It converts text into a table of contents automatically",
        "It forces inline elements into block layout"
      ],
      answer: 1,
      explanation: "'display: contents;' causes the element's own box to not be generated, while its children and pseudo-elements continue to render normally as if the parent tag was not there."
    },
    {
      id: "css-h-15",
      question: "What is the difference between 'content-visibility: auto;' and 'display: none;'?",
      options: [
        "They behave identically in all modern browsers",
        "'content-visibility: auto;' skips layout and rendering for offscreen elements to boost load times while still preserving their size and searchability",
        "'display: none;' allocates GPU memory for offscreen nodes",
        "'content-visibility' only works on SVG paths"
      ],
      answer: 1,
      explanation: "content-visibility: auto skips layout and paint operations for offscreen elements while maintaining their scroll height and accessibility footprint, providing massive rendering speedups."
    },
    {
      id: "css-h-16",
      question: "What does the pseudo-class ':target' match in CSS?",
      options: [
        "The element whose ID matches the current URL fragment identifier (hash)",
        "The element that currently has keyboard focus",
        "The target element of an HTTP POST form",
        "The deepest nested child element in the DOM"
      ],
      answer: 0,
      explanation: "The ':target' pseudo-class represents a unique element with an ID matching the fragment identifier (#id) of the current page's URL."
    },
    {
      id: "css-h-17",
      question: "What happens when you apply '!important' to a CSS declaration inside an author stylesheet versus a user agent stylesheet?",
      options: [
        "Author !important overrides user agent !important",
        "User agent !important takes precedence over author !important according to the cascade origin order rules",
        "Both are rejected by browser CSS parsers",
        "!important is ignored inside media queries"
      ],
      answer: 1,
      explanation: "In the CSS cascade precedence: User !important > Author !important > Author normal > User normal > User Agent normal, but User Agent !important overrides normal author rules."
    },
    {
      id: "css-h-18",
      question: "What does the CSS property 'aspect-ratio: 16 / 9;' accomplish?",
      options: [
        "Forces the browser window into widescreen mode",
        "Sets a preferred aspect ratio for the box that automatically calculates width or height when the other dimension is specified",
        "Zooms font sizes by a ratio of 16 to 9",
        "Restricts video playback to 1080p resolution"
      ],
      answer: 1,
      explanation: "The 'aspect-ratio' property maintains consistent dimensions for any element, preventing Cumulative Layout Shift (CLS) before assets load."
    },
    {
      id: "css-h-19",
      question: "What is layout thrashing (forced synchronous layout) caused by in relation to CSS?",
      options: [
        "Writing more than 10,000 lines of CSS rules",
        "Alternating between reading DOM geometric properties (like offsetTop, clientWidth) and writing style changes repeatedly within a single JavaScript frame",
        "Using CSS animations without CSS transitions",
        "Combining Flexbox and Grid on the same element"
      ],
      answer: 1,
      explanation: "When JS reads a layout property (offsetTop) after modifying styles, the browser is forced to prematurely recalculate layout synchronously, causing severe jank."
    },
    {
      id: "css-h-20",
      question: "What is the purpose of the 'hyphens: auto;' property?",
      options: [
        "Replaces commas with hyphens",
        "Tells the browser to automatically break words across lines using hyphenation dictionaries according to the page language attribute",
        "Draws horizontal rules under text",
        "Formats telephone numbers into standard hyphenated notation"
      ],
      answer: 1,
      explanation: "'hyphens: auto' hyphenates words when lines wrap, utilizing language-specific dictionary rules indicated by the HTML 'lang' attribute."
    },
    {
      id: "css-h-21",
      question: "What is the function of the CSS property 'overscroll-behavior: contain;'?",
      options: [
        "Locks all scrolling permanently on the page",
        "Prevents scroll chaining: reaching the scroll boundary of a child container will not trigger scrolling on its parent container or page",
        "Enables infinite scroll pagination via CSS",
        "Accelerates touch drag speed"
      ],
      answer: 1,
      explanation: "'overscroll-behavior: contain;' prevents scroll chaining and rubber-banding to parent elements or the body when scrolling inside modals or dropdowns."
    },
    {
      id: "css-h-22",
      question: "What does the selector ':not(.active):not(.disabled)' accomplish?",
      options: [
        "Selects elements that have both .active and .disabled classes",
        "Selects elements that have neither the .active class nor the .disabled class",
        "Disables the stylesheet for those classes",
        "Throws a CSS syntax selector error"
      ],
      answer: 1,
      explanation: "Chaining :not() pseudo-classes acts as a logical AND negation: elements must not possess the .active class AND must not possess the .disabled class."
    },
    {
      id: "css-h-23",
      question: "What is the purpose of the '@property' CSS at-rule?",
      options: [
        "Registers custom CSS properties with explicit syntax types, inheritance rules, and initial fallback values, enabling animatable CSS variables",
        "Declares private properties in JavaScript objects",
        "Validates DOM element attributes against HTML schemas",
        "Connects CSS directly to Web Storage"
      ],
      answer: 0,
      explanation: "@property is part of CSS Houdini, allowing custom properties to declare syntax (e.g., <color>, <length>), inheritance, and enable interpolation in animations."
    },
    {
      id: "css-h-24",
      question: "How does the 'accent-color' CSS property enhance form controls?",
      options: [
        "Sets the font color of form input labels",
        "Specifies the accent color for user interface controls generated by the browser, such as checkboxes, radio buttons, and sliders",
        "Draws a colored glow around focused windows",
        "Changes the background color of the entire document on submit"
      ],
      answer: 1,
      explanation: "'accent-color' provides a single line of CSS to brand native form controls (checkboxes, radio buttons, range sliders, progress bars) with theme colors."
    },
    {
      id: "css-h-25",
      question: "What is the difference between 'opacity: 0;' and 'visibility: hidden;' in terms of accessibility and keyboard focus?",
      options: [
        "Both remove the element from the accessibility tree and keyboard focus order",
        "An element with 'opacity: 0;' remains focusable via Tab key and detectable by screen readers; 'visibility: hidden;' removes it from both focus order and the accessibility tree",
        "'visibility: hidden;' allows keyboard focus while 'opacity: 0;' does not",
        "Neither allows clicks to register"
      ],
      answer: 1,
      explanation: "'opacity: 0' only makes the pixels invisible (it can still receive clicks and Tab focus). 'visibility: hidden' completely removes the element from keyboard focus and accessibility trees."
    },
    {
      id: "css-h-26",
      question: "What is the significance of the 'writing-mode' CSS property?",
      options: [
        "Enables text-to-speech writing",
        "Defines whether lines of text are laid out horizontally or vertically and the direction in which blocks progress (e.g. vertical-rl for East Asian scripts)",
        "Toggles spell-check highlighting",
        "Enforces Markdown formatting"
      ],
      answer: 1,
      explanation: "'writing-mode' configures the direction of text layout (horizontal-tb, vertical-rl, vertical-lr), essential for international typography and creative vertical layouts."
    },
    {
      id: "css-h-27",
      question: "What does the 'isolation: isolate;' CSS property do?",
      options: [
        "Prevents external JavaScript from reading CSS styles",
        "Creates a new stacking context without requiring z-index or positioning, and isolates 'mix-blend-mode' blending from parent backgrounds",
        "Runs CSS animations in a separate Web Worker thread",
        "Isolates the container from responsive resize events"
      ],
      answer: 1,
      explanation: "'isolation: isolate;' establishes a new stacking context and prevents blend modes from bleeding into ancestor layers outside this element."
    },
    {
      id: "css-h-28",
      question: "What does the pseudo-element '::part()' allow in Web Components?",
      options: [
        "Selects partitioned rows in CSS Tables",
        "Allows external stylesheets to selectively style elements inside a component's shadow DOM that have been exposed via a 'part' attribute",
        "Partitions CSS rules into separate HTTP requests",
        "Separates flexbox children into chunks"
      ],
      answer: 1,
      explanation: "::part() provides a controlled bridge through the Shadow DOM barrier, allowing authors to style specific exposed parts of custom elements."
    },
    {
      id: "css-h-29",
      question: "What is the difference between 'auto-fill' and 'auto-fit' in CSS Grid repeat()?",
      options: [
        "auto-fill collapses empty tracks to 0px; auto-fit keeps empty tracks visible",
        "auto-fill preserves empty tracks taking up space if the container has room; auto-fit collapses empty tracks to zero and expands occupied tracks to fill the container",
        "auto-fill only works with px; auto-fit only works with fr",
        "They produce identical results in all circumstances"
      ],
      answer: 1,
      explanation: "When space remains: auto-fill creates empty ghost tracks, keeping items at their base size; auto-fit drops empty tracks and lets existing items stretch to fill the row."
    },
    {
      id: "css-h-30",
      question: "What does the 'color-scheme: light dark;' CSS property communicate to the browser?",
      options: [
        "It forces the page to display in grayscale",
        "It signals that the page supports both light and dark system color schemes, prompting the browser to render native form controls and scrollbars with matching theme styles",
        "It toggles light and dark modes every 12 hours automatically",
        "It inverts all image colors in dark mode"
      ],
      answer: 1,
      explanation: "'color-scheme: light dark;' informs the browser engine that the document supports both themes, ensuring native controls, scrollbars, and backgrounds adapt seamlessly."
    }
  ]
};


// ============================================================================
// QUIZMASTER - C PROGRAMMING QUESTIONS (30 Easy + 30 Moderate + 30 Hard = 90 Questions)
// ============================================================================

window.C_QUESTIONS = {
  easy: [
    {
      id: "c-e-01",
      question: "Who is known as the father / creator of the C programming language?",
      options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
      answer: 1,
      explanation: "Dennis Ritchie created the C programming language between 1969 and 1973 at Bell Laboratories to develop the UNIX operating system."
    },
    {
      id: "c-e-02",
      question: "Which header file is required to use the printf() and scanf() functions in C?",
      options: ["<conio.h>", "<stdlib.h>", "<stdio.h>", "<math.h>"],
      answer: 2,
      explanation: "<stdio.h> (Standard Input Output) declares functions for standard I/O operations such as printf, scanf, puts, and gets."
    },
    {
      id: "c-e-03",
      question: "What is the return type of the main() function according to ANSI/ISO C standards?",
      options: ["void", "int", "float", "char"],
      answer: 1,
      explanation: "Standard C mandates that main() must return an 'int', where 0 traditionally indicates successful termination to the operating system."
    },
    {
      id: "c-e-04",
      question: "Which format specifier is used to print an integer value in printf()?",
      options: ["%f", "%c", "%d", "%s"],
      answer: 2,
      explanation: "%d (or %i) is the format specifier used in printf() and scanf() for signed decimal integers."
    },
    {
      id: "c-e-05",
      question: "Which format specifier is used to read or print a single character in C?",
      options: ["%s", "%c", "%char", "%d"],
      answer: 1,
      explanation: "%c is the format specifier for a single character in C."
    },
    {
      id: "c-e-06",
      question: "Which format specifier is used to print a floating-point number in C?",
      options: ["%d", "%f", "%lf", "%g"],
      answer: 1,
      explanation: "%f is used to print single-precision floating-point numbers (float). %lf is commonly used for double."
    },
    {
      id: "c-e-07",
      question: "Every statement in C must end with which character?",
      options: [": (colon)", ". (period)", "; (semicolon)", ", (comma)"],
      answer: 2,
      explanation: "In C, statements are terminated by a semicolon (;). Omitting it causes a syntax compilation error."
    },
    {
      id: "c-e-08",
      question: "Which of the following is an invalid variable name in C?",
      options: ["total_sum", "int", "count1", "_value"],
      answer: 1,
      explanation: "'int' is a reserved keyword in C and cannot be used as an identifier or variable name."
    },
    {
      id: "c-e-09",
      question: "Which operator is used to obtain the memory address of a variable in C?",
      options: ["* (asterisk)", "& (ampersand)", "-> (arrow)", "# (hash)"],
      answer: 1,
      explanation: "The address-of operator '&' returns the memory address of its operand variable (e.g., &x)."
    },
    {
      id: "c-e-10",
      question: "What is the size of the 'char' data type in C on all compliant architectures?",
      options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      answer: 0,
      explanation: "In standard C, sizeof(char) is defined to be exactly 1 byte (CHAR_BIT bits, typically 8 bits)."
    },
    {
      id: "c-e-11",
      question: "Which loop construct in C is guaranteed to execute its loop body at least once?",
      options: ["for loop", "while loop", "do-while loop", "goto loop"],
      answer: 2,
      explanation: "The 'do-while' loop tests its condition at the end of the iteration, guaranteeing that the loop body executes at least once."
    },
    {
      id: "c-e-12",
      question: "What is the result of the integer division expression: 7 / 2 in C?",
      options: ["3.5", "3", "4", "3.0"],
      answer: 1,
      explanation: "In C, dividing two integers truncates the fractional part towards zero, yielding the integer result 3."
    },
    {
      id: "c-e-13",
      question: "Which operator yields the remainder of an integer division in C?",
      options: ["/", "%", "//", "rem"],
      answer: 1,
      explanation: "The modulus operator '%' computes the remainder after division between two integer operands (e.g., 7 % 2 is 1)."
    },
    {
      id: "c-e-14",
      question: "Which keyword is used to prevent any modification to a variable's value after initialization?",
      options: ["static", "final", "const", "immutable"],
      answer: 2,
      explanation: "The 'const' type qualifier in C specifies that the variable's value is constant and cannot be reassigned."
    },
    {
      id: "c-e-15",
      question: "Which escape sequence represents a new line in C?",
      options: ["\\t", "\\n", "\\r", "\\0"],
      answer: 1,
      explanation: "\\n represents the newline character, moving the cursor to the beginning of the next line."
    },
    {
      id: "c-e-16",
      question: "Which escape sequence represents a horizontal tab in C?",
      options: ["\\n", "\\b", "\\t", "\\a"],
      answer: 2,
      explanation: "\\t produces a horizontal tab, spacing output to the next tab stop."
    },
    {
      id: "c-e-17",
      question: "What is the index of the first element in any C array?",
      options: ["-1", "0", "1", "Depends on declaration"],
      answer: 1,
      explanation: "C uses zero-based array indexing. An array declared as arr[10] has indices ranging from 0 to 9."
    },
    {
      id: "c-e-18",
      question: "What character is automatically appended to the end of all string literals in C?",
      options: ["\\n (newline)", "\\0 (null character)", "\\t (tab)", "EOF"],
      answer: 1,
      explanation: "Strings in C are null-terminated character arrays ending with the null terminator character '\\0' (ASCII 0)."
    },
    {
      id: "c-e-19",
      question: "What does the expression 'sizeof(int)' return?",
      options: [
        "The value stored inside an int",
        "The memory size in bytes occupied by an int on that machine",
        "The number of digits in an int",
        "The address of the int type"
      ],
      answer: 1,
      explanation: "The sizeof operator yields the size in bytes of its operand type or variable (commonly 4 bytes on 32-bit and 64-bit systems)."
    },
    {
      id: "c-e-20",
      question: "Which relational operator checks for equality between two values in C?",
      options: ["=", "==", "===", "eq"],
      answer: 1,
      explanation: "'==' checks for equality, whereas '=' is the assignment operator."
    },
    {
      id: "c-e-21",
      question: "Which logical operator represents logical AND in C?",
      options: ["&", "&&", "AND", "and"],
      answer: 1,
      explanation: "'&&' is the short-circuiting logical AND operator in C. Single '&' is the bitwise AND operator."
    },
    {
      id: "c-e-22",
      question: "Which statement is used to immediately terminate a loop or switch block in C?",
      options: ["continue", "exit", "break", "return"],
      answer: 2,
      explanation: "The 'break' statement terminates the execution of the innermost enclosing loop or switch construct."
    },
    {
      id: "c-e-23",
      question: "Which statement skips the rest of the current iteration and jumps to the next loop iteration in C?",
      options: ["skip", "pass", "continue", "goto"],
      answer: 2,
      explanation: "The 'continue' statement stops execution of the current loop iteration and transfers control to the loop condition evaluation."
    },
    {
      id: "c-e-24",
      question: "How do you write a single-line comment in modern C (C99 and later)?",
      options: [
        "# This is a comment",
        "// This is a comment",
        "/* This is a comment",
        "<!-- This is a comment -->"
      ],
      answer: 1,
      explanation: "// introduces a single-line comment up to the end of the line, standardized in C99."
    },
    {
      id: "c-e-25",
      question: "What is the purpose of the #include preprocessor directive?",
      options: [
        "It compiles another C program into an executable",
        "It copies and pastes the entire contents of the specified header file into the source code before compilation",
        "It declares a dynamic variable in RAM",
        "It links a shared object file at runtime"
      ],
      answer: 1,
      explanation: "#include tells the C preprocessor to insert the verbatim contents of the specified file at that exact position in the translation unit."
    },
    {
      id: "c-e-26",
      question: "What is the maximum value of a standard signed 8-bit char in C?",
      options: ["255", "127", "65535", "128"],
      answer: 1,
      explanation: "An 8-bit signed char uses two's complement representation, giving a range of -128 to +127."
    },
    {
      id: "c-e-27",
      question: "What is the ternary conditional operator in C?",
      options: ["? :", "if then else", "??", "<>"],
      answer: 0,
      explanation: "The ternary operator '? :' is shorthand for if-else expressions: condition ? value_if_true : value_if_false."
    },
    {
      id: "c-e-28",
      question: "Which standard function is used to read formatted input from the standard input (keyboard)?",
      options: ["cin", "input()", "scanf()", "readf()"],
      answer: 2,
      explanation: "scanf() reads input from stdin according to a provided format string and stores parsed values into variable addresses."
    },
    {
      id: "c-e-29",
      question: "Which function in <stdlib.h> is used to allocate memory dynamically at runtime?",
      options: ["alloc()", "malloc()", "new", "create()"],
      answer: 1,
      explanation: "malloc() (memory allocation) dynamically requests a contiguous block of bytes from the system heap."
    },
    {
      id: "c-e-30",
      question: "What does the dereference operator '*' do when applied to a pointer variable?",
      options: [
        "Multiplies the pointer by 2",
        "Accesses or modifies the value stored at the memory address held by the pointer",
        "Deallocates the pointer from memory",
        "Converts the pointer to an integer"
      ],
      answer: 1,
      explanation: "The unary dereference operator '*' accesses the data value residing at the address pointed to by the pointer."
    }
  ],

  moderate: [
    {
      id: "c-m-01",
      question: "What is the difference between malloc() and calloc() in C?",
      options: [
        "malloc is faster and initializes memory to zero; calloc does not",
        "malloc leaves allocated memory uninitialized (garbage values); calloc initializes all allocated bytes to zero",
        "calloc allocates on the stack; malloc allocates on the heap",
        "There is no difference in behavior"
      ],
      answer: 1,
      explanation: "malloc(size) allocates raw bytes containing indeterminate garbage values; calloc(num, size) allocates memory and initializes all bits to zero."
    },
    {
      id: "c-m-02",
      question: "What is the output of the following code snippet?\nint a = 5;\nprintf(\"%d %d\", a++, ++a);",
      options: [
        "5 7",
        "6 7",
        "5 6",
        "Undefined / Unspecified behavior in C"
      ],
      answer: 3,
      explanation: "Modifying a variable more than once between sequence points without intervening sequencing rules produces undefined or unspecified evaluation order behavior in C."
    },
    {
      id: "c-m-03",
      question: "What is a 'dangling pointer' in C?",
      options: [
        "A pointer that points to NULL",
        "A pointer that still points to a memory location that has already been deallocated (freed) or has gone out of scope",
        "A pointer that has not yet been declared",
        "A pointer stored inside an array"
      ],
      answer: 1,
      explanation: "A dangling pointer arises when memory is deallocated (free(ptr)) without setting the pointer to NULL; accessing it leads to undefined behavior."
    },
    {
      id: "c-m-04",
      question: "What does the 'static' keyword do when applied to a local variable inside a function?",
      options: [
        "Makes the variable constant so it cannot change",
        "Preserves the variable's value across multiple calls to the function by storing it in the data segment rather than the stack",
        "Makes the variable accessible to all other source files",
        "Deletes the variable immediately upon function return"
      ],
      answer: 1,
      explanation: "A static local variable is initialized once at program startup and retains its value between successive invocations of that function."
    },
    {
      id: "c-m-05",
      question: "What is the output of the following code?\nchar s[] = \"Hello\";\nprintf(\"%d %d\", sizeof(s), strlen(s));",
      options: ["5 5", "6 5", "5 6", "6 6"],
      answer: 1,
      explanation: "sizeof(s) is 6 bytes (including the trailing null terminator '\\0'), while strlen(s) counts characters excluding '\\0', giving 5."
    },
    {
      id: "c-m-06",
      question: "If 'int *p = (int*)1000;' on a system where sizeof(int) == 4, what is the value of 'p + 3'?",
      options: ["1003", "1012", "1006", "1000"],
      answer: 1,
      explanation: "Pointer arithmetic scales increments by the size of the pointed-to type: 1000 + (3 * sizeof(int)) = 1000 + 12 = 1012."
    },
    {
      id: "c-m-07",
      question: "Which operator is used to access structure members through a structure pointer?",
      options: [". (dot)", "-> (arrow)", ":: (double colon)", "* (star)"],
      answer: 1,
      explanation: "The arrow operator (->) dereferences the pointer and accesses the member, equivalent to (*ptr).member."
    },
    {
      id: "c-m-08",
      question: "What is the primary difference between a struct and a union in C?",
      options: [
        "Struct members cannot be pointers; union members can",
        "In a struct, each member has its own separate memory; in a union, all members share the same memory space, equal to the size of its largest member",
        "Union members are private by default",
        "There is no difference in memory layout"
      ],
      answer: 1,
      explanation: "A struct allocates distinct storage for every member. In a union, all members overlap at offset 0, so only one member can be meaningfully held at a time."
    },
    {
      id: "c-m-09",
      question: "What is a 'memory leak' in C?",
      options: [
        "Reading memory beyond the bounds of an array",
        "Allocating heap memory using malloc/calloc and losing all pointers to it without calling free(), making the memory unrecoverable",
        "Exceeding the CPU cache capacity",
        "Writing to a read-only const variable"
      ],
      answer: 1,
      explanation: "A memory leak happens when heap memory allocated dynamically is not released via free() before all references to it are lost."
    },
    {
      id: "c-m-10",
      question: "What is the effect of passing an array to a function in C (e.g., void func(int arr[]))?",
      options: [
        "The entire array is cloned and passed by value on the stack",
        "The array name decays into a pointer to its first element (int *), passing by address",
        "It causes a compilation error because arrays cannot be passed to functions",
        "The function receives a read-only copy of the array"
      ],
      answer: 1,
      explanation: "In C, array parameters decay into pointers to their first elements. Thus, modifications inside the function alter the original array elements."
    },
    {
      id: "c-m-11",
      question: "What does the free() function in C do?",
      options: [
        "Sets the pointer variable to NULL",
        "Deallocates previously allocated heap memory back to the memory manager without modifying the pointer variable value itself",
        "Zeros out all bytes in the pointed-to memory block",
        "Terminates the program cleanly"
      ],
      answer: 1,
      explanation: "free(ptr) releases heap memory block for reuse. The pointer variable itself retains its old address (now dangling) unless manually set to NULL."
    },
    {
      id: "c-m-12",
      question: "What is the purpose of the 'extern' storage class specifier in C?",
      options: [
        "Restricts variable visibility to only the current block",
        "Declares a global variable or function that is defined in another source file or translation unit",
        "Allocates memory in external GPU RAM",
        "Forces variable storage into CPU registers"
      ],
      answer: 1,
      explanation: "'extern' informs the compiler that a variable or function exists and is defined elsewhere (e.g. in another C file), resolving during linking."
    },
    {
      id: "c-m-13",
      question: "What is the return value of strcmp(\"apple\", \"banana\") in C?",
      options: ["A positive integer", "0", "A negative integer", "true"],
      answer: 2,
      explanation: "strcmp() compares strings lexicographically. Since 'a' has a lower ASCII value than 'b', it returns a negative integer (< 0)."
    },
    {
      id: "c-m-14",
      question: "What does the 'realloc()' function do if its first parameter is NULL (e.g., realloc(NULL, 100))?",
      options: [
        "Throws a segmentation fault error",
        "Behaves identically to malloc(100)",
        "Returns NULL immediately without allocating",
        "Clears the entire heap memory pool"
      ],
      answer: 1,
      explanation: "Per standard C specification, calling realloc(NULL, size) is explicitly equivalent to calling malloc(size)."
    },
    {
      id: "c-m-15",
      question: "What will the following code print?\nint arr[5] = {1, 2, 3};\nprintf(\"%d\", arr[3]);",
      options: ["Garbage value", "3", "0", "Compilation error"],
      answer: 2,
      explanation: "If an array is partially initialized with an initializer list, any uninitialized remaining elements are automatically initialized to zero (0)."
    },
    {
      id: "c-m-16",
      question: "What does the following statement declare?\nint *arr[10];",
      options: [
        "A pointer to an array of 10 integers",
        "An array of 10 pointers to integers",
        "A function returning a pointer to 10 integers",
        "A 2D array of size 10x10"
      ],
      answer: 1,
      explanation: "Due to operator precedence, [] binds tighter than *. Thus, 'int *arr[10]' declares an array of 10 elements, each being a pointer to an int."
    },
    {
      id: "c-m-17",
      question: "What is the difference between 'const int *p' and 'int * const p'?",
      options: [
        "They are identical",
        "'const int *p' is a pointer to constant integer (data cannot change); 'int * const p' is a constant pointer to integer (address cannot change)",
        "'int * const p' points to memory in ROM",
        "'const int *p' cannot be passed to functions"
      ],
      answer: 1,
      explanation: "In 'const int *p', *p is const (read-only value). In 'int * const p', p itself is const (pointer cannot point to a different memory address)."
    },
    {
      id: "c-m-18",
      question: "What is the output of printf(\"%d\", 5 << 2)?",
      options: ["10", "20", "2", "25"],
      answer: 1,
      explanation: "Left bitwise shift (<<) shifts bits to the left, multiplying by 2^n: 5 * (2^2) = 5 * 4 = 20."
    },
    {
      id: "c-m-19",
      question: "What is the output of printf(\"%d\", 16 >> 2)?",
      options: ["4", "8", "32", "64"],
      answer: 0,
      explanation: "Right bitwise shift (>>) shifts bits to the right, dividing by 2^n: 16 / (2^2) = 16 / 4 = 4."
    },
    {
      id: "c-m-20",
      question: "What is the purpose of the 'typedef' keyword in C?",
      options: [
        "To define a new data type with new physical memory rules",
        "To create an alias or synonym for an existing data type",
        "To check the type of a variable at runtime",
        "To import types from C++"
      ],
      answer: 1,
      explanation: "typedef gives a new, user-defined nickname/alias to an existing data type (e.g. typedef unsigned long ulong;)."
    },
    {
      id: "c-m-21",
      question: "What is the role of the 'register' storage class specifier in C?",
      options: [
        "Registers a variable in global system tables",
        "Hints to the compiler to store the variable in a CPU register instead of RAM for faster access if possible",
        "Guarantees the variable will be saved in CPU cache",
        "Prevents the variable from being used in loops"
      ],
      answer: 1,
      explanation: "'register' hints that the variable will be heavily used and should reside in a CPU register. You cannot take the address (&) of a register variable."
    },
    {
      id: "c-m-22",
      question: "What does fopen(\"test.txt\", \"r\") return if the file does not exist?",
      options: ["-1", "0", "NULL", "Throws a file exception"],
      answer: 2,
      explanation: "When fopen() fails to open a requested file in read mode ('r'), it returns the NULL pointer."
    },
    {
      id: "c-m-23",
      question: "What does the 'break' statement do inside a nested loop in C?",
      options: [
        "Exits all enclosing loops simultaneously",
        "Terminates only the innermost loop in which it resides",
        "Restarts the outer loop from scratch",
        "Halts program execution"
      ],
      answer: 1,
      explanation: "A break statement exits only the nearest enclosing loop or switch construct; outer loops continue executing."
    },
    {
      id: "c-m-24",
      question: "What is the value of enum DAY { SUN, MON = 5, TUE, WED }; value of WED?",
      options: ["3", "7", "6", "8"],
      answer: 1,
      explanation: "Enumeration values increment by 1 from the previous member: SUN=0, MON=5, TUE=6, WED=7."
    },
    {
      id: "c-m-25",
      question: "What is the correct syntax for a function pointer in C that points to a function taking two ints and returning an int?",
      options: [
        "int *fp(int, int);",
        "int (*fp)(int, int);",
        "(int*) fp(int, int);",
        "fp<int(int, int)>;"
      ],
      answer: 1,
      explanation: "The parentheses around (*fp) are essential: 'int (*fp)(int, int);' declares a pointer to a function. Without them, it declares a function returning an int pointer."
    },
    {
      id: "c-m-26",
      question: "What is the difference between char str[] = \"code\"; and char *str = \"code\";?",
      options: [
        "They are completely identical",
        "char str[] is a mutable array allocated on the stack; char *str points to a string literal in read-only memory segment (modifying it causes UB)",
        "char *str allocates memory on the heap",
        "char str[] cannot be modified"
      ],
      answer: 1,
      explanation: "Array declaration copies string literal characters onto the stack where they can be modified. Pointer declaration points directly to read-only string literal segment."
    },
    {
      id: "c-m-27",
      question: "What is recursion in C?",
      options: [
        "A loop that never terminates",
        "A programming technique where a function calls itself directly or indirectly until reaching a base condition",
        "Passing a function pointer as an argument",
        "Calling a function from inside another file"
      ],
      answer: 1,
      explanation: "Recursion occurs when a function calls itself. A base condition is necessary to terminate recursion and prevent stack overflow."
    },
    {
      id: "c-m-28",
      question: "What does the expression '*(arr + i)' represent for an array 'int arr[]'?",
      options: [
        "The memory address of arr[i]",
        "arr[i] (the element at index i)",
        "The value of arr[0] plus i",
        "A pointer to the subarray starting at i"
      ],
      answer: 1,
      explanation: "In C array subscripting, arr[i] is defined by the standard as strictly identical to *(arr + i) or *(i + arr)."
    },
    {
      id: "c-m-29",
      question: "What is the output of the following expression: 10 & 6?",
      options: ["14", "2", "16", "0"],
      answer: 1,
      explanation: "In binary: 10 is 1010, 6 is 0110. Bitwise AND: 1010 & 0110 = 0010 in binary, which equals decimal 2."
    },
    {
      id: "c-m-30",
      question: "What does the preprocessor operator '#' do in a macro definition (e.g. #define STR(x) #x)?",
      options: [
        "Concatenates tokens together",
        "Converts the macro argument into a string literal (stringizing operator)",
        "Calculates the size of x",
        "Generates a compiler warning"
      ],
      answer: 1,
      explanation: "The '#' preprocessor operator is the stringizing operator. It surrounds the replacement token with quotes, turning it into a string literal."
    }
  ],

  hard: [
    {
      id: "c-h-01",
      question: "What does the 'volatile' type qualifier tell the C compiler?",
      options: [
        "The variable must be stored in cache memory only",
        "The variable's value may be modified unexpectedly by external hardware or concurrent threads, so the compiler must not optimize away reads or writes to it",
        "The variable's value will be deleted when memory runs low",
        "The variable is synchronized across distributed nodes"
      ],
      answer: 1,
      explanation: "'volatile' prevents the compiler from performing caching or dead-code elimination optimizations, forcing it to fetch the actual value from memory on every read."
    },
    {
      id: "c-h-02",
      question: "Why does structure padding occur in C (e.g., struct { char a; int b; } taking 8 bytes instead of 5 on 32-bit systems)?",
      options: [
        "To waste memory intentionally for security encryption",
        "To satisfy hardware architecture alignment requirements for optimal memory bus transfer cycles",
        "Because char types always require 4 bytes in structs",
        "It is caused by compiler bugs"
      ],
      answer: 1,
      explanation: "CPUs access memory much more efficiently on naturally aligned boundaries (e.g., 4-byte integers on 4-byte boundaries). Compilers insert padding bytes to achieve alignment."
    },
    {
      id: "c-h-03",
      question: "What is the token-pasting preprocessor operator in C?",
      options: ["#", "##", "$$", "@@"],
      answer: 1,
      explanation: "The '##' operator concatenates two tokens together into a single composite token during macro expansion."
    },
    {
      id: "c-h-04",
      question: "What is the output of the following code?\nint x = 1;\nif (*(char *)&x == 1) printf(\"Little\"); else printf(\"Big\");",
      options: [
        "Prints 'Little' on a Little-Endian architecture and 'Big' on a Big-Endian architecture",
        "Always prints 'Big'",
        "Compilation error due to pointer cast",
        "Undefined behavior"
      ],
      answer: 0,
      explanation: "In Little-Endian systems, the least significant byte is stored at the lowest memory address (0x01). Casting &x to char* checks this lowest byte."
    },
    {
      id: "c-h-05",
      question: "What is a 'sequence point' in C?",
      options: [
        "A semicolon at the end of a line",
        "A point in the execution sequence where all side effects of previous evaluations are guaranteed to be complete and no side effects of subsequent evaluations have occurred",
        "A function declaration signature",
        "A breakpoint set in gdb"
      ],
      answer: 1,
      explanation: "Sequence points define boundaries (e.g., after full expressions, before function calls, short-circuit operators) where previous side effects are settled."
    },
    {
      id: "c-h-06",
      question: "What is the behavior of reading an uninitialized local variable with automatic storage duration in C?",
      options: [
        "It always defaults to 0",
        "It triggers undefined behavior (producing indeterminate garbage values)",
        "The compiler throws a mandatory syntax error",
        "It defaults to -1"
      ],
      answer: 1,
      explanation: "Automatic local variables have indeterminate values upon creation. Reading an indeterminate value produces undefined behavior."
    },
    {
      id: "c-h-07",
      question: "What does the following statement declare?\nint (*foo(int, void (*)(int)))(int);",
      options: [
        "A pointer to a function taking three integers",
        "A function 'foo' taking an int and a function pointer, and returning a pointer to a function taking an int and returning an int",
        "A recursive template function",
        "An invalid syntax error"
      ],
      answer: 1,
      explanation: "Using the right-left declaration rule: 'foo' is a function accepting (int, void (*)(int)) returning a pointer to a function that takes an int and returns an int."
    },
    {
      id: "c-h-08",
      question: "What is a 'flexible array member' in C (introduced in C99)?",
      options: [
        "An array that can dynamically resize itself like a C++ vector",
        "An unsized array declared as the last member of a struct (e.g. int arr[];), allowing dynamic tail allocation",
        "An array declared with negative size",
        "An array located in CPU registers"
      ],
      answer: 1,
      explanation: "A flexible array member has incomplete array type ([]) and must be the final member of a struct. Extra bytes allocated beyond sizeof(struct) belong to this array."
    },
    {
      id: "c-h-09",
      question: "What happens if you pass an uninitialized pointer to free()?",
      options: [
        "free() detects it and ignores it safely",
        "It causes undefined behavior, often crashing with a heap corruption segmentation fault",
        "It initializes the pointer to NULL",
        "It deallocates the stack memory"
      ],
      answer: 1,
      explanation: "free() requires a pointer previously returned by malloc/calloc/realloc, or NULL. Passing an uninitialized or invalid pointer corrupts heap metadata and causes crashes."
    },
    {
      id: "c-h-10",
      question: "What is the result of applying sizeof to an expression with side effects: 'sizeof(i++)'?",
      options: [
        "i is incremented by 1 and the size of i is returned",
        "The side effect (i++) is not evaluated; only the type size is calculated at compile time, leaving i unchanged",
        "Compilation error because side effects are banned inside sizeof",
        "i is incremented twice"
      ],
      answer: 1,
      explanation: "sizeof is a compile-time operator (except for variable-length arrays). Expressions inside sizeof are unevaluated operands, so side effects like i++ never execute."
    },
    {
      id: "c-h-11",
      question: "What is the effect of the #pragma pack(1) directive in C?",
      options: [
        "Compresses C source code file on disk",
        "Disables alignment padding in structures, packing members to 1-byte boundaries",
        "Limits pointer sizes to 1 byte",
        "Restricts arrays to 1 dimension"
      ],
      answer: 1,
      explanation: "#pragma pack(1) forces the compiler to pack structure members tightly with 1-byte alignment, eliminating padding (useful for binary network protocols and file headers)."
    },
    {
      id: "c-h-12",
      question: "What does the 'restrict' keyword (introduced in C99) indicate to the compiler?",
      options: [
        "The pointer cannot be passed to other functions",
        "The pointer is the sole reference to the memory object it accesses for the duration of its scope, enabling aggressive compiler optimization without pointer aliasing",
        "The memory pointed to is encrypted",
        "The pointer is restricted to stack allocations"
      ],
      answer: 1,
      explanation: "The 'restrict' qualifier promises that for the lifetime of the pointer, no other pointer will be used to access that object, enabling loop vectorization and register caching."
    },
    {
      id: "c-h-13",
      question: "What is the difference between shallow copy and deep copy when copying structures containing pointers in C?",
      options: [
        "Shallow copy copies both the structure and heap data; deep copy copies nothing",
        "Shallow copy copies only member pointer addresses (sharing pointed-to data); deep copy allocates new memory and duplicates the pointed-to contents",
        "Deep copy is performed automatically by assignment operator =",
        "They are interchangeable terms"
      ],
      answer: 1,
      explanation: "Default struct assignment (structA = structB) performs a shallow byte-by-byte copy. If members are pointers, both structs point to the same memory, risking double-free errors."
    },
    {
      id: "c-h-14",
      question: "What is the behavior of calling setjmp() and longjmp() in C?",
      options: [
        "Creates a new lightweight operating system thread",
        "Provides non-local jumps (cross-function goto) that save execution state in jmp_buf and restore it, often used for low-level exception handling",
        "Allocates memory across segment boundaries",
        "Jumps to the beginning of main()"
      ],
      answer: 1,
      explanation: "setjmp saves calling environment state in a jmp_buf; longjmp restores this state, jumping back across stack frames as a primitive exception mechanism."
    },
    {
      id: "c-h-15",
      question: "What is the output of the following code on a system with 32-bit two's complement integers?\nint x = INT_MAX;\nprintf(\"%d\", x + 1);",
      options: [
        "INT_MIN (-2147483648)",
        "Undefined Behavior in standard C",
        "0",
        "Throws an ArithmeticOverflowException"
      ],
      answer: 1,
      explanation: "In standard C, signed integer overflow is undefined behavior (unlike unsigned integer overflow, which wraps cleanly modulo 2^N)."
    },
    {
      id: "c-h-16",
      question: "What is a 'VLA' (Variable Length Array) in C, and what are its risks?",
      options: [
        "An array in heap that resizes automatically; risks memory fragmentation",
        "An array whose size is determined at runtime and allocated on the stack; risks stack overflow if the size is too large or untrusted",
        "An array stored in CPU registers; risks cache contention",
        "An array that can store heterogeneous types"
      ],
      answer: 1,
      explanation: "VLAs (C99, made optional in C11) allocate on the call stack based on a runtime expression. If the size is huge, it triggers a stack overflow crash with no safe error check."
    },
    {
      id: "c-h-17",
      question: "In C, what is the difference between 'inline' functions and macros?",
      options: [
        "Macros are type-safe; inline functions are not",
        "Inline functions are expanded by the compiler with full type checking, scope rules, and single-evaluation of arguments; macros are dumb textual replacements by the preprocessor",
        "Inline functions cannot return values",
        "There is no practical difference"
      ],
      answer: 1,
      explanation: "Inline functions follow C syntax, type checking, and argument evaluation rules, preventing classic macro pitfall bugs like side-effect duplication in SQUARE(x++)."
    },
    {
      id: "c-h-18",
      question: "What is the role of the '__attribute__((packed))' extension in GCC/Clang?",
      options: [
        "Packs integers into 8-bit bytes",
        "Instructs the compiler to omit structure alignment padding, placing members contiguous in memory",
        "Enables source code encryption",
        "Optimizes loops for SIMD vectorization"
      ],
      answer: 1,
      explanation: "__attribute__((packed)) tells GCC/Clang that each member should be placed to minimize required memory, eliminating alignment padding."
    },
    {
      id: "c-h-19",
      question: "What does the C standard say about casting an arbitrary integer into a function pointer and calling it?",
      options: [
        "It is standard portable C",
        "It invokes undefined behavior unless explicitly supported by implementation extensions (such as JIT compilers)",
        "It automatically maps to system BIOS",
        "It raises a compile-time static assertion"
      ],
      answer: 1,
      explanation: "Function pointer and data pointer representations can differ across architectures; casting between them or from arbitrary integers yields implementation-defined or undefined behavior."
    },
    {
      id: "c-h-20",
      question: "What is a 'reentrant function' in C?",
      options: [
        "A function that calls itself recursively",
        "A function that can be safely interrupted and re-invoked concurrently by another thread or signal handler without producing data corruption",
        "A function that never returns a value",
        "A function compiled without optimizations"
      ],
      answer: 1,
      explanation: "A reentrant function holds no non-const static or global state and uses only caller-provided arguments and local stack storage, ensuring safe concurrent execution."
    },
    {
      id: "c-h-21",
      question: "What is the effect of 'double free' in C?",
      options: [
        "Frees twice as much memory",
        "Corrupts internal heap management metadata structures, creating severe security vulnerabilities (heap exploit) and crashing the program",
        "Silently ignored by standard libc",
        "Doubles the size of the swap file"
      ],
      answer: 1,
      explanation: "Calling free() twice on the same pointer corrupts the memory allocator's free list metadata, frequently leading to crashes or exploitable vulnerabilities."
    },
    {
      id: "c-h-22",
      question: "What is the purpose of the 'atomic' operations in <stdatomic.h> introduced in C11?",
      options: [
        "To perform nuclear simulations",
        "To read, write, and modify shared variables across threads without data races and without requiring heavy mutex locks",
        "To speed up integer addition by 10x",
        "To automatically allocate memory across clusters"
      ],
      answer: 1,
      explanation: "C11 <stdatomic.h> provides lock-free atomic primitives and memory ordering semantics to prevent data races in multithreaded programs."
    },
    {
      id: "c-h-23",
      question: "What does the function 'aligned_alloc()' do in C11?",
      options: [
        "Aligns text strings to the center",
        "Allocates heap memory whose starting address is a multiple of a specified alignment boundary",
        "Aligns struct members alphabetically",
        "Forces array sizes to power-of-two"
      ],
      answer: 1,
      explanation: "aligned_alloc(alignment, size) requests heap memory aligned to specified byte boundaries (e.g., 64-byte alignment for AVX-512 SIMD vectors)."
    },
    {
      id: "c-h-24",
      question: "What is the meaning of a 'strict aliasing rule' in modern C compilers?",
      options: [
        "Pointers of different types are assumed never to point to the same memory location, allowing the compiler to cache values in registers across writes",
        "All variables must have unique names",
        "Global variables cannot be aliased by local pointers",
        "Pointers must be freed in the order they were allocated"
      ],
      answer: 0,
      explanation: "Strict aliasing allows compilers to assume that two pointers of incompatible types do not point to the same object, enabling optimizations that break if violated."
    },
    {
      id: "c-h-25",
      question: "Which type is explicitly allowed to alias any other type without violating the strict aliasing rule?",
      options: ["int*", "void*", "char* (or unsigned char*)", "double*"],
      answer: 2,
      explanation: "The C standard specifies an explicit exception: pointers to character types (char*, unsigned char*, signed char*) can alias any object to inspect raw bytes."
    },
    {
      id: "c-h-26",
      question: "What is the purpose of bitfields in C struct declarations (e.g. unsigned int flag : 1;)?",
      options: [
        "Encrypts fields with bitwise XOR",
        "Allows allocating specific numbers of bits for structure members to pack multiple flags into minimal storage",
        "Speeds up floating-point division",
        "Generates parity bits for checksums"
      ],
      answer: 1,
      explanation: "Bitfields specify the exact width in bits for struct members, saving precious memory in hardware registers and network packet header representations."
    },
    {
      id: "c-h-27",
      question: "What is the behavior of the 'snprintf()' function compared to 'sprintf()'?",
      options: [
        "snprintf prints in scientific notation",
        "snprintf requires a maximum buffer size parameter, preventing buffer overflow vulnerabilities that plague sprintf",
        "snprintf does not write a null terminator",
        "sprintf is safer than snprintf"
      ],
      answer: 1,
      explanation: "sprintf writes unbounded characters into target buffers leading to fatal buffer overflows. snprintf bounds writing to 'n' characters including '\\0'."
    },
    {
      id: "c-h-28",
      question: "What is the purpose of '#ifndef HEADER_H ... #endif' include guards?",
      options: [
        "Prevents compilation if syntax errors exist",
        "Prevents multiple inclusions and duplicate definitions of header file declarations in the same translation unit",
        "Hides header files from public distribution",
        "Enables multi-core preprocessing"
      ],
      answer: 1,
      explanation: "Include guards ensure that header contents are parsed only once per translation unit, preventing redefinition errors for structs and typedefs."
    },
    {
      id: "c-h-29",
      question: "What is the output of printf(\"%zu\", sizeof(\"Quiz\"))?",
      options: ["4", "5", "8", "sizeof is not supported on string literals"],
      answer: 1,
      explanation: "\"Quiz\" has 4 characters ('Q', 'u', 'i', 'z') plus the terminating null character '\\0'. Thus, sizeof(\"Quiz\") equals 5 bytes."
    },
    {
      id: "c-h-30",
      question: "What is the result of attempting to modify a string literal: char *p = \"quiz\"; p[0] = 'Q';?",
      options: [
        "The string changes to \"Quiz\" successfully",
        "Undefined Behavior (usually crashes with a Segmentation Fault because string literals reside in read-only memory)",
        "Compiler automatically clones the string to heap",
        "Throws a runtime JavaScript-like exception"
      ],
      answer: 1,
      explanation: "String literals are stored in read-only memory sections (.rodata). Attempting to mutate them invokes undefined behavior and typically triggers an immediate SIGSEGV."
    }
  ]
};


// ============================================================================
// QUIZMASTER - PYTHON QUESTIONS (30 Easy + 30 Moderate + 30 Hard = 90 Questions)
// ============================================================================

window.PYTHON_QUESTIONS = {
  easy: [
    {
      id: "py-e-01",
      question: "Who created the Python programming language in 1991?",
      options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"],
      answer: 0,
      explanation: "Guido van Rossum developed Python in the late 1980s and released the first version in 1991 at CWI in the Netherlands."
    },
    {
      id: "py-e-02",
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "function", "def", "define"],
      answer: 2,
      explanation: "The 'def' keyword is used to define functions in Python, followed by the function name, parentheses, and a colon."
    },
    {
      id: "py-e-03",
      question: "How do you write a single-line comment in Python?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "# This is a comment",
        "-- This is a comment"
      ],
      answer: 2,
      explanation: "In Python, single-line comments begin with the hash symbol (#) and continue to the end of the line."
    },
    {
      id: "py-e-04",
      question: "What does the exponentiation operator look like in Python?",
      options: ["^", "**", "^^", "exp()"],
      answer: 1,
      explanation: "The '**' operator performs exponentiation in Python (e.g., 2 ** 3 evaluates to 8). The '^' operator is bitwise XOR."
    },
    {
      id: "py-e-05",
      question: "What is the result of 17 // 3 in Python?",
      options: ["5.666", "5", "6", "2"],
      answer: 1,
      explanation: "The '//' operator performs floor division, discarding the fractional part and returning the largest integer less than or equal to the quotient (5)."
    },
    {
      id: "py-e-06",
      question: "Which Python data structure is defined using square brackets [] and is mutable?",
      options: ["tuple", "list", "set", "dict"],
      answer: 1,
      explanation: "Lists are ordered, mutable sequences in Python defined with square brackets: [1, 2, 3]."
    },
    {
      id: "py-e-07",
      question: "Which Python data structure is defined using parentheses () and is immutable?",
      options: ["list", "tuple", "dict", "array"],
      answer: 1,
      explanation: "Tuples are ordered, immutable collections defined with parentheses: (1, 2, 3). Elements cannot be modified after creation."
    },
    {
      id: "py-e-08",
      question: "Which data structure stores unique elements in an unordered collection?",
      options: ["list", "tuple", "set", "string"],
      answer: 2,
      explanation: "A 'set' stores unique, unordered, and unindexed elements using curly braces: {1, 2, 3} or set()."
    },
    {
      id: "py-e-09",
      question: "Which built-in function returns the number of items in a list, string, or collection?",
      options: ["size()", "count()", "len()", "length()"],
      answer: 2,
      explanation: "len() is the standard Python built-in function that returns the length (cardinality) of an object."
    },
    {
      id: "py-e-10",
      question: "What is the output of print(type(3.14)) in Python?",
      options: ["<class 'double'>", "<class 'float'>", "<class 'decimal'>", "<class 'number'>"],
      answer: 1,
      explanation: "Floating-point numbers in Python belong to the built-in type '<class 'float'>'."
    },
    {
      id: "py-e-11",
      question: "How are code blocks (scopes) delimited in Python?",
      options: [
        "Curly braces { }",
        "Begin and End keywords",
        "Whitespace indentation (tabs or spaces)",
        "Semicolons ;"
      ],
      answer: 2,
      explanation: "Unlike languages using braces, Python uses indentation (consistent spaces or tabs) to delimit blocks of code."
    },
    {
      id: "py-e-12",
      question: "What is the output of bool(0) in Python?",
      options: ["True", "False", "None", "Error"],
      answer: 1,
      explanation: "In Python, 0, 0.0, empty collections ('', [], {}, set()), and None evaluate to False in boolean context (falsy values)."
    },
    {
      id: "py-e-13",
      question: "Which keyword is used to import modules and libraries into Python?",
      options: ["include", "require", "import", "using"],
      answer: 2,
      explanation: "The 'import' keyword loads external or standard library modules (e.g., import math, import json)."
    },
    {
      id: "py-e-14",
      question: "What is the output of: print('Py' * 3)?",
      options: ["Py 3", "PyPyPy", "Py, Py, Py", "TypeError"],
      answer: 1,
      explanation: "In Python, multiplying a string by an integer repeats the string that many times: 'Py' * 3 yields 'PyPyPy'."
    },
    {
      id: "py-e-15",
      question: "Which method is used to add an item to the end of a Python list?",
      options: ["push()", "add()", "append()", "insert()"],
      answer: 2,
      explanation: "list.append(item) adds a single item to the end of a mutable list in-place."
    },
    {
      id: "py-e-16",
      question: "Which method is used to remove and return the last item from a list?",
      options: ["delete()", "pop()", "remove()", "discard()"],
      answer: 1,
      explanation: "list.pop() removes and returns the item at the given index (defaulting to the last item)."
    },
    {
      id: "py-e-17",
      question: "What does range(1, 5) generate when iterated in Python?",
      options: ["1, 2, 3, 4, 5", "1, 2, 3, 4", "0, 1, 2, 3, 4", "2, 3, 4"],
      answer: 1,
      explanation: "range(start, stop) generates integers from start up to but NOT including stop: 1, 2, 3, 4."
    },
    {
      id: "py-e-18",
      question: "Which keyword represents the absence of a value or null object in Python?",
      options: ["null", "nil", "void", "None"],
      answer: 3,
      explanation: "'None' is a singleton object of type NoneType in Python, denoting the lack of a value."
    },
    {
      id: "py-e-19",
      question: "Which comparison operator checks if two variables point to the exact same object in memory?",
      options: ["==", "is", "equals", "==="],
      answer: 1,
      explanation: "The 'is' operator checks for object identity (same memory address via id()), while '==' checks for equality of values."
    },
    {
      id: "py-e-20",
      question: "Which of the following is an immutable data type in Python?",
      options: ["list", "dict", "str", "set"],
      answer: 2,
      explanation: "Strings ('str') are immutable in Python. Once created, their individual characters cannot be modified in place."
    },
    {
      id: "py-e-21",
      question: "What is the output of print(10 % 3)?",
      options: ["3", "1", "3.33", "0"],
      answer: 1,
      explanation: "The modulo operator '%' returns the remainder of the division: 10 divided by 3 is 3 with remainder 1."
    },
    {
      id: "py-e-22",
      question: "How do you access the value associated with key 'name' in a dictionary d = {'name': 'Alice'}?",
      options: ["d.name", "d['name']", "d(name)", "d->name"],
      answer: 1,
      explanation: "Dictionary values are accessed by key using square bracket subscript notation: d['name'], or d.get('name')."
    },
    {
      id: "py-e-23",
      question: "What is the purpose of the 'pass' statement in Python?",
      options: [
        "Passes variables to another function",
        "A null statement that does nothing; used as a placeholder where code is syntactically required",
        "Skips the current loop iteration",
        "Terminates the program cleanly"
      ],
      answer: 1,
      explanation: "'pass' is a syntactic placeholder used when an empty block is required by grammar (e.g. empty function or class stub)."
    },
    {
      id: "py-e-24",
      question: "Which function converts a string '42' into an integer in Python?",
      options: ["toInt('42')", "int('42')", "parse('42')", "Number('42')"],
      answer: 1,
      explanation: "The built-in int() constructor parses a valid string or numeric value into an integer."
    },
    {
      id: "py-e-25",
      question: "What is the output of print('hello'.upper())?",
      options: ["Hello", "HELLO", "hello", "Error"],
      answer: 1,
      explanation: "The str.upper() method returns a copy of the string converted entirely to uppercase letters."
    },
    {
      id: "py-e-26",
      question: "What is the index of the first character in a Python string?",
      options: ["-1", "0", "1", "None"],
      answer: 1,
      explanation: "Python sequences are zero-indexed; the first character is located at index 0."
    },
    {
      id: "py-e-27",
      question: "What index refers to the last element of a list or string in Python?",
      options: ["len()", "last", "-1", "0"],
      answer: 2,
      explanation: "Python supports negative indexing, where -1 refers to the last element, -2 to the second to last, etc."
    },
    {
      id: "py-e-28",
      question: "Which keyword is used to handle exceptions in Python alongside 'try'?",
      options: ["catch", "except", "error", "rescue"],
      answer: 1,
      explanation: "Python uses 'try' and 'except' blocks for exception handling (unlike Java/C++ which use try/catch)."
    },
    {
      id: "py-e-29",
      question: "What will print('a' in 'banana') return?",
      options: ["True", "False", "1", "None"],
      answer: 0,
      explanation: "The 'in' membership operator tests if a sequence (string, list, tuple, etc.) contains a specified sub-element."
    },
    {
      id: "py-e-30",
      question: "Which keyword is used for creating conditional branching in Python?",
      options: ["else if", "elseif", "elif", "case"],
      answer: 2,
      explanation: "Python uses 'elif' (short for else if) for subsequent conditional branches following an 'if' statement."
    }
  ],

  moderate: [
    {
      id: "py-m-01",
      question: "What is the output of the list comprehension: [x**2 for x in range(5) if x % 2 != 0]?",
      options: ["[1, 9]", "[0, 4, 16]", "[1, 4, 9]", "[1, 9, 25]"],
      answer: 0,
      explanation: "range(5) gives 0, 1, 2, 3, 4. The odd numbers are 1 and 3. Squaring them yields [1**2, 3**2] = [1, 9]."
    },
    {
      id: "py-m-02",
      question: "What is the dangerous pitfall of using mutable default arguments like 'def func(items=[])'?",
      options: [
        "The function crashes on second invocation",
        "The default list is created once at function definition time, so all calls that omit the argument share the same list instance and accumulate changes",
        "Python automatically converts lists to tuples",
        "Mutable default arguments cause memory leaks"
      ],
      answer: 1,
      explanation: "Default parameter expressions are evaluated once when the function is defined. The same list persists across subsequent calls."
    },
    {
      id: "py-m-03",
      question: "What is the output of the slice expression: 'Python'[::-1]?",
      options: ["'Python'", "'nohtyP'", "'P'", "IndexError"],
      answer: 1,
      explanation: "A step of -1 traverses the sequence in reverse order from the end to the beginning, reversing the string to 'nohtyP'."
    },
    {
      id: "py-m-04",
      question: "What do *args and **kwargs in a function definition permit?",
      options: [
        "*args accepts an arbitrary number of positional arguments as a tuple; **kwargs accepts arbitrary keyword arguments as a dictionary",
        "*args are pointers; **kwargs are double pointers",
        "*args must be integers; **kwargs must be strings",
        "They are deprecated syntax in Python 3"
      ],
      answer: 0,
      explanation: "*args packs excess positional parameters into a tuple, while **kwargs packs excess named keyword parameters into a dict."
    },
    {
      id: "py-m-05",
      question: "What does the 'with open(\"file.txt\") as f:' statement guarantee?",
      options: [
        "The file is encrypted automatically",
        "The file is automatically closed upon exiting the block, even if an exception occurs (context manager behavior)",
        "The file is loaded entirely into RAM cache",
        "The file cannot be modified by other processes"
      ],
      answer: 1,
      explanation: "The 'with' statement invokes the file object's context manager, ensuring f.close() is called automatically via __exit__."
    },
    {
      id: "py-m-06",
      question: "What is the difference between copy.copy() and copy.deepcopy() in Python?",
      options: [
        "copy() copies methods; deepcopy() copies attributes",
        "copy() creates a shallow copy (references nested objects); deepcopy() recursively clones nested objects creating entirely independent copies",
        "copy() is for lists only; deepcopy() is for dictionaries",
        "There is no difference"
      ],
      answer: 1,
      explanation: "Shallow copy constructs a new collection and inserts references to the original child items. Deep copy recursively duplicates all nested items."
    },
    {
      id: "py-m-07",
      question: "What will print(list(map(lambda x: x * 2, [1, 2, 3]))) output?",
      options: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "TypeError"],
      answer: 1,
      explanation: "map() applies the lambda function (x * 2) to each element in [1, 2, 3], resulting in [2, 4, 6]."
    },
    {
      id: "py-m-08",
      question: "What does the 'zip()' function do in Python?",
      options: [
        "Compresses files into a .zip archive",
        "Combines multiple iterables element-wise into an iterator of tuples",
        "Calculates the hash of two objects",
        "Sorts two lists in parallel"
      ],
      answer: 1,
      explanation: "zip(*iterables) takes elements from each iterable and aggregates them into tuples, stopping when the shortest iterable is exhausted."
    },
    {
      id: "py-m-09",
      question: "What is the output of print(bool([]), bool([0]))?",
      options: ["False False", "False True", "True False", "True True"],
      answer: 1,
      explanation: "An empty list [] is falsy (False). A non-empty list [0] has length 1 and is truthy (True), regardless of the element inside."
    },
    {
      id: "py-m-10",
      question: "What does the 'enumerate()' function return when looping over a list?",
      options: [
        "Only the elements in reverse order",
        "Pairs of (index, item) for each element in the iterable",
        "The count of duplicates",
        "A sorted copy of the list"
      ],
      answer: 1,
      explanation: "enumerate(iterable, start=0) yields tuples containing the current index and the corresponding element."
    },
    {
      id: "py-m-11",
      question: "What is the result of the expression: set([1, 2, 2, 3, 3, 3])?",
      options: ["{1, 2, 2, 3, 3, 3}", "{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)"],
      answer: 1,
      explanation: "Sets only store distinct, unique items. All duplicate entries are discarded, resulting in {1, 2, 3}."
    },
    {
      id: "py-m-12",
      question: "What is an f-string in Python (introduced in Python 3.6)?",
      options: [
        "A string formatted as a floating-point number",
        "A formatted string literal prefixed with 'f' or 'F' that interpolates expressions enclosed in curly braces { }",
        "A fixed-size byte string",
        "A frozen immutable string"
      ],
      answer: 1,
      explanation: "Formatted string literals (f-strings) let you embed Python expressions directly inside strings, e.g. f'Score: {score}'."
    },
    {
      id: "py-m-13",
      question: "What does the 'finally' clause do in a try-except-finally block?",
      options: [
        "Executes only if no exceptions occurred",
        "Always executes regardless of whether an exception was raised, handled, or not",
        "Executes only when an uncaught exception is raised",
        "Terminates the program after the try block"
      ],
      answer: 1,
      explanation: "The 'finally' block always runs prior to exiting the try statement, making it essential for resource cleanup (closing connections)."
    },
    {
      id: "py-m-14",
      question: "What does the 'else' block do when attached to a 'for' or 'while' loop in Python?",
      options: [
        "Executes on every iteration",
        "Executes when the loop terminates normally (without encountering a 'break' statement)",
        "Executes only if the loop raises an error",
        "Is invalid syntax in Python"
      ],
      answer: 1,
      explanation: "A loop's 'else' suite executes only if the loop finishes its iterations naturally without being interrupted by a 'break' statement."
    },
    {
      id: "py-m-15",
      question: "What will dict.get(key, default) return if the key is NOT present in the dictionary?",
      options: [
        "Throws a KeyError exception",
        "Returns the specified default value (or None if omitted) without throwing an error",
        "Inserts the key with the default value",
        "Returns False"
      ],
      answer: 1,
      explanation: "Unlike d[key] which raises KeyError, d.get(key, default) safely returns the default value if the key is missing."
    },
    {
      id: "py-m-16",
      question: "What is the output of print(type((1))) vs print(type((1,)))?",
      options: [
        "<class 'tuple'> and <class 'tuple'>",
        "<class 'int'> and <class 'tuple'>",
        "<class 'int'> and <class 'int'>",
        "<class 'tuple'> and <class 'int'>"
      ],
      answer: 1,
      explanation: "Parentheses alone indicate arithmetic grouping: (1) is an int. A single-element tuple requires a trailing comma: (1,)."
    },
    {
      id: "py-m-17",
      question: "What is the output of the string method '-'.join(['a', 'b', 'c'])?",
      options: ["'a-b-c-'", "'-a-b-c'", "'a-b-c'", "['a-b-c']"],
      answer: 2,
      explanation: "str.join(iterable) concatenates string elements of the iterable using the string as a separator between elements: 'a-b-c'."
    },
    {
      id: "py-m-18",
      question: "What does the 'any()' built-in function return for any([False, 0, '', 5])?",
      options: ["False", "True", "5", "None"],
      answer: 1,
      explanation: "any() returns True if at least one element of the iterable evaluates to truthy. Since 5 is truthy, it returns True."
    },
    {
      id: "py-m-19",
      question: "What does the 'all()' built-in function return for all([True, 1, 'text', ''])?",
      options: ["True", "False", "None", "Error"],
      answer: 1,
      explanation: "all() returns True only if every element in the iterable is truthy. Because '' (empty string) is falsy, all() returns False."
    },
    {
      id: "py-m-20",
      question: "What is the difference between list.sort() and the sorted() function?",
      options: [
        "sorted() modifies the list in place; list.sort() returns a new list",
        "list.sort() modifies the list in place and returns None; sorted() returns a new sorted list from any iterable",
        "sorted() only works on numbers",
        "There is no difference"
      ],
      answer: 1,
      explanation: "list.sort() mutates the original list in-place (returning None). sorted(iterable) creates and returns a brand-new sorted list."
    },
    {
      id: "py-m-21",
      question: "What is the output of the following dictionary comprehension: {x: x*2 for x in range(3)}?",
      options: [
        "{0: 0, 1: 2, 2: 4}",
        "{1: 2, 2: 4, 3: 6}",
        "[0, 2, 4]",
        "{0, 2, 4}"
      ],
      answer: 0,
      explanation: "For x in [0, 1, 2], the key is x and the value is x*2, creating {0: 0, 1: 2, 2: 4}."
    },
    {
      id: "py-m-22",
      question: "How does the 'global' keyword function inside a Python function?",
      options: [
        "Declares that the function can be called from anywhere",
        "Allows a function to modify a variable defined at the module-level (global scope)",
        "Makes all variables in the function global",
        "Exports the variable to the operating system environment"
      ],
      answer: 1,
      explanation: "Without the 'global' keyword, assigning to a variable inside a function creates a local variable instead of modifying the module-level variable."
    },
    {
      id: "py-m-23",
      question: "What does the 'nonlocal' keyword do in Python?",
      options: [
        "Declares a variable in the global namespace",
        "Allows an inner nested function to rebind variables in an outer enclosing function scope (excluding global scope)",
        "Exports variables to thread-local storage",
        "Prevents variables from being garbage collected"
      ],
      answer: 1,
      explanation: "'nonlocal' binds an identifier to a previously bound variable in the nearest enclosing function scope, skipping local and global scopes."
    },
    {
      id: "py-m-24",
      question: "What happens when you try to use a mutable list as a key in a Python dictionary?",
      options: [
        "It is converted to a string automatically",
        "Raises a TypeError: unhashable type: 'list'",
        "It is allowed and works normally",
        "It overwrites the previous dictionary key"
      ],
      answer: 1,
      explanation: "Dictionary keys must be hashable and immutable. Because lists are mutable, they do not implement __hash__ and raise a TypeError."
    },
    {
      id: "py-m-25",
      question: "What is the result of set union between {1, 2} and {2, 3} using operator '|'?",
      options: ["{2}", "{1, 2, 3}", "{1, 3}", "[1, 2, 2, 3]"],
      answer: 1,
      explanation: "The '|' operator computes the union of two sets, producing a new set containing all distinct elements from both sets: {1, 2, 3}."
    },
    {
      id: "py-m-26",
      question: "What is the result of set intersection between {1, 2, 3} and {2, 3, 4} using operator '&'?",
      options: ["{1, 4}", "{2, 3}", "{1, 2, 3, 4}", "{}"],
      answer: 1,
      explanation: "The '&' operator computes the intersection, keeping only elements present in both sets: {2, 3}."
    },
    {
      id: "py-m-27",
      question: "What is a lambda function in Python?",
      options: [
        "A function that runs asynchronously",
        "A small anonymous inline function defined with the 'lambda' keyword, containing a single expression whose result is returned",
        "A function imported from C libraries",
        "A recursive generator function"
      ],
      answer: 1,
      explanation: "Lambda functions are anonymous, single-expression functions: lambda arguments: expression."
    },
    {
      id: "py-m-28",
      question: "What does the '__init__()' method represent in a Python class?",
      options: [
        "A destructor that cleans up objects",
        "The constructor / initializer method that initializes attributes when an object is instantiated",
        "A static class factory method",
        "The method that compiles Python code to bytecode"
      ],
      answer: 1,
      explanation: "__init__ is called immediately after a new instance of the class is created, allowing attributes to be initialized with caller arguments."
    },
    {
      id: "py-m-29",
      question: "What is the purpose of the 'self' parameter in Python instance methods?",
      options: [
        "A keyword that represents the parent class",
        "An explicit reference to the current instance of the class upon which the method was invoked",
        "A pointer to the global namespace",
        "A reference to the Python interpreter"
      ],
      answer: 1,
      explanation: "By convention, 'self' is the first parameter of instance methods, holding a reference to the specific object instance being operated on."
    },
    {
      id: "py-m-30",
      question: "What does the 'filter()' built-in function do in Python?",
      options: [
        "Removes duplicate items from a sequence",
        "Constructs an iterator from elements of an iterable for which a filtering function returns True",
        "Sorts elements in descending order",
        "Extracts keys from a dictionary"
      ],
      answer: 1,
      explanation: "filter(function, iterable) filters elements of an iterable through a predicate function, retaining items where function(item) is True."
    }
  ],

  hard: [
    {
      id: "py-h-01",
      question: "What is the Global Interpreter Lock (GIL) in CPython?",
      options: [
        "A security firewall preventing unauthorized file writes",
        "A mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously in CPython",
        "A lock that stops infinite loops automatically",
        "A debugger tool in the standard library"
      ],
      answer: 1,
      explanation: "The GIL prevents multi-threaded CPython programs from running Python bytecode concurrently across multiple CPU cores, though I/O operations release the GIL."
    },
    {
      id: "py-h-02",
      question: "What is the fundamental difference between a regular function and a generator function in Python?",
      options: [
        "Generators are written in C",
        "Generators contain the 'yield' statement, suspending execution and maintaining state between calls to produce a lazy iterator stream",
        "Generators cannot take arguments",
        "Generators do not support exception handling"
      ],
      answer: 1,
      explanation: "When a function contains 'yield', calling it returns a generator object. Execution freezes at each 'yield' until next() is requested, saving memory."
    },
    {
      id: "py-h-03",
      question: "How does Method Resolution Order (MRO) work in Python 3 multiple inheritance?",
      options: [
        "Depth-first search from left to right",
        "C3 Linearization algorithm (preserving monotonicity and local precedence order)",
        "Breadth-first search randomly",
        "Reverse chronological declaration order"
      ],
      answer: 1,
      explanation: "Python uses the C3 Linearization algorithm to compute the MRO, guaranteeing that parent classes appear after child classes and ordering is preserved."
    },
    {
      id: "py-h-04",
      question: "What is a 'metaclass' in Python?",
      options: [
        "A class with more than 100 methods",
        "The class of a class; a blueprint that defines how classes themselves are constructed and behave (by default, 'type')",
        "A class imported from another package",
        "A virtual base class from abc"
      ],
      answer: 1,
      explanation: "Just as an object is an instance of a class, a class is an instance of a metaclass. 'type' is the default metaclass in Python."
    },
    {
      id: "py-h-05",
      question: "What is the purpose of defining '__slots__' in a Python class?",
      options: [
        "Restricts the number of instances created",
        "Replaces the default instance __dict__ with a fixed-size descriptor array, significantly reducing memory overhead per instance and preventing arbitrary attribute creation",
        "Enables slot-machine randomization algorithms",
        "Generates database migrations automatically"
      ],
      answer: 1,
      explanation: "__slots__ tells Python not to create a dynamic __dict__ for each instance, saving significant memory when instantiating millions of objects."
    },
    {
      id: "py-h-06",
      question: "What is a Python decorator?",
      options: [
        "A graphical UI theme package",
        "A callable that takes another function or class as an argument, extends or alters its behavior without modifying its source code, and returns the modified callable",
        "A type of CSS stylesheet for Python scripts",
        "A tool for formatting code style"
      ],
      answer: 1,
      explanation: "Decorators use the @decorator syntax to wrap functions or methods, adding functionality like logging, caching, or authentication cleanly."
    },
    {
      id: "py-h-07",
      question: "Why should you use 'functools.wraps' inside a custom decorator?",
      options: [
        "To compile the function into C bytecode",
        "To preserve the original wrapped function's metadata, such as __name__, __doc__, and annotations",
        "To force the decorator to run in a separate thread",
        "To prevent exceptions inside the wrapper"
      ],
      answer: 1,
      explanation: "@functools.wraps(func) copies attributes like __name__ and docstrings from the wrapped function onto the inner wrapper function, aiding debugging."
    },
    {
      id: "py-h-08",
      question: "What methods must an object implement to satisfy the Python Context Manager protocol?",
      options: [
        "__start__() and __stop__()",
        "__open__() and __close__()",
        "__enter__() and __exit__()",
        "__init__() and __del__()"
      ],
      answer: 2,
      explanation: "The context manager protocol requires __enter__(self) (which returns the managed resource) and __exit__(self, exc_type, exc_val, exc_tb) for teardown."
    },
    {
      id: "py-h-09",
      question: "What is the difference between '__repr__' and '__str__' dunder methods?",
      options: [
        "__repr__ is for informal end-user display; __str__ is for internal debugging",
        "__str__ provides a readable, user-friendly string; __repr__ provides an unambiguous formal representation typically usable to recreate the object via eval()",
        "They are identical and called interchangeably",
        "__repr__ only applies to numbers"
      ],
      answer: 1,
      explanation: "__str__ is meant for humans/end-users. __repr__ is unambiguous and aimed at developers, ideally looking like valid Python code to recreate the object."
    },
    {
      id: "py-h-10",
      question: "How does Python handle memory management and garbage collection?",
      options: [
        "Manual malloc/free only",
        "Primary reference counting augmented by a cyclical generational garbage collector to detect and break reference cycles",
        "Mark-and-sweep only",
        "Stop-the-world tracing collector only"
      ],
      answer: 1,
      explanation: "Python deallocates objects immediately when their reference count drops to 0. A generational GC (generations 0, 1, 2) runs periodically to clean circular references."
    },
    {
      id: "py-h-11",
      question: "What does 'yield from <iterable>' accomplish inside a generator?",
      options: [
        "Terminates the generator immediately",
        "Delegates generation directly to a sub-generator or iterable, forwarding values and bidirectional two-way communication (send/throw)",
        "Spawns a new background process",
        "Yields a tuple of all remaining elements"
      ],
      answer: 1,
      explanation: "'yield from' transparently establishes a direct bidirectional channel between the caller and the sub-generator, forwarding .send() and .throw() calls."
    },
    {
      id: "py-h-12",
      question: "What is the Descriptor protocol in Python?",
      options: [
        "A system for documenting code with docstrings",
        "An object attribute whose access is overridden by implementing at least one of __get__(), __set__(), or __delete__() methods",
        "A network socket protocol",
        "A file descriptor wrapper in os"
      ],
      answer: 1,
      explanation: "Descriptors power Python's properties, methods, @classmethod, and @staticmethod by intercepting attribute lookup, assignment, and deletion."
    },
    {
      id: "py-h-13",
      question: "What is the difference between a Data Descriptor and a Non-Data Descriptor?",
      options: [
        "Data descriptors define __set__() and/or __delete__(); non-data descriptors define only __get__()",
        "Data descriptors only store integers",
        "Non-data descriptors take precedence over instance __dict__",
        "There is no functional distinction"
      ],
      answer: 0,
      explanation: "If an object defines __set__ or __delete__, it is a Data Descriptor and takes precedence over instance __dict__ lookup. Non-data descriptors (like regular methods) can be overridden by instance attributes."
    },
    {
      id: "py-h-14",
      question: "What is the output of the following code?\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    return x\nprint(outer())",
      options: ["10", "15", "5", "UnboundLocalError"],
      answer: 1,
      explanation: "The 'nonlocal' keyword allows inner() to rebind x in outer()'s scope, incrementing it from 10 to 15."
    },
    {
      id: "py-h-15",
      question: "What does the '__call__()' dunder method enable for an object instance?",
      options: [
        "Enables making HTTP network calls",
        "Allows the instance itself to be called as a function (e.g. obj(arg1, arg2))",
        "Calls the garbage collector",
        "Triggers method chaining"
      ],
      answer: 1,
      explanation: "Defining __call__(self, *args, **kwargs) makes instances of a class callable just like standard functions."
    },
    {
      id: "py-h-16",
      question: "What happens if a class defines '__eq__' without defining '__hash__'?",
      options: [
        "The class inherits the default object hash method",
        "Python automatically sets __hash__ = None, making instances of the class unhashable (cannot be used in sets or dict keys)",
        "The class throws a compile error",
        "Instances produce random hash integers"
      ],
      answer: 1,
      explanation: "To preserve the hash contract (equal objects must have equal hashes), defining __eq__ without __hash__ causes Python to mark __hash__ as None, rendering instances unhashable."
    },
    {
      id: "py-h-17",
      question: "What is the difference between 'async def' and standard 'def' functions in Python?",
      options: [
        "'async def' functions run automatically in parallel on multiple CPU cores",
        "'async def' defines a coroutine function that returns a coroutine object when called, which must be awaited or scheduled on an event loop",
        "'async def' functions cannot return values",
        "'async def' is deprecated in favor of threading"
      ],
      answer: 1,
      explanation: "'async def' creates a native coroutine. Calling it does not execute its body immediately; it returns a coroutine object that must be awaited within an asyncio event loop."
    },
    {
      id: "py-h-18",
      question: "What is the output of print(256 is 256) vs print(1000 is 1000) in standard CPython interactive shell?",
      options: [
        "True True",
        "True False (due to small integer caching for integers between -5 and 256)",
        "False False",
        "False True"
      ],
      answer: 1,
      explanation: "CPython pre-allocates and caches small integer singletons from -5 to 256. For 1000, new separate object instances are created, so 'is' identity fails in interactive mode."
    },
    {
      id: "py-h-19",
      question: "What is the purpose of the 'walrus operator' (:=) introduced in Python 3.8?",
      options: [
        "Compares two strings for similarity",
        "Assignment expression: assigns a value to a variable as part of a larger expression (e.g. while (n := len(a)) > 0:)",
        "Creates underwater simulations",
        "Performs bitwise bit shifting"
      ],
      answer: 1,
      explanation: "The walrus operator (:=) allows assignment expressions, letting you name and bind values inline inside conditionals and comprehension clauses."
    },
    {
      id: "py-h-20",
      question: "What is the role of '__new__' versus '__init__' in Python object creation?",
      options: [
        "__init__ allocates memory; __new__ initializes values",
        "__new__ is the static method that actually allocates and returns the new instance; __init__ initializes the newly created instance",
        "__new__ is only used for integers",
        "They are aliases of each other"
      ],
      answer: 1,
      explanation: "__new__(cls, ...) is the true constructor that creates and returns the raw object instance. __init__(self, ...) is the initializer called immediately after."
    },
    {
      id: "py-h-21",
      question: "How does the 'weakref' module help prevent memory leaks in Python?",
      options: [
        "Compresses memory usage by 50%",
        "Allows creating references to objects without increasing their reference count, allowing the garbage collector to reclaim them if no strong references remain",
        "Prevents circular imports",
        "Deletes dead variables after 10 seconds"
      ],
      answer: 1,
      explanation: "Weak references do not increase an object's reference count, preventing circular reference retention in caches and observer patterns."
    },
    {
      id: "py-h-22",
      question: "What is a 'closure' in Python?",
      options: [
        "Closing an open file descriptor",
        "A nested function that retains bindings to free variables in its lexical enclosing scope even after the outer function has finished executing",
        "A class without any subclasses",
        "The end of a program execution"
      ],
      answer: 1,
      explanation: "A closure occurs when an inner function remembers and has access to variables from its lexical enclosing scope even after the outer function has returned."
    },
    {
      id: "py-h-23",
      question: "What does '__mro__' attribute on a class show?",
      options: [
        "Memory usage of the class",
        "A tuple of classes showing the Method Resolution Order searched when looking up methods and attributes",
        "Module Release Order",
        "Machine code representations"
      ],
      answer: 1,
      explanation: "The __mro__ (or .mro()) attribute displays the linearization order of ancestor classes inspected during attribute lookup."
    },
    {
      id: "py-h-24",
      question: "What is the effect of using 'super()' without arguments inside an instance method in Python 3?",
      options: [
        "Causes a compilation syntax error",
        "Automatically resolves to super(__class__, self), looking up the next class in the instance's MRO chain",
        "Calls all methods in all parent classes simultaneously",
        "Resets the instance state to default"
      ],
      answer: 1,
      explanation: "In Python 3, zero-argument super() automatically injects the current class (__class__) and instance (self), correctly traversing the cooperative MRO."
    },
    {
      id: "py-h-25",
      question: "What does 'types.MethodType(func, obj)' do dynamically in Python?",
      options: [
        "Verifies the return type of func",
        "Binds a standalone function to an object instance as a bound method at runtime",
        "Compiles the function to Cython",
        "Removes the method from the class"
      ],
      answer: 1,
      explanation: "types.MethodType dynamically binds an unbound function to an instance so that calling obj.func() automatically supplies 'self' as the first argument."
    },
    {
      id: "py-h-26",
      question: "What is structural pattern matching in Python 3.10+ ('match' and 'case')?",
      options: [
        "A simple switch statement that matches only integer values",
        "A powerful control flow construct that matches subject values against structural patterns, extracting variables and checking types and shapes simultaneously",
        "A regex engine replacement",
        "A database query language"
      ],
      answer: 1,
      explanation: "The match/case statement supports destructuring sequences, mappings, class instances, guards, and wildcards beyond simple value equality."
    },
    {
      id: "py-h-27",
      question: "What is the purpose of the '__missing__' method in a class subclassing 'dict'?",
      options: [
        "Deletes missing keys permanently",
        "Called by dict.__getitem__ whenever a requested key is not found in the dictionary, providing custom fallback values (like collections.defaultdict)",
        "Throws a custom fatal exception",
        "Logs missing keys to disk"
      ],
      answer: 1,
      explanation: "When subclassing dict, defining __missing__(self, key) handles missing key lookups gracefully without raising a KeyError immediately."
    },
    {
      id: "py-h-28",
      question: "What does 'sys.intern()' do to strings in Python?",
      options: [
        "Encrypts the string with AES-256",
        "Forces the string to be entered into the global interned string table, ensuring all identical strings share the exact same memory address (enabling fast pointer 'is' comparisons)",
        "Translates strings into international UTF-32",
        "Converts strings to uppercase"
      ],
      answer: 1,
      explanation: "Interning strings forces the interpreter to reuse a single unique string object in memory, allowing O(1) pointer comparison via 'is' instead of O(N) character comparison."
    },
    {
      id: "py-h-29",
      question: "What is the output of the following generator expression?\ng = (x for x in range(3))\nprint(list(g))\nprint(list(g))",
      options: [
        "[0, 1, 2] and [0, 1, 2]",
        "[0, 1, 2] and []",
        "[] and [0, 1, 2]",
        "Throws a StopIteration exception on second print"
      ],
      answer: 1,
      explanation: "Generators are single-use iterators. Once fully consumed by list(g), the generator is exhausted; subsequent calls yield an empty list []."
    },
    {
      id: "py-h-30",
      question: "What is the difference between '__getattr__' and '__getattribute__'?",
      options: [
        "They are exact synonyms",
        "'__getattribute__' is invoked unconditionally for every attribute lookup; '__getattr__' is only called as a fallback when the attribute is NOT found in the instance or class hierarchy",
        "'__getattr__' is called first, then '__getattribute__'",
        "'__getattr__' only handles private attributes starting with underscore"
      ],
      answer: 1,
      explanation: "__getattribute__ intercepts all attribute lookups. Only if the attribute does not exist (or __getattribute__ explicitly raises AttributeError) does Python fall back to __getattr__."
    }
  ]
};


// ============================================================================
// QUIZMASTER - DATA STRUCTURES (DS) QUESTIONS (30 Easy + 30 Moderate + 30 Hard = 90 Questions)
// ============================================================================

window.DS_QUESTIONS = {
  easy: [
    {
      id: "ds-e-01",
      question: "Which data structure follows the Last-In, First-Out (LIFO) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: 1,
      explanation: "A Stack operates on LIFO (Last In First Out). The most recently added element is the first one removed."
    },
    {
      id: "ds-e-02",
      question: "Which data structure follows the First-In, First-Out (FIFO) principle?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: 1,
      explanation: "A Queue operates on FIFO (First In First Out). The first element added is the first one to be removed, like a real-life waiting line."
    },
    {
      id: "ds-e-03",
      question: "What is the time complexity to access an element by its index in an array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: 0,
      explanation: "Arrays occupy contiguous memory, so accessing an element at index 'i' is an O(1) constant time mathematical offset calculation: base_address + (i * element_size)."
    },
    {
      id: "ds-e-04",
      question: "What are the two fundamental operations performed on a Stack?",
      options: ["Enqueue and Dequeue", "Push and Pop", "Insert and Extract", "Add and Remove"],
      answer: 1,
      explanation: "'Push' inserts an item onto the top of the stack, and 'Pop' removes the top item from the stack."
    },
    {
      id: "ds-e-05",
      question: "What are the two fundamental operations performed on a Queue?",
      options: ["Push and Pop", "Enqueue and Dequeue", "Shift and Unshift", "Top and Peek"],
      answer: 1,
      explanation: "'Enqueue' appends an item to the rear/back of the queue, and 'Dequeue' removes the item from the front."
    },
    {
      id: "ds-e-06",
      question: "What is the condition that must be met before performing a Binary Search on an array?",
      options: [
        "The array must contain only positive integers",
        "The array must be sorted in ascending or descending order",
        "The array size must be a power of two",
        "The array must not contain duplicate items"
      ],
      answer: 1,
      explanation: "Binary search repeatedly divides the search space in half based on magnitude comparisons, which requires the underlying array to be pre-sorted."
    },
    {
      id: "ds-e-07",
      question: "What is the time complexity of Binary Search in the worst case?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 2,
      explanation: "Binary Search halves the search space at each comparison step, resulting in a worst-case logarithmic time complexity of O(log n)."
    },
    {
      id: "ds-e-08",
      question: "What does each node in a Singly Linked List contain?",
      options: [
        "Data and two pointers (left and right)",
        "Data and a pointer to the next node",
        "Only the data value",
        "Data and a pointer to the previous node"
      ],
      answer: 1,
      explanation: "A singly linked list node contains two components: the data payload and a pointer/reference to the next node in sequence."
    },
    {
      id: "ds-e-09",
      question: "What is the pointer called that marks the starting node of a Linked List?",
      options: ["Root", "Head", "Top", "Front"],
      answer: 1,
      explanation: "The 'Head' pointer references the very first node of a linked list. If Head is NULL, the list is empty."
    },
    {
      id: "ds-e-10",
      question: "What value does the 'next' pointer of the last node in a standard Singly Linked List hold?",
      options: ["0", "Head", "NULL / None", "-1"],
      answer: 2,
      explanation: "The tail node of a linear singly linked list points to NULL (or None), signaling the end of the chain."
    },
    {
      id: "ds-e-11",
      question: "In a Tree data structure, what is a node called that has no children?",
      options: ["Root node", "Internal node", "Leaf node", "Ancestor node"],
      answer: 2,
      explanation: "A leaf node (or terminal node) is any node in a tree that has degree 0 (no child nodes)."
    },
    {
      id: "ds-e-12",
      question: "What is the topmost node of a tree hierarchy called?",
      options: ["Peak", "Root", "Crown", "Stem"],
      answer: 1,
      explanation: "The 'Root' is the ultimate ancestor node at the top of a tree from which all other nodes descend."
    },
    {
      id: "ds-e-13",
      question: "What is the maximum number of children any node can have in a Binary Tree?",
      options: ["1", "2", "3", "Unlimited"],
      answer: 1,
      explanation: "In a binary tree, each node can have at most two children, typically referred to as the left child and right child."
    },
    {
      id: "ds-e-14",
      question: "Which of the following is considered a non-linear data structure?",
      options: ["Array", "Linked List", "Tree", "Stack"],
      answer: 2,
      explanation: "Trees and Graphs are non-linear data structures because elements are not sequenced contiguously in a single linear line."
    },
    {
      id: "ds-e-15",
      question: "What is the time complexity to insert a new node at the beginning (head) of a Singly Linked List?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: 0,
      explanation: "Inserting at the head requires simply pointing the new node's next pointer to the current head and updating the head pointer, which takes O(1) constant time."
    },
    {
      id: "ds-e-16",
      question: "What is an 'overflow' condition in a Stack?",
      options: [
        "Attempting to pop an element from an empty stack",
        "Attempting to push an element onto a full fixed-size stack",
        "A stack having more than 100 elements",
        "Converting a stack into a queue"
      ],
      answer: 1,
      explanation: "Stack overflow occurs when attempting to push a new item onto a stack that has already reached its maximum storage capacity."
    },
    {
      id: "ds-e-17",
      question: "What is an 'underflow' condition in a Stack or Queue?",
      options: [
        "Attempting to delete or pop an item from an empty data structure",
        "Adding an element when memory is full",
        "Traversing the list in reverse",
        "Allocating negative array bounds"
      ],
      answer: 0,
      explanation: "Underflow occurs when an operation attempts to remove or inspect an element from an empty data structure."
    },
    {
      id: "ds-e-18",
      question: "What is the time complexity of Linear Search in an array of size n in the worst case?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      answer: 2,
      explanation: "In the worst case (item at the very end or absent), Linear Search must inspect every one of the n elements, taking O(n) time."
    },
    {
      id: "ds-e-19",
      question: "Which data structure is naturally used to implement recursion by the system architecture?",
      options: ["Queue", "Call Stack", "Heap", "Hash Map"],
      answer: 1,
      explanation: "The runtime environment uses the Call Stack to store stack frames (local variables, parameters, return addresses) for active recursive function calls."
    },
    {
      id: "ds-e-20",
      question: "What components define a Graph data structure formally in computer science?",
      options: [
        "Rows and Columns",
        "Vertices (nodes) and Edges (connections between nodes)",
        "Keys and Values",
        "Heads and Tails"
      ],
      answer: 1,
      explanation: "A Graph G = (V, E) is composed of a set of Vertices (V) and a set of Edges (E) that connect pairs of vertices."
    },
    {
      id: "ds-e-21",
      question: "What is the degree of a vertex in an undirected graph?",
      options: [
        "The number of vertices in the graph",
        "The number of edges incident to (connected with) that vertex",
        "The weight of the vertex",
        "The depth of the vertex from the root"
      ],
      answer: 1,
      explanation: "In an undirected graph, the degree of a vertex is the count of edges connected directly to that vertex."
    },
    {
      id: "ds-e-22",
      question: "In a Doubly Linked List, what does each node contain?",
      options: [
        "Data and one next pointer",
        "Data, a pointer to the next node, and a pointer to the previous node",
        "Only two data fields",
        "A pointer to the root and a pointer to the leaf"
      ],
      answer: 1,
      explanation: "Doubly linked list nodes store data along with two links: one pointing forward to the next node, and one backward to the preceding node."
    },
    {
      id: "ds-e-23",
      question: "What is a circular linked list?",
      options: [
        "A linked list drawn in a circle",
        "A linked list where the last node's next pointer points back to the first node (head) rather than NULL",
        "A linked list with no data",
        "A tree with circular branches"
      ],
      answer: 1,
      explanation: "In a circular linked list, the final node references the head node, forming a closed continuous loop without NULL terminations."
    },
    {
      id: "ds-e-24",
      question: "What is the height of a tree with only a single root node?",
      options: ["0 (or 1 depending on edge vs node convention)", "2", "Infinity", "-1"],
      answer: 0,
      explanation: "By standard modern convention measuring height as the number of edges on the longest downward path to a leaf, a single-node tree has height 0 (or 1 if counting nodes)."
    },
    {
      id: "ds-e-25",
      question: "What is the operation called that looks at the top element of a stack without removing it?",
      options: ["Pop", "Peek (or Top)", "Scan", "View"],
      answer: 1,
      explanation: "'Peek' (or Top) inspects and returns the element currently at the top of the stack without popping it off."
    },
    {
      id: "ds-e-26",
      question: "Which sorting algorithm compares adjacent elements and swaps them if they are in the wrong order?",
      options: ["Quick Sort", "Bubble Sort", "Merge Sort", "Heap Sort"],
      answer: 1,
      explanation: "Bubble Sort steps through the list, comparing adjacent items and swapping them if out of order until the largest values bubble to the top."
    },
    {
      id: "ds-e-27",
      question: "What is the worst-case time complexity of Bubble Sort?",
      options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
      answer: 2,
      explanation: "In the worst case (reverse sorted array), Bubble Sort performs n*(n-1)/2 comparisons, resulting in O(n^2) quadratic time."
    },
    {
      id: "ds-e-28",
      question: "What data structure is used to implement a Breadth-First Search (BFS) graph traversal?",
      options: ["Stack", "Queue", "Binary Tree", "Priority Queue only"],
      answer: 1,
      explanation: "BFS explores nodes level by level in order of discovery, which is naturally managed using a FIFO Queue."
    },
    {
      id: "ds-e-29",
      question: "What data structure is used to implement a Depth-First Search (DFS) graph traversal?",
      options: ["Queue", "Stack (or call stack recursion)", "Hash Set", "Heap"],
      answer: 1,
      explanation: "DFS traverses as deep as possible along each branch before backtracking, requiring a LIFO Stack or recursive function calls."
    },
    {
      id: "ds-e-30",
      question: "What is a Hash Function?",
      options: [
        "A function that encrypts passwords with salt",
        "A function that converts a given key into a specific integer index within the bounds of a hash table array",
        "A recursive mathematical function",
        "A sorting function"
      ],
      answer: 1,
      explanation: "A hash function maps keys of arbitrary size to fixed-range integer index values within the hash table bucket array."
    }
  ],

  moderate: [
    {
      id: "ds-m-01",
      question: "What is the Inorder Traversal sequence of a Binary Search Tree (BST)?",
      options: [
        "Nodes visited in reverse descending order",
        "Nodes visited in strictly non-decreasing (sorted ascending) order",
        "Root node visited first, followed by leaves",
        "Leaves visited first, then root"
      ],
      answer: 1,
      explanation: "Inorder traversal visits Left subtree -> Root -> Right subtree. For any valid BST, this process outputs keys in strictly ascending sorted order."
    },
    {
      id: "ds-m-02",
      question: "What is the average and worst-case time complexity for searching a key in a Binary Search Tree (BST)?",
      options: [
        "Average: O(1), Worst: O(n)",
        "Average: O(log n), Worst: O(n) when skewed/degenerate",
        "Average: O(n log n), Worst: O(n^2)",
        "Average: O(log n), Worst: O(log n)"
      ],
      answer: 1,
      explanation: "On balanced trees, searching takes O(log n). If keys are inserted in sorted order, the BST degenerates into a linear linked list with O(n) search time."
    },
    {
      id: "ds-m-03",
      question: "What is a Min-Heap property in a complete binary tree?",
      options: [
        "The value of every parent node is greater than or equal to its children",
        "The value of every parent node is less than or equal to the values of its children, with the minimum element at the root",
        "All leaf nodes have negative values",
        "Every node has exactly two children"
      ],
      answer: 1,
      explanation: "In a Min-Heap, for every node i other than the root, parent(i) <= node(i). The root always contains the absolute minimum key."
    },
    {
      id: "ds-m-04",
      question: "What is the time complexity to insert an element into a Binary Heap of size n?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: 1,
      explanation: "Insertion appends the element at the end of the heap and 'bubbles up' (percolates up) along the tree height, taking at most O(log n) time."
    },
    {
      id: "ds-m-05",
      question: "What is the primary motivation for using a Circular Queue instead of a linear array Queue?",
      options: [
        "It supports sorting elements automatically",
        "It overcomes the limitation where unused space at the front of the array cannot be reused after dequeuing elements",
        "It allows infinite elements without memory limits",
        "It eliminates all pointer operations"
      ],
      answer: 1,
      explanation: "In a standard array queue, dequeuing leaves dead cells at the front. A circular queue wraps rear and front using modulo arithmetic ((rear + 1) % capacity)."
    },
    {
      id: "ds-m-06",
      question: "What is the time complexity of Merge Sort in all cases (best, average, and worst)?",
      options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
      answer: 1,
      explanation: "Merge Sort consistently divides the array into halves (log n levels) and performs O(n) linear work merging at each level, ensuring O(n log n) time in all cases."
    },
    {
      id: "ds-m-07",
      question: "What is the auxiliary space complexity required by standard top-down Merge Sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      answer: 2,
      explanation: "Merge Sort requires an auxiliary array of size O(n) to temporarily hold merged elements during the combining step."
    },
    {
      id: "ds-m-08",
      question: "What is the worst-case time complexity of Quick Sort, and when does it occur?",
      options: [
        "O(n log n) on random arrays",
        "O(n^2), occurring when the chosen pivot is consistently the smallest or largest element (such as already sorted arrays with first/last element pivot)",
        "O(n) on reverse arrays",
        "O(log n) when all elements are duplicates"
      ],
      answer: 1,
      explanation: "If unbalanced partitions occur repeatedly (e.g. 0 elements on one side, n-1 on the other), Quick Sort makes n recursive calls each taking O(n) work, resulting in O(n^2)."
    },
    {
      id: "ds-m-09",
      question: "What is the technique called when hash collisions are resolved by storing colliding elements in a linked list at the same bucket index?",
      options: ["Linear Probing", "Separate Chaining", "Quadratic Probing", "Double Hashing"],
      answer: 1,
      explanation: "In Separate Chaining, each bucket in the hash table points to a linked list (or dynamic array) holding all entries that hash to that same index."
    },
    {
      id: "ds-m-10",
      question: "What is 'clustering' in open addressing hash tables using linear probing?",
      options: [
        "Sorting keys into alphabetical clusters",
        "The phenomenon where occupied slots form long contiguous blocks, causing subsequent searches and insertions to take progressively longer",
        "Dividing the hash table across network clusters",
        "Merging duplicate hash values"
      ],
      answer: 1,
      explanation: "Linear probing suffers from primary clustering: when multiple keys collide, contiguous occupied blocks grow larger, causing severe collision cascades."
    },
    {
      id: "ds-m-11",
      question: "What is the Postfix notation (Reverse Polish Notation) of the infix expression: (A + B) * C?",
      options: ["A B + C *", "A B C + *", "* + A B C", "+ A B * C"],
      answer: 0,
      explanation: "(A + B) converts to postfix as 'A B +'. Multiplying this with C yields 'A B + C *'."
    },
    {
      id: "ds-m-12",
      question: "What is the prefix traversal (Preorder) of a tree?",
      options: [
        "Left subtree -> Root -> Right subtree",
        "Root -> Left subtree -> Right subtree",
        "Left subtree -> Right subtree -> Root",
        "Level-by-level top to bottom"
      ],
      answer: 1,
      explanation: "Preorder traversal visits the current Root node first, then recursively visits the Left subtree, and finally the Right subtree."
    },
    {
      id: "ds-m-13",
      question: "Which algorithmic paradigm does Dijkstra's shortest path algorithm employ?",
      options: ["Dynamic Programming", "Greedy Algorithm", "Backtracking", "Divide and Conquer"],
      answer: 1,
      explanation: "Dijkstra's algorithm is a greedy algorithm: it repeatedly selects the unvisited vertex with the minimum provisional distance from the source."
    },
    {
      id: "ds-m-14",
      question: "Under what condition does Dijkstra's algorithm fail to find the correct shortest path?",
      options: [
        "When the graph has cycles",
        "When the graph contains edges with negative weights",
        "When the graph is directed",
        "When vertices exceed 1,000"
      ],
      answer: 1,
      explanation: "Dijkstra assumes that adding an edge never decreases path cost. If negative weight edges exist, that greedy assumption breaks, requiring the Bellman-Ford algorithm instead."
    },
    {
      id: "ds-m-15",
      question: "What is a 'Spanning Tree' of a connected, undirected graph with V vertices?",
      options: [
        "A subgraph that contains all V vertices and exactly V edges with cycles",
        "A subgraph that is a tree including all V vertices connected with exactly (V - 1) edges and no cycles",
        "A complete bipartite subgraph",
        "The longest path between any two vertices"
      ],
      answer: 1,
      explanation: "A spanning tree is an acyclic connected subgraph encompassing all V vertices of the graph using minimal edges (exactly V - 1 edges)."
    },
    {
      id: "ds-m-16",
      question: "What is the time complexity of finding a cycle in an undirected graph using DFS?",
      options: ["O(V + E)", "O(V * E)", "O(V^2)", "O(E log V)"],
      answer: 0,
      explanation: "A DFS traversal tracks visited vertices and parent edges, detecting back-edges in O(V + E) linear time."
    },
    {
      id: "ds-m-17",
      question: "What is the load factor (\u03b1) of a hash table with n elements and m buckets?",
      options: ["\u03b1 = m / n", "\u03b1 = n / m", "\u03b1 = n * m", "\u03b1 = log(n/m)"],
      answer: 1,
      explanation: "The load factor \u03b1 = n / m represents the average number of items per bucket, used to decide when to rehash/resize."
    },
    {
      id: "ds-m-18",
      question: "Which of the following sorting algorithms is NOT in-place?",
      options: ["Heap Sort", "Standard Merge Sort", "Insertion Sort", "Selection Sort"],
      answer: 1,
      explanation: "Standard Merge Sort requires O(n) additional space to combine divided sublists, whereas Heap Sort, Insertion Sort, and Selection Sort are O(1) in-place."
    },
    {
      id: "ds-m-19",
      question: "What is the primary advantage of a Doubly Linked List over a Singly Linked List?",
      options: [
        "It uses less memory per node",
        "It allows bidirectional traversal (both forward and backward) and O(1) deletion of a node given only its pointer",
        "It guarantees sorted order",
        "It supports instant O(1) random index access"
      ],
      answer: 1,
      explanation: "Having both next and prev pointers allows traversing backwards and updating surrounding links during node removal in O(1) time without traversing from head."
    },
    {
      id: "ds-m-20",
      question: "In a binary tree, what is the maximum number of nodes at level 'L' (where root is at level 0)?",
      options: ["2 * L", "2^L", "2^(L + 1) - 1", "L^2"],
      answer: 1,
      explanation: "Level 0 has 2^0 = 1 node; Level 1 has 2^1 = 2 nodes; Level 2 has 2^2 = 4 nodes; Level L has up to 2^L nodes."
    },
    {
      id: "ds-m-21",
      question: "What is the relationship between the number of vertices V and edges E in any tree?",
      options: ["E = V", "E = V - 1", "E = V + 1", "E = 2 * V"],
      answer: 1,
      explanation: "Every tree with V vertices has exactly (V - 1) edges. Adding any edge introduces a cycle; removing any edge disconnects the tree."
    },
    {
      id: "ds-m-22",
      question: "Which data structure is most efficient for evaluating arithmetic expressions written in postfix notation?",
      options: ["Queue", "Stack", "Binary Search Tree", "Hash Map"],
      answer: 1,
      explanation: "A Stack evaluates postfix expressions: operands are pushed onto the stack, and when an operator is encountered, operands are popped, evaluated, and the result is pushed back."
    },
    {
      id: "ds-m-23",
      question: "What is a Deque (Double-Ended Queue)?",
      options: [
        "A queue with two priority levels",
        "A sequence container that allows insertion and deletion of elements at both the front and the rear ends in O(1) time",
        "A queue that holds two items per node",
        "A queue linked to two separate servers"
      ],
      answer: 1,
      explanation: "A Deque (pronounced 'deck') allows efficient O(1) push and pop operations at both ends (front and rear)."
    },
    {
      id: "ds-m-24",
      question: "What is a stable sorting algorithm?",
      options: [
        "An algorithm that never crashes or throws exceptions",
        "An algorithm that preserves the relative input order of records with equal keys in the sorted output",
        "An algorithm running in O(n log n) time",
        "An algorithm requiring O(1) auxiliary space"
      ],
      answer: 1,
      explanation: "Stability means if two elements have identical keys (e.g., two students with score 90), their original relative ordering is preserved after sorting."
    },
    {
      id: "ds-m-25",
      question: "Which of the following sorting algorithms is inherently stable?",
      options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
      answer: 2,
      explanation: "Standard Merge Sort is stable because during the merge step, ties between left and right arrays default to taking the element from the left (earlier) array."
    },
    {
      id: "ds-m-26",
      question: "What is the time complexity of building a Binary Heap from an arbitrary array of n elements using the bottom-up heapify algorithm?",
      options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
      answer: 1,
      explanation: "Applying sift-down bottom-up from index n/2 down to 0 takes O(n) linear time, mathematically bounded by the convergent series sum of (h / 2^h)."
    },
    {
      id: "ds-m-27",
      question: "What is a complete binary tree?",
      options: [
        "A tree where every node has exactly 2 children",
        "A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible",
        "A tree where all leaves have the same depth",
        "A tree whose height is O(1)"
      ],
      answer: 1,
      explanation: "A complete binary tree is full on all levels except potentially the last, where leaves fill contiguously from left to right, allowing compact array storage."
    },
    {
      id: "ds-m-28",
      question: "How are the left and right children of an element at index 'i' located in a 0-indexed array representation of a binary heap?",
      options: [
        "Left: 2*i, Right: 2*i + 1",
        "Left: 2*i + 1, Right: 2*i + 2",
        "Left: i + 1, Right: i + 2",
        "Left: i/2, Right: i/2 + 1"
      ],
      answer: 1,
      explanation: "In a 0-indexed array heap: parent = floor((i - 1)/2), left_child = 2*i + 1, and right_child = 2*i + 2."
    },
    {
      id: "ds-m-29",
      question: "What is the optimal data structure to implement an LRU (Least Recently Used) cache with O(1) get and put operations?",
      options: [
        "Array and Stack",
        "Hash Map combined with a Doubly Linked List",
        "Binary Search Tree and Queue",
        "Min-Heap and Array"
      ],
      answer: 1,
      explanation: "A Hash Map provides O(1) lookup of nodes, while a Doubly Linked List allows O(1) removal and re-insertion of accessed nodes to the head."
    },
    {
      id: "ds-m-30",
      question: "What does Topological Sorting on a Directed Acyclic Graph (DAG) produce?",
      options: [
        "A circular sequence of vertices",
        "A linear ordering of vertices such that for every directed edge (u, v), vertex u appears before vertex v in the ordering",
        "The shortest paths between all pairs of nodes",
        "A minimum spanning tree"
      ],
      answer: 1,
      explanation: "Topological sort orders DAG vertices linearly such that dependencies are always visited before dependent nodes (e.g. task scheduling, build systems)."
    }
  ],

  hard: [
    {
      id: "ds-h-01",
      question: "What is the defining balance condition of an AVL Tree?",
      options: [
        "Every node has equal numbers of descendants on both sides",
        "For any node, the difference in height between its left and right subtrees (Balance Factor) is at most 1 (-1, 0, or +1)",
        "The root is always colored black",
        "Left child is strictly less than right child"
      ],
      answer: 1,
      explanation: "AVL trees enforce the balance invariant: Balance Factor = height(Left) - height(Right) in {-1, 0, 1}. Violations are repaired via tree rotations."
    },
    {
      id: "ds-h-02",
      question: "Which rotation(s) are required to restore balance in an AVL tree after an insertion causes an imbalance in the Left child's Right subtree (LR case)?",
      options: [
        "Single Left Rotation",
        "Single Right Rotation",
        "Left Rotation on left child followed by Right Rotation on current node (Left-Right double rotation)",
        "Right Rotation followed by Right Rotation"
      ],
      answer: 2,
      explanation: "An LR imbalance requires a double rotation: first a Left rotation on the left child, transforming it into an LL shape, followed by a Right rotation on the node."
    },
    {
      id: "ds-h-03",
      question: "Which of the following is NOT a mandatory property of a Red-Black Tree?",
      options: [
        "Every node is either red or black, and the root is always black",
        "If a node is red, both of its children must be black (no two consecutive red nodes on any path)",
        "Every path from a node to any of its descendant NULL pointers must contain the same number of black nodes (black-height)",
        "Every leaf node must store positive numeric data"
      ],
      answer: 3,
      explanation: "Leaf nodes in Red-Black trees are sentinel NIL nodes (black) holding no user data. The 5 color and black-height rules ensure search complexity is strictly O(log n)."
    },
    {
      id: "ds-h-04",
      question: "What is the maximum possible height of a Red-Black Tree containing n internal nodes?",
      options: ["log2(n)", "2 * log2(n + 1)", "n / 2", "sqrt(n)"],
      answer: 1,
      explanation: "Because no path can contain two consecutive red nodes, the longest path is at most twice the shortest path, proving maximum height <= 2 * log2(n + 1)."
    },
    {
      id: "ds-h-05",
      question: "Why are B-Trees and B+ Trees preferred over binary search trees for database indexing and disk-based file systems?",
      options: [
        "B-Trees consume less memory than binary trees",
        "B-Trees have high branching factors (fanout), storing hundreds of keys per node to minimize expensive disk I/O seek operations",
        "B-Trees do not require sorting",
        "Binary trees cannot be stored on hard drives"
      ],
      answer: 1,
      explanation: "Disk reads transfer full blocks (pages). B-Trees pack hundreds of keys into one node matching the disk block size, reducing tree depth and costly disk seek times."
    },
    {
      id: "ds-h-06",
      question: "What is the key difference between a B-Tree and a B+ Tree?",
      options: [
        "B-Trees cannot store strings; B+ Trees can",
        "In a B+ Tree, data pointers are stored only in leaf nodes (which are linked sequentially in a linked list), while internal nodes store only routing keys",
        "B-Trees do not maintain balanced leaves",
        "B+ Trees have lower fanout than B-Trees"
      ],
      answer: 1,
      explanation: "In a B+ tree, internal nodes store index keys only, maximizing fanout. All record pointers reside in leaf nodes, which form a linked list for fast range queries."
    },
    {
      id: "ds-h-07",
      question: "What is the time complexity of Disjoint Set Union (DSU) operations using both Path Compression and Union by Rank?",
      options: [
        "O(log n)",
        "O(\u03b1(n)) nearly constant amortized time, where \u03b1 is the Inverse Ackermann function",
        "O(n)",
        "O(1) worst-case"
      ],
      answer: 1,
      explanation: "With both optimizations, m operations on n elements execute in O(m * \u03b1(n)) time. For all realistic inputs, \u03b1(n) <= 4, making it effectively O(1) amortized."
    },
    {
      id: "ds-h-08",
      question: "What is a Trie (Prefix Tree) data structure primarily optimized for?",
      options: [
        "Floating point matrix multiplications",
        "Fast retrieval and prefix searching of strings or keys over an alphabet",
        "Finding connected components in undirected graphs",
        "Calculating shortest paths in weighted networks"
      ],
      answer: 1,
      explanation: "Tries store keys along tree paths where edges represent characters, enabling O(L) search, insert, and auto-complete prefix matches (where L is key length)."
    },
    {
      id: "ds-h-09",
      question: "What is the time complexity to query a range sum and update an element in a Segment Tree of size n?",
      options: [
        "Query: O(1), Update: O(n)",
        "Query: O(log n), Update: O(log n)",
        "Query: O(n), Update: O(1)",
        "Query: O(log n), Update: O(1)"
      ],
      answer: 1,
      explanation: "A Segment Tree breaks down intervals hierarchically into a binary tree, enabling both point/range updates and range queries in O(log n) time."
    },
    {
      id: "ds-h-10",
      question: "What is a Fenwick Tree (Binary Indexed Tree / BIT)?",
      options: [
        "A binary tree whose nodes store 2D matrices",
        "An implicit tree represented as an array that calculates prefix sums and updates elements in O(log n) time using binary least significant bit (LSB) manipulation",
        "A tree with 16 children per node",
        "A hash table with binary keys"
      ],
      answer: 1,
      explanation: "A Fenwick tree stores partial prefix sums in an array using index & (-index) bit operations, achieving O(log n) prefix queries and updates with O(n) space."
    },
    {
      id: "ds-h-11",
      question: "What is the time complexity of the Floyd-Warshall all-pairs shortest path algorithm on a graph with V vertices?",
      options: ["O(V^2)", "O(V^3)", "O(V * E log V)", "O(E^2)"],
      answer: 1,
      explanation: "Floyd-Warshall uses three nested loops iterating over intermediate vertices k, source i, and destination j: O(V^3) dynamic programming time."
    },
    {
      id: "ds-h-12",
      question: "What does Tarjan's algorithm or Kosaraju's algorithm find in a directed graph?",
      options: [
        "The minimum spanning tree",
        "Strongly Connected Components (SCCs)",
        "The maximum bipartite matching",
        "Eulerian circuits"
      ],
      answer: 1,
      explanation: "Tarjan's and Kosaraju's algorithms discover all Strongly Connected Components (subgraphs where every vertex is reachable from every other vertex) in O(V + E)."
    },
    {
      id: "ds-h-13",
      question: "What is the amortized cost of inserting an element into a dynamic array (like std::vector or Python list) using the standard geometric doubling strategy?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      answer: 2,
      explanation: "Although occasional reallocation copies n elements (O(n)), doubling the size ensures that n insertions cost O(n) total copy work, yielding O(1) amortized time."
    },
    {
      id: "ds-h-14",
      question: "What is a Splay Tree?",
      options: [
        "A static read-only tree",
        "A self-adjusting binary search tree where recently accessed elements are moved to the root via splay rotations, providing O(log n) amortized time",
        "A tree with variable degrees",
        "A 3-dimensional kd-tree"
      ],
      answer: 1,
      explanation: "Splay trees perform tree rotations on every access, moving accessed items to the root. Highly frequent items stay near the top, offering excellent temporal locality."
    },
    {
      id: "ds-h-15",
      question: "What is a Treap data structure?",
      options: [
        "A combination of a Tree and a Map",
        "A randomized data structure combining a Binary Search Tree (on keys) and a Binary Heap (on randomly generated priorities)",
        "A triple-linked list",
        "A threaded binary tree"
      ],
      answer: 1,
      explanation: "Treap (Tree + Heap) maintains BST order on keys and Heap order on random priorities assigned to nodes, yielding O(log n) expected height without complex rebalancing."
    },
    {
      id: "ds-h-16",
      question: "What is the time complexity of Kruskal's algorithm to compute a Minimum Spanning Tree (MST) on a graph with E edges and V vertices?",
      options: ["O(V^2)", "O(E log E) or O(E log V)", "O(V + E)", "O(E * V)"],
      answer: 1,
      explanation: "Kruskal's algorithm sorts all E edges by weight in O(E log E) time and uses Disjoint Set Union (DSU) to test for cycles in O(E \u03b1(V)), dominated by O(E log E)."
    },
    {
      id: "ds-h-17",
      question: "What is the decrease-key operation time complexity in a Fibonacci Heap, making it theoretically superior for Dijkstra's algorithm?",
      options: ["O(log n)", "O(1) amortized time", "O(n)", "O(sqrt(n))"],
      answer: 1,
      explanation: "Fibonacci Heaps perform decrease-key in O(1) amortized time via cascading cuts, reducing Dijkstra's runtime to O(E + V log V) compared to binary heap's O(E log V)."
    },
    {
      id: "ds-h-18",
      question: "What is a Bloom Filter?",
      options: [
        "A graphics filter for rendering blooms",
        "A space-efficient probabilistic data structure used to test set membership that can produce false positives but never false negatives",
        "A hash map that dynamically compresses values",
        "An exact set implementation"
      ],
      answer: 1,
      explanation: "Bloom filters use a bit array and multiple hash functions. A query returns either 'definitely not in set' (100% true) or 'possibly in set' (may be false positive)."
    },
    {
      id: "ds-h-19",
      question: "What is a Skip List data structure?",
      options: [
        "A list that skips every second item",
        "A probabilistic data structure that uses layered linked lists with forward shortcuts to achieve O(log n) average search, insert, and delete operations",
        "A queue with skipped priority",
        "An unrolled linked list"
      ],
      answer: 1,
      explanation: "Skip Lists build multiple tiers of forward-skipping pointers randomly using coin tosses, achieving balanced-tree performance (O(log n)) with simple linked list code."
    },
    {
      id: "ds-h-20",
      question: "What is an Eulerian Path in a connected graph?",
      options: [
        "A path that visits every vertex exactly once",
        "A trail in a finite graph that visits every edge exactly once",
        "A cycle that connects all leaves",
        "The longest geodesic path"
      ],
      answer: 1,
      explanation: "An Eulerian path visits every edge in the graph exactly once. A graph has an Eulerian path if and only if either 0 or 2 vertices have odd degrees."
    },
    {
      id: "ds-h-21",
      question: "What is a Hamiltonian Cycle in a graph, and what is its computational complexity class?",
      options: [
        "A cycle visiting every edge once; polynomial P time",
        "A closed loop that visits every vertex exactly once (except start/end); NP-complete problem",
        "A cycle with minimal total edge weight; solved in O(V log V)",
        "A bipartite matching problem in P"
      ],
      answer: 1,
      explanation: "A Hamiltonian cycle visits every vertex exactly once. Determining if such a cycle exists is one of Karp's famous NP-complete problems."
    },
    {
      id: "ds-h-22",
      question: "What is the space complexity of an Adjacency Matrix versus an Adjacency List for a graph with V vertices and E edges?",
      options: [
        "Matrix: O(V + E), List: O(V^2)",
        "Matrix: O(V^2), List: O(V + E)",
        "Both are always O(V * E)",
        "Matrix: O(E^2), List: O(V)"
      ],
      answer: 1,
      explanation: "An adjacency matrix allocates a 2D array of size V x V, using O(V^2) space. An adjacency list stores only actual edges, taking O(V + E) space, ideal for sparse graphs."
    },
    {
      id: "ds-h-23",
      question: "What is a KD-Tree (k-dimensional tree)?",
      options: [
        "A tree with k children per node",
        "A space-partitioning binary tree for organizing points in a k-dimensional space, alternating split dimensions at each level for multidimensional nearest-neighbor search",
        "A tree with k root nodes",
        "A tree stored in kernel memory"
      ],
      answer: 1,
      explanation: "A KD-Tree partitions k-dimensional geometric space by cycling through dimensions (x, y, z...) at each depth, used for fast spatial search and ray tracing."
    },
    {
      id: "ds-h-24",
      question: "What does the Bellman-Ford algorithm accomplish that Dijkstra's cannot?",
      options: [
        "Finds shortest paths in unweighted graphs in O(1) time",
        "Calculates shortest paths on graphs with negative edge weights and detects negative weight cycles",
        "Computes maximum flow in a network",
        "Generates minimal spanning forests"
      ],
      answer: 1,
      explanation: "Bellman-Ford relaxes all edges (V - 1) times in O(V * E) time, correctly handling negative edge weights and reporting negative cycle errors if further relaxation is possible."
    },
    {
      id: "ds-h-25",
      question: "What is the purpose of 'Lazy Propagation' in Segment Trees?",
      options: [
        "Delays tree construction until program shutdown",
        "Postpones updating child nodes during range updates until those nodes are specifically queried, reducing range update complexity from O(n) to O(log n)",
        "Runs updates in a background thread",
        "Avoids memory allocation"
      ],
      answer: 1,
      explanation: "Lazy propagation stores pending updates in a lazy array and propagates them down only when child nodes are traversed, maintaining O(log n) range updates."
    },
    {
      id: "ds-h-26",
      question: "What is a 'Threaded Binary Tree'?",
      options: [
        "A tree accessed concurrently by multi-threaded programs",
        "A binary tree where NULL right child pointers are repurposed to point to the in-order successor (and/or NULL left to predecessor), enabling linear traversal without stack or recursion",
        "A tree where edges are string threads",
        "A tree used for parsing CSS threads"
      ],
      answer: 1,
      explanation: "Threaded binary trees utilize otherwise wasted NULL leaf pointers to store direct links to in-order successors/predecessors, enabling stackless O(1) space traversals."
    },
    {
      id: "ds-h-27",
      question: "What is a Radix Tree (Patricia Trie)?",
      options: [
        "A binary search tree storing decimal numbers",
        "A space-optimized trie in which every internal node that has only one child is merged with its child (path compression on edge labels)",
        "A tree with 10 branches per node",
        "A heap ordered by base-10 digits"
      ],
      answer: 1,
      explanation: "A Patricia trie (Radix tree) compresses non-branching linear paths into single composite edges, dramatically saving memory for long prefix chains like IP routing tables."
    },
    {
      id: "ds-h-28",
      question: "What is the time complexity to find an augmenting path in the Edmonds-Karp maximum flow algorithm?",
      options: [
        "O(V + E) using Breadth-First Search (BFS)",
        "O(V * E) using DFS",
        "O(log V) using binary search",
        "O(E^2) using Dijkstra"
      ],
      answer: 0,
      explanation: "Edmonds-Karp implements the Ford-Fulkerson method by finding the shortest augmenting path using BFS in O(V + E) per augmentation, guaranteeing total runtime O(V * E^2)."
    },
    {
      id: "ds-h-29",
      question: "What is a Count-Min Sketch?",
      options: [
        "A drawing tool for graph visualization",
        "A probabilistic sublinear space streaming data structure that serves as a frequency table of events in a data stream with bounded over-estimation error",
        "An exact frequency counter using hash maps",
        "A compression algorithm for image textures"
      ],
      answer: 1,
      explanation: "Count-Min Sketch uses a 2D array of counters with multiple hash functions to estimate event frequencies in massive data streams using constant sublinear space."
    },
    {
      id: "ds-h-30",
      question: "What is the Master Theorem used for in algorithm analysis?",
      options: [
        "Evaluating graph edge flow bounds",
        "Solving asymptotic bounds for divide-and-conquer recurrence relations of the form T(n) = a*T(n/b) + f(n)",
        "Calculating space usage of B-Trees",
        "Finding the shortest path in DAGs"
      ],
      answer: 1,
      explanation: "The Master Theorem provides a cookbook formula to solve divide-and-conquer recurrences T(n) = aT(n/b) + O(n^d) across its three fundamental cases."
    }
  ]
};


// ============================================================================
// QUIZMASTER - DBMS QUESTIONS (30 Easy + 30 Moderate + 30 Hard = 90 Questions)
// ============================================================================

window.DBMS_QUESTIONS = {
  easy: [
    {
      id: "db-e-01",
      question: "What does DBMS stand for?",
      options: [
        "Database Management System",
        "Data Binary Managing Software",
        "Digital Base Management Structure",
        "Distributed Base Memory System"
      ],
      answer: 0,
      explanation: "DBMS stands for Database Management System, software that manages, stores, retrieves, and updates data in databases."
    },
    {
      id: "db-e-02",
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Sequential Query Language",
        "Simple Question Language",
        "Standard Quantum Language"
      ],
      answer: 0,
      explanation: "SQL stands for Structured Query Language. It is the standard domain-specific language for interacting with relational database systems."
    },
    {
      id: "db-e-03",
      question: "What is a row in a relational database table technically called in the relational model?",
      options: ["Attribute", "Tuple", "Domain", "Relation"],
      answer: 1,
      explanation: "In relational database theory, a row is termed a 'Tuple', a column is an 'Attribute', and the entire table is a 'Relation'."
    },
    {
      id: "db-e-04",
      question: "What is a column in a relational database table called in relational terminology?",
      options: ["Tuple", "Attribute", "Entity", "Degree"],
      answer: 1,
      explanation: "Columns define the fields or properties of the relation and are formally referred to as 'Attributes'."
    },
    {
      id: "db-e-05",
      question: "Which key uniquely identifies each record in a database table and cannot contain NULL values?",
      options: ["Foreign Key", "Candidate Key", "Primary Key", "Super Key"],
      answer: 2,
      explanation: "A Primary Key is a minimal candidate key chosen to uniquely identify each row. It enforces uniqueness and cannot contain NULL."
    },
    {
      id: "db-e-06",
      question: "Which key establishes a link between two tables by referencing the primary key of another table?",
      options: ["Composite Key", "Foreign Key", "Unique Key", "Alternate Key"],
      answer: 1,
      explanation: "A Foreign Key is an attribute in one table that references the primary key of another table to maintain referential integrity."
    },
    {
      id: "db-e-07",
      question: "Which SQL command is used to retrieve data from a database?",
      options: ["GET", "EXTRACT", "SELECT", "PULL"],
      answer: 2,
      explanation: "The SELECT statement is used to query and read data from one or more tables in a database."
    },
    {
      id: "db-e-08",
      question: "Which clause is used to filter records in an SQL query based on a specified condition?",
      options: ["GROUP BY", "WHERE", "ORDER BY", "HAVING"],
      answer: 1,
      explanation: "The WHERE clause filters rows before aggregation, returning only those satisfying specified boolean criteria."
    },
    {
      id: "db-e-09",
      question: "Which SQL keyword is used to return only unique, distinct values and suppress duplicates?",
      options: ["UNIQUE", "DISTINCT", "DIFFERENT", "ISOLATED"],
      answer: 1,
      explanation: "SELECT DISTINCT removes duplicate rows from the query result set."
    },
    {
      id: "db-e-10",
      question: "Which clause is used to sort the result set of an SQL query in ascending or descending order?",
      options: ["SORT BY", "ORDER BY", "ARRANGE BY", "GROUP BY"],
      answer: 1,
      explanation: "The ORDER BY clause sorts records in ascending order (ASC, default) or descending order (DESC)."
    },
    {
      id: "db-e-11",
      question: "Which SQL statement is used to insert new rows into a database table?",
      options: ["ADD INTO", "INSERT INTO", "PUT INTO", "APPEND"],
      answer: 1,
      explanation: "INSERT INTO table_name (columns) VALUES (values) is the SQL command to add new records."
    },
    {
      id: "db-e-12",
      question: "Which SQL command is used to modify existing records in a table?",
      options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
      answer: 2,
      explanation: "The UPDATE command modifies values of existing records in a table, typically paired with a WHERE condition."
    },
    {
      id: "db-e-13",
      question: "Which SQL statement is used to delete existing records from a table?",
      options: ["REMOVE", "DELETE FROM", "DROP", "CLEAR"],
      answer: 1,
      explanation: "DELETE FROM table_name WHERE condition deletes designated records from the table while retaining table structure."
    },
    {
      id: "db-e-14",
      question: "Which SQL command completely deletes an entire table and its schema from the database?",
      options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "TRUNCATE"],
      answer: 1,
      explanation: "DROP TABLE table_name removes both the data rows and the table structure/schema permanently from the database catalog."
    },
    {
      id: "db-e-15",
      question: "Which category of SQL commands includes CREATE, ALTER, and DROP?",
      options: [
        "DML (Data Manipulation Language)",
        "DDL (Data Definition Language)",
        "DCL (Data Control Language)",
        "TCL (Transaction Control Language)"
      ],
      answer: 1,
      explanation: "DDL (Data Definition Language) commands define, modify, and manage database schema structures."
    },
    {
      id: "db-e-16",
      question: "Which category of SQL commands includes SELECT, INSERT, UPDATE, and DELETE?",
      options: [
        "DML (Data Manipulation Language)",
        "DDL (Data Definition Language)",
        "DCL (Data Control Language)",
        "TCL (Transaction Control Language)"
      ],
      answer: 0,
      explanation: "DML (Data Manipulation Language) commands manage and manipulate the actual data stored inside table relations."
    },
    {
      id: "db-e-17",
      question: "What does a NULL value represent in a database?",
      options: [
        "A zero numeric value (0)",
        "An empty string ('')",
        "Missing, unknown, or inapplicable data",
        "A blank space"
      ],
      answer: 2,
      explanation: "NULL is not a value; it represents the state of being missing, unknown, or undefined. It cannot be evaluated using '='."
    },
    {
      id: "db-e-18",
      question: "Which operator is used to test for NULL values in an SQL query?",
      options: ["= NULL", "IS NULL", "== NULL", "EQUALS NULL"],
      answer: 1,
      explanation: "Because NULL represents unknown data, standard equality (=) yields UNKNOWN. You must use 'IS NULL' or 'IS NOT NULL'."
    },
    {
      id: "db-e-19",
      question: "Which aggregate function returns the total number of rows that match a specified criterion?",
      options: ["TOTAL()", "SUM()", "COUNT()", "NUMBER()"],
      answer: 2,
      explanation: "COUNT() returns the total count of rows or non-null values matching query criteria (e.g. COUNT(*))."
    },
    {
      id: "db-e-20",
      question: "Which aggregate function calculates the arithmetic average of a numeric column?",
      options: ["MEAN()", "AVG()", "AVERAGE()", "MEDIAN()"],
      answer: 1,
      explanation: "The AVG() function returns the average value of a numeric column, ignoring NULL values."
    },
    {
      id: "db-e-21",
      question: "Which aggregate function returns the highest value in a column?",
      options: ["HIGH()", "MAX()", "TOP()", "PEAK()"],
      answer: 1,
      explanation: "MAX() returns the maximum value among the selected records."
    },
    {
      id: "db-e-22",
      question: "Which wildcard character represents zero or more characters in an SQL LIKE pattern?",
      options: ["? (question mark)", "* (asterisk)", "% (percent)", "_ (underscore)"],
      answer: 2,
      explanation: "In SQL LIKE clauses, '%' matches zero or more characters, while '_' matches exactly one single character."
    },
    {
      id: "db-e-23",
      question: "What is the wildcard character that matches exactly one single character in an SQL LIKE operator?",
      options: ["%", "#", "_ (underscore)", "?"],
      answer: 2,
      explanation: "The underscore character '_' in an SQL LIKE expression represents a wildcard matching exactly one character."
    },
    {
      id: "db-e-24",
      question: "What is an Entity in an Entity-Relationship (ER) model?",
      options: [
        "A mathematical formula",
        "A real-world object or concept that can be distinctly identified (e.g., Student, Course)",
        "A database software driver",
        "A network connection string"
      ],
      answer: 1,
      explanation: "An Entity is a recognizable real-world object, person, concept, or place with attributes that distinguish it from others."
    },
    {
      id: "db-e-25",
      question: "How is an Entity represented in a standard Chen ER diagram?",
      options: ["Diamond", "Rectangle", "Ellipse / Oval", "Double line"],
      answer: 1,
      explanation: "In Chen ER diagrams, Entities are represented by Rectangles, Attributes by Ellipses/Ovals, and Relationships by Diamonds."
    },
    {
      id: "db-e-26",
      question: "How is a Relationship represented in a standard Chen ER diagram?",
      options: ["Circle", "Diamond", "Rectangle", "Hexagon"],
      answer: 1,
      explanation: "Relationships between entities are drawn as Diamond-shaped boxes in ER diagrams."
    },
    {
      id: "db-e-27",
      question: "What does an INNER JOIN return?",
      options: [
        "All rows from the left table and matched rows from right",
        "All rows from both tables whether they match or not",
        "Only rows that have matching values in both joined tables",
        "Only rows that have no match in either table"
      ],
      answer: 2,
      explanation: "An INNER JOIN selects records that have matching keys in both participating tables."
    },
    {
      id: "db-e-28",
      question: "Which clause is used in SQL to group rows sharing the same values in designated columns?",
      options: ["ORDER BY", "GROUP BY", "CLUSTER BY", "PARTITION BY"],
      answer: 1,
      explanation: "GROUP BY collapses multiple rows with identical column values into summary rows (typically with aggregate functions like COUNT or SUM)."
    },
    {
      id: "db-e-29",
      question: "What is the primary purpose of a database Index?",
      options: [
        "To encrypt sensitive data on disk",
        "To speed up data retrieval operations on a database table",
        "To compress the database backup file",
        "To enforce foreign key relationships"
      ],
      answer: 1,
      explanation: "An index is a lookup data structure (usually B-Tree or Hash) that enables the database engine to find specific rows rapidly without scanning the entire table."
    },
    {
      id: "db-e-30",
      question: "What is the cardinality of a relationship in database design?",
      options: [
        "The number of columns in a table",
        "The number of occurrences of an entity that can be associated with occurrences of another entity (e.g., 1:1, 1:N, M:N)",
        "The memory size of the database",
        "The number of indexes on a table"
      ],
      answer: 1,
      explanation: "Cardinality expresses the numerical relationship between entities: One-to-One (1:1), One-to-Many (1:N), or Many-to-Many (M:N)."
    }
  ],

  moderate: [
    {
      id: "db-m-01",
      question: "What do the four letters in the ACID transaction model represent?",
      options: [
        "Accuracy, Consistency, Integrity, Durability",
        "Atomicity, Consistency, Isolation, Durability",
        "Authentication, Concurrency, Isolation, Distribution",
        "Availability, Consistency, Isolation, Decentralization"
      ],
      answer: 1,
      explanation: "ACID properties ensure reliable database transactions: Atomicity (all or nothing), Consistency (valid states), Isolation (concurrent execution), Durability (persisted survival)."
    },
    {
      id: "db-m-02",
      question: "What does the 'Atomicity' property of an ACID transaction guarantee?",
      options: [
        "The transaction completes in under 1 nanosecond",
        "All operations within the transaction succeed completely, or if any fail, the entire transaction rolls back leaving the database unchanged ('all or nothing')",
        "Transactions are executed one after another atomically",
        "Data is compressed at the molecular level"
      ],
      answer: 1,
      explanation: "Atomicity guarantees that a transaction is treated as a single indivisible unit of work: either all updates are committed or none are."
    },
    {
      id: "db-m-03",
      question: "What does the 'Durability' property of an ACID transaction guarantee?",
      options: [
        "The database hardware lasts at least 10 years",
        "Once a transaction is committed, its changes are permanently recorded in non-volatile storage and will survive even system crashes or power failures",
        "Transactions cannot be rolled back by the user",
        "The schema cannot be modified"
      ],
      answer: 1,
      explanation: "Durability guarantees that once a transaction successfully commits, its state transitions are permanent and will not be lost to crashes."
    },
    {
      id: "db-m-04",
      question: "What is the requirement for a relation to be in First Normal Form (1NF)?",
      options: [
        "Every non-prime attribute is fully functionally dependent on the primary key",
        "All column values must be atomic (indivisible single values) and there must be no repeating groups or multi-valued attributes",
        "There must be no transitive dependencies",
        "Every determinant must be a candidate key"
      ],
      answer: 1,
      explanation: "1NF requires that each column contain only atomic (indivisible) scalar values and each record be unique with no repeating arrays or composite lists."
    },
    {
      id: "db-m-05",
      question: "What is the requirement for a relation to be in Second Normal Form (2NF)?",
      options: [
        "It must be in 1NF and contain no partial functional dependencies (all non-key attributes are fully functionally dependent on the entire composite primary key)",
        "It must have no transitive dependencies",
        "It must have foreign keys in every table",
        "Every attribute must be numeric"
      ],
      answer: 0,
      explanation: "2NF requires 1NF compliance plus the elimination of partial dependencies: no non-prime attribute can depend on a proper subset of a composite primary key."
    },
    {
      id: "db-m-06",
      question: "What is the requirement for a relation to be in Third Normal Form (3NF)?",
      options: [
        "It must be in 2NF and have no transitive functional dependencies (non-prime attributes must not depend on other non-prime attributes)",
        "It must be in 1NF with no foreign keys",
        "Every table must have a surrogate key",
        "Tables must be read-only"
      ],
      answer: 0,
      explanation: "3NF requires 2NF plus the absence of transitive dependencies: non-key attributes must depend solely on the primary key, directly and non-transitively."
    },
    {
      id: "db-m-07",
      question: "What is the critical difference between the WHERE clause and the HAVING clause in SQL?",
      options: [
        "WHERE filters rows before aggregation; HAVING filters aggregated groups after the GROUP BY clause has executed",
        "WHERE can only be used with numbers; HAVING is for text",
        "HAVING runs before WHERE",
        "There is no difference; they are aliases"
      ],
      answer: 0,
      explanation: "WHERE filters raw individual records prior to grouping. HAVING filters groups produced by GROUP BY (e.g., HAVING COUNT(*) > 5)."
    },
    {
      id: "db-m-08",
      question: "What does a LEFT OUTER JOIN (or LEFT JOIN) return?",
      options: [
        "Only matching rows from both tables",
        "All rows from the left table, along with matching rows from the right table (with NULLs for right-side columns when no match exists)",
        "Only non-matching rows from the left table",
        "All rows from the right table only"
      ],
      answer: 1,
      explanation: "LEFT JOIN preserves every row from the left table; where the right table has no matching row, all columns from the right table display as NULL."
    },
    {
      id: "db-m-09",
      question: "What does a FULL OUTER JOIN return?",
      options: [
        "The Cartesian product of both tables",
        "All rows from both left and right tables, matching rows where possible and filling with NULLs where matches do not exist on either side",
        "Only rows where both tables have identical primary keys",
        "Only records that appear in exactly one table"
      ],
      answer: 1,
      explanation: "A FULL OUTER JOIN combines the results of both LEFT and RIGHT joins, returning all records from both tables and filling missing matches with NULLs."
    },
    {
      id: "db-m-10",
      question: "What is the difference between DELETE and TRUNCATE in SQL?",
      options: [
        "DELETE is faster than TRUNCATE",
        "TRUNCATE is a DDL operation that deallocates data pages without logging individual row deletions (faster, resets auto-increment); DELETE is DML that logs each row deletion",
        "DELETE drops the table structure; TRUNCATE does not",
        "TRUNCATE allows WHERE clauses; DELETE does not"
      ],
      answer: 1,
      explanation: "TRUNCATE quickly empties a table by deallocating storage extents (minimal logging, cannot have WHERE). DELETE removes rows one-by-one with full transaction logging."
    },
    {
      id: "db-m-11",
      question: "What is a 'Clustered Index' in a relational database?",
      options: [
        "An index distributed across a server cluster",
        "An index that defines the actual physical ordering of data rows on disk storage (a table can have only one clustered index)",
        "An index with multiple columns",
        "An index created in RAM memory"
      ],
      answer: 1,
      explanation: "Because physical rows on disk can only be sorted in one order, a table can have exactly one clustered index (usually on the Primary Key)."
    },
    {
      id: "db-m-12",
      question: "What is a 'Non-Clustered Index'?",
      options: [
        "An index that has been disabled",
        "A separate auxiliary structure containing index keys and row pointers (bookmarks) back to the actual data rows on disk",
        "An index stored on an external network drive",
        "A primary key without a unique constraint"
      ],
      answer: 1,
      explanation: "A non-clustered index creates a separate B-Tree structure storing sorted key values along with pointers/locators pointing to the data rows."
    },
    {
      id: "db-m-13",
      question: "What is a Database View?",
      options: [
        "A screenshot of database tables",
        "A virtual table based on the result set of a stored SQL query, containing no physical data of its own unless materialized",
        "A physical backup file",
        "A GUI client software for databases"
      ],
      answer: 1,
      explanation: "A View is a stored SQL query that behaves like a virtual table, dynamically computing its data whenever queried without duplicating storage."
    },
    {
      id: "db-m-14",
      question: "What is a Database Trigger?",
      options: [
        "A button in database administrative tools",
        "A stored procedural program automatically executed by the DBMS in response to specific events (INSERT, UPDATE, DELETE) on a specified table",
        "A command that crashes the server",
        "A background task that compresses tables"
      ],
      answer: 1,
      explanation: "Triggers are event-driven stored procedures that execute automatically whenever a DML or DDL event (e.g. BEFORE INSERT) occurs."
    },
    {
      id: "db-m-15",
      question: "What is a 'Correlated Subquery'?",
      options: [
        "A subquery that runs in parallel on multi-core processors",
        "A subquery that references columns from the outer query and must be evaluated repeatedly once for each row processed by the outer query",
        "A subquery that returns a single constant value",
        "Two independent queries connected with UNION"
      ],
      answer: 1,
      explanation: "A correlated subquery depends on values from the current candidate row of the outer query, meaning it cannot be evaluated independently once."
    },
    {
      id: "db-m-16",
      question: "What is Boyce-Codd Normal Form (BCNF)?",
      options: [
        "A weaker version of 2NF",
        "A stricter version of 3NF where for every non-trivial functional dependency X -> Y, X must be a super key",
        "A normal form that allows multi-valued dependencies",
        "A normal form for NoSQL databases"
      ],
      answer: 1,
      explanation: "BCNF strengthens 3NF by demanding that every determinant (the left side X in X -> Y) must be a super key, eliminating anomalies involving overlapping candidate keys."
    },
    {
      id: "db-m-17",
      question: "What is the difference between UNION and UNION ALL in SQL?",
      options: [
        "UNION ALL is slower because it sorts data",
        "UNION combines query results and eliminates duplicate rows (incurring a sort/hash overhead); UNION ALL keeps all duplicates and is much faster",
        "UNION ALL combines columns; UNION combines rows",
        "There is no functional difference"
      ],
      answer: 1,
      explanation: "UNION removes duplicates by performing an internal distinct sort or hash operation. UNION ALL simply concatenates result sets, preserving duplicates efficiently."
    },
    {
      id: "db-m-18",
      question: "What is a Foreign Key constraint with 'ON DELETE CASCADE' configured to do?",
      options: [
        "Prevents the parent row from being deleted",
        "Automatically deletes all matching child rows in the referencing table when the referenced parent row is deleted",
        "Sets all referencing foreign keys to NULL",
        "Sends an alert to the database administrator"
      ],
      answer: 1,
      explanation: "ON DELETE CASCADE guarantees referential integrity by automatically cascading deletions down to dependent child rows when a parent row is removed."
    },
    {
      id: "db-m-19",
      question: "What does the transaction statement 'ROLLBACK' do?",
      options: [
        "Restores the database to its initial installation state",
        "Undoes all database modifications made during the current uncommitted transaction, reverting data to the state prior to transaction start",
        "Reboots the database server",
        "Deletes the last table created"
      ],
      answer: 1,
      explanation: "ROLLBACK cancels the current active transaction and reverts all changes back to the last COMMIT or SAVEPOINT."
    },
    {
      id: "db-m-20",
      question: "What does a 'SAVEPOINT' do inside a database transaction?",
      options: [
        "Saves the transaction to an external USB drive",
        "Creates an intermediate checkpoint within a transaction that allows partial rollbacks (ROLLBACK TO SAVEPOINT) without aborting the entire transaction",
        "Commits the transaction permanently",
        "Locks the entire database"
      ],
      answer: 1,
      explanation: "SAVEPOINT marks a point within a transaction to which you can roll back selectively without undoing work completed before the savepoint."
    },
    {
      id: "db-m-21",
      question: "What is a CROSS JOIN in SQL?",
      options: [
        "A join that matches records diagonally",
        "A join that returns the Cartesian product of both tables (every row from table 1 combined with every row from table 2)",
        "A join across different database software",
        "A join between two tables with identical primary keys"
      ],
      answer: 1,
      explanation: "A CROSS JOIN produces the Cartesian product of rows: if table A has 10 rows and table B has 5 rows, it produces 50 output rows."
    },
    {
      id: "db-m-22",
      question: "What is Referential Integrity in relational databases?",
      options: [
        "Ensuring data is encrypted at rest",
        "A rule stating that any foreign key value must either reference a valid, existing primary key in the parent table or be NULL",
        "Ensuring the database operates 24/7",
        "Guaranteeing that all column names are unique"
      ],
      answer: 1,
      explanation: "Referential integrity guarantees that relationships between tables remain consistent, preventing orphan records with invalid foreign keys."
    },
    {
      id: "db-m-23",
      question: "What is a 'Self Join' in SQL?",
      options: [
        "A query that joins a table to itself using table aliases",
        "A join created automatically by AI",
        "A table with no columns",
        "A join between two identical databases"
      ],
      answer: 0,
      explanation: "A self join joins a table to itself using distinct aliases (e.g. Employee e JOIN Employee m ON e.manager_id = m.emp_id) to evaluate hierarchical relationships."
    },
    {
      id: "db-m-24",
      question: "Which SQL operator checks whether a value falls within an inclusive numerical or date range?",
      options: ["IN", "BETWEEN ... AND ...", "WITHIN", "INSIDE"],
      answer: 1,
      explanation: "The BETWEEN operator filters results within a specified inclusive range: WHERE score BETWEEN 80 AND 100."
    },
    {
      id: "db-m-25",
      question: "Which SQL clause is used to assign a temporary alias name to a table or column in a query?",
      options: ["AS", "ALIAS", "NAME", "SET"],
      answer: 0,
      explanation: "The 'AS' keyword assigns an alias to a column or table for easier readability in queries (e.g., SELECT first_name AS fname)."
    },
    {
      id: "db-m-26",
      question: "What is the purpose of the COALESCE() function in SQL?",
      options: [
        "Converts text to uppercase",
        "Returns the first non-NULL expression among its provided arguments",
        "Combines two tables into one",
        "Calculates standard deviation"
      ],
      answer: 1,
      explanation: "COALESCE(val1, val2, ..., valN) evaluates its arguments in sequence and returns the first non-NULL value found."
    },
    {
      id: "db-m-27",
      question: "What is a Stored Procedure?",
      options: [
        "A database backup protocol",
        "A prepared, reusable batch of SQL statements and control-flow logic stored in the database catalog that can be invoked by name",
        "A table holding system log files",
        "A physical storage partition"
      ],
      answer: 1,
      explanation: "Stored procedures are compiled subroutine blocks stored directly within the database engine, reducing network traffic and enhancing security."
    },
    {
      id: "db-m-28",
      question: "What is a Candidate Key?",
      options: [
        "A key that is applying for a job",
        "A minimal super key; an attribute or set of attributes that can uniquely identify a tuple without any redundant attributes",
        "A foreign key that points to multiple tables",
        "A key that can hold NULL values"
      ],
      answer: 1,
      explanation: "A candidate key is a minimal super key having no extraneous attributes. One candidate key is designated the primary key, while others become alternate keys."
    },
    {
      id: "db-m-29",
      question: "What is a 'Composite Key' in database design?",
      options: [
        "A key composed of plastic and metal",
        "A primary key composed of two or more attributes that together uniquely identify a record",
        "A key that encrypts data",
        "A key pointing to a composite view"
      ],
      answer: 1,
      explanation: "A composite key is a key made up of multiple columns where no single column alone guarantees uniqueness, but their combination does."
    },
    {
      id: "db-m-30",
      question: "What is a Surrogate Key?",
      options: [
        "A natural key from real-world business attributes (like SSN)",
        "An artificially generated unique identifier (such as an auto-increment integer or UUID) with no intrinsic business meaning",
        "A temporary key discarded after query execution",
        "A key generated by external web clients"
      ],
      answer: 1,
      explanation: "A surrogate key is an artificial, system-assigned key (e.g. auto-incrementing ID) used as a primary key instead of real-world natural data."
    }
  ],

  hard: [
    {
      id: "db-h-01",
      question: "What are the four ANSI SQL transaction isolation levels ranked from lowest isolation to highest?",
      options: [
        "Read Uncommitted < Read Committed < Repeatable Read < Serializable",
        "Read Committed < Read Uncommitted < Serializable < Repeatable Read",
        "Uncommitted < Committed < Consistent < Isolated",
        "Serializable < Repeatable Read < Read Committed < Read Uncommitted"
      ],
      answer: 0,
      explanation: "Standard isolation levels ascend from Read Uncommitted (lowest, allowing dirty reads) -> Read Committed -> Repeatable Read -> Serializable (highest, strictest concurrency control)."
    },
    {
      id: "db-h-02",
      question: "What is a 'Dirty Read' anomaly in database concurrency?",
      options: [
        "Reading data that contains invalid characters",
        "A transaction reads uncommitted changes made by another concurrent transaction that subsequently rolls back",
        "Reading data from a corrupted disk drive",
        "Reading duplicate rows from a cross join"
      ],
      answer: 1,
      explanation: "A dirty read occurs when Transaction A reads data modified by Transaction B before B commits; if B rolls back, A acted on phantom data that never truly existed."
    },
    {
      id: "db-h-03",
      question: "What is a 'Non-Repeatable Read' (Fuzzy Read) anomaly?",
      options: [
        "A query that fails when run twice",
        "A transaction reads a row, another concurrent transaction modifies or deletes that row and commits, and re-reading the row yields different values within the same original transaction",
        "A query that cannot be executed in a loop",
        "Reading data without an index"
      ],
      answer: 1,
      explanation: "In a non-repeatable read, row data changes between successive reads within the same transaction because another transaction committed an update to those rows."
    },
    {
      id: "db-h-04",
      question: "What is a 'Phantom Read' anomaly in SQL transactions?",
      options: [
        "Reading records from a deleted table",
        "A transaction queries a range of rows meeting a predicate, another transaction inserts or deletes rows matching that range and commits, and re-executing the query returns newly appeared 'phantom' rows",
        "Reading memory from a crashed transaction",
        "A lock held by a dead process"
      ],
      answer: 1,
      explanation: "Phantom reads occur when a transaction queries a range of rows, and a concurrent transaction inserts new matching rows and commits, causing subsequent range queries to see phantom records."
    },
    {
      id: "db-h-05",
      question: "What concurrency anomaly is permitted under 'Read Committed' isolation but prevented under 'Repeatable Read'?",
      options: ["Dirty Read", "Non-Repeatable Read", "Deadlock", "Lost Update only"],
      answer: 1,
      explanation: "Read Committed prevents Dirty Reads, but permits Non-Repeatable Reads. Repeatable Read prevents both Dirty Reads and Non-Repeatable Reads."
    },
    {
      id: "db-h-06",
      question: "What is the Two-Phase Locking (2PL) protocol, and what does it guarantee?",
      options: [
        "A protocol that locks two tables at a time; guarantees high availability",
        "A concurrency control protocol with a Growing Phase (acquiring locks) and a Shrinking Phase (releasing locks); guarantees serializability of concurrent schedules",
        "A mechanism that prevents all deadlocks",
        "A protocol for two-node database replication"
      ],
      answer: 1,
      explanation: "2PL mandates that a transaction cannot acquire any new lock once it releases a lock (Growing phase -> Shrinking phase), which mathematically guarantees serializability."
    },
    {
      id: "db-h-07",
      question: "What is the difference between Strict 2PL and Rigorous 2PL?",
      options: [
        "Strict 2PL is for MySQL; Rigorous 2PL is for Oracle",
        "Strict 2PL holds all Exclusive (write) locks until transaction end (commit/rollback); Rigorous 2PL holds BOTH Shared (read) and Exclusive (write) locks until transaction end",
        "Rigorous 2PL prevents deadlocks; Strict 2PL does not",
        "Strict 2PL permits dirty reads"
      ],
      answer: 1,
      explanation: "Strict 2PL releases shared locks during shrinking but holds exclusive locks until commit (preventing cascading aborts). Rigorous 2PL holds all locks until commit."
    },
    {
      id: "db-h-08",
      question: "What is Multi-Version Concurrency Control (MVCC) used for in modern DBMS (like PostgreSQL, MySQL InnoDB)?",
      options: [
        "Managing multiple versions of database software",
        "Allowing readers to not block writers, and writers to not block readers, by maintaining multiple timestamped versions of each row",
        "Distributing queries across different database servers",
        "Creating automated daily backups"
      ],
      answer: 1,
      explanation: "MVCC provides snapshot isolation: readers view a consistent point-in-time snapshot of committed data without acquiring read locks, eliminating reader-writer lock contention."
    },
    {
      id: "db-h-09",
      question: "What is the Write-Ahead Logging (WAL) protocol?",
      options: [
        "Writing query logs before executing the SELECT statement",
        "A fundamental recovery protocol dictating that log records describing data changes must be flushed to non-volatile disk BEFORE the corresponding dirty data pages are written to disk",
        "Writing backups ahead of schedule",
        "Logging user passwords ahead of encryption"
      ],
      answer: 1,
      explanation: "WAL dictates that before changes are written to database tables on disk, log records containing REDO and UNDO information must be securely persisted on disk."
    },
    {
      id: "db-h-10",
      question: "What are the three distinct phases of the ARIES database recovery algorithm?",
      options: [
        "Scan, Filter, Aggregate",
        "Analysis Phase, Redo Phase, Undo Phase",
        "Lock, Execute, Unlock",
        "Checkpoint, Flush, Restart"
      ],
      answer: 1,
      explanation: "ARIES recovery proceeds in 3 phases: 1) Analysis (reconstructs state at crash time), 2) Redo (repeats history forward to crash), 3) Undo (rolls back uncommitted transactions backwards)."
    },
    {
      id: "db-h-11",
      question: "What is the difference between the Wait-Die and Wound-Wait deadlock prevention schemes?",
      options: [
        "They are identical algorithms",
        "Wait-Die is non-preemptive (older transaction waits, younger dies); Wound-Wait is preemptive (older transaction preempts/wounds younger, younger waits for older)",
        "Wait-Die uses timestamps; Wound-Wait uses priority queues",
        "Wound-Wait allows circular wait conditions"
      ],
      answer: 1,
      explanation: "Both use transaction timestamps: In Wait-Die, if older requests younger's resource, it waits; if younger requests older, younger dies. In Wound-Wait, older wounds/aborts younger."
    },
    {
      id: "db-h-12",
      question: "What is the CAP Theorem in distributed databases?",
      options: [
        "A database must provide Caching, Authentication, and Partitioning",
        "A distributed data store can simultaneously provide at most two out of three guarantees: Consistency, Availability, and Partition Tolerance",
        "Every transaction must be Completed, Authorized, and Protected",
        "All queries must have Cost, Analysis, and Plan"
      ],
      answer: 1,
      explanation: "Eric Brewer's CAP theorem proves that in the presence of a network partition (P), a distributed system must choose between Consistency (C) and Availability (A)."
    },
    {
      id: "db-h-13",
      question: "What is a 'Lossless-Join Decomposition' in database normalization?",
      options: [
        "A decomposition that does not lose any table columns",
        "A decomposition of a relation R into R1 and R2 such that natural join of R1 and R2 reproduces exactly the original relation R with no spurious tuples generated",
        "A join that executes without CPU loss",
        "A decomposition that preserves foreign keys only"
      ],
      answer: 1,
      explanation: "A decomposition is lossless if R1 \u22c8 R2 = R. Mathematically, the common attributes (R1 \u2229 R2) must form a candidate key for at least one of the decomposed relations."
    },
    {
      id: "db-h-14",
      question: "What does Dependency Preservation mean in relation decomposition?",
      options: [
        "Dependencies are stored in a separate table",
        "All original functional dependencies can be enforced by checking individual decomposed relations without computing expensive relational joins across tables",
        "Foreign key constraints cannot be removed",
        "All tables remain dependent on the root relation"
      ],
      answer: 1,
      explanation: "Dependency preservation ensures that the union of functional dependencies in the decomposed relations logically implies all dependencies in the original relation."
    },
    {
      id: "db-h-15",
      question: "What is a Hash Join in query execution engines?",
      options: [
        "Joining tables based on password hashes",
        "A join algorithm that builds an in-memory hash table on the smaller join relation (build phase) and probes it with rows from the larger relation (probe phase) in O(M + N) time",
        "Joining rows in circular order",
        "A join using MD5 checksums"
      ],
      answer: 1,
      explanation: "Hash Join builds an in-memory hash table on the inner table's join keys, then scans the outer table probing the hash table, optimal for large equi-joins without pre-sorted input."
    },
    {
      id: "db-h-16",
      question: "What is a Sort-Merge Join in relational query execution?",
      options: [
        "Sorting rows alphabetically and merging columns",
        "A join algorithm where both tables are sorted by their join keys, followed by a simultaneous linear merge scan to find matching records",
        "A join that sorts rows randomly",
        "A join using bubble sort"
      ],
      answer: 1,
      explanation: "Sort-Merge join sorts both inputs on the join attributes (or utilizes existing index order) and then steps through both lists in a single synchronized linear pass."
    },
    {
      id: "db-h-17",
      question: "What is 'Predicate Pushdown' in relational database query optimization?",
      options: [
        "Pushing error messages to the client log",
        "An optimization technique that pushes filter conditions (WHERE clauses) as close to the physical data source / storage scan as possible, minimizing rows read into memory",
        "Moving subqueries into the SELECT clause",
        "Evaluating HAVING clauses before WHERE clauses"
      ],
      answer: 1,
      explanation: "Predicate pushdown evaluates selection filters early in the execution pipeline (even at the disk/scan level), dramatically reducing data volume entering joins."
    },
    {
      id: "db-h-18",
      question: "What is the difference between Conflict Serializability and View Serializability?",
      options: [
        "View serializability is a subset of conflict serializability",
        "Conflict serializability is stricter (testing conflict equivalence via precedence graphs); View serializability is broader (testing final/view equivalence with blind writes) and NP-complete to test",
        "Conflict serializability applies only to read-only transactions",
        "There is no difference in theoretical power"
      ],
      answer: 1,
      explanation: "Every conflict-serializable schedule is view-serializable, but some view-serializable schedules (involving blind writes) are not conflict-serializable. Testing view serializability is NP-complete."
    },
    {
      id: "db-h-19",
      question: "What does a cycle in a Precedence Graph (Serialization Graph) signify for a concurrent schedule?",
      options: [
        "The schedule is deadlocked",
        "The schedule is NOT conflict-serializable and may produce data inconsistency anomalies",
        "The schedule is guaranteed to be serializable",
        "The schedule has no active locks"
      ],
      answer: 1,
      explanation: "A schedule is conflict-serializable if and only if its precedence graph has no directed cycles. If a cycle exists, the schedule cannot be serialized."
    },
    {
      id: "db-h-20",
      question: "What is 'Write Skew' anomaly under Snapshot Isolation?",
      options: [
        "Writing data skewed to the left margin",
        "Two concurrent transactions read overlapping data, make disjoint updates based on that data, and commit without conflict under snapshot isolation, violating a global integrity constraint",
        "A disk write error caused by sector misalignment",
        "Writing data to the wrong table partition"
      ],
      answer: 1,
      explanation: "Write skew occurs under snapshot isolation (e.g. two doctors concurrently on-call both check that >1 doctors are on call, both go off-call, leaving 0 on-call)."
    },
    {
      id: "db-h-21",
      question: "What does the Fourth Normal Form (4NF) specifically eliminate?",
      options: [
        "Transitive dependencies",
        "Multi-valued dependencies (MVDs) where one attribute determines an independent set of values of another attribute",
        "Candidate keys",
        "Clustered index fragmentation"
      ],
      answer: 1,
      explanation: "4NF eliminates multi-valued dependencies (MVDs), ensuring that independent multi-valued facts are not stored together in a single composite relation."
    },
    {
      id: "db-h-22",
      question: "What is the purpose of the Fifth Normal Form (5NF / Project-Join Normal Form)?",
      options: [
        "To ensure all tables have exactly five columns",
        "To eliminate join dependencies that cannot be reconstructed from smaller decomposed projections without spurious data",
        "To enforce foreign key cascading",
        "To format tables for 5G mobile networks"
      ],
      answer: 1,
      explanation: "5NF deals with cyclic join dependencies, guaranteeing that relations cannot be decomposed further without loss of data or semantic integrity."
    },
    {
      id: "db-h-23",
      question: "What is the difference between a Dense Index and a Sparse Index?",
      options: [
        "Dense indexes use float keys; sparse indexes use integers",
        "A dense index has an index entry for every single search key value in the table; a sparse index has index entries for only some search key values (usually one per disk block)",
        "Dense indexes are stored on SSD; sparse indexes on HDD",
        "Sparse indexes cannot be B-Trees"
      ],
      answer: 1,
      explanation: "Dense indexes contain index records for every search key in the file. Sparse indexes contain entries for block anchors only, saving index space."
    },
    {
      id: "db-h-24",
      question: "What does the SQL window function 'DENSE_RANK()' do differently from 'RANK()'?",
      options: [
        "DENSE_RANK() generates ranks without gaps between consecutive rank values in the event of ties; RANK() skips rank numbers after ties",
        "DENSE_RANK() only works on unique values",
        "RANK() operates in reverse order",
        "DENSE_RANK() produces fractional ranks"
      ],
      answer: 0,
      explanation: "If two rows tie for 1st place: RANK() gives 1, 1, 3 (skips 2). DENSE_RANK() gives 1, 1, 2 (no gaps in ranking sequence)."
    },
    {
      id: "db-h-25",
      question: "What is the role of an Undo Log versus a Redo Log in database crash recovery?",
      options: [
        "Undo is for SELECT queries; Redo is for INSERT queries",
        "Undo logs store 'before-images' used to rollback uncommitted transactions; Redo logs store 'after-images' used to reapply committed changes that had not reached disk before a crash",
        "Undo runs in memory; Redo runs on disk",
        "They are duplicate copies for redundancy"
      ],
      answer: 1,
      explanation: "Undo logs preserve prior values so uncommitted or aborted transactions can be reverted. Redo logs persist new values so committed transactions can be reconstructed."
    },
    {
      id: "db-h-26",
      question: "What is a 'Covering Index' in query optimization?",
      options: [
        "An index that covers the entire hard drive",
        "An index that contains all columns requested by a specific query, allowing the database to satisfy the query entirely from the index without reading table data pages",
        "A backup index stored in the cloud",
        "An index that wraps foreign keys"
      ],
      answer: 1,
      explanation: "A covering index (often built with INCLUDE columns) satisfies a query entirely within the index B-tree, avoiding expensive table heap lookups."
    },
    {
      id: "db-h-27",
      question: "What is the function of the Cost-Based Optimizer (CBO) in modern relational database engines?",
      options: [
        "Calculates the monetary cost of cloud database usage",
        "Analyzes multiple candidate query execution plans and uses table statistics (cardinality, histograms, index heights) to estimate and select the plan with minimal I/O and CPU cost",
        "Limits query execution to under $1",
        "Optimizes network bandwidth usage"
      ],
      answer: 1,
      explanation: "The CBO evaluates alternative access paths, join methods, and join orders using column distribution histograms to execute the plan with lowest estimated physical work."
    },
    {
      id: "db-h-28",
      question: "What is a 'Blind Write' in transaction processing?",
      options: [
        "Writing encrypted data to disk",
        "A transaction performs a WRITE operation on a data item without having first performed a READ operation on that item",
        "Writing data without logging to WAL",
        "Writing data to a non-existent table"
      ],
      answer: 1,
      explanation: "A blind write occurs when a transaction writes a value to an object without reading its current state, central to view serializability."
    },
    {
      id: "db-h-29",
      question: "What is Sharding in database scaling architecture?",
      options: [
        "Breaking disk drives into smaller fragments",
        "A horizontal partitioning method where rows of a database table are divided across multiple independent physical database servers based on a shard key",
        "Compressing tables with gzip",
        "Splitting columns vertically across tables"
      ],
      answer: 1,
      explanation: "Horizontal sharding partitions table datasets across multiple discrete database server nodes using a partition key (e.g. user_id % N)."
    },
    {
      id: "db-h-30",
      question: "What does 'Eventual Consistency' guarantee in distributed NoSQL databases?",
      options: [
        "Data is never consistent",
        "If no new updates are made to a given data item, eventually all replicas across the distributed system will converge and return the same latest value",
        "Transactions are committed every 24 hours",
        "Queries are guaranteed to return real-time immediate updates"
      ],
      answer: 1,
      explanation: "Eventual consistency is a weak consistency model in distributed systems: given enough time without new updates, all node replicas will propagate updates and achieve consensus."
    }
  ]
};


// ============================================================================
// QUIZMASTER - MASTER QUESTIONS REGISTRY & METADATA
// ============================================================================

const CATEGORIES = {
  html: {
    id: "html",
    name: "HTML",
    fullName: "HyperText Markup Language",
    icon: "fab fa-html5",
    color: "#f97316", // Amber / Orange
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    glowColor: "rgba(249, 115, 22, 0.4)",
    badgeClass: "badge-html",
    description: "Structure of web pages, HTML5 semantics, multimedia, canvas, forms, and browser APIs."
  },
  css: {
    id: "css",
    name: "CSS",
    fullName: "Cascading Style Sheets",
    icon: "fab fa-css3-alt",
    color: "#0ea5e9", // Sky / Cyan
    gradient: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)",
    glowColor: "rgba(14, 165, 233, 0.4)",
    badgeClass: "badge-css",
    description: "Styling, Flexbox, CSS Grid, animations, specificity, modern layouts, and responsive design."
  },
  c: {
    id: "c",
    name: "C Programming",
    fullName: "C Programming Language",
    icon: "fas fa-code",
    color: "#3b82f6", // Blue / Indigo
    gradient: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
    glowColor: "rgba(59, 130, 246, 0.4)",
    badgeClass: "badge-c",
    description: "Pointers, memory management, structs, preprocessors, standard I/O, and low-level logic."
  },
  python: {
    id: "python",
    name: "Python",
    fullName: "Python 3 Programming",
    icon: "fab fa-python",
    color: "#10b981", // Emerald / Green
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    glowColor: "rgba(16, 185, 129, 0.4)",
    badgeClass: "badge-python",
    description: "Pythonic syntax, data structures, OOP, decorators, generators, and exception handling."
  },
  ds: {
    id: "ds",
    name: "Data Structures",
    fullName: "Data Structures & Algorithms",
    icon: "fas fa-network-wired",
    color: "#8b5cf6", // Purple / Violet
    gradient: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
    glowColor: "rgba(139, 92, 246, 0.4)",
    badgeClass: "badge-ds",
    description: "Stacks, queues, trees, heaps, graphs, hashing, sorting, and algorithmic complexities."
  },
  dbms: {
    id: "dbms",
    name: "DBMS",
    fullName: "Database Management Systems",
    icon: "fas fa-database",
    color: "#f43f5e", // Rose / Crimson
    gradient: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
    glowColor: "rgba(244, 63, 94, 0.4)",
    badgeClass: "badge-dbms",
    description: "Relational modeling, SQL queries, normalization, ACID transactions, and indexing."
  }
};

const DIFFICULTY_LEVELS = {
  easy: {
    id: "easy",
    name: "Easy",
    icon: "fas fa-seedling",
    badgeClass: "difficulty-easy",
    color: "#10b981",
    description: "Fundamentals, syntax, basic concepts & definitions"
  },
  moderate: {
    id: "moderate",
    name: "Moderate",
    icon: "fas fa-bolt",
    badgeClass: "difficulty-moderate",
    color: "#f59e0b",
    description: "Application, output prediction, and practical concepts"
  },
  hard: {
    id: "hard",
    name: "Hard",
    icon: "fas fa-fire",
    badgeClass: "difficulty-hard",
    color: "#ef4444",
    description: "Advanced logic, edge cases, deep theory & debugging"
  }
};

/**
 * Returns the aggregated questions object containing all categories and levels.
 */
function getMasterQuestions() {
  return {
    html: window.HTML_QUESTIONS || { easy: [], moderate: [], hard: [] },
    css: window.CSS_QUESTIONS || { easy: [], moderate: [], hard: [] },
    c: window.C_QUESTIONS || { easy: [], moderate: [], hard: [] },
    python: window.PYTHON_QUESTIONS || { easy: [], moderate: [], hard: [] },
    ds: window.DS_QUESTIONS || { easy: [], moderate: [], hard: [] },
    dbms: window.DBMS_QUESTIONS || { easy: [], moderate: [], hard: [] }
  };
}

/**
 * Validates and counts all questions in the bank.
 */
function getQuestionStats() {
  const master = getMasterQuestions();
  let total = 0;
  const perCategory = {};

  for (const catKey of Object.keys(CATEGORIES)) {
    perCategory[catKey] = {
      easy: master[catKey]?.easy?.length || 0,
      moderate: master[catKey]?.moderate?.length || 0,
      hard: master[catKey]?.hard?.length || 0,
      total: 0
    };
    perCategory[catKey].total =
      perCategory[catKey].easy + perCategory[catKey].moderate + perCategory[catKey].hard;
    total += perCategory[catKey].total;
  }

  return {
    totalQuestions: total,
    perCategory
  };
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Retrieves a randomized set of questions for a category and difficulty level.
 * Both the order of questions AND the order of options (A, B, C, D) are randomized,
 * with the correct answer pointer dynamically mapped to the new shuffled position!
 */
function getQuizQuestions(category, difficulty, count = 30) {
  const master = getMasterQuestions();
  const pool = master[category]?.[difficulty] || [];

  if (!pool.length) {
    console.error(`No questions found for ${category} - ${difficulty}`);
    return [];
  }

  // Shuffle question pool without duplicates
  const shuffledPool = shuffleArray(pool);
  const selected = shuffledPool.slice(0, Math.min(count, shuffledPool.length));

  // Deep clone and shuffle answer options while preserving correct answer index
  return selected.map((q, idx) => {
    const originalAnswerText = q.options[q.answer];

    // Create array of option objects with original texts
    const optionsWithMeta = q.options.map((optText, oIdx) => ({
      text: optText,
      isCorrect: oIdx === q.answer
    }));

    // Shuffle options
    const shuffledOptionsMeta = shuffleArray(optionsWithMeta);
    const shuffledOptions = shuffledOptionsMeta.map(o => o.text);
    const newAnswerIndex = shuffledOptionsMeta.findIndex(o => o.isCorrect);

    return {
      ...q,
      originalId: q.id,
      quizIndex: idx + 1,
      category,
      difficulty,
      options: shuffledOptions,
      answer: newAnswerIndex,
      originalAnswerText,
      explanation: q.explanation
    };
  });
}

// Export to window for global access
window.QUIZMASTER_CONFIG = {
  CATEGORIES,
  DIFFICULTY_LEVELS,
  getMasterQuestions,
  getQuestionStats,
  getQuizQuestions,
  shuffleArray
};

