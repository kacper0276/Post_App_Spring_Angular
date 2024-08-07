import { User } from '../../core/models/auth.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.login, AuthActions.register, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    loading: false,
    user: new User(
      action.user.id,
      action.user.username,
      action.user.email,
      action.user.role,
      action.user.image,
      action.user.likes
    ),
    error: null,
  })),
  on(
    AuthActions.loginFailure,
    AuthActions.registerFailure,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),
  on(
    AuthActions.autoLogin,
    AuthActions.autoLoginFailure,
    AuthActions.logout,
    AuthActions.logoutFailure,
    (state, action) => ({
      ...state,
    })
  ),
  on(AuthActions.autoLoginSuccess, (state, action) => ({
    ...state,
    user: new User(
      action.user.id,
      action.user.username,
      action.user.email,
      action.user.role,
      action.user.image,
      action.user.likes
    ),
  })),
  on(AuthActions.logoutSuccess, (state, action) => ({
    ...state,
    user: null,
    error: null,
  })),
  on(AuthActions.registerSuccess, (state, action) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(AuthActions.clearError, (state, action) => ({
    ...state,
    error: null,
  })),
  on(AuthActions.loadUserSuccess, (state, action) => ({
    ...state,
    user: new User(
      action.user.id,
      action.user.username,
      action.user.email,
      action.user.role,
      action.user.image,
      action.user.likes
    ),
    error: null,
  })),
  on(AuthActions.loadUserFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(AuthActions.refreshToken, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.refreshTokenSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    user: new User(
      user.id,
      user.username,
      user.email,
      user.role,
      user.image,
      user.likes
    ),
    error: null,
  })),
  on(AuthActions.refreshTokenFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
