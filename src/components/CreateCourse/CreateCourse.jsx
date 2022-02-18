import React from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textarea from '../../common/Textarea/Textarea';

function CreateCourses(props) {
	const { toggleCreateCourses, ...others } = props;
	return (
		<>
			<Container className='border p-5 m-5'>
				<Row>
					<Col>
						<Button
							className='mb-3'
							buttonText='Courses List'
							onClick={toggleCreateCourses}
						/>
					</Col>
				</Row>
				<Row>
					<Col md='4'>
						<Input labelText='Title' placeholder='Enter title' />
					</Col>

					<Col md='4'></Col>
					<Col md='2'></Col>

					<Col md='2' className='float-right'>
						<Button className='mt-5' buttonText='Create Course' />
					</Col>
				</Row>
				<Row className='mt-3'>
					<Col>
						<Textarea labelText='Description' placeholder='Enter description' />
					</Col>
				</Row>
				<Container className='border p-5 mt-5'>
					<Row>
						<Col>
							<h6 className='text-center mb-3'>Add Author</h6>
							<Input
								labelText='Author name'
								placeholder='Enter author name...'
							/>
							<Button className='mt-3' buttonText='Create Author' />
						</Col>
						<Col className='text-center'>
							<h6 className='text-center mb-3'>Authors</h6>
							<dl className='row'>
								<dt className='col'>Magesh</dt>
								<dd className='col'>
									<Button buttonText='Add Author' />
								</dd>
							</dl>
							<dl className='row'>
								<dt className='col'>Vasu</dt>
								<dd className='col'>
									<Button buttonText='Add Author' />
								</dd>
							</dl>
							<dl className='row'>
								<dt className='col'>Vedhaa</dt>
								<dd className='col'>
									<Button buttonText='Add Author' />
								</dd>
							</dl>
						</Col>
					</Row>
					<Row>
						<Col>
							<h6 className='text-center mb-3'>Duration</h6>
							<Input
								labelText='Duration'
								placeholder='Enter duration in minutes...'
							/>
							<div className='mt-4'>
								<span>Duration:&nbsp;</span>
								<span className='font-weight-bold'>00:00</span>&nbsp;hours.
							</div>
						</Col>
						<Col className='text-center'>
							<h6 className='text-center mb-3'>Course authors</h6>
							<span>Course Author list is empty...</span>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}

export default CreateCourses;
