// ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = ({ match }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`http://localhost:8015/api/Aprop/auth/reset-password/${match.params.token}/${match.params.userId}`, {
        newPassword,
        confirmPassword,
      });
      console.log(response.data.message);
      // Redirect to login or another page after successful password reset
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <p>{error}</p>}
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <br />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
