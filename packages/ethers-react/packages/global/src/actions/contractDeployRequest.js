import { CONTRACT_DEPLOY_REQUEST } from "../types";
export const contractDeployRequest = dispatch => ({ contract, inputs }) =>
  dispatch({
    type: CONTRACT_DEPLOY_REQUEST,
    payload: {
      contract,
      inputs
    }
  });
