// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'snuskriget',
  clientId: 'snuskriget-web'
};

export const environment = {
  production: false,

  apis: { snuskrigetServer: 'http://localhost:9000' },
  keycloakConfig
};