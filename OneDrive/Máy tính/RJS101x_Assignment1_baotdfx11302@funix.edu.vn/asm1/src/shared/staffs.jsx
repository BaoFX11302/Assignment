import dateFormat, { masks } from "dateformat";

export const DEPARTMENTS =
    [
        {
            id: "Dept01",
            name: "Sale",
            numberOfStaff: 1
        },
        {
            id: "Dept02",
            name: "HR",
            numberOfStaff: 3
        },
        {
            id: "Dept03",
            name: "Marketing",
            numberOfStaff: 2
        },
        {
            id: "Dept04",
            name: "IT",
            numberOfStaff: 1
        },
        {
            id: "Dept05",
            name: "Finance",
            numberOfStaff: 11
        }
    ]
export const ROLE = {
    NORMAL_STAFF: "Nhân viên",
    MANAGER_STAFF: "Quản lý"
}
export const STAFFS =
    [
        {
            id: 0,
            name: "Nguyễn Văn A",
            doB: dateFormat("1999-01-01T08:59:00.000Z", "dd/mm/yyyy"),
            salaryScale: 1.1,
            startDate: dateFormat("2019-04-30T08:59:00.000Z", "dd/mm/yyyy"),
            department: DEPARTMENTS[0].name,
            annualLeave: 1,
            overTime: 1,
            image: '/assets/images/alberto.png',
        },
        {
            id: 1,
            name: "Nguyễn Văn B",
            doB: dateFormat("2000-01-01T08:59:00.000Z", "dd/mm/yyyy"),
            salaryScale: 1.2,
            startDate: dateFormat("2019-04-30T08:59:00.000Z", "dd/mm/yyyy"),
            department: DEPARTMENTS[1].name,
            annualLeave: 2,
            overTime: 3,
            image: '/assets/images/alberto.png',
        },
        {
            id: 2,
            name: "Nguyễn Văn C",
            doB: dateFormat("2001-01-01T08:59:00.000Z", "dd/mm/yyyy"),
            salaryScale: 1,
            startDate: dateFormat("2019-04-30T08:59:00.000Z", "dd/mm/yyyy"),
            department: DEPARTMENTS[3].name,
            annualLeave: 4,
            overTime: 5,
            image: '/assets/images/alberto.png',
        },
        {
            id: 3,
            name: "Nguyễn Văn D",
            doB: dateFormat("2002-01-01T08:59:00.000Z", "dd/mm/yyyy"),
            salaryScale: 1,
            startDate: dateFormat("2019-04-30T08:59:00.000Z", "dd/mm/yyyy"),
            department: DEPARTMENTS[2].name,
            annualLeave: 6,
            overTime: 7,
            image: '/assets/images/alberto.png',
        },
        {
            id: 4,
            name: "Nguyễn Văn E",
            doB: dateFormat("1999-01-01T08:59:00.000Z", "dd/mm/yyyy"),
            salaryScale: 1,
            startDate: dateFormat("2019-04-30T08:59:00.000Z", "dd/mm/yyyy"),
            department: DEPARTMENTS[2].name,
            annualLeave: 8,
            overTime: 1,
            image: '/assets/images/alberto.png',
        },
        {
            id: 5,
            name: "Nguyễn Văn F",
            doB: dateFormat("2003-01-01T08:59:00.000Z", "dd/mm/yyyy"),
            salaryScale: 1,
            startDate: dateFormat("2019-04-30T08:59:00.000Z", "dd/mm/yyyy"),
            department: DEPARTMENTS[4].name,
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/alberto.png',
        }
    ]