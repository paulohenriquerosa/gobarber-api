import AppError from '@shared/errors/AppError';
import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvide from '../provider/HashProvider/fakes/FakeHashProvider';

import CreateUserService from './CreateUserService';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvide;
let createUser: CreateUserService;
let fakeCacheProvider: FakeCacheProvider;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvide();
    fakeCacheProvider = new FakeCacheProvider();
    createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
      fakeCacheProvider,
    );
  });
  it('Should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'Jhon Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create two users with same email', async () => {
    await createUser.execute({
      name: 'Jhon Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'Jhon Doe',
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
