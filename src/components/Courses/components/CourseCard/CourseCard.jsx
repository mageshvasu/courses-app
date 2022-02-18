/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './style.scss';
import Button from '../../../../common/Button/Button';
import * as constant from '../../../../constant';

function getAuthorNames(authorids) {
	var authorNameArray = constant.mockedAuthorsList;
	var authorNames = '';
	for (const author of authorids) {
		for (const authornames of authorNameArray) {
			if (authornames.id == author) {
				authorNames += authornames.name + ',';
				break;
			}
		}
	}
	return authorNames;
}

function CourseCard(props) {
	const { buttonText, onClick, courseDetail, ...others } = props;
	return (
		<>
			<div className='movie_card' id='bright' key={courseDetail.id}>
				<div className='info_section'>
					<div className='movie_header' style={{ float: 'left' }}>
						<h1>{courseDetail.title}</h1>
						<p className='type'>{courseDetail.description}</p>
					</div>

					<div
						className='course-meta'
						style={{ float: 'left', padding: '25px' }}
					>
						<dl className='row'>
							<dt className='col'>Author</dt>
							<dd className='col'>{getAuthorNames(courseDetail.authors)}</dd>
						</dl>
						<dl className='row'>
							<dt className='col'>Duration</dt>
							<dd className='col'>{courseDetail.duration}</dd>
						</dl>
						<dl className='row'>
							<dt className='col'>Created</dt>
							<dd className='col'>{courseDetail.creationDate}</dd>
						</dl>
						<dl className='row'>
							<dt className='col'></dt>
							<dd className='col'>
								<Button buttonText='Show course' />
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</>
	);
}

export default CourseCard;
