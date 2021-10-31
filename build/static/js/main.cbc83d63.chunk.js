(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a.n(n),o=a(3),c=a(4),i=a(6),s=a(5),l=a(1),m=a(0),u=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleChange=function(t){var a=t.currentTarget;e.setState({imageName:a.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()&&(e.props.onSubmit(e.state.imageName),e.setState({imageName:""}))},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleChange})]})})}}]),a}(l.Component),g=u,h=a(10),d=a(20),p=a.n(d);var b=function(e){var t=e.webformatURL,a=e.largeImageURL;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:t,"data-large":a,alt:"",className:"ImageGalleryItem-image"})})},j=function(e){var t=e.loadMore;return Object(m.jsx)("div",{className:"buttonContainer",children:Object(m.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load More"})})},O=a(48),f=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:null,loading:!1,error:null,page:1},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.getData=function(){e.setState({loading:!0}),p.a.get("https://pixabay.com/api/?q=".concat(e.props.imageName,"&page=").concat(e.state.page,"&key=23115860-3b173cd8cbd28dc69cb35b572&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){e.setState((function(e){return{images:1===e.page?t.data.hits:[].concat(Object(h.a)(e.images),Object(h.a)(t.data.hits))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally(e.setState({loading:!1}))},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.page===this.state.page&&e.imageName===this.props.imageName||(this.getData(),e.imageName!==this.props.imageName&&this.setState({images:null,page:1}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.error;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("ul",{className:"ImageGallery",onClick:this.props.openModal,children:[n&&Object(m.jsx)("h1",{children:n.message}),a&&Object(m.jsx)(O.a,{}),t&&t.map((function(e){return Object(m.jsx)(b,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL},e.id)}))]}),t&&Object(m.jsx)(j,{className:"Button",loadMore:this.loadMore})]})}}]),a}(l.Component),v=f,y=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.onHandleEscapeClick=function(t){return"Escape"===t.code&&e.props.toggleModal()},e.onOverlayClick=function(t){t.target===t.currentTarget&&e.props.toggleModal()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onHandleEscapeClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onHandleEscapeClick)}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"Overlay",onClick:this.onOverlayClick,children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{src:this.props.lagreImgURL,alt:""})})})}}]),a}(l.Component),N=y,S=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:"",isOpenModal:!1,lagreImgURL:""},e.formSubmit=function(t){e.setState({imageName:t})},e.openModal=function(t){"IMG"===t.target.tagName&&(e.setState({isOpenModal:!0}),e.setState({lagreImgURL:t.target.dataset.large}))},e.toggleModal=function(){return e.setState((function(e){return{isOpenModal:!e.isOpenModal}}))},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{onSubmit:this.formSubmit}),Object(m.jsx)(v,{imageName:this.state.imageName,openModal:this.openModal}),this.state.isOpenModal&&Object(m.jsx)(N,{lagreImgURL:this.state.lagreImgURL,openModal:this.openModal,toggleModal:this.toggleModal})]})}}]),a}(l.Component),x=S;a(44),a(45);r.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.cbc83d63.chunk.js.map