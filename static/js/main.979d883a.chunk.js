(this["webpackJsonpreact-app-min-2"]=this["webpackJsonpreact-app-min-2"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports={Drawer:"Drawer_Drawer___UE0S",close:"Drawer_close__2mRZB"}},,function(e,t,n){e.exports={Layout:"Layout_Layout__2BpO9",main:"Layout_main__3wsBC"}},function(e,t,n){e.exports={MenuToggle:"menuToggle_MenuToggle__1YU0Q",open:"menuToggle_open__1uDDd"}},,,function(e,t,n){e.exports={Quiz:"Quiz_Quiz__17VGf",QuizWrapper:"Quiz_QuizWrapper__cvilm"}},function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__2WmBE",Question:"ActiveQuiz_Question__1X-g1"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__35AXT",success:"AnswerItem_success__kkB5J",error:"AnswerItem_error__2_j5S"}},function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__2jfjf",success:"FinishedQuiz_success__2X-yG",error:"FinishedQuiz_error__1Zgd1"}},function(e,t,n){e.exports={Button:"Button_Button__1ouAX",error:"Button_error__2x9ii",success:"Button_success__7bwOD",primary:"Button_primary__1kzZJ"}},function(e,t,n){e.exports={Auth:"Auth_Auth__34800",AuthForm:"Auth_AuthForm__3NwNI"}},function(e,t,n){e.exports={Input:"Input_Input__3cBI6",invalid:"Input_invalid__10T1o"}},,,,,function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3cPEq",shader:"Backdrop_shader__3Mk9X"}},,,function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__rd1G1"}},function(e,t,n){e.exports={QuizList:"QuizList_QuizList__21UOW"}},,function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__3QP2l"}},function(e,t,n){e.exports={Select:"Select_Select__nk1Wf"}},function(e,t,n){e.exports=n(51)},,,,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(32),s=n.n(i),o=(n(46),n(3)),l=n(4),u=n(6),c=n(5),d=n(7),m=n(18),h=n.n(m),v=n(19),p=n.n(v),f=function(e){var t=[p.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(p.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},g=n(10),_=n(16),w=n.n(_),E=n(33),b=[n.n(E).a.Backdrop],y=function(e){return e.isOpen,b.push("shader"),r.a.createElement("div",{className:b.join(" "),onClick:e.onClick})},z=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0},{to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1},{to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}],k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderLinks",value:function(){var e=this;return z.map((function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(g.c,{to:t.to,exact:t.exact,activeClassName:w.a.active,onClick:e.props.onClose},t.label))}))}},{key:"render",value:function(){var e=[w.a.Drawer];return this.props.isOpen||e.push(w.a.close),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:e.join(" ")},r.a.createElement("ul",null,this.renderLinks())),this.props.isOpen?r.a.createElement(y,{onClick:this.props.onClose}):null)}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={menu:!1},n.toggleMenuHandler=function(){n.setState({menu:!n.state.menu})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:h.a.Layout},r.a.createElement(k,{isOpen:this.state.menu,onClose:this.toggleMenuHandler}),r.a.createElement(f,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),r.a.createElement("main",{className:h.a.Layout},this.props.children))}}]),t}(a.Component),Q=n(12),j=n(15),A=n(22),O=n.n(A),x=n(23),q=n.n(x),F=n(36),S=n.n(F),I=n(24),N=n.n(I),H=function(e){var t=[N.a.AnswerItem];return e.state&&(console.log("AnswerItem: props.state: "+e.state),t.push(N.a[e.state])),r.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},L=function(e){return r.a.createElement("ul",{className:S.a.AnswersList},e.answers.map((function(t,n){return r.a.createElement(H,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},M=function(e){return r.a.createElement("div",{className:q.a.ActiveQuiz},r.a.createElement("p",{className:q.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null,e.answerNumber),"\xa0",e.question),r.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)),r.a.createElement(L,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},B=n(25),T=n.n(B),D=n(26),V=n.n(D),W=function(e){var t=[V.a.Button,V.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},J=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return r.a.createElement("div",{className:T.a.FinishedQuiz},r.a.createElement("ul",null,console.log(e),e.quiz.map((function(t,n){var a=["fa","error"===e.results[t.id]?"fa-times":"fa-check",T.a[e.results[t.id]]];return r.a.createElement("li",{key:n},r.a.createElement("strong",null,n+1),". \xa0",t.question,r.a.createElement("i",{className:a.join(" ")}))}))),r.a.createElement("p",null,t," \u0438\u0437 ",e.quiz.length),r.a.createElement("div",null,r.a.createElement(W,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement(g.b,{to:"/"},r.a.createElement(W,{type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"))))},X=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[{id:1,question:"\u041a\u0430\u043a\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 React?",rightAnswerId:2,answers:[{text:"Microsoft",id:1},{text:"Facebook",id:2},{text:"Apple",id:3},{text:"Amazon",id:4}]},{id:2,question:"\u041a\u0430\u043a \u0432\u044b\u0439\u0442\u0438 \u0438\u0437 vim?",rightAnswerId:3,answers:[{text:"Alt+F4",id:1},{text:"`Esc`",id:2},{text:":q!",id:3},{text:"\u0418\u0437 vim \u043d\u0435\u0442 \u0432\u044b\u0445\u043e\u0434\u0430",id:4}]},{id:3,question:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 JSX?",rightAnswerId:1,answers:[{text:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 JavaScript, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0445\u043e\u0436\u0438\u0439 \u0441 HTML \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",id:1},{text:"\u0422\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u0447\u0442\u043e XML",id:2},{text:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f NoSQL \u0421\u0423\u0411\u0414",id:3},{text:"\u0414\u0438\u0430\u043b\u0435\u043a\u0442 Java",id:4}]}]},n.onAnswerClickHandler=function(e){if(console.log("Quiz: 50: ",e),n.state.answerState){var t=Object.keys(n.state.answerState)[0];if("success"===n.state.answerState[t])return void console.log("Quiz: return: ")}console.log("Quiz: Answer Id: ",e);var a=n.state.quiz[n.state.activeQuestion],r=n.state.results;if(a.rightAnswerId===e){console.log(r[e]),r[a.id]="success",console.log("65"+r[e]),n.setState({answerState:Object(j.a)({},e,"success")});var i=window.setTimeout((function(){console.log("Quiz: results: ",r),n.isQuizFinished()?(console.log("isQuizFinished"),n.setState({isFinished:!0})):n.setState({activeQuestion:n.state.activeQuestion+1,answerState:null}),window.clearTimeout(i)}),200)}else{r[a.id]="error",console.log("97"+r[e]),n.setState({answerState:Object(j.a)({},e,"error")});var s=window.setTimeout((function(){console.log("Quiz: results: ",r),n.isQuizFinished()?(console.log("isQuizFinished"),n.setState({isFinished:!0})):n.setState({activeQuestion:n.state.activeQuestion+1,answerState:null}),window.clearTimeout(s)}),500)}},n.retryHandler=function(){n.setState({activeQuestion:0,answerState:null,isFinished:!1,results:{}})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"componentDidMount",value:function(){console.log("Quiz ID = ",this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:O.a.Quiz},r.a.createElement("div",{className:O.a.QuizWrapper},r.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),this.state.isFinished?r.a.createElement(J,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):r.a.createElement(M,{question:this.state.quiz[this.state.activeQuestion].question,answers:this.state.quiz[this.state.activeQuestion].answers,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),t}(a.Component),R=n(37),G=n.n(R),P=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderQuizes",value:function(){return[1,2,3].map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(g.c,{to:"/quiz/"+e},"\u0422\u0435\u0441\u0442 ",e))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:G.a.QuizList},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),r.a.createElement("ul",null,this.renderQuizes())))}}]),t}(a.Component),U=n(11),Z=n(27),Y=n.n(Z),$=n(28),K=n.n($);function ee(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var te=function(e){var t=e.type||"text",n=[K.a.Input],a="".concat(t,"-").concat(Math.random());return ee(e)&&n.push(K.a.invalid),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:a},e.label),r.a.createElement("input",{type:t,id:a,value:e.value,onChange:e.onChange}),ee(e)?r.a.createElement("span",null,e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"):null)},ne=n(38),ae=n.n(ne),re=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},n.loginHandler=function(){},n.registerHandler=function(){},n.submitHandler=function(e){e.preventDefault()},n.onChangeHandler=function(e,t){var a=Object(U.a)({},n.state.formControls),r=Object(U.a)({},a[t]);r.value=e.target.value,r.touched=!0,r.valid=n.validateControl(r.value,r.validation),a[t]=r;var i=!0;Object.keys(a).forEach((function(e){i=a[e].valid&&i})),n.setState({formControls:a,isFormValid:i})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=ae.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(te,{key:t+n,type:a.Type,value:a.value,valid:a.valid,touched:a.touched,label:a.label,errorMessage:a.errorMessage,shouldValidate:!!a.validation,onChange:function(n){return e.onChangeHandler(n,t)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:Y.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:this.submitHandler,className:Y.a.AuthForm},this.renderInputs(),r.a.createElement(W,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(W,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}}]),t}(a.Component),ie=n(39),se=n.n(ie),oe=n(40),le=n.n(oe),ue=function(e){var t="".concat(e.label,"-").concat(Math.random());return r.a.createElement("div",{className:le.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:e.value+t},e.text)}))))};function ce(e,t){return Object(U.a)({},e,{validation:t,valid:!t,touched:!1,value:""})}function de(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function me(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}function he(e){return ce({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function ve(){return{question:ce({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:he(1),option2:he(2),option3:he(3),option4:he(4)}}var pe=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={quiz:[],isFormValid:!1,rightAnswerId:1,formControls:ve()},n.submitHandler=function(e){e.preventDefault()},n.addQuestionHandler=function(e){e.preventDefault();var t=n.state.quiz.concat(),a=t.length+1,r=n.state.formControls,i=r.question,s=r.option1,o=r.option2,l=r.option3,u=r.option4,c={question:i.value,id:a,rightAnswerId:n.state.rightAnswerId,answers:[{text:s.value,id:s.id},{text:o.value,id:o.id},{text:l.value,id:l.id},{text:u.value,id:u.id}]};t.push(c),n.setState({quiz:t,isFormValid:!1,rightAnswerId:1,formControls:ve()})},n.createQuizHandler=function(e){e.preventDefault(),console.log(n.state.quiz)},n.changeHandler=function(e,t){var a=Object(U.a)({},n.state.formControls),r=Object(U.a)({},a[t]);r.touched=!0,r.value=e,r.valid=de(r.value,r.validation),a[t]=r,n.setState({formControls:a,isFormValid:me(a)})},n.selectChangeHandler=function(e){n.setState({rightAnswerId:+e.target.value})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(r.a.Fragment,{key:t+n},r.a.createElement(te,{label:a.label,value:a.value,valid:a.valid,shouldValidate:!!a.validation,touched:a.touched,errorMessage:a.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?r.a.createElement("hr",null):null)}))}},{key:"render",value:function(){var e=r.a.createElement(ue,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return r.a.createElement("div",{className:se.a.QuizCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),r.a.createElement("form",{onSubmit:this.submitHandler},this.renderControls(),e,r.a.createElement(W,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(W,{type:"success",onClick:this.createQuizHandler,disabled:0===this.state.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}}]),t}(a.Component);var fe=function(){return r.a.createElement(C,null,r.a.createElement(Q.c,null,r.a.createElement(Q.a,{path:"/auth",component:re}),r.a.createElement(Q.a,{path:"/quiz-creator",component:pe}),r.a.createElement(Q.a,{path:"/quiz/:id",component:X}),r.a.createElement(Q.a,{path:"/",component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=r.a.createElement(g.a,null,r.a.createElement(fe,null));s.a.render(ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[41,1,2]]]);
//# sourceMappingURL=main.979d883a.chunk.js.map