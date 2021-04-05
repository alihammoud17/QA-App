import { LocalForm, Control } from 'react-redux-form'; 
import { Row, Col, Label, Button } from 'reactstrap';

const AskQsComponent = () => {
    return (
        <LocalForm>
            <Row className="form-group">
                <Label htmlFor="author" md={5}>Your Name</Label>
                <Col md={6}>
                    <Control.text model=".author" id="author"
                    name="author" className="form-control" placeholder="Who are you?" />
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor="cat" md={5}>Question's Category</Label>
                <Col xs={3}>
                    <Control.select model=".cat" id="cat"
                    name="cat" className="form-control">
                        <option></option>
                        <option>Science</option>
                        <option>Nutrition</option>
                        <option>Sport</option>
                        <option>Tech</option>
                        <option>History</option>
                    </Control.select>
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor="comment" md={12}>Your Question</Label>
                <Col md={12}>
                    <Control.text model=".quest" id="quest"
                    name="quest" className="form-control" placeholder="What do you want to know?"/>
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
    )
}

export default AskQsComponent
