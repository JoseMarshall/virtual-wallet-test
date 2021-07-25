export const pageQueryRegex = /^[1-9]+[0-9]*$/;
export const limitQueryRegex = /^[0-9]+$/;
export const floatNumberRegex = /^-{0,1}\d+(\.\d+|\d*)$/;
export const sortByStringfiedRegex =
  /^\{("\w+":(?!\s)(1|-1)(?!")((,"\w+":(?!\s)(1|-1)(?!"))+|))+\}$/;
