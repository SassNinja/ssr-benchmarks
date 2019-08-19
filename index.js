const { perform, report, count }  = require('./benchmark');

const ReactApp = require('./src/react.bundle');

const PreactApp = require('./src/preact.bundle');
const PreactCompatApp = require('./src/preact-compat.bundle');

const InfernoApp = require('./src/inferno.bundle');
const InfernoCompatApp = require('./src/inferno-compat.bundle');

const SvelteApp = require('./src/svelte');

const RiotApp = require('./src/riot');

perform('react', ReactApp);
perform('preact', PreactApp);
perform('preact-compat', PreactCompatApp);
perform('inferno', InfernoApp);
perform('inferno-compat', InfernoCompatApp);
perform('svelte', SvelteApp);
perform('riot', RiotApp);

report('react');
report('preact');
report('preact-compat');
report('inferno');
report('inferno-compat');
report('svelte');
report('riot', true);
