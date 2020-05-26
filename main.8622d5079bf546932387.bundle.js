(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{280:function(module,exports,__webpack_require__){__webpack_require__(281),__webpack_require__(427),__webpack_require__(428),module.exports=__webpack_require__(623)},345:function(module,exports){},428:function(module,exports,__webpack_require__){"use strict";var _html=__webpack_require__(214),_html2=__webpack_require__(611),_preact=__webpack_require__(14),_preactRenderToString=_interopRequireDefault(__webpack_require__(621)),_prettierConfig=_interopRequireDefault(__webpack_require__(622));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(0,_html.addParameters)({options:{showRoots:!0}}),(0,_html.addDecorator)(storyFn=>_preact.html`
    <div class="p-4 bg-white h-screen">
      ${storyFn()}
    </div>
  `),(0,_html.addDecorator)(storyFn=>{let result=storyFn();return"string"==typeof result&&(result=(0,_preact.html)([result])),(0,_preactRenderToString.default)(result).replace(/&amp;/g,"&")}),(0,_html.addDecorator)((0,_html2.withHTML)({prettier:_prettierConfig.default}))},55:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=(0,function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(638)).default)("Movable Ink");exports.default=_default},623:function(module,exports,__webpack_require__){"use strict";(function(module){var _html=__webpack_require__(214);module._StorybookPreserveDecorators=!0,(0,_html.configure)([__webpack_require__(624)],module)}).call(this,__webpack_require__(19)(module))},624:function(module,exports,__webpack_require__){var map={"./Components/Text/BodyText/cookbook.stories.js":625,"./Components/Text/BodyText/index.stories.js":626,"./Components/Text/CaptionText.stories.js":647,"./Components/Text/HeadingText.stories.js":648,"./Guides/color.stories.js":649,"./Utilities/Color/text.stories.js":651,"./Utilities/Font/family.stories.js":652,"./Utilities/Font/letter-spacing.stories.js":653,"./Utilities/Font/line-height.stories.js":654,"./Utilities/Font/size.stories.js":655,"./Utilities/Font/weight.stories.js":656,"./Utilities/SVG/fill.stories.js":657,"./Utilities/SVG/stroke.stories.js":658};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=624},625:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.OverridingFontWeight=exports.default=void 0;var _preact=__webpack_require__(14);exports.default={title:"Components/Text/Body/Cookbook"};exports.OverridingFontWeight=()=>_preact.html`
  <p class="body-base font-bold">
    Base body class, but with bold text
  </p>
`},626:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExtraLarge=exports.Large=exports.Base=exports.Small=exports.default=void 0;var _loremIpsum=__webpack_require__(54),_preact=__webpack_require__(14),_random=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(55));const lorem=new _loremIpsum.LoremIpsum({random:_random.default});function makeBodyTextStory(size){return _preact.html`
    <p class="body-${size}">
      ${lorem.generateParagraphs(1)}
    </p>
  `}exports.default={title:"Components/Text/Body"};exports.Small=()=>makeBodyTextStory("sm");exports.Base=()=>makeBodyTextStory("base");exports.Large=()=>makeBodyTextStory("lg");exports.ExtraLarge=()=>makeBodyTextStory("xl")},646:function(module,exports){},647:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Large=exports.Small=exports.default=void 0;var _loremIpsum=__webpack_require__(54),_preact=__webpack_require__(14),_random=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(55));const lorem=new _loremIpsum.LoremIpsum({random:_random.default});function makeCaptionTextStory(size){return _preact.html` <p class="caption-${size}">${lorem.generateParagraphs(1)}</p> `}exports.default={title:"Components/Text/Caption"};exports.Small=()=>makeCaptionTextStory("sm");exports.Large=()=>makeCaptionTextStory("lg")},648:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExtraExtraLarge=exports.ExtraLarge=exports.Large=exports.Medium=exports.Small=exports.ExtraSmall=exports.default=void 0;var _loremIpsum=__webpack_require__(54),_preact=__webpack_require__(14),_random=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(55));const lorem=new _loremIpsum.LoremIpsum({random:_random.default,wordsPerSentence:{min:5,max:8}});function makeHeadingTextStory(size){return _preact.html` <p class="heading-${size}">${lorem.generateSentences(1)}</p> `}exports.default={title:"Components/Text/Heading"};exports.ExtraSmall=()=>makeHeadingTextStory("xs");exports.Small=()=>makeHeadingTextStory("sm");exports.Medium=()=>makeHeadingTextStory("md");exports.Large=()=>makeHeadingTextStory("lg");exports.ExtraLarge=()=>makeHeadingTextStory("xl");exports.ExtraExtraLarge=()=>makeHeadingTextStory("2xl")},649:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Palette=exports.default=void 0;var _preact=__webpack_require__(14);const colorConfig=__webpack_require__(650),colors=Object.keys(colorConfig).filter(color=>"object"==typeof colorConfig[color]),aliases=Object.keys(colorConfig).filter(color=>"string"==typeof colorConfig[color]);exports.default={title:"Guides/Color"};exports.Palette=()=>_preact.html`
  <h1 class="heading-md mb-2">Color Palette</h1>

  <div class="grid grid-cols-3 gap-4">
    ${colors.map(color=>{const colorValues=colorConfig[color],values=Object.keys(colorValues).filter(value=>"default"!==value),defaultValue=values.find(value=>colorValues[value]===colorValues.default);return _preact.html`
        <div>
          ${values.map(value=>{const hex=colorValues[value],identifier=`${color}-${value}`,alias=function getGlobalAlaisForHex(hex){return aliases.find(alias=>colorConfig[alias]===hex)}(hex)||(value===defaultValue?color:void 0);let className="";return value===defaultValue&&(className="py-4"),value>=defaultValue&&(className+=" text-white"),_preact.html`
              <div class="flex items-center justify-between p-2 bg-${identifier} ${className}">
                <code class="text-sm">
                  ${alias?`${alias} (${identifier})`:identifier}
                </code>

                <code class="text-sm">
                  ${hex}
                </code>
              </div>
            `})}
        </div>
      `})}
  </div>
`},650:function(module,exports,__webpack_require__){"use strict";function addDefault(colorDefinition,defaultKey="400"){return{default:colorDefinition[defaultKey],...colorDefinition}}const neutral=addDefault({100:"#ffffff",200:"#fafafa",300:"#f1f1f2",400:"#e8e8ea",500:"#c5c5ca",600:"#767680",700:"#45454b",800:"#1c1c1c",900:"#000000"},"500"),blue=addDefault({100:"#f2f7ff",200:"#d2e1fa",300:"#94b8f6",400:"#266fed",500:"#0d43a0",600:"#072251",700:"#030e22"}),violet=addDefault({100:"#f4f0fd",200:"#ddd2fa",300:"#b69cff",400:"#7549ea",500:"#4b1ec7",600:"#2c0e7b",700:"#16073e"}),aqua=addDefault({100:"#e4fbff",200:"#a0f1ff",300:"#4be4ff",400:"#00c2e4",500:"#0088a0",600:"#004e5c",700:"#002329"}),green=addDefault({100:"#f0f5f1",200:"#c8e6d0",300:"#83d79b",400:"#3cb860",500:"#2b8545",600:"#1b522b",700:"#0e2b16"}),yellow=addDefault({100:"#faf2d9",200:"#ffecae",300:"#ffdb6a",400:"#ffcb26",500:"#f2b800",600:"#9d7700",700:"#372a00"}),orange=addDefault({100:"#fff2dd",200:"#ffd088",300:"#ffaf33",400:"#ff9b00",500:"#cc7c00",600:"#885300",700:"#452a00"}),red=addDefault({100:"#ffebe9",200:"#feccc8",300:"#fd8f85",400:"#fc5142",500:"#e51604",600:"#810c02",700:"#4f0801"});module.exports={neutral:neutral,blue:blue,violet:violet,aqua:aqua,green:green,yellow:yellow,orange:orange,red:red,white:neutral[100],black:neutral[900]}},651:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ChangeOnHover=exports.default=void 0;var _preact=__webpack_require__(14);exports.default={title:"Utilities/Color/Text"};exports.ChangeOnHover=()=>_preact.html`
  <p class="text-red hover:text-blue">
    Hover me for blue text!
  </p>
`},652:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MonoSpace=exports.SansSerif=exports.default=void 0;var _loremIpsum=__webpack_require__(54),_preact=__webpack_require__(14),_random=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(55));const lorem=new _loremIpsum.LoremIpsum({random:_random.default});exports.default={title:"Utilities/Font/Family"};exports.SansSerif=()=>_preact.html` <p class="font-sans">${lorem.generateParagraphs(1)}</p> `;exports.MonoSpace=()=>_preact.html` <p class="font-mono">${lorem.generateParagraphs(1)}</p> `},653:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Medium=exports.Base=exports.Small=exports.ExtraSmall=exports.ExtraExtraSmall=exports.default=void 0;var _loremIpsum=__webpack_require__(54),_preact=__webpack_require__(14),_random=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(55));const lorem=new _loremIpsum.LoremIpsum({random:_random.default});function makeLetterSpacingStory(size,notes){return _preact.html`
    <p class="mb-4">${notes}</p>
    <p class="tracking-${size}">${lorem.generateParagraphs(1)}</p>
  `}exports.default={title:"Utilities/Font/Letter Spacing"};exports.ExtraExtraSmall=()=>makeLetterSpacingStory("2xs","Reserved for large text, like headers");exports.ExtraSmall=()=>makeLetterSpacingStory("xs","Reserved for large text, like headers");exports.Small=()=>makeLetterSpacingStory("sm","Slightly decreased letter spacing for larger body text");exports.Base=()=>makeLetterSpacingStory("base","Default letter spacing");exports.Medium=()=>makeLetterSpacingStory("md","Increased letter spacing for small text, like captions")},654:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExtraLarge3=exports.ExtraLarge2=exports.ExtraLarge=exports.Large=exports.Medium=exports.Base=exports.Small=exports.ExtraSmall=exports.ExtraExtraSmall=exports.None=exports.default=void 0;var _loremIpsum=__webpack_require__(54),_preact=__webpack_require__(14),_random=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(55));const lorem=new _loremIpsum.LoremIpsum({random:_random.default});function makeLineHeightStory(size,notes){return _preact.html`
    <p class="mb-4">${notes}</p>
    <p class="leading-${size}">${lorem.generateParagraphs(1)}</p>
  `}exports.default={title:"Utilities/Font/Line Height"};exports.None=()=>makeLineHeightStory("none","Match the line height to the font size, no matter what the font size is");exports.ExtraExtraSmall=()=>makeLineHeightStory("2xs","Use sparingly. Caption text only.");exports.ExtraSmall=()=>makeLineHeightStory("xs","Use sparingly. Caption text only.");exports.Small=()=>makeLineHeightStory("sm","Use sparingly. Caption text only.");exports.Base=()=>makeLineHeightStory("base","Default line height for all type");exports.Medium=()=>makeLineHeightStory("md","Used for the largest body styles");exports.Large=()=>makeLineHeightStory("lg","Reserved for the smaller heading styles. Should never be applied to body text.");exports.ExtraLarge=()=>makeLineHeightStory("xl","Reserved for the smaller heading styles. Should never be applied to body text.");exports.ExtraLarge2=()=>makeLineHeightStory("2xl","Reserved for the larged heading styles. Should never be applied to body text.");exports.ExtraLarge3=()=>makeLineHeightStory("3xl","Reserved for the largest heading styles. Should never be applied to body text.")},655:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Major8=exports.Major7=exports.Major6=exports.Major5=exports.Major4=exports.Major3=exports.Major2=exports.Major1=exports.Base=exports.Minor1=exports.Minor2=exports.Minor3=exports.default=void 0;var _loremIpsum=__webpack_require__(54),_preact=__webpack_require__(14),_random=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(55));const lorem=new _loremIpsum.LoremIpsum({random:_random.default});function makeFontSizeStory(size,notes){return _preact.html`
    <p class="mb-4">${notes}</p>
    <p class="text-${size}">${lorem.generateParagraphs(1)}</p>
  `}exports.default={title:"Utilities/Font/Size"};exports.Minor3=()=>makeFontSizeStory("2xs","Used for small caption text or Studio, where space is tigher. Use sparingly.");exports.Minor2=()=>makeFontSizeStory("xs","Used for caption text or studio where spacing is tighter. Use sparingly.");exports.Minor1=()=>makeFontSizeStory("sm","Minor sizes were created for caption text and for interfaces with much tighter size constraints like Studio");exports.Base=()=>makeFontSizeStory("base","This should be the default font size. Generally we should try to stay above 16pt font wherever possible, however some of our interfaces will require slightly smaller text. ");exports.Major1=()=>makeFontSizeStory("lg","This is a slightly larger body font that should be used to create more contrast and emphasis when combined with the default body size. ");exports.Major2=()=>makeFontSizeStory("xl","This may not be used but has been defined to provide a step between 22px and 18px. Once we transition from current type to new type, this size may not be needed anymore. ");exports.Major3=()=>makeFontSizeStory("2xl","Used for H1-H6 elements");exports.Major4=()=>makeFontSizeStory("3xl","Used for H1-H6 elements");exports.Major5=()=>makeFontSizeStory("4xl","Used for H1-H6 elements");exports.Major6=()=>makeFontSizeStory("5xl","Used for H1-H6 elements");exports.Major7=()=>makeFontSizeStory("6xl","Used for H1-H6 elements");exports.Major8=()=>makeFontSizeStory("7xl","Used for H1-H6 elements")},656:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Bold=exports.Normal=exports.default=void 0;var _loremIpsum=__webpack_require__(54),_preact=__webpack_require__(14),_random=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(55));const lorem=new _loremIpsum.LoremIpsum({random:_random.default});exports.default={title:"Utilities/Font/Weight"};exports.Normal=()=>_preact.html` <p class="font-normal">${lorem.generateParagraphs(1)}</p> `;exports.Bold=()=>_preact.html`
  <p class="font-bold">${lorem.generateParagraphs(1)}</p>
  <strong>${lorem.generateParagraphs(1)}</strong>
`},657:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SettingColor=exports.default=void 0;var _preact=__webpack_require__(14);exports.default={title:"Utilities/SVG/Path"};exports.SettingColor=()=>_preact.html`
  <svg
    class="h-6 w-6 text-blue fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M14,0 L14.0009121,3.22322343 C14.8325701,3.41202812 15.6204749,3.71600681 16.3469696,4.11750275 L18.7175144,1.74695167 L22.2530483,5.28248558 L19.8824973,7.65303042 C20.2841536,8.37981533 20.5882147,9.16805936 20.7770028,10.0000846 L24,10 L24,14 L20.7767766,14.0009121 C20.5879719,14.8325701 20.2839932,15.6204749 19.8824973,16.3469696 L22.2530483,18.7175144 L18.7175144,22.2530483 L16.3469696,19.8824973 C15.6204749,20.2839932 14.8325701,20.5879719 14.0009121,20.7767766 L14,24 L10,24 L10.0000846,20.7770028 C9.16805936,20.5882147 8.37981533,20.2841536 7.65303042,19.8824973 L5.28248558,22.2530483 L1.74695167,18.7175144 L4.11750275,16.3469696 C3.71600681,15.6204749 3.41202812,14.8325701 3.22322343,14.0009121 L0,14 L0,10 L3.22299722,10.0000846 C3.41178528,9.16805936 3.71584643,8.37981533 4.11750275,7.65303042 L1.74695167,5.28248558 L5.28248558,1.74695167 L7.65303042,4.11750275 C8.37981533,3.71584643 9.16805936,3.41178528 10.0000846,3.22299722 L10,0 L14,0 Z M12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 Z"
    />
  </svg>
`},658:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SettingColor=exports.default=void 0;var _preact=__webpack_require__(14);exports.default={title:"Utilities/SVG/Stroke"};exports.SettingColor=()=>_preact.html`
  <svg
    class="h-6 w-6 text-blue stroke-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M14,0 L14.0009121,3.22322343 C14.8325701,3.41202812 15.6204749,3.71600681 16.3469696,4.11750275 L18.7175144,1.74695167 L22.2530483,5.28248558 L19.8824973,7.65303042 C20.2841536,8.37981533 20.5882147,9.16805936 20.7770028,10.0000846 L24,10 L24,14 L20.7767766,14.0009121 C20.5879719,14.8325701 20.2839932,15.6204749 19.8824973,16.3469696 L22.2530483,18.7175144 L18.7175144,22.2530483 L16.3469696,19.8824973 C15.6204749,20.2839932 14.8325701,20.5879719 14.0009121,20.7767766 L14,24 L10,24 L10.0000846,20.7770028 C9.16805936,20.5882147 8.37981533,20.2841536 7.65303042,19.8824973 L5.28248558,22.2530483 L1.74695167,18.7175144 L4.11750275,16.3469696 C3.71600681,15.6204749 3.41202812,14.8325701 3.22322343,14.0009121 L0,14 L0,10 L3.22299722,10.0000846 C3.41178528,9.16805936 3.71584643,8.37981533 4.11750275,7.65303042 L1.74695167,5.28248558 L5.28248558,1.74695167 L7.65303042,4.11750275 C8.37981533,3.71584643 9.16805936,3.41178528 10.0000846,3.22299722 L10,0 L14,0 Z M12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 Z"
    />
  </svg>
`}},[[280,1,2]]]);
//# sourceMappingURL=main.8622d5079bf546932387.bundle.js.map