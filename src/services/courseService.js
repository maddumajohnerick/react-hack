import axios from "axios";

const url = "https://my-json-server.typicode.com/oscarmiguel13/courses/db";

class Service {
  getCourses = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(resp => {
          resolve(resp.data.all);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  getCourse = id => {
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

export const CourseService = new Service();
