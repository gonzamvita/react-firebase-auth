import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
const AccountPage = () => (
  <div>
    <h1>Account Page</h1>

    <h3>Password Forget</h3>
    <PasswordForgetForm />
    <h3>Password Change</h3>
    <PasswordChangeForm />
  </div>
);
export default AccountPage;