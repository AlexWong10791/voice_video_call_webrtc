import * as constants from './constants.js';

let state = {
  socketId: null,
  localStream: null,
  remoteStream: null,
  screenSharingStream: null,
  allowConnectionsFromStrangers: false,
  screenSharingActive: false,
  callState: constants.callState.CALL_AVAILABLE_ONLY_CHAT
};

export const setSocketId = (socketId) => {
  state = {
    ...state,
    socketId
  };
};

export const setLocalStream = (stream) => {
  state = {
    ...state,
    localStream: stream
  };
};

export const setRemoteStream = (stream) => {
  state = {
    ...state,
    remoteStream: stream
  };
};

export const setScreenSharingStream = (stream) => {
  state = {
    ...state,
    screenSharingStream: stream
  };
};

export const setAllowConnectionsFromStrangers = (isAllowedStranger) => {
  state = {
    ...state,
    allowConnectionsFromStrangers: isAllowedStranger
  };
};

export const setScreenSharingActive = (isActive) => {
  state = {
    ...state,
    screenSharingActive: isActive
  };
};

export const setCallState = (callState) => {
  state = {
    ...state,
    callState
  };
};

export const getState = () => {
  return state;
};
