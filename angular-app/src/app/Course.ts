export class Course {
  id?: number;
  type: string = 'course--course';
  relationships: Relationships;
  attributes: Attributes;
}

export class Attributes {
  name: string;
  field_academic_institution: string;
}

export class Relationships {
  field_instructor: FieldInstructorData;
  field_students: FieldStudentsData;
}

export class FieldInstructorData {
  data: FieldInstructor;
}

export class FieldStudentsData {
  data: FieldStudents;
}

export class FieldStudents {
  type: string = 'student--student';
  id: string;
}

export class FieldInstructor {
  type: string = 'instructor--instructor';
  id: string;
}
