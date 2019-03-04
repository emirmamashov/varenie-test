import { environment } from '../environments/environment';
const apiUrl = environment.apiUrl;

export const Methods = {
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  get: 'GET'
}

export const ApiConfig = {
  repository: {
    search: {
      url: apiUrl + '/search/repositories',
      method: Methods.get,
      fields: '?q='
    },
    getById: {
      url: apiUrl + '/repositories/',
      method: Methods.get,
      fields: 'id'
    }
  }
};

export const NotifyConfig = {
    msgTypes: {
      primary: {
        styleName: 'bootstrap-primary',
        value: 'primary'
      },
      secondary: {
        styleName: 'bootstrap-secondary',
        value: 'secondary'
      },
      success: {
        styleName: 'bootstrap-success',
        value: 'success'
      },
      danger: {
        styleName: 'bootstrap-danger',
        value: 'danger'
      },
      warning: {
        styleName: 'bootstrap-warning',
        value: 'warning'
      },
      info: {
        styleName: 'bootstrap-info',
        value: 'info'
      },
      light: {
        styleName: 'bootstrap-light',
        value: 'light'
      },
      dark: {
        styleName: 'bootstrap-dark',
        value: 'dark'
      }
    }
};