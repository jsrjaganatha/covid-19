(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4Fil":function(e,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"c",(function(){return l})),r.d(n,"b",(function(){return s}));var t=r("17x9"),o=r.n(t),i=r("vOnD"),a=i.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(e){var n=e.theme;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+n.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+n.color.white+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+n.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+n.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(1.25);\n        text-decoration-color: "+n.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));a.propTypes={children:o.a.node.isRequired,elevate:o.a.bool.isRequired},a.defaultProps={elevate:!0};var l=i.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(e){var n=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+n.color.darkgrey+";\n    background: linear-gradient(#f3ffff 0%, "+n.color.white+" 100%);\n    font-weight: bold;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+n.padding.normal+";\n    padding-bottom: 0;\n"}));l.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired,children:o.a.node.isRequired},l.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var c=r("FdF9"),d=i.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-0"})((function(e){var n=e.theme;return"\n    flex: 1;\n    padding: "+n.padding.normal+";\n    background-color: inherit;\n    color: "+n.color.black+";\n"}));d.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired},d.defaultProps={fgColor:"inherit",bgColor:"#fff"};var s=function(e){var n=e.children,r=(e.image,e.style);return c.default.createElement(d,{style:r},n)},u=i.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(e){var n=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+n.color.black+";\n    background-color: inherit;\n    padding: "+n.padding.normal+";\n    height: 4rem;\n"}));u.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired,children:o.a.node.isRequired},u.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"}},"9I2h":function(e,n,r){"use strict";r.r(n);r("Z2Ku"),r("L9s1"),r("pIFo");var t=r("FdF9"),o=r("vOnD"),i=r("I/Ru"),a=r("jNNy"),l=r("gGy4"),c=r("RiPl"),d=r("4Fil"),s=r("/m4c"),u=r("FT44"),f=o.c.div.withConfig({displayName:"resources__ResourceButtons",componentId:"sc-1l7een9-0"})((function(e){return"\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: "+e.theme.padding.normal+";\n"})),m=Object(o.c)(u.a).withConfig({displayName:"resources__ResourceButton",componentId:"sc-1l7een9-1"})((function(e){var n=e.theme,r=e.active;return"\n    display: block;\n    padding: 0.5rem 1rem;\n    margin: 0.5rem;\n    border-radius: 4px;\n    "+(void 0!==r&&r?"background-color: "+n.color.primary.main+";":"background-color: "+n.color.darkgrey+";")+"\n    @media (max-width: 798px) {\n        width: 100%;\n    }\n"})),p=o.c.div.withConfig({displayName:"resources__Resource",componentId:"sc-1l7een9-2"})((function(e){var n=e.theme;return"\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 1rem;\n    padding-bottom: "+n.padding.normal+";\n    &:not(:last-child) {\n        border-bottom: 1px solid "+n.color.lightgrey+";\n    }\n    @media (max-width: 798px) {\n        flex-direction: column;\n    }\n"})),g=o.c.div.withConfig({displayName:"resources__ResourceInfo",componentId:"sc-1l7een9-3"})((function(e){return"\n    flex: 1;\n    padding-right: "+e.theme.padding.normal+";\n"})),h=Object(o.c)(c.a).withConfig({displayName:"resources__ResourceTitle",componentId:"sc-1l7een9-4"})(["text-align:left;@media (max-width:798px){text-align:center;}"]),y=o.c.div.withConfig({displayName:"resources__ResourceSource",componentId:"sc-1l7een9-5"})((function(e){var n=e.theme;return"\n    color: "+n.color.grey+";\n    @media (max-width: 798px) {\n        margin-bottom: "+n.padding.normal+";\n    }\n"}));n.default=function(){var e=Object(l.d)(),n=Object(t.useState)(-1),r=n[0],o=n[1],u=function(e){return function(n){return o(e)}};return t.default.createElement(i.a,null,t.default.createElement(a.a,{title:"Resources",description:"",keywords:""}),t.default.createElement(c.c,null,"General COVID-19 Resources"),t.default.createElement(f,null,t.default.createElement(m,{onClick:u(-1),active:-1===r},"ALL (",e.reduce((function(e,n){return e+n.resources.length}),0),")"),e.map((function(e,n){return t.default.createElement(m,{key:e.title+"_button",onClick:u(n),active:r===n},e.title," (",e.resources.length,")")}))),t.default.createElement("section",{id:"resource-list"},e.map((function(e,n){var o,i=e.title,a=e.resources;return[-1,n].includes(r)&&t.default.createElement(d.a,{key:i,name:(o=i,o.toLowerCase().replace(" ","-"))},t.default.createElement(d.c,null,i),t.default.createElement(d.b,null,a.map((function(e){return t.default.createElement(p,{key:e.title},t.default.createElement(g,null,t.default.createElement(h,null,e.title),t.default.createElement(y,null,"Source: ",e.source||"-")),t.default.createElement(s.b,{to:e.url},"View"))}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-resources-js-d537587741704515be51.js.map