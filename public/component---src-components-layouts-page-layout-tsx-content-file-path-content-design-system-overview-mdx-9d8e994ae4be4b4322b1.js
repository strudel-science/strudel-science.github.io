"use strict";(self.webpackChunkstrudel=self.webpackChunkstrudel||[]).push([[624],{3619:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(4938)),r=n(5893),i=(0,o.default)((0,r.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.Z=i},2574:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(3366),o=n(7462),r=n(7294),i=n(512),l=n(7925),s=n(4780),c=n(1796),d=n(948),u=n(1657),m=n(6637),p=n(8216),h=n(1588),g=n(4867);function v(e){return(0,g.Z)("MuiButton",e)}var f=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=r.createContext({});var E=r.createContext(void 0),x=n(5893);const S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),w=(0,d.ZP)(m.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,p.Z)(n.color)}`],t[`size${(0,p.Z)(n.size)}`],t[`${n.variant}Size${(0,p.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,a;const r="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${f.focusVisible}`]:(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${f.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(a=e.palette).getContrastText)?void 0:n.call(a,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:r,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${f.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${f.disabled}`]:{boxShadow:"none"}})),Z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,p.Z)(n.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),z=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,p.Z)(n.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))));var k=r.forwardRef((function(e,t){const n=r.useContext(b),c=r.useContext(E),d=(0,l.Z)(n,e),m=(0,u.Z)({props:d,name:"MuiButton"}),{children:h,color:g="primary",component:f="button",className:y,disabled:k=!1,disableElevation:C=!1,disableFocusRipple:I=!1,endIcon:L,focusVisibleClassName:R,fullWidth:T=!1,size:$="medium",startIcon:F,type:M,variant:U="text"}=m,W=(0,a.Z)(m,S),P=(0,o.Z)({},m,{color:g,component:f,disabled:k,disableElevation:C,disableFocusRipple:I,fullWidth:T,size:$,type:M,variant:U}),B=(e=>{const{color:t,disableElevation:n,fullWidth:a,size:r,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,p.Z)(t)}`,`size${(0,p.Z)(r)}`,`${i}Size${(0,p.Z)(r)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,p.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,p.Z)(r)}`]},d=(0,s.Z)(c,v,l);return(0,o.Z)({},l,d)})(P),D=F&&(0,x.jsx)(Z,{className:B.startIcon,ownerState:P,children:F}),N=L&&(0,x.jsx)(z,{className:B.endIcon,ownerState:P,children:L}),O=c||"";return(0,x.jsxs)(w,(0,o.Z)({ownerState:P,className:(0,i.Z)(n.className,B.root,y,O),component:f,disabled:k,focusRipple:!I,focusVisibleClassName:(0,i.Z)(B.focusVisible,R),ref:t,type:M},W,{classes:B,children:[D,h,N]}))}))},2680:function(e,t,n){n.r(t),n.d(t,{Head:function(){return R},default:function(){return T}});var a=n(1151),o=n(7294),r=n(1508),i=n(2574),l=n(5725),s=n(5162),c=n(7139),d=n(3619),u=n(8529),m=n(8173),p=n(821),h=n(6654),g=n(2734),v=n(4436),f=n(5272);const b=e=>{let{children:t}=e;const n=(0,g.Z)();return o.createElement(r.Z,null,o.createElement(v.Z,{orientation:"vertical",sx:{"& .MuiStepIcon-root.Mui-active.MuiSvgIcon-root":{overflow:"visible",color:"black","& circle":{fill:"none",r:15,stroke:n.palette.error.main,strokeWidth:2},"& text":{fill:"black",fontSize:"1rem"}},"& .MuiStepConnector-line":{borderColor:"error.main",borderLeftStyle:"dashed",borderLeftWidth:2},"& .MuiStep-root:not(:last-child) .MuiStepContent-root":{borderColor:"error.main",borderLeftStyle:"dashed",borderLeftWidth:2},"& .MuiStepContent-root":{paddingLeft:3.25},"& .MuiStepLabel-label":{marginLeft:1}}},t))},E=e=>{let{children:t,...n}=e;return o.createElement(f.Z,Object.assign({},n,{active:!0}),t)};var x=n(8232);function S(e){const t=Object.assign({p:"p",h2:"h2",h4:"h4",h3:"h3"},(0,a.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(u.V,null,o.createElement(t.p,null,"STRUDEL Design System provides a set of reusable components and patterns along with guidelines for designing and implementing user interfaces for scientific software. This design system is distinct since it is organized around Task Flows, which are the stepwise flows a user takes to accomplish specified tasks."),o.createElement(r.Z,{sx:{display:"inline-block",marginTop:2}},o.createElement(x.Link,{to:"/design-system/task-flows/overview"},o.createElement(i.Z,{variant:"contained"},o.createElement(t.p,null,"Explore Task Flows"))))),"\n",o.createElement(h.N,null,o.createElement(t.h2,null,"Why STRUDEL Design System?"),o.createElement(l.ZP,{container:!0,spacing:4},o.createElement(l.ZP,{item:!0,md:4},o.createElement(p.u,{sx:{height:"100%"}},o.createElement(t.h4,null,"Designed for scientific software"),o.createElement(t.p,null,"Specifically designed for common patterns seen in scientific UIs that can be applied across different scientific domains."))),o.createElement(l.ZP,{item:!0,md:4},o.createElement(p.u,{sx:{height:"100%"}},o.createElement(t.h4,null,"Focuses on how the UI should function"),o.createElement(t.p,null,"It focuses on the series of steps taken as part of a larger workflow. This provides the big picture of user journeys & aid to improve user experience."))),o.createElement(l.ZP,{item:!0,md:4},o.createElement(p.u,{sx:{height:"100%"}},o.createElement(t.h4,null,"Good UX from experts in the sciences is baked in"),o.createElement(t.p,null,"Informed by over a decade of collective UX experience in the sciences and encapsulates good UX practices."))))),"\n",o.createElement(u.V,null,o.createElement(t.h2,null,"STRUDEL Products"),o.createElement(l.ZP,{container:!0,spacing:4},o.createElement(l.ZP,{item:!0,md:6},o.createElement(x.Link,{to:"/design-system/task-flows/compare-data"},o.createElement(i.Z,{size:"large",endIcon:o.createElement(d.Z),sx:{color:"secondary.main",paddingLeft:0,paddingRight:0,"& h3":{marginBottom:0}}},o.createElement(t.h3,null,"Design Templates"))),o.createElement(t.p,null,"Task Flows are visualized through step-by-step mockups (UI screens) documenting the process of completing a task and illustrating a user's journey through a GUI. They also have corresponding design & usage guidelines.")),o.createElement(l.ZP,{item:!0,md:6},o.createElement(x.Link,{to:"/design-system/code-library"},o.createElement(i.Z,{size:"large",endIcon:o.createElement(d.Z),sx:{color:"secondary.main",paddingLeft:0,paddingRight:0,"& h3":{marginBottom:0}}},o.createElement(t.h3,null,"Code Library"))),o.createElement(t.p,null,"Task Flows have code templates implemented in our developer toolkit, STRUDEL Kit. STRUDEL Kit uses the React JavaScript framework and is based on the popular Material UI (MUI) Components library.")))),"\n",o.createElement(m._,null,o.createElement(t.h2,null,"How to use the STRUDEL Design System"),o.createElement(b,null,o.createElement(E,null,o.createElement(s.Z,null,o.createElement(t.h3,null,"Scan the Task Flows list")),o.createElement(c.Z,null,o.createElement(t.p,null,"Use summary description to identify which of the Task Flows may suit your software features & user interface."))),o.createElement(E,null,o.createElement(s.Z,null,o.createElement(t.h3,null,"Examine the Task Flow details")),o.createElement(c.Z,null,o.createElement(t.p,null,"Examine the mockups, examples, and guidelines to decide if the Task Flow fits your software needs or further customizations are required."))),o.createElement(E,null,o.createElement(s.Z,null,o.createElement(t.h3,null,"Plan your customizations")),o.createElement(c.Z,null,o.createElement(t.p,null,"Discuss with your team, research & evaluate user needs, and plan the changes to chosen Task Flows via rough sketches on paper, or using the Figma files."))),o.createElement(E,null,o.createElement(s.Z,null,o.createElement(t.h3,null,"Consult our code adaptation guide")),o.createElement(c.Z,null,o.createElement(t.p,null,"Go through the implementation guide to install the STRUDEL UI Code Library to use with your software product."))),o.createElement(E,null,o.createElement(s.Z,null,o.createElement(t.h3,null,"Implement your design changes, data, APIs")),o.createElement(c.Z,null,o.createElement(t.p,null,"Using the implementation guide make your customizations to downloaded templates and integrate the code with your software, data, and APIs."))))))}var y=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?o.createElement(t,e,o.createElement(S,e)):S(e)},w=n(9708),Z=n(2658),z=n(4503),k=n(6300),C=n(2370),I=n(3904);const L=e=>{let{pageContext:t,children:n}=e;return o.createElement(z.Z,{hasSidebar:!0},o.createElement(k.m,null,o.createElement(w.Z,{spacing:2},o.createElement(Z.Z,{component:"h1",variant:"h3",fontWeight:"bold"},t.frontmatter.title),o.createElement(Z.Z,{variant:"h6",fontWeight:"normal"},t.frontmatter.subtitle))),o.createElement(C.F,null,n))},R=e=>{let{pageContext:t}=e;return o.createElement(I.Z,{title:t.frontmatter.title})};function T(e){return o.createElement(L,e,o.createElement(y,e))}}}]);
//# sourceMappingURL=component---src-components-layouts-page-layout-tsx-content-file-path-content-design-system-overview-mdx-9d8e994ae4be4b4322b1.js.map