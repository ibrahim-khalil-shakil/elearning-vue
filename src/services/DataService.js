import http from "../http-common";

class DataService {
  home() {
    return http.get("/home");
  }
  event() {
    return http.get("/event");
  }
  recentblogs() {
    return http.get("/recentblogs");
  }
  singleEvent(pid) {
    return http.get(`/event/${pid}`);
  }
} 

export default new DataService();