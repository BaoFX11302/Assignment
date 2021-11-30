import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        const stafflist = this.props.staffdetail.map((staffs) => {
            return(
                    <ListGroup key={staffs.id} className='col-md-6 col-sm-12 col-12 mt-1' style={{float:'left'}}>
                        <ListGroupItem>{staffs.name}</ListGroupItem>
                    </ListGroup>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <div>
                        {stafflist}
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffList;