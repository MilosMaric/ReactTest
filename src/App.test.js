import {render} from '@testing-library/react';
import App from './App';
import {ActivitiesModel} from "./data/ActivityMockData";

test('renders learn react link', () => {
    const {queryAllByAltText} = render(<App/>);
    
    expect(queryAllByAltText("Avatar").length).toBe(ActivitiesModel.activities.length);
});
