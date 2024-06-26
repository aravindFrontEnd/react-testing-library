// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import Login from "./Login";

// jest.mock("axios", () => ({
//   __esModule: true,

//   default: {
//     get: () => ({
//       data: { id: 1, name: "John" },
//     }),
//   },
// }));

// test("username input should be rendered", () => {
//   render(<Login />);
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   expect(usernameInputEl).toBeInTheDocument();
// });

// test("password input should be rendered", () => {
//   render(<Login />);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);
//   expect(passwordInputEl).toBeInTheDocument();
// });

// test("button should be rendered", () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   expect(buttonEl).toBeInTheDocument();
// });

// test("username input should be empty", () => {
//   render(<Login />);
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   expect(usernameInputEl.value).toBe("");
// });

// test("password input should be empty", () => {
//   render(<Login />);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);
//   expect(passwordInputEl.value).toBe("");
// });

// test("button should be disabled", () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   expect(buttonEl).toBeDisabled();
// });

// test("loading should not be rendered", () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   expect(buttonEl).not.toHaveTextContent(/please wait/i);
// });

// test("error message should not be visible", () => {
//   render(<Login />);
//   const errorEl = screen.getByTestId("error");
//   expect(errorEl).not.toBeVisible();
// });

// test("username input should change", () => {
//   render(<Login />);
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   const testValue = "test";

//   fireEvent.change(usernameInputEl, { target: { value: testValue } });
//   expect(usernameInputEl.value).toBe(testValue);
// });

// test("password input should change", () => {
//   render(<Login />);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);
//   const testValue = "test";

//   fireEvent.change(passwordInputEl, { target: { value: testValue } });
//   expect(passwordInputEl.value).toBe(testValue);
// });

// test("button should not be disabled when inputs exist", () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "test";

//   fireEvent.change(usernameInputEl, { target: { value: testValue } });
//   fireEvent.change(passwordInputEl, { target: { value: testValue } });

//   expect(buttonEl).not.toBeDisabled();
// });

// test("loading should be rendered when click", () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "test";

//   fireEvent.change(usernameInputEl, { target: { value: testValue } });
//   fireEvent.change(passwordInputEl, { target: { value: testValue } });
//   fireEvent.click(buttonEl);

//   expect(buttonEl).toHaveTextContent(/please wait/i);
// });

// test("loading should not be rendered after fetching", async () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "test";

//   fireEvent.change(usernameInputEl, { target: { value: testValue } });
//   fireEvent.change(passwordInputEl, { target: { value: testValue } });
//   fireEvent.click(buttonEl);

//   await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
// });

// test("user should be rendered after fetching", async () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "test";

//   fireEvent.change(usernameInputEl, { target: { value: testValue } });
//   fireEvent.change(passwordInputEl, { target: { value: testValue } });
//   fireEvent.click(buttonEl);

//   const userItem = await screen.findByText("John");

//   expect(userItem).toBeInTheDocument();
// });

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

// jest.mock('axios',()=>({
//     __esModule: true,
//     default:{
//         get: () =>({
//             data :{id: 1, name:'John'}
//         })
//     }
// }))

test("username text to be present", () => {
  render(<Login />);
  const userText = screen.getByPlaceholderText(/username/i);

  expect(userText).toBeInTheDocument();
});

test("password id to be present", () => {
  render(<Login />);
  const userText = screen.getByTestId("password");

  expect(userText).toBeInTheDocument();
});

test("button to be present", () => {
  render(<Login />);
  const userText = screen.getByRole("button");
  expect(userText).toBeInTheDocument();
});

test("button to be diabled", () => {
  render(<Login />);
  const btnDisplay = screen.getByRole("button");
  expect(btnDisplay).toBeDisabled();
});


test("button to be diabled", () => {
    render(<Login />);
    const btnDisplay = screen.getByRole("button");
    expect(btnDisplay.textContent).toBe('login');
  });

test("error should not be visible", () => {
  render(<Login />);
  const errorMessage = screen.getByTestId("error");
  expect(errorMessage).not.toBeVisible();
});

test("username text entered should match", () => {
  render(<Login />);
  const userText = screen.getByPlaceholderText(/username/i);

  const test = "tests";

  fireEvent.change(userText, { target: { value: test } });

  expect(userText.value).toBe(test);
});

test("password entered should match", () => {
  render(<Login />);
  const userText = screen.getByTestId("password");
  const tests = "password";
  fireEvent.change(userText, { target: { value: tests } });
  expect(userText.value).toBe(tests);
});


test('button should not be disabled  when user & password is present',()=>{
    render(<Login/>);
    const userText = screen.getByPlaceholderText(/username/i);
    const passText = screen.getByTestId("password");
    const textBtn = screen.getByRole('button');
const  result = 'pass'
    fireEvent.change(userText,{target: {value :result}})
    fireEvent.change(passText,{target: {value :result}})
    expect(textBtn).not.toBeDisabled()

})


test('button when clicked with user & password -should show loading ',()=>{
    render(<Login/>);
    const userText = screen.getByPlaceholderText(/username/i);
    const passText = screen.getByTestId("password");
    const textBtn = screen.getByRole('button');
const  result = 'pass'
    fireEvent.change(userText,{target: {value :result}})
    fireEvent.change(passText,{target: {value :result}})
    fireEvent.click(textBtn);
    expect(textBtn).toHaveTextContent(/waiting/i)
})


test("loading should not be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/waiting/i));
});


test("after login the username to be present on the screen", async () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
  
    const testValue = "test";
  
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);

    const userItem = await screen.findByText("John");
  
    await waitFor(() => expect(userItem).toBeInTheDocument()); 
  });
  
//  

//   