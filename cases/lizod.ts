import { $number, $object, $string, $boolean } from 'lizod';
import { createCase } from '../benchmarks';

const dataTypeLoose = $object(
  {
    number: $number,
    negNumber: $number,
    maxNumber: $number,
    string: $string,
    longString: $string,
    boolean: $boolean,
    deeplyNested: $object(
      {
        foo: $string,
        num: $number,
        bool: $boolean,
      },
      false
    ),
  },
  false
);

const dataTypeStrict = $object(
  {
    number: $number,
    negNumber: $number,
    maxNumber: $number,
    string: $string,
    longString: $string,
    boolean: $boolean,
    deeplyNested: $object(
      {
        foo: $string,
        num: $number,
        bool: $boolean,
      },
      true
    ),
  },
  true
);

createCase('lizod', 'parseSafe', () => {
  return data => {
    if (!dataTypeLoose(data)) {
      throw new Error('Invalid data');
    }

    return data;
  };
});

createCase('lizod', 'parseStrict', () => {
  return data => {
    if (!dataTypeStrict(data)) {
      throw new Error('Invalid data');
    }

    return data;
  };
});

createCase('lizod', 'assertLoose', () => {
  return data => {
    if (!dataTypeLoose(data)) {
      throw new Error('Invalid data');
    }

    return true;
  };
});

createCase('lizod', 'assertStrict', () => {
  return data => {
    if (!dataTypeStrict(data)) {
      throw new Error('Invalid data');
    }

    return true;
  };
});
