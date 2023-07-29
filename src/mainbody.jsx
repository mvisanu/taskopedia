import Student from "./Components/Student/student";
import { faker } from "@faker-js/faker";
import StudentReview from "./Components/Student/StudentReview";


function MainBody() {
  const whatWeWillLearn = "React JS";
  let totalLectures = 3;
  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOpedia{" "}
        <br />
        Total lectures: {totalLectures}
      </p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
      <div>
        Enter Task:{" "}
        <input maxLength="{7}" readOnly="{false}" placeholder="Ben" />
      </div>
      <div>
        <div className="container row">Students Enrolled</div>
        <Student
          experience="{2}"
          name="Kris Walley"
          headshot={faker.image.avatar()}
        >
          <StudentReview />
        </Student>
        <Student
          experience="{5}"
          name="Angel Patrice"
          headshot={faker.image.avatar()}
        >
          <StudentReview />
        </Student>
        <Student
          experience="{7}"
          name="Rene Parker"
          headshot={faker.image.avatar()}
        >
          <StudentReview />
        </Student>
      </div>
    </div>
  );
}
export default MainBody;
