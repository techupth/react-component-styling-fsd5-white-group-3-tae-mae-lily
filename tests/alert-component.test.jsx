import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Alert } from "../src/components/Alert.jsx"

describe('Component Styling : Alert', () => {

  it('Render ตัว Component Alert แบบทั่วไปได้ถูกต้อง', () => {
    render(<Alert severity="error">This is an error alert — check it out!</Alert>);
    const alertElement = screen.getByText('This is an error alert — check it out!');

    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveStyle(`
          background-color: #F9C8C8;
        `);

  });

  it('Render ตัว Alert แบบ "warning" ได้ถูกต้อง', () => {
    render(<Alert severity="warning">This is a warning alert — check it out!</Alert>);
    const alertElement = screen.getByText('This is a warning alert — check it out!');

    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveStyle(`
          background-color: #F9D9C8;
        `);

  });

  it('Render ตัว Alert แบบ "info" ได้ถูกต้อง', () => {
    render(<Alert severity="info">This is an info alert — check it out!</Alert>);
    const alertElement = screen.getByText('This is an info alert — check it out!');

    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveStyle(`
          background-color: #F9EBC8;
        `);

  });

  it('Render ตัว Alert แบบ "success" ได้ถูกต้อง', () => {
    render(<Alert severity="success">This is a success alert — check it out!</Alert>);
    const alertElement = screen.getByText('This is a success alert — check it out!');

    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveStyle(`
          background-color: #CEF7CD;
        `);

  });


});



