import { container } from 'tsyringe';

import IStorageProvide from './StorageProvider/models/IStorageProvider';
import DiskStorageProvide from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvide>(
  'StorageProvider',
  DiskStorageProvide,
);
