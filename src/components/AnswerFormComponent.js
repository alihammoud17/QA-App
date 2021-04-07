import React from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Button, Row, Col, Label } from 'reactstrap';

const AnswerFormComponent = () => {
    return (
        <React.Fragment>
            <LocalForm>
                <Row className="form-group">
                    <Label htmlFor="author" md={12}>Your Name</Label>
                    <Col md={12}>
                        <Control.text model=".author" id="author"
                        name="author" className="form-control"
                        placeholder="Your Name" 
                            />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="comment" md={12}>Your Answer</Label>
                    <Col md={12}>
                        <Control.textarea model=".ans" id="ans"
                        name="ans" className="form-control" rows="12"/>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={{size: 10}}>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </LocalForm>
        </React.Fragment>
    )
}

export default AnswerFormComponent
