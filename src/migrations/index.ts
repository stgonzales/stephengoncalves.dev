import * as migration_20260205_203748_init from './20260205_203748_init';
import * as migration_20260205_203823_seed_defaults from './20260205_203823_seed_defaults';
import * as migration_20260205_211900_rename_social_links from './20260205_211900_rename_social_links';

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
  {
    up: migration_20260205_211900_rename_social_links.up,
    down: migration_20260205_211900_rename_social_links.down,
    name: '20260205_211900_rename_social_links',
  },
];
