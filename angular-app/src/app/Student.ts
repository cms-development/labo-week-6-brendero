export class Student {
  id?: number;
  type: string = 'student--student';
  attributes: Attributes;
}

export class Attributes {
  name: string;
  field_student: string;
}
