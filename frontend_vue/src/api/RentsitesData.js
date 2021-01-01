
import http from '../http-common';

class RentsitesData {
    getAll(params) {
        return http.get("/rentsites/", {params});
    }
}

export default new RentsitesData();