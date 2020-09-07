import React from "react";

import students from "../../data/students";

export default (props) => {
  const lis = students.map((student) => (
    <li key={student.id}>
      {student.id} {student.name} - {student.note}
    </li>
  ));
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{lis}</ul>
    </div>
  );
};
