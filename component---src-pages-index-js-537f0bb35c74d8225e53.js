(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4Fil":function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"d",(function(){return l})),r.d(n,"b",(function(){return u})),r.d(n,"c",(function(){return f}));var t=r("17x9"),a=r.n(t),o=r("vOnD"),i=o.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(e){var n=e.theme;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+n.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    // background-color: "+n.color.white+";\n    background: linear-gradient(to bottom, #ffffff 0%, "+n.color.white+" 50%, "+n.color.white+" 100%);\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+n.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+n.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(0.75);\n        text-decoration-color: "+n.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));i.propTypes={children:a.a.node.isRequired,elevate:a.a.bool.isRequired},i.defaultProps={elevate:!0};var l=o.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(e){var n=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+n.color.darkgrey+";\n    background-color: inherit;\n    font-weight: bold;\n    padding: 0.5rem 2rem;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+n.padding.normal+" "+n.padding.normal+" 0 "+n.padding.normal+";\n"}));l.propTypes={fgColor:a.a.string.isRequired,bgColor:a.a.string.isRequired,children:a.a.node.isRequired},l.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var d=r("FdF9"),s=o.c.div.withConfig({displayName:"card-body__CardBodyWrapper",componentId:"c38ykj-0"})(["display:flex;flex-direction:row;"]),c=o.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-1"})((function(e){var n=e.theme;return"\n    flex: 1;\n    padding: "+n.padding.normal+";\n    background-color: inherit;\n    color: "+n.color.black+";\n"}));c.propTypes={fgColor:a.a.string.isRequired,bgColor:a.a.string.isRequired},c.defaultProps={fgColor:"inherit",bgColor:"#fff"};var u=function(e){var n=e.children,r=(e.image,e.style);return d.default.createElement(s,null,d.default.createElement(c,{style:r},n))},f=o.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(e){var n=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+n.color.black+";\n    background-color: inherit;\n    padding: "+n.padding.normal+";\n    height: 4rem;\n"}));f.propTypes={fgColor:a.a.string.isRequired,bgColor:a.a.string.isRequired,children:a.a.node.isRequired},f.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"}},RXBc:function(e,n,r){"use strict";r.r(n);var t=r("FdF9"),a=r("I/Ru"),o=r("RiPl"),i=r("jNNy"),l=r("4Fil"),d=(r("vOnD").c.button.withConfig({displayName:"button__Button",componentId:"sv7ghy-0"})((function(e){var n=e.theme;return"\n    background-color: "+n.color.primary.main+";\n    color: "+n.color.white+";\n    border: 0;\n    padding: 1rem 2rem;\n    border-radius: "+n.border.radius+";\n    cursor: pointer;\n    text-transform: uppercase;\n    transition: filter 250ms;\n    filter: brightness(1.0) drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.2));\n    &:hover {\n        filter: brightness(1.25) drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.2));\n    }\n"})),r("vOkX")),s=r("/m4c"),c=r("gGy4");n.default=function(){var e=Object(c.a)();return t.default.createElement(a.a,null,t.default.createElement(i.a,{title:"Home",description:"",keywords:""}),t.default.createElement(o.c,null,"RENCI's COVID-19 Response"),t.default.createElement(l.a,null,t.default.createElement(l.d,null,"How we’re addressing the crisis"),t.default.createElement(l.b,null,t.default.createElement(o.b,null,"Working closely with partner research institutions and the private sector,",t.default.createElement(s.a,{to:"https://www.renci.org/"},"RENCI")," is adapting and extending its existing capabilities to accelerate COVID-19 response and research efforts. RENCI researchers are leaders in data science and in data-driven discoveries, and we want to use those talents to assist the larger international effort to slow the spread of the virus and search for treatments."),t.default.createElement(o.b,null,"At a high level, our work in the area of COVID-19 research aims to:"),t.default.createElement(d.a,null,t.default.createElement(d.b,{primary:"Apply linked open data, including biomedical ontologies, to build in silico knowledge models of drugs, processes, and systems involved in the coronavirus disease and related diseases."}),t.default.createElement(d.b,{primary:"Present aggregated clinical statistical models and an open, privacy-preserving framework to expose, share, and analyze data on clinical correlates of disease and outcomes, environmental exposures, socio-economic indicators, and genotype data."}),t.default.createElement(d.b,{primary:"Provision notebook-based analytical environments with big data, machine learning, and artificial intelligence capabilities to support access to the growing body of COVID-19 related datasets, as well as tools to analyze and explore the data."})))),t.default.createElement(l.a,null,t.default.createElement(l.d,null,"Our Blog"),t.default.createElement(l.b,null,t.default.createElement(o.b,null,"Keep up with the latest on our blog."),e.map((function(e){var n=e.date,r=e.title,a=e.url;return t.default.createElement("article",null,t.default.createElement(o.a,null,t.default.createElement("strong",null,n)," - ",t.default.createElement(s.a,{to:a},r)))})))),t.default.createElement(o.b,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-537f0bb35c74d8225e53.js.map