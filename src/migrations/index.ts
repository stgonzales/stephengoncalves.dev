import * as migration_20260205_203748_init from './20260205_203748_init';
import * as migration_20260205_203823_seed_defaults from './20260205_203823_seed_defaults';

export const migrations = [
  {
    up: migration_20260205_203748_init.up,
    down: migration_20260205_203748_init.down,
    name: '20260205_203748_init',
  },
  {
    up: migration_20260205_203823_seed_defaults.up,
    down: migration_20260205_203823_seed_defaults.down,
    name: '20260205_203823_seed_defaults'
  },
];
