import store from "@store/store";
import {logout} from "@store/slices/user/reducer";

function UseHomeController() {
    function logoutApp() {
        store.dispatch(logout())
    }

    return {
        actions: {
            logout: logoutApp
        },
        states: {}
    };
}

export default UseHomeController;
 