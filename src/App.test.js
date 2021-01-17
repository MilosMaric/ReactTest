import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import React from "react";
import store from "./stores/store";
import Modal from "react-modal";

const renderApp = () => {
    const renderingResult = render(<Provider store={store}> <App/> </Provider>);
    const {container} = renderingResult;
    Modal.setAppElement(container);

    return renderingResult
}

test('renders initial mock data', () => {
    const {queryByText} = renderApp();

    expect(queryByText(/James Bond/)).toBeInTheDocument();
});

test('activity adding dialog is opened', async () => {
    const {queryByAltText, queryByRole} = renderApp();

    queryByAltText('Add activity').click();
    expect(queryByRole('dialog')).toBeInTheDocument();
});

test('activity adding process', async () => {
    const {queryByAltText, getByRole, getAllByRole, container, queryByRole} = renderApp();
    const startingNumberOfActivities = container.querySelectorAll('.activity-item').length;

    queryByAltText('Add activity').click();
    const typeDropdown = getByRole('combobox');
    const [urlInput, noteTextArea] = getAllByRole('textbox');

    fireEvent.change(typeDropdown, {target: {value: 1}});
    fireEvent.change(urlInput, {target: {value: 'www.google.com'}});
    fireEvent.change(noteTextArea, {target: {value: 'Task activity note :)'}});

    getByRole('button').click();

    expect(queryByRole('dialog')).not.toBeInTheDocument();
    expect(container.querySelectorAll('.activity-item').length).toBe(startingNumberOfActivities + 1);
});
