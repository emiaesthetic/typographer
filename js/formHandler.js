export const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  return new Promise((resolve, reject) => {
    if (data?.text) {
      resolve(data.text);
    } else {
      reject(new Error('Что-то пошло не так'));
    }
  });
};
