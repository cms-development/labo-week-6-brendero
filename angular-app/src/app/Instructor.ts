export class Instructor {
  id?: number;
  type: string = 'instructor--instructor';
  attributes: Attributes;
}

export class Attributes {
  name: string;
  field_academic_rank: string;
  field_academic_title: string;
  field_first_name: string;
}
