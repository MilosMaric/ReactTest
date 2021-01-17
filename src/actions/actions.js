export function addActivityAction(newActivity) {
    return {
        type: 'ADD_ACTIVITY',
        payload: {newActivity}
    }
}