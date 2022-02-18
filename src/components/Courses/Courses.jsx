import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as constant from '../../constant';

let items = constant.mockedCoursesList;
let itemList = [];

items.forEach((item, index) => {
	itemList.push(<CourseCard id={index} courseDetail={item} />);
});

function Courses(props) {
	const { toggleCreateCourses, ...others } = props;
	return (
		<div>
			<Container fluid>
				<Row className='mt-5'>
					<Col>
						<SearchBar />
					</Col>
					<Col>
						<Button buttonText='Add new course' onClick={toggleCreateCourses} />
					</Col>
				</Row>
				<Row>
					<Col>{itemList}</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Courses;
