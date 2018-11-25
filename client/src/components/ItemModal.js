import React, { Component } from 'react';
import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   Form,
   FormGroup,
   Label,
   Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component { 
   state = {
      modal: false,
      name: '',
      description: '',
      rank: 1,
      decision: 'Unknown',
      deadline: Date.now 
   }

   toggle = () => {
      this.setState({
         modal: !this.state.modal
      });
   }

   onChange = e => {
      this.setState({ [e.target.name]: e.target.value }); 
   };

   onSubmit = e => {
      e.preventDefault(); 

      // Updates the state of each property to whatever is inputted on the new entry. 
      const newItem = {
         name: this.state.name,
         description: this.state.description,
         rank: this.state.rank,
         decision: this.state.decision,
         deadline: this.state.deadline
      }

      // Add item via addItem action
      this.props.addItem(newItem);

      // Close modal
      this.toggle(); 
   }

   render() {
      return(
         <div>
            <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.toggle}>
               Add Entry
            </Button>

            <Modal
               isOpen={this.state.modal}
               toggle={this.toggle}
            >
               <ModalHeader toggle={this.toggle}>Add To College List</ModalHeader>
               <ModalBody>
                  <Form onSubmit={this.onSubmit}>
                     <FormGroup>
                        <Label for="collegeName">College</Label>
                        <Input 
                           type="text"
                           name="name"
                           id="collegeName"
                           placeholder="College Name"
                           onChange={this.onChange}
                        />
                        <Label 
                           for="ranking"
                           style={{marginTop: '2rem'}}
                        >Ranking</Label>
                        <Input
                           type="select"
                           name="rank"
                           id="ranking"
                           onChange={this.onChange}
                        >   
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                           <option>6</option>
                           <option>7</option>
                           <option>8</option>
                           <option>9</option>
                           <option>10</option>
                        </Input>
                        <Label 
                           for="collegeDescription"
                           style={{marginTop: '2rem'}}
                        >Details</Label>
                        <Input 
                        // This name property is the same for all Input components so that we can
                        // use the same onChange event handler.
                           type="textarea"
                           name="description"
                           id="collegeDescription"
                           onChange={this.onChange}
                        />
                        <Label 
                           for="appDecision"
                           style={{marginTop: '2rem'}}
                        >Decision</Label>
                        <Input
                           type="select"
                           name="decision"
                           id="appDecision"
                           onChange={this.onChange}
                        > 
                           <option>Accepted</option>
                           <option>Unknown</option>
                           <option>Rejected</option>
                        </Input>
                        <Label 
                           for="appDeadline"
                           style={{marginTop: '2rem'}}
                        >Decision</Label>
                        <Input
                           type="text"
                           name="deadline"
                           id="appDeadline"
                           placeholder="YYYY-MM-DD"
                           onChange={this.onChange}
                        /> 
                        <Button
                           color="dark"
                           style={{marginTop: '2rem'}}
                           block
                        >Add Item</Button>
                     </FormGroup>
                  </Form>
               </ModalBody>
            </Modal>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal); 