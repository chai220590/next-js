function validateLogin({ username, password, callback }: any) {
  // Regex để kiểm tra username không chứa ký tự đặc biệt và khoảng trắng
  const usernameRegex = /^[A-Za-z0-9]{6,}$/;
  // Regex để kiểm tra password có ít nhất 6 ký tự
  const passwordRegex = /^.{6,}$/;

  // Kiểm tra username và password
  if (usernameRegex.test(username) && passwordRegex.test(password)) {
    // Nếu cả hai đều hợp lệ, gọi callback function
    callback();
  } else {
    // Nếu không hợp lệ, hiển thị thông báo lỗi
    console.log("Username hoặc password không đáp ứng yêu cầu.");
  }
}
export { validateLogin };
