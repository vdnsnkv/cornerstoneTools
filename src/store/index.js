// Modules
import brush from './modules/brushModule.js';
import globalConfiguration from './modules/globalConfigurationModule.js';
import external from '../externalModules.js';

export const state = {
  // Global
  globalTools: {},
  globalToolChangeHistory: [],
  // Tracking
  enabledElements: [],
  tools: [],
  isToolLocked: false,
  mousePositionImage: {},
  // Settings
  clickProximity: 6,
  touchProximity: 10,
  handleRadius: 6,
  deleteIfHandleOutsideImage: true,
  preventHandleOutsideImage: false,
};

export const getters = {
  mouseTools: () =>
    state.tools.filter(tool =>
      tool.supportedInteractionTypes.includes('Mouse')
    ),
  touchTools: () =>
    state.tools.filter(tool =>
      tool.supportedInteractionTypes.includes('Touch')
    ),
  enabledElementByUID: enabledElementUID =>
    state.enabledElements.find(
      element =>
        external.cornerstone.getEnabledElement(element).uuid ===
        enabledElementUID
    ),
};

export const setters = {};

export const modules = {
  brush,
  globalConfiguration,
};

export default {
  modules,
  state,
  getters,
};
