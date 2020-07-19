import AppError from '@shared/errors/AppError';
import FakeAppointmentRespository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('Create Appointments', () => {
  it('Should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRespository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  it('Should not be able to create two appointments on the same date', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRespository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const date = new Date();

    await createAppointment.execute({
      date,
      provider_id: '123456',
    });

    expect(
      createAppointment.execute({
        date,
        provider_id: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
