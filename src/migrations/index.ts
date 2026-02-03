import * as migration_20260203_181312_init from './20260203_181312_init';
import * as migration_20260203_181402_seed from './20260203_181402_seed';

export const migrations = [
  {
    up: migration_20260203_181312_init.up,
    down: migration_20260203_181312_init.down,
    name: '20260203_181312_init',
  },
  {
    up: migration_20260203_181402_seed.up,
    down: migration_20260203_181402_seed.down,
    name: '20260203_181402_seed'
  },
];
