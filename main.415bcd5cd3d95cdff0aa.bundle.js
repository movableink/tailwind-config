(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Example}));__webpack_require__(40),__webpack_require__(170),__webpack_require__(15),__webpack_require__(17),__webpack_require__(18),__webpack_require__(58);var htm_preact__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),preact_render_to_string__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(118),prismjs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(173),prismjs__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_8__);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <div class="border border-neutral-300 rounded ','" ...','>\n      <div class="border-b border-neutral-300 p-4">\n        ','\n      </div>\n      <pre class="p-4 bg-neutral-200">\n        <code class="block max-w-full whitespace-pre-wrap leading-xs">\n          ',"\n        </code>\n      </pre>\n    </div>\n  "]);return _templateObject=function(){return data},data}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Example(_ref){var className=_ref.className,children=_ref.children,rest=_objectWithoutProperties(_ref,["className","children"]),highlightedCode=function highlightWithPrism(code){return prismjs__WEBPACK_IMPORTED_MODULE_8___default.a.highlight(code,prismjs__WEBPACK_IMPORTED_MODULE_8___default.a.languages.html)}(Object(preact_render_to_string__WEBPACK_IMPORTED_MODULE_7__.a)(children));return Object(htm_preact__WEBPACK_IMPORTED_MODULE_6__.a)(_templateObject(),className,rest,children,function renderString(input){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_6__.a)([input])}(highlightedCode))}},20:function(module,__webpack_exports__,__webpack_require__){"use strict";var seedrandom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(274),seedrandom__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=seedrandom__WEBPACK_IMPORTED_MODULE_0___default()("Movable Ink")},275:function(module,exports,__webpack_require__){__webpack_require__(276),__webpack_require__(423),__webpack_require__(424),module.exports=__webpack_require__(613)},341:function(module,exports){},424:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(15),__webpack_require__(17),__webpack_require__(18),__webpack_require__(57),__webpack_require__(220);var _storybook_html__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(92),htm_preact__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),preact_render_to_string__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(118);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n  <div class="p-4 bg-white h-screen">\n    ',"\n  </div>\n"]);return _templateObject=function(){return data},data}Object(_storybook_html__WEBPACK_IMPORTED_MODULE_5__.addDecorator)((function(storyFn){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_6__.a)(_templateObject(),storyFn())})),Object(_storybook_html__WEBPACK_IMPORTED_MODULE_5__.addDecorator)((function(storyFn){var result=storyFn();return"string"==typeof result&&(result=Object(htm_preact__WEBPACK_IMPORTED_MODULE_6__.a)([result])),Object(preact_render_to_string__WEBPACK_IMPORTED_MODULE_7__.a)(result).replace(/&amp;/g,"&")}))},613:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(92);module._StorybookPreserveDecorators=!0,Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(615)],module)}.call(this,__webpack_require__(614)(module))},615:function(module,exports,__webpack_require__){var map={"./Components/BodyText/cookbook.stories.js":616,"./Components/BodyText/index.stories.js":617,"./Components/CaptionText.stories.js":637,"./Components/HeadingText.stories.js":638,"./Guides/color.stories.js":644,"./Utilities/Color/text.stories.js":639,"./Utilities/Font/letter-spacing.stories.js":640,"./Utilities/Font/line-height.stories.js":641,"./Utilities/Font/size.stories.js":642,"./Utilities/Font/weight.stories.js":643};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=615},616:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"OverridingFontWeight",(function(){return OverridingFontWeight}));__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var htm_preact__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_utils_Example__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  <",'>\n    <p class="body-base font-bold">\n      Base body class, but with bold text\n    </p>\n  </>\n']);return _templateObject=function(){return data},data}__webpack_exports__.default={title:"Components/Body Text|Cookbook"};var OverridingFontWeight=function(){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_3__.a)(_templateObject(),_utils_Example__WEBPACK_IMPORTED_MODULE_4__.a)}},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"Base",(function(){return Base})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"ExtraLarge",(function(){return ExtraLarge}));__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19),htm_preact__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_utils_Example__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_utils_random__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    <",'>\n      <p class="body-','">\n        ',"\n      </p>\n    </>\n  "]);return _templateObject=function(){return data},data}var lorem=new lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__.LoremIpsum({random:_utils_random__WEBPACK_IMPORTED_MODULE_6__.a});function makeBodyTextStory(size){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject(),_utils_Example__WEBPACK_IMPORTED_MODULE_5__.a,size,lorem.generateParagraphs(1))}__webpack_exports__.default={title:"Components|Body Text"};var Small=function(){return makeBodyTextStory("sm")},Base=function(){return makeBodyTextStory("base")},Large=function(){return makeBodyTextStory("lg")},ExtraLarge=function(){return makeBodyTextStory("xl")}},636:function(module,exports){},637:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large}));__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19),htm_preact__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_utils_Example__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_utils_random__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    <",'>\n      <p class="caption-','">',"</p>\n    </>\n  "]);return _templateObject=function(){return data},data}var lorem=new lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__.LoremIpsum({random:_utils_random__WEBPACK_IMPORTED_MODULE_6__.a});function makeCaptionTextStory(size){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject(),_utils_Example__WEBPACK_IMPORTED_MODULE_5__.a,size,lorem.generateParagraphs(1))}__webpack_exports__.default={title:"Components|Caption Text"};var Small=function(){return makeCaptionTextStory("sm")},Large=function(){return makeCaptionTextStory("lg")}},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ExtraSmall",(function(){return ExtraSmall})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"Medium",(function(){return Medium})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"ExtraLarge",(function(){return ExtraLarge})),__webpack_require__.d(__webpack_exports__,"ExtraExtraLarge",(function(){return ExtraExtraLarge}));__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19),htm_preact__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_utils_Example__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_utils_random__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    <",'>\n      <p class="heading-','">',"</p>\n    </>\n  "]);return _templateObject=function(){return data},data}var lorem=new lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__.LoremIpsum({random:_utils_random__WEBPACK_IMPORTED_MODULE_6__.a,wordsPerSentence:{min:5,max:8}});function makeHeadingTextStory(size){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject(),_utils_Example__WEBPACK_IMPORTED_MODULE_5__.a,size,lorem.generateSentences(1))}__webpack_exports__.default={title:"Components|Heading Text"};var ExtraSmall=function(){return makeHeadingTextStory("xs")},Small=function(){return makeHeadingTextStory("sm")},Medium=function(){return makeHeadingTextStory("md")},Large=function(){return makeHeadingTextStory("lg")},ExtraLarge=function(){return makeHeadingTextStory("xl")},ExtraExtraLarge=function(){return makeHeadingTextStory("2xl")}},639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ChangeOnHover",(function(){return ChangeOnHover}));__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var htm_preact__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_utils_Example__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  <",'>\n    <p class="text-red hover:text-blue">\n      Hover me for blue text!\n    </p>\n  </>\n']);return _templateObject=function(){return data},data}__webpack_exports__.default={title:"Utilities|Color/Text"};var ChangeOnHover=function(){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_3__.a)(_templateObject(),_utils_Example__WEBPACK_IMPORTED_MODULE_4__.a)}},640:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ExtraExtraSmall",(function(){return ExtraExtraSmall})),__webpack_require__.d(__webpack_exports__,"ExtraSmall",(function(){return ExtraSmall})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"Base",(function(){return Base})),__webpack_require__.d(__webpack_exports__,"Medium",(function(){return Medium}));__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19),htm_preact__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_utils_Example__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_utils_random__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <p class="mb-4">',"</p>\n    <",'>\n      <p class="tracking-','">',"</p>\n    </>\n  "]);return _templateObject=function(){return data},data}var lorem=new lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__.LoremIpsum({random:_utils_random__WEBPACK_IMPORTED_MODULE_6__.a});function makeLetterSpacingStory(size,notes){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject(),notes,_utils_Example__WEBPACK_IMPORTED_MODULE_5__.a,size,lorem.generateParagraphs(1))}__webpack_exports__.default={title:"Utilities|Font/Letter Spacing"};var ExtraExtraSmall=function(){return makeLetterSpacingStory("2xs","Reserved for large text, like headers")},ExtraSmall=function(){return makeLetterSpacingStory("xs","Reserved for large text, like headers")},Small=function(){return makeLetterSpacingStory("sm","Slightly decreased letter spacing for larger body text")},Base=function(){return makeLetterSpacingStory("base","Default letter spacing")},Medium=function(){return makeLetterSpacingStory("md","Increased letter spacing for small text, like captions")}},641:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"None",(function(){return None})),__webpack_require__.d(__webpack_exports__,"ExtraExtraSmall",(function(){return ExtraExtraSmall})),__webpack_require__.d(__webpack_exports__,"ExtraSmall",(function(){return ExtraSmall})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"Base",(function(){return Base})),__webpack_require__.d(__webpack_exports__,"Medium",(function(){return Medium})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"ExtraLarge",(function(){return ExtraLarge})),__webpack_require__.d(__webpack_exports__,"ExtraLarge2",(function(){return ExtraLarge2})),__webpack_require__.d(__webpack_exports__,"ExtraLarge3",(function(){return ExtraLarge3}));__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19),htm_preact__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_utils_Example__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_utils_random__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <p class="mb-4">',"</p>\n    <",'>\n      <p class="leading-','">',"</p>A\n    </>\n  "]);return _templateObject=function(){return data},data}var lorem=new lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__.LoremIpsum({random:_utils_random__WEBPACK_IMPORTED_MODULE_6__.a});function makeLineHeightStory(size,notes){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject(),notes,_utils_Example__WEBPACK_IMPORTED_MODULE_5__.a,size,lorem.generateParagraphs(1))}__webpack_exports__.default={title:"Utilities|Font/Line Height"};var None=function(){return makeLineHeightStory("none","Match the line height to the font size, no matter what the font size is")},ExtraExtraSmall=function(){return makeLineHeightStory("2xs","Use sparingly. Caption text only.")},ExtraSmall=function(){return makeLineHeightStory("xs","Use sparingly. Caption text only.")},Small=function(){return makeLineHeightStory("sm","Use sparingly. Caption text only.")},Base=function(){return makeLineHeightStory("base","Default line height for all type")},Medium=function(){return makeLineHeightStory("md","Used for the largest body styles")},Large=function(){return makeLineHeightStory("lg","Reserved for the smaller heading styles. Should never be applied to body text.")},ExtraLarge=function(){return makeLineHeightStory("xl","Reserved for the smaller heading styles. Should never be applied to body text.")},ExtraLarge2=function(){return makeLineHeightStory("2xl","Reserved for the larged heading styles. Should never be applied to body text.")},ExtraLarge3=function(){return makeLineHeightStory("3xl","Reserved for the largest heading styles. Should never be applied to body text.")}},642:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Minor3",(function(){return Minor3})),__webpack_require__.d(__webpack_exports__,"Minor2",(function(){return Minor2})),__webpack_require__.d(__webpack_exports__,"Minor1",(function(){return Minor1})),__webpack_require__.d(__webpack_exports__,"Base",(function(){return Base})),__webpack_require__.d(__webpack_exports__,"Major1",(function(){return Major1})),__webpack_require__.d(__webpack_exports__,"Major2",(function(){return Major2})),__webpack_require__.d(__webpack_exports__,"Major3",(function(){return Major3})),__webpack_require__.d(__webpack_exports__,"Major4",(function(){return Major4})),__webpack_require__.d(__webpack_exports__,"Major5",(function(){return Major5})),__webpack_require__.d(__webpack_exports__,"Major6",(function(){return Major6})),__webpack_require__.d(__webpack_exports__,"Major7",(function(){return Major7})),__webpack_require__.d(__webpack_exports__,"Major8",(function(){return Major8}));__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19),htm_preact__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_utils_Example__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_utils_random__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <p class="mb-4">',"</p>\n    <",'>\n      <p class="text-','">',"</p>\n    </>\n  "]);return _templateObject=function(){return data},data}var lorem=new lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__.LoremIpsum({random:_utils_random__WEBPACK_IMPORTED_MODULE_6__.a});function makeFontSizeStory(size,notes){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject(),notes,_utils_Example__WEBPACK_IMPORTED_MODULE_5__.a,size,lorem.generateParagraphs(1))}__webpack_exports__.default={title:"Utilities|Font/Size"};var Minor3=function(){return makeFontSizeStory("2xs","Used for small caption text or Studio, where space is tigher. Use sparingly.")},Minor2=function(){return makeFontSizeStory("xs","Used for caption text or studio where spacing is tighter. Use sparingly.")},Minor1=function(){return makeFontSizeStory("sm","Minor sizes were created for caption text and for interfaces with much tighter size constraints like Studio")},Base=function(){return makeFontSizeStory("base","This should be the default font size. Generally we should try to stay above 16pt font wherever possible, however some of our interfaces will require slightly smaller text. ")},Major1=function(){return makeFontSizeStory("lg","This is a slightly larger body font that should be used to create more contrast and emphasis when combined with the default body size. ")},Major2=function(){return makeFontSizeStory("xl","This may not be used but has been defined to provide a step between 22px and 18px. Once we transition from current type to new type, this size may not be needed anymore. ")},Major3=function(){return makeFontSizeStory("2xl","Used for H1-H6 elements")},Major4=function(){return makeFontSizeStory("3xl","Used for H1-H6 elements")},Major5=function(){return makeFontSizeStory("4xl","Used for H1-H6 elements")},Major6=function(){return makeFontSizeStory("5xl","Used for H1-H6 elements")},Major7=function(){return makeFontSizeStory("6xl","Used for H1-H6 elements")},Major8=function(){return makeFontSizeStory("7xl","Used for H1-H6 elements")}},643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Normal",(function(){return Normal})),__webpack_require__.d(__webpack_exports__,"Bold",(function(){return Bold}));__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19),htm_preact__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_utils_Example__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_utils_random__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20);function _templateObject2(){var data=_taggedTemplateLiteral(["\n  <",' className="mb-4">\n    <p class="font-bold">',"</p>\n  </>\n  <",">\n    <strong>","</strong>\n  </>\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(["\n  <",'>\n    <p class="font-normal">',"</p>\n  </>\n"]);return _templateObject=function(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var lorem=new lorem_ipsum__WEBPACK_IMPORTED_MODULE_3__.LoremIpsum({random:_utils_random__WEBPACK_IMPORTED_MODULE_6__.a});__webpack_exports__.default={title:"Utilities|Font/Weight"};var Normal=function(){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject(),_utils_Example__WEBPACK_IMPORTED_MODULE_5__.a,lorem.generateParagraphs(1))},Bold=function(){return Object(htm_preact__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject2(),_utils_Example__WEBPACK_IMPORTED_MODULE_5__.a,lorem.generateParagraphs(1),_utils_Example__WEBPACK_IMPORTED_MODULE_5__.a,lorem.generateParagraphs(1))}},644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(25),__webpack_require__(15),__webpack_require__(17),__webpack_require__(18);var index_module=__webpack_require__(2);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <code class="bg-neutral-200 rounded py-px px-1 border border-neutral-300 leading-none">\n      ',"\n    </code>\n  "]);return _templateObject=function(){return data},data}function InlineCode(_ref){var children=_ref.children;return Object(index_module.a)(_templateObject(),children)}function _templateObject3(){var data=color_stories_taggedTemplateLiteral(['\n  <h1 class="heading-md mb-2">Color Aliases</h1>\n\n  <p class="body-base mb-2">\n    Each of our core colors has a alias, or shortcut, that can be used to avoid needing to provide\n    the color\'s numerical value.\n  </p>\n\n  <p class="body-base mb-2">\n    Each color\'s alias corresponds to the "middle" step for the range of values. For most colors,\n    this matches the <',">400</> value. For <",">neutral</> however, it matches the <",'>500</> value.\n  </p>\n\n  <p class="body-base mb-2">\n    Additionally, an alias for <',">black</> and <",'>white</> are provided.\n  </p>\n\n  <div class="grid grid-cols-2 gap-4">\n    <div class="grid grid-cols-2 gap-px h-24 bg-neutral-300 border border-neutral-300">\n      <',' color="neutral" value="100" />\n      <',' color="white" />\n    </div>\n\n    <div class="grid grid-cols-2 gap-px h-24">\n      <',' color="neutral" value="500" className="text-black" />\n      <',' color="neutral" />\n    </div>\n\n    <div class="grid grid-cols-2 gap-px h-24">\n      <',' color="red" value="400" />\n      <',' color="red" />\n    </div>\n\n    <div class="grid grid-cols-2 gap-px h-24">\n      <',' color="orange" value="400" />\n      <',' color="orange" />\n    </div>\n\n    <div class="grid grid-cols-2 gap-px h-24">\n      <',' color="yellow" value="400" />\n      <',' color="yellow" />\n    </div>\n\n    <div class="grid grid-cols-2 gap-px h-24">\n      <',' color="green" value="400" />\n      <',' color="green" />\n    </div>\n\n    <div class="grid grid-cols-2 gap-px h-24">\n      <',' color="aqua" value="400" />\n      <',' color="aqua" />\n    </div>\n\n    <div class="grid grid-cols-2 gap-px h-24">\n      <',' color="blue" value="400" />\n      <',' color="blue" />\n    </div>\n\n    <div class="grid grid-cols-2 gap-px h-24">\n      <',' color="violet" value="400" />\n      <',' color="violet" />\n    </div>\n\n    <div class="grid grid-cols-2 gap-px h-24">\n      <',' color="neutral" value="900" />\n      <',' color="black" className="text-white" />\n    </div>\n  </div>\n']);return _templateObject3=function(){return data},data}function _templateObject2(){var data=color_stories_taggedTemplateLiteral(['\n  <h1 class="heading-md mb-2">Color Palette</h1>\n\n  <div class="grid grid-cols-9 h-24 mb-4">\n    <',' color="neutral" value="100" />\n    <',' color="neutral" value="200" />\n    <',' color="neutral" value="300" />\n    <',' color="neutral" value="400" />\n    <',' color="neutral" value="500" />\n    <',' color="neutral" value="600" />\n    <',' color="neutral" value="700" />\n    <',' color="neutral" value="800" />\n    <',' color="neutral" value="900" />\n  </div>\n\n  <div class="grid grid-cols-7 h-24 mb-4">\n    <',' color="red" value="100" />\n    <',' color="red" value="200" />\n    <',' color="red" value="300" />\n    <',' color="red" value="400" />\n    <',' color="red" value="500" />\n    <',' color="red" value="600" />\n    <',' color="red" value="700" />\n  </div>\n\n  <div class="grid grid-cols-7 h-24 mb-4">\n    <',' color="orange" value="100" />\n    <',' color="orange" value="200" />\n    <',' color="orange" value="300" />\n    <',' color="orange" value="400" />\n    <',' color="orange" value="500" />\n    <',' color="orange" value="600" />\n    <',' color="orange" value="700" />\n  </div>\n\n  <div class="grid grid-cols-7 h-24 mb-4">\n    <',' color="yellow" value="100" />\n    <',' color="yellow" value="200" />\n    <',' color="yellow" value="300" />\n    <',' color="yellow" value="400" />\n    <',' color="yellow" value="500" />\n    <',' color="yellow" value="600" />\n    <',' color="yellow" value="700" />\n  </div>\n\n  <div class="grid grid-cols-7 h-24 mb-4">\n    <',' color="green" value="100" />\n    <',' color="green" value="200" />\n    <',' color="green" value="300" />\n    <',' color="green" value="400" />\n    <',' color="green" value="500" />\n    <',' color="green" value="600" />\n    <',' color="green" value="700" />\n  </div>\n\n  <div class="grid grid-cols-7 h-24 mb-4">\n    <',' color="aqua" value="100" />\n    <',' color="aqua" value="200" />\n    <',' color="aqua" value="300" />\n    <',' color="aqua" value="400" />\n    <',' color="aqua" value="500" />\n    <',' color="aqua" value="600" />\n    <',' color="aqua" value="700" />\n  </div>\n\n  <div class="grid grid-cols-7 h-24 mb-4">\n    <',' color="blue" value="100" />\n    <',' color="blue" value="200" />\n    <',' color="blue" value="300" />\n    <',' color="blue" value="400" />\n    <',' color="blue" value="500" />\n    <',' color="blue" value="600" />\n    <',' color="blue" value="700" />\n  </div>\n\n  <div class="grid grid-cols-7 h-24 mb-4">\n    <',' color="violet" value="100" />\n    <',' color="violet" value="200" />\n    <',' color="violet" value="300" />\n    <',' color="violet" value="400" />\n    <',' color="violet" value="500" />\n    <',' color="violet" value="600" />\n    <',' color="violet" value="700" />\n  </div>\n']);return _templateObject2=function(){return data},data}function color_stories_templateObject(){var data=color_stories_taggedTemplateLiteral(['\n    <div class="flex items-center justify-center bg-'," ",'">\n      <code class="text-sm">\n        ',"\n      </code>\n    </div>\n  "]);return color_stories_templateObject=function(){return data},data}function color_stories_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,"Palette",(function(){return Palette})),__webpack_require__.d(__webpack_exports__,"Aliases",(function(){return Aliases}));__webpack_exports__.default={title:"Guides|Color"};function Cell(_ref){var color=_ref.color,value=_ref.value,_ref$className=_ref.className,className=void 0===_ref$className?value&&400<value?"text-white":"":_ref$className,identifier=value?"".concat(color,"-").concat(value):color;return Object(index_module.a)(color_stories_templateObject(),identifier,className,identifier)}var Palette=function(){return Object(index_module.a)(_templateObject2(),Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell)},Aliases=function(){return Object(index_module.a)(_templateObject3(),InlineCode,InlineCode,InlineCode,InlineCode,InlineCode,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell)}}},[[275,1,2]]]);
//# sourceMappingURL=main.415bcd5cd3d95cdff0aa.bundle.js.map