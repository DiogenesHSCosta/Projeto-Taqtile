import { SubjectWithoutIdentifierError } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entity/user';
import { GraphQLError } from 'graphql';

const userRepo = AppDataSource.getRepository(User);

export const checkEmail = async (email: string) => {
  const emailCheck = await userRepo.findOne({
    select: {
      email: true,
    },
    where: {
      email: email,
    },
  });

  if (emailCheck == null) {
    return true;
  } else {
    throw new GraphQLError('E-mail already registered.', {
      extensions: {
        code: 'SECURITY-FAILURE',
      },
    });
  }
};
