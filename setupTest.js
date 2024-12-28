import '@testing-library/jest-dom';
import exp from 'constants';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;

global.expect = expect;
global.React = React;
global.ReactDOM = ReactDOM;
global.render = render;
global.screen = screen;
global.fireEvent = fireEvent;
global.renderWithRouter = renderWithRouter;
global.toBeInTheDocument = toBeInTheDocument;

