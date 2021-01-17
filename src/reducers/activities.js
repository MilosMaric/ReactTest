import {ActivitiesModel} from "../data/ActivityMockData";

const initialActivities = [...ActivitiesModel.activities].map(a => {
    a.user = ActivitiesModel.users.filter(u => u.id === a.userId)[0];
    return a;
})

const getUser = () => {
    return ActivitiesModel.users.filter(u => u.id === 1).pop();
}

const reducer = (state = {activities: initialActivities}, action) => {
    switch (action.type) {
        case 'ADD_ACTIVITY':
            const id = state.activities.map(a => a.id).sort((a, b) => a - b).pop() + 1;
            const newActivity = {...action.payload.newActivity, id, user: getUser()};
            return {
                activities: [newActivity, ...state.activities]
            }
        default:
            return state
    }
}

export default reducer;