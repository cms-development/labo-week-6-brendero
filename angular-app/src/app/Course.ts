export class Course {
  id?: number;
  type: string = 'course--course';
  attributes: Attributes;
  field_instructor: number;
  field_students: number;
}

export class Attributes {
  name: string;
  field_academic_institution: string;
  relationships: Relationships
}

export class Relationships {
  field_instructor: string;
  field_students: []
}
