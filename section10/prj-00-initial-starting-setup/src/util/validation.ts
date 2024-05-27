// Validation 인터페이스.

// Validation 인터페이스.
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

// 입력에 대한 검증 함수.
export function validate(validatable: Validatable) {
  let isValid = true;

  if (validatable.required) {
    isValid = isValid && validatable.value.toString().trim().length !== 0;
  }

  if (validatable.minLength !== undefined && typeof validatable.value === "string") {
    isValid = isValid && validatable.value.length >= validatable.minLength;
  }

  if (validatable.maxLength !== undefined && typeof validatable.value === "string") {
    isValid = isValid && validatable.value.length <= validatable.maxLength;
  }

  if (validatable.min !== undefined && typeof validatable.value === "number") {
    isValid = isValid && validatable.value >= validatable.min;
  }

  if (validatable.max !== undefined && typeof validatable.value === "number") {
    isValid = isValid && validatable.value <= validatable.max;
  }

  return isValid;
}
