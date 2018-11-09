export class Student {
  id?: string;
  type: string = 'student--student';
  attributes: Attributes;
}

export class Attributes {
  name: string;
  field_student: string;
}
