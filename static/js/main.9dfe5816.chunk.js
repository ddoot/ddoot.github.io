(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,n,a){},15:function(e,n,a){"use strict";a.r(n);var t=a(1),c=a.n(t),s=a(8),r=a.n(s),i=a(0),o=function(e){return Object(i.jsxs)("div",{className:e.className,children:[Object(i.jsxs)("h3",{children:[Object(i.jsx)("i",{className:"fa fa-".concat(e.faIcon)}),e.name]}),e.children]})},l=a(3),j=a(4),m=a(6),f=a(5),u=function(e){Object(m.a)(a,e);var n=Object(f.a)(a);function a(e){var t;return Object(l.a)(this,a),(t=n.call(this,e)).barRef=c.a.createRef(),t}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.barRef.current.animate([{width:0},{width:"".concat(this.props.percent,"%")}],1e3,"linear")}},{key:"render",value:function(){return Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{children:this.props.name}),Object(i.jsx)("div",{className:"skills-bar",children:Object(i.jsx)("div",{className:"bar",ref:this.barRef,style:{width:"".concat(this.props.percent,"%")}})})]})}}]),a}(c.a.Component),h=function(e){Object(m.a)(a,e);var n=Object(f.a)(a);function a(e){var t;return Object(l.a)(this,a),(t=n.call(this,e)).cbarRef=c.a.createRef(),t.state={percent:0},t}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this,n=this.cbarRef.current.r.baseVal.value,a=Math.PI*(2*n),t=(100-this.props.percent)/100*a;this.cbarRef.current.animate([{strokeDashoffset:a},{strokeDashoffset:t}],{duration:1e3,easing:"linear"});var c=0,s=setInterval((function(){c+=1,e.setState({percent:c}),c===e.props.percent&&clearInterval(s)}),10)}},{key:"render",value:function(){var e=90*Math.PI,n=(100-this.props.percent)/100*e;return Object(i.jsxs)("li",{children:[Object(i.jsxs)("svg",{viewBox:"0 0 100 100",children:[Object(i.jsx)("circle",{cx:"50",cy:"50",r:45}),Object(i.jsx)("circle",{className:"cbar",cx:"50",cy:"50",r:45,strokeDashoffset:n,strokeDasharray:e,ref:this.cbarRef})]}),Object(i.jsx)("span",{children:this.props.name}),Object(i.jsx)("small",{children:"".concat(this.state.percent,"%")})]})}}]),a}(c.a.Component),b=a(2),d=function(e){return Object(i.jsx)("ul",{children:e.experience.map((function(e){return Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{children:e.title}),Object(i.jsx)("small",{children:e.institution}),Object(i.jsx)("small",{children:e.duration})]},Object(b.a)())}))})},p=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("i",{className:"fa fa-".concat(e.faIcon)}),Object(i.jsx)("span",{children:e.name})]})},O=function(e){return Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsx)("div",{className:"photo",children:Object(i.jsx)("i",{className:"fa fa-".concat(e.faIcon)})}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("h1",{className:"name",children:e.name}),Object(i.jsx)("h2",{className:"job",children:e.job})]})]})},x=(a(14),{className:"skills-prog",skillBars:[{percent:95,name:"React"},{percent:15,name:"Erlang"},{percent:80,name:"Python"},{percent:95,name:"React"},{percent:15,name:"Erlang"},{percent:80,name:"Python"}],faIcon:"code",name:"Programming Skills"}),I={className:"skills-soft",skillPies:[{percent:50,name:"React"},{percent:60,name:"Erlang"},{percent:70,name:"Python"},{percent:95,name:"React"}],faIcon:"keyboard-o",name:"Software Skills"},v={className:"interests",interestItems:[{name:"Art",faIcon:"fas fa-palette"},{name:"Books",faIcon:"book"},{name:"Movies",faIcon:"film"},{name:"Music",faIcon:"headphones"},{name:"Games",faIcon:"gamepad"}],name:"Interests",faIcon:"star"},N=[{className:"work",faIcon:"briefcase",name:"Experience",experience:[{title:"Freelance Consultant",institution:"Upwork",duration:"Apr 2021 - Now"},{title:"Software Intern",institution:"Bilingual Annotations Task Force",duration:"Aug 2018 - Jan 2019"},{title:"Research Intern",institution:"University of Texas at Dallas",duration:"March 2016 - Apr 2019"}]},{className:"edu",faIcon:"graduation-cap",name:"Education",experience:[{title:"Bachelor of Science in Computer Science, Mathematics",institution:"University of Texas at Austin",duration:"Aug 2018 - Now"},{title:"Advanced Diploma",institution:"The Texas Academy of Mathematics and Science",duration:"August 2016 - May 2018"}]}].map((function(e){return Object(i.jsx)(o,{className:e.className,name:e.name,faIcon:e.faIcon,children:Object(i.jsx)(d,{experience:e.experience})},Object(b.a)())})),k=Object(i.jsx)(o,{className:x.className,name:x.name,faIcon:x.faIcon,children:Object(i.jsx)("ul",{children:x.skillBars.map((function(e){return Object(i.jsx)(u,{percent:e.percent,name:e.name},Object(b.a)())}))})}),y=Object(i.jsx)(o,{className:I.className,name:I.name,faIcon:I.faIcon,children:Object(i.jsx)("ul",{children:I.skillPies.map((function(e){return Object(i.jsx)(h,{percent:e.percent,name:e.name},Object(b.a)())}))})}),g=Object(i.jsx)(o,{className:v.className,name:v.name,faIcon:v.faIcon,children:Object(i.jsx)("div",{className:"interests-items",children:v.interestItems.map((function(e){return Object(i.jsx)(p,{name:e.name,faIcon:e.faIcon},Object(b.a)())}))})}),R="coffee",w="Daniel Kim",M="Freelance Consultant",A=Object(i.jsx)(O,{faIcon:R,name:w,job:M});r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsxs)("div",{className:"resume",children:[Object(i.jsx)("div",{className:"base",children:A}),Object(i.jsxs)("div",{className:"func",children:[N,k,y,g]})]})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9dfe5816.chunk.js.map