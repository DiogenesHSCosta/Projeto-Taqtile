import bcrypt from 'bcrypt';
// const passwordHash = await bcrypt.hash(data.password, 10);
export const encryptPassword = async (password: string) => {
  const salt = 10;

  const encrypt = await bcrypt.hash(password, salt);

  //   console.log(JSON.stringify(encrypt) + salt);
  const pass = JSON.stringify(encrypt);
  return pass;
};
