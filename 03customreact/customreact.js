
//function to render a tag 
function customRender(element,container){

//     //create the element
//     const domElement = document.createElement(element.type);

//     //set the inner HTML for the element
//     domElement.innerHTML=element.children;

//     //set the attributes
//     domElement.setAttribute('href',element.props.href);
//     domElement.setAttribute('target',element.props.target);

//     //render the element
//    container.appendChild(domElement);

      // create the element
      const domElement = document.createElement(element.type);

      // set the inner HTML
      domElement.innerHTML=element.children;

      //loop through the attributes and set them all
      for (let prop in element.props){
        if( prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
      }

      //render the child
      container.appendChild(domElement);
}

//define a react element
const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'Click here to visit Google.com'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);