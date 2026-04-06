function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    // If already locked
    if (attemptCount >= 3) {
      return 'Account locked due to too many failed login attempts';
    }

    // Correct password
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    }

    // Wrong password → increment attempts
    attemptCount++;

    return `Attempt ${attemptCount}: Login failed`;
  };
}

module.exports = {
  createLoginTracker
};


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
const user = {
  username: "user1",
  password: "password123"
};

const login = createLoginTracker(user);

console.log(login("wrongPassword"));
console.log(login("wrongPassword"));
console.log(login("wrongPassword"));
console.log(login("lastWrongPassword"));