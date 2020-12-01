import { AnyAction } from "redux";
import {
  LOAD_COMPONENTS_IN_PROGRESS,
  LOAD_README_IN_PROGRESS,
  LOAD_CHANGELOG_IN_PROGRESS,
  LOAD_COMPONENTS_SUCCESS,
  LOAD_CHANGELOG_SUCCESS,
  LOAD_README_SUCCESS,
  LOAD_COMPONENTS_ERROR,
  LOAD_README_ERROR,
  LOAD_CHANGELOG_ERROR,
  LOAD_DOCS_ERROR,
} from "../actions";

export interface Component {
  text: string;
  url: string;
}

export type Components = Record<string, Component>;

export type DocsState = {
  components?: Components;
  readme?: string;
  changelog?: string;
  areComponentsLoading: boolean;
  isReadmeLoading: boolean;
  isChangelogLoading: boolean;
  isComponentsError: boolean;
  isReadmeError: boolean;
  isChangelogError: boolean;
  lastComponentsUpdate?: number;
  lastReadmeUpdate?: number;
  lastChangelogUpdate?: number;
};

export const initialDocsState: DocsState = {
  areComponentsLoading: false,
  isReadmeLoading: false,
  isChangelogLoading: false,
  isComponentsError: false,
  isReadmeError: false,
  isChangelogError: false,
};

export const docsReducer = (
  state = initialDocsState,
  action: AnyAction
): DocsState => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_COMPONENTS_IN_PROGRESS: {
      return {
        ...state,
        areComponentsLoading: true,
      };
    }
    case LOAD_README_IN_PROGRESS: {
      return {
        ...state,
        isReadmeLoading: true,
      };
    }
    case LOAD_CHANGELOG_IN_PROGRESS: {
      return {
        ...state,
        isChangelogLoading: true,
      };
    }
    case LOAD_COMPONENTS_SUCCESS: {
      const { components } = payload;
      return {
        ...state,
        components,
        areComponentsLoading: false,
        lastComponentsUpdate: Date.now(),
      };
    }
    case LOAD_README_SUCCESS: {
      const { readme } = payload;
      return {
        ...state,
        readme,
        isReadmeLoading: false,
        lastReadmeUpdate: Date.now(),
      };
    }
    case LOAD_CHANGELOG_SUCCESS: {
      const { changelog } = payload;
      return {
        ...state,
        changelog,
        isChangelogLoading: false,
        lastChangelogUpdate: Date.now(),
      };
    }
    case LOAD_DOCS_ERROR: {
      return {
        ...state,
        isComponentsError: true,
        isReadmeError: true,
        isChangelogError: true,
      };
    }
    case LOAD_COMPONENTS_ERROR: {
      return {
        ...state,
        isComponentsError: true,
      };
    }
    case LOAD_README_ERROR: {
      return {
        ...state,
        isReadmeError: true,
      };
    }
    case LOAD_CHANGELOG_ERROR: {
      return {
        ...state,
        isChangelogError: true,
      };
    }
    default: {
      return state;
    }
  }
};
