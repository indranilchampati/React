// Q6
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// <h1 class="header">
const element = <h1 className="header">This is React JS</h1>
console.log(element)

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
 */

const p = document.createElement("p")
p.textContent = "Hello Clans"
p.className = "para"
console.log(p)




const page = <div className="head">
<h1>This Is JSX</h1>
<p className="para">We are learning JSX too...</p>
</div>

console.log(page)
/*
key:null
props:{className: 'para', children: 'We are learning JSX too...'}
ref:null
type:"p"
_owner:null
_store:{validated: false}
*/

// JSX
ReactDOM.render(element, document.getElementById("root"))
ReactDOM.render(page, document.getElementById("para"))