import './App.css';
import ActivityFeed from "./components/ActivityFeed";
import {ActivitiesModel} from "./data/ActivityMockData";

function App() {
    const activities = [...ActivitiesModel.activities].map(a => {
        a.user = ActivitiesModel.users.filter(u => u.id === a.userId)[0];
        return a;
    })

    return (
        <ActivityFeed activities={activities}/>
    );
}

export default App;
