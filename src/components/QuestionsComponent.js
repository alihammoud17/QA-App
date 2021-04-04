import { Row, Col, Label } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import  Button  from '@material-ui/core/Button'
import React from 'react';
import { Add } from '@material-ui/icons';

const QuestionsComponent = () => {
    return (
        <React.Fragment>
            <Button fullWidth startIcon={<Add />} variant="contained" size="large">Ask a Question</Button>
            <LocalForm className="form">
                <Row className="form-group">
                    <Col md={12}>
                        <Control.text model=".search" id="search" name="search" 
                        placeholder="Type to Search.." className="form-control" />
                    </Col>
                </Row>
            </LocalForm>
        </React.Fragment>
    )
}

export default QuestionsComponent
