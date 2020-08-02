import AppError from '@shared/errors/AppError';
import FakeAppointmentRespository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentRepository: FakeAppointmentRespository;
let createAppointment: CreateAppointmentService;

describe('Create Appointments', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRespository();
    createAppointment = new CreateAppointmentService(fakeAppointmentRepository);
  });

  it('Should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  it('Should not be able to create two appointments on the same date', async () => {
    const date = new Date();

    await createAppointment.execute({
      date,
      provider_id: '123456',
    });

    await expect(
      createAppointment.execute({
        date,
        provider_id: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
