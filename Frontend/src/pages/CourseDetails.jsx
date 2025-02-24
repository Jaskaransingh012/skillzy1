import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const courses = [
    { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Master advanced JavaScript concepts.' },
    { id: 3, title: 'Node.js Fundamentals', description: 'Get started with Node.js.' },
  ];

  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;