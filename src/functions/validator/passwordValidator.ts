import { GraphQLError } from 'graphql';

export const passwordValidator = (password: string) => {
  const regexUpper = /[A-Z]/;
  const regexCharacter = /\W/;

  if (regexUpper.test(password) && regexCharacter.test(password) && password.length > 6) {
    return true;
  } else {
    throw new GraphQLError('invalid password. At least 1 letter, 1 digit and 6 characters.', {
      extensions: {
        code: 'SECURITY-FAILURE',
      },
    });
  }
};
