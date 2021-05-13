import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

function Footer(){
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 d-flex justify-content-end" md={12} sm={6}>
                        This site was made with &hearts; by  Farhan Rivaldy
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer 