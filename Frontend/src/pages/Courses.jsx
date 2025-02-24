import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Master advanced JavaScript concepts.' },
    { id: 3, title: 'Node.js Fundamentals', description: 'Get started with Node.js.' },
  ];

  return (
    <div>
      <h1>Our Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;