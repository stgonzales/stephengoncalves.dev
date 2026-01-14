import * as migration_20260114_210857 from './20260114_210857';

export const migrations = [
  {
    up: migration_20260114_210857.up,
    down: migration_20260114_210857.down,
    name: '20260114_210857'
  },
];
