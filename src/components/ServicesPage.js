import React from 'react';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';

class ServicesPage extends React.Component {
    render() {
        return(
            <>
                <Jumbotron className="jumbotron-fluid">
                    <Row>
                        <Col>
                            <div className="j-column">
                                <h2 className="centered-jumbo ml-auto display-2">What We Offer</h2>
                                <h3 className="font-weight-light display-4 subTitle">Design | Development | Phantom</h3>
                                <div className="font-weight-light lead">Different services to match various needs</div>
                            </div>
                        </Col>
                        <Col>
                            {/* Place carousel here showing different services */}
                        </Col>
                    </Row>

                </Jumbotron>
                <div className="idkyet"></div>
            </>
        );  
    }
};

export default ServicesPage;