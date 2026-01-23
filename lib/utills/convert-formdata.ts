export const objectToFormData = (obj: Record<string, any>) => {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    //배열객체인가?
    if (Array.isArray(value)) {
      //베얄
      value.forEach((data) => formData.append(key, data));
    } else {
      // 단일
      formData.append(key, value);
    }
  });
  return formData;
};
