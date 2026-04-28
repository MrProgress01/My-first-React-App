import React from "react";
import "./Courses.css";
const courses = () => {
  return (
    <div>
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          beatae dignissimos eum error dicta neque ullam reprehenderit eligendi,
          ipsa assumenda natus ad obcaecati molestias a, placeat consequatur
          aliquam possimus ipsum!
        </p>

        <div className="row">
          <div className="course-col">
            <h3>intermediate</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ratione vitae rem est voluptatem quas voluptates, quia eum eveniet
              nostrum suscipit neque, reprehenderit distinctio debitis.
              Temporibus dolore quibusdam consequuntur animi.
            </p>
          </div>
          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ratione vitae rem est voluptatem quas voluptates, quia eum eveniet
              nostrum suscipit neque, reprehenderit distinctio debitis.
              Temporibus dolore quibusdam consequuntur animi.
            </p>
          </div>
          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ratione vitae rem est voluptatem quas voluptates, quia eum eveniet
              nostrum suscipit neque, reprehenderit distinctio debitis.
              Temporibus dolore quibusdam consequuntur animi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default courses;
