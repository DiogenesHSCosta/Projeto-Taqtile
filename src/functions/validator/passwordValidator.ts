import { GraphQLError } from 'graphql';
import { encryptPassword } from '../encrypt/encryptPassword';

export const passwordValidator = async (password: string) => {
  const regexUpper = /[A-Z]/;
  const regexCharacter = /\W/;

  if (regexUpper.test(password) && regexCharacter.test(password) && password.length > 6) {
    return await encryptPassword(password);
  } else {
    throw new GraphQLError('invalid password. At least 1 letter, 1 digit and 6 characters.', {
      extensions: {
        code: 'SECURITY-FAILURE',
      },
    });
  }
};
