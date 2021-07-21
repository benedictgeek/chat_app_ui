import React from "react";
import { CSSTransition, Transition } from "react-transition-group";
import "./componentFade.scss";

export let SlideInComponent = ({ show = true, ...props }) => {
  return (
    <CSSTransition
      in={show}
      mountOnEnter
      unmountOnExit
      appear={true}
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="slide-in">
        <div className="slide-in-content">{props.children}</div>
      </div>
    </CSSTransition>
  );
};
