import bcrypt from 'bcrypt';

export const encryptPassword = async (password: string) => {
  const salt = 10;

  const encrypt = await bcrypt.hash(password, salt);

  const pass = JSON.stringify(encrypt);
  return pass;
};
