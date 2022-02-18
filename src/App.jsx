/* eslint-disable react/jsx-no-undef */
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import React, { useState } from 'react';

function App() {
	const [value, setValue] = useState(false);

	const toggleCreateCourses = () => {
		if (value) setValue(false);
		else setValue(true);
	};

	return (
		<div>
			<Header />
			{!value && <Courses toggleCreateCourses={toggleCreateCourses} />}

			{value && <CreateCourse toggleCreateCourses={toggleCreateCourses} />}
		</div>
	);
}
export default App;
