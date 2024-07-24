function customRender(reactElement, conatiner) {
 /*const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)

  conatiner.appendChild(domElement);*/

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for(const prop in reactElement.props){
    if(prop == 'children')
      continue;
      domElement.setAttribute(prop,reactElement.props[prop])
    
  }
  conatiner.appendChild(domElement)
}

const reactElement = {
  type: 'a', //type of tag
  props: {
    href: 'https://google.com',
    target: '_blank'
  }, //properties

  children: 'Click me to visit'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);