import config from '../config.json'

/**
*handles Userlogin and logout
*/
export default class Article {

  /**
  *Gets a specific Article by its ID
  */
  static getFromId(id, callback) {
    fetch(`${config.SERVER_URL}/api/v1/article/${id}`, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch((e) => {
        console.error("ERROR", e);
      });
  }

  /**
  *Searches all Articles for a given keyword. Returns a Array of all matching Articles, sorted by priority
  */
  static search(keyword, callback) {
    fetch(`${config.SERVER_URL}/api/v1/search/?q=${keyword}`, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch((e) => {
        console.error("ERROR", e);
      });
  }

}