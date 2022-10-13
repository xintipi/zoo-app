import { createAction } from '@reduxjs/toolkit';

const show = createAction('SHOW');
const hide = createAction('HIDE');
const pending = createAction('PENDING');

export { hide, pending, show };
