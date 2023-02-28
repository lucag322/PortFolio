import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./test.css";

function MainVisual() {
  
  return (
  <>
    <Container>
      <Row>
        <Col className="mt-5 ">
          <div className="mainVisual">
          <div className="containerbackground">
          <div className="messagedefilant2">
             
                    <div
                      className="noSelect"
                     
                      data-text={'Texte de défilement'}
                    >
                      <span className="noSelect">
                        {" "}
                        {'Texte de défilement'}{" "}
                      </span>
                    </div>
                 
            </div>
            <div className="messagedefilant2">
             
                    <div
                      className="noSelect"
                     
                      data-text={'Texte de défilement'}
                    >
                      <span className="noSelect">
                        {" "}
                        {'Texte de défilement'}{" "}
                      </span>
                    </div>
                 
            </div>
            <div className="messagedefilant2">
             
                    <div
                      className="noSelect"
                     
                      data-text={'Texte de défilement'}
                    >
                      <span className="noSelect">
                        {" "}
                        {'Texte de défilement'}{" "}
                      </span>
                    </div>
                 
            </div>
            <div className="messagedefilant2">
             
                    <div
                      className="noSelect"
                     
                      data-text={'Texte de défilement'}
                    >
                      <span className="noSelect">
                        {" "}
                        {'Texte de défilement'}{" "}
                      </span>
                    </div>
                 
            </div>
            <div className="messagedefilant2">
             
                    <div
                      className="noSelect"
                     
                      data-text={'Texte de défilement'}
                    >
                      <span className="noSelect">
                        {" "}
                        {'Texte de défilement'}{" "}
                      </span>
                    </div>
                 
            </div>
        </div>
            <div className="mainVisual__content" style={{zIndex:"1"}}>
              <h1 className="mainVisual__content__title noselect">Lucas Grousset</h1>
              <h4 className="mainVisual__content__subtitle noselect">Développeur Web</h4>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default MainVisual;
