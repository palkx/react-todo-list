(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(60)},42:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(29),c=n.n(r),l=n(18),i=n(7),d=n(8),s=n(10),u=n(9),p=n(13),m=n(1);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},h={color:"#fff",textDecoration:"none"},b=function(){return a.a.createElement("header",{style:f},a.a.createElement("h1",null,"TodoList"),a.a.createElement(p.b,{style:h,to:"/"},"Home")," ","|"," ",a.a.createElement(p.b,{style:h,to:"/about"},"About"))},y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:v},"Delete")))}}]),n}(o.Component),v={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},g=y,E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return a.a.createElement(g,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),n}(o.Component),k=n(31),j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e.onChange=function(t){return e.setState(Object(k.a)({},t.target.name,t.target.value))},e}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(o.Component);var O=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the simple react TodoList. Axios and JSONPlaceholder is used to generate fake online REST API for testing."))},x=(n(42),n(14)),C=n.n(x),T=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[]},e.markComplete=function(t){e.setState({todos:e.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},e.delTodo=function(t){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(n){return e.setState({todos:Object(l.a)(e.state.todos.filter(function(e){return e.id!==t}))})})},e.addTodo=function(t){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return e.setState({todos:[].concat(Object(l.a)(e.state.todos),[t.data])})})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://api-mikkra.herokuapp.com/todos.json").then(function(t){return e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(b,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{addTodo:e.addTodo}),a.a.createElement(E,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),a.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(o.Component);c.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d3483190.chunk.js.map