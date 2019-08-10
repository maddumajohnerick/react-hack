import axios from "axios";

const url = "https://my-json-server.typicode.com/oscarmiguel13/modules/db";

class Service {
  getModules = id => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(resp => {
          resolve(resp.data.all.filter(d => d.course_id == id));
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  getModule = id => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(resp => {
          resolve(resp.data.all.find(d => d.id == id));
        })
        .catch(err => {
          reject(err);
        });
    });
  };
}

export const ModuleService = new Service();
