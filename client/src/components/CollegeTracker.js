import React, { Component } from 'react';
import { 
    Container, 
    ListGroup, 
    Button, 
    Card,
    CardText,
    CardBody,
    CardTitle, 
    CardSubtitle,
    Row,
    Col
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class CollegeTracker extends Component {
    
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteCLick = id => {
        this.props.deleteItem(id); 
    }

    render() {
        const { items } = this.props.item; 
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="college-tracker">
                        {items.map(({ _id, name, description, rank, decision, deadline }) => ( //Have to map items here from the props. 
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                {/* <ListGroupItem>
                                    <Button 
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteCLick.bind(this, _id)}
                                    >&times;</Button> 
                                    {name}
                                    {description}
                                </ListGroupItem> */}
                                <Row>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody className="text-center">
                                                <CardTitle>{name}</CardTitle>
                                                <CardSubtitle style={{marginTop: '2rem'}}>Rank: {rank}</CardSubtitle>
                                                <CardSubtitle style={{marginTop: '2rem'}}>Decision: {decision}</CardSubtitle>
                                                <CardSubtitle style={{marginTop: '2rem'}}>Deadline: {deadline}</CardSubtitle>
                                                <CardText style={{marginTop: '2rem'}}>Details: {description}</CardText>
                                                <Button 
                                                className="remove-btn"
                                                color="danger"
                                                size="lg"
                                                onClick={this.onDeleteCLick.bind(this, _id)}
                                                >&times;</Button> 
                                            </CardBody>
                                        </Card>
                                    </Col>       
                                </Row>                                                         
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

CollegeTracker.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
)(CollegeTracker);