import userEvent from '@testing-library/user-event';

export const writeText = async (element: Element, text: string) => {
  //await userEvent.clear(element);
  await userEvent.type(element, text);
};
