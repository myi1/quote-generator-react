(this["webpackJsonpquote-generator-react"]=this["webpackJsonpquote-generator-react"]||[]).push([[0],{46:function(t,e,o){},52:function(t,e,o){"use strict";o.r(e);var a=o(3),n=o(17),s=o.n(n),c=o(4),u=o(18),i=o(19),r=o(24),l=o(23),h=o(20),d=o.n(h),j=(o(46),o(21)),b=o(22),p=o(1),O=function(t){Object(r.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(u.a)(this,o);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={quotesList:[],quote:"",author:"",shouldUpdate:!0},t.getNewQuote=function(){var e=t.state.quotesList[Math.floor(Math.random()*t.state.quotesList.length)];e&&!e.author?(console.log(e),t.setState(Object(c.a)(Object(c.a)({},t.state),{},{author:"Unknown",quote:e.text,shouldUpdate:!1}))):e&&(console.log(e),t.setState(Object(c.a)(Object(c.a)({},t.state),{},{author:e.author,quote:e.text,shouldUpdate:!1})))},t.tweetQuote=function(){var e=t.state,o=e.quote,a=e.author,n="https://twitter.com/intent/tweet?text=".concat(o," - ").concat(a);window.open(n,"_blank")},t}return Object(i.a)(o,[{key:"componentDidMount",value:function(){this.getQuotes()}},{key:"componentDidUpdate",value:function(){this.state.shouldUpdate&&this.getNewQuote()}},{key:"getQuotes",value:function(){var t=this;d.a.get("https://type.fit/api/quotes").then((function(e){t.setState(Object(c.a)(Object(c.a)({},t.state),{},{quotesList:e.data}))})).catch((function(t){console.log(t)})),this.getNewQuote()}},{key:"render",value:function(){var t=this.state,e=t.quote,o=t.author;return e?Object(p.jsx)("div",{className:"quote-container",id:"quote-container",children:Object(p.jsxs)("div",{className:"quote-text",children:[Object(p.jsx)("i",{className:"fas fa-quote-left"}),Object(p.jsx)("span",{id:"quote",className:e.length>120?"long-quote":null,children:e}),Object(p.jsx)("div",{className:"quote-author",children:Object(p.jsx)("span",{id:"author",children:o})}),Object(p.jsxs)("div",{className:"button-container",children:[Object(p.jsx)("button",{className:"button twitter",onClick:this.tweetQuote,children:Object(p.jsx)(j.a,{icon:b.a,id:"twitter",title:"Tweet This!"})}),Object(p.jsx)("button",{id:"new-quote",className:"button",onClick:this.getNewQuote,children:"New Quote"})]})]})}):Object(p.jsx)("div",{className:"loader",id:"loader"})}}]),o}(a.Component);s.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.529ba921.chunk.js.map