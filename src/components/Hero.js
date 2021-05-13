import React from 'react';
import { Col, Container, Row, Jumbotron } from 'react-bootstrap';

function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true} >
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={6}>
                        { props.title && <h3 className="display-4 font-weight-bolder">{props.title} </h3> }
                        { props.subtitle && <h3 className="display-9 font-weight-light">{props.subtitle} </h3> }
                        { props.text && <h3 className="lead font-weight-light" >{props.text} </h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero