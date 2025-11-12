import store from "@store/store";
import {login} from "@store/slices/user/reducer";

function UseHomeController() {
    function logout() {
        store.dispatch(login())
    }

    return {
        actions: {
            logout
        },
        states: {}
    };
}

export default UseHomeController;
 