
import http from '../http-common';

class RentsitesData {
    getAll() {
        return http.get("/rentsites/");
    }
}

export default new RentsitesData();