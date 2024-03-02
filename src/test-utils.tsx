import { render } from '@testing-library/react';
import { AllTheProviders } from './AllTheProviders';

const customRender = (ui, options = {}) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

// override render method
export { customRender as render };
