(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,n){t.exports=n(55)},33:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(21),c=n.n(r),l=n(14),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=n(57),h=n(58),f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:b},"delete")))}}]),e}(o.Component),b={background:"#ff0000",color:"#fff",border:"none",paddiing:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},y=f,v=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(y,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(a.a.Component),g=n(56);var j={color:"#fff",textDecoration:"none"},E={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},O=function(){return a.a.createElement("header",{style:E},a.a.createElement("h1",null,"TodoList"),a.a.createElement(g.a,{style:j,to:"/"},"Home")," ","|"," ",a.a.createElement(g.a,{style:j,to:"/about"},"About"))},k=n(22),w=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){return n.setState(Object(k.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{style:{flex:"10",padding:"5px"},type:"text",name:"title",placeholder:"Add TODO",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);var x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"this is the TodoList app v1.0.0. It is part of a React crash course"))},C=(n(33),n(12)),T=n.n(C),S=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.addTodo=function(t){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n.delTodo=function(t){T.a.delete("https://jsonplaceholder.typicode.com/todos/${id}").then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(O,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,{addTodo:t.addTodo}),a.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:x}))))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.33e071e1.chunk.js.map