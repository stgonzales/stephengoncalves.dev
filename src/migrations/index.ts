import * as migration_20260114_210857 from './20260114_210857';
import * as migration_20260122_201009_seed from './20260122_201009_seed';

export const migrations = [
  {
    up: migration_20260114_210857.up,
    down: migration_20260114_210857.down,
    name: '20260114_210857',
  },
  {
    up: migration_20260122_201009_seed.up,
    down: migration_20260122_201009_seed.down,
    name: '20260122_201009_seed'
  },
];
