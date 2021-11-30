import React, { Component } from 'react';
import { ListGroup,ListGroupItem, Card, CardText, CardBody } from 'reactstrap';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            SelectedStaff: null
        };
    }

    onStaffSelected(staffs){
        this.setState({SelectedStaff: staffs});
    }

    renderStaffs(staffs) {
        if (staffs != null) {
            return(
                <div className='col-md-4 col-sm-6 col-12 mt-1'>
                    <Card>
                        <CardBody>
                            <h5>Họ và tên: {staffs.name}</h5>
                            <CardText>Ngày sinh: {staffs.doB}</CardText>
                            <CardText>Ngày vào công ty: {staffs.startDate}</CardText>
                            <CardText>Phòng ban: {staffs.department}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staffs.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staffs.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(
                <div className='col-md-4 col-sm-6 col-12 mt-1'>Bấm vào tên nhân viên để xem thông tin</div>
            );
        }
    }

    render() {

        const stafflist = this.props.staffdetail.map((staffs) => {
            return(
                <div key={staffs.id} className='col-md-4 col-sm-6 col-12 mt-1'>
                    <ListGroup onClick={() => this.onStaffSelected(staffs)}>
                        <ListGroupItem>{staffs.name}</ListGroupItem>
                    </ListGroup>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                        {stafflist}
                </div>
                <div className="row">
                    {this.renderStaffs(this.state.SelectedStaff)}
                </div>
            </div>
        );
    }
}

export default StaffList;