import { render, screen } from '@testing-library/react';
import App from './App';
import MultiState from "./component/MultiState";


// eslint-disable-next-line no-undef
// ReactDOM.render(
//     // eslint-disable-next-line react/jsx-no-undef
//     <React.StrictMode>
//       <MultiState/>
//     </React.StrictMode>
//
// )

test('renders learn react link', () => {
  render(<App />);
  render()
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
