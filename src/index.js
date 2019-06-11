import React from 'react';
import ReactDOM from 'react-dom';

import styled, { StyleSheetManager } from 'styled-components';


const Banner = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background: blanchedalmond;
`;

const Hello = function (props) {
  const {children} = props;
  return <Banner><h1>Hello, {children}.</h1></Banner>;
};

export default Hello;

class XHello extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    ReactDOM.render(
      <StyleSheetManager target={this.shadowRoot}>
        <Hello>
          <slot />
        </Hello>
      </StyleSheetManager>,
      this.shadowRoot
    );
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.shadowRoot)
  }
}

customElements.define('x-hello', XHello);
