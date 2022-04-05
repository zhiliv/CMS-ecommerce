export const state = {
  showModalTypesOfServices: false, // состояние отображения модального окна "Виды услуг"
}

export const getters = {
  /*
   * Авторизация пользователя
   * @function isAuthenticated
   * @param {Object} state Состояние
   * @return {Boolean} Статус авториазции
   */
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  /*
   * Получение данных пользователя
   * @function loggedInUser
   * @param {Object} state Состояние
   * @return {Object} Данные пользователя
   */
  loggedInUser(state) {
    return state.auth.user
  },
}

/*
 * Отслеживание запроса на изменение состояния
 */
export const mutations = {
  /*
   * Изменение состояния отображения модального окна "Виды услуг"
   * @function getShowModalTypesOfServices
   */
  getShowModalTypesOfServices(state) {
    this.state.showModalTypesOfServices = !this.state.showModalTypesOfServices
  },
}

export const actions = {}
