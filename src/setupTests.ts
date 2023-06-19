// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import ResizeObserver from 'resize-observer-polyfill';
import '@testing-library/jest-dom';

// Apply the polyfill globally
global.ResizeObserver = ResizeObserver;
