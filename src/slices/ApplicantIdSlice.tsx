import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define API URLs
const sub_apiUrl = 'https://zero.dev.revenir.tax/create/subject';
const workflow_apiUrl = 'https://zero.dev.revenir.tax/kyc/workflow';
const sdk_apiUrl = 'https://zero.dev.revenir.tax/kyc/token';

// Define an initial state
const initialState = {
    data: null,
    loading: 'idle',
    error: null,
};

// Create an async thunk for making the API request
export const createApplicant = createAsyncThunk('applicants/create', async (requestData: any) => {
    try {
        const response = await axios.post(sub_apiUrl, requestData);
        const applicant_id = response.data.applicant_id;
        console.log("applicant_id", applicant_id);

        if (applicant_id) { // Check if applicant_id exists
            const sdkResponse = await axios.post(sdk_apiUrl, { applicant_id });
            const sdkToken = sdkResponse.data.token;
            console.log("SDK", sdkToken);

            if (sdkToken) { // Check if sdkToken exists
                const workflowResponse = await axios.post(workflow_apiUrl, {
                    applicant_id,
                    workflow_id: "e3d2d97e-fcc1-4180-8635-0ef6e244bb72",
                    custom_data: {
                        subject_token: requestData.token,
                        tenant_id: "zero",
                    },
                });

                console.log("Workflow", workflowResponse);

                // Set values in the payload
                return {
                    sdkToken: sdkToken,
                    workflowRunId: workflowResponse.data.workflow_run_id,
                };
            }
        }
        return response.data;
    } catch (error) {
        throw error;
    }
});


// Create a slice for the API response
const applicantsSlice = createSlice({
    name: 'applicants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createApplicant.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(createApplicant.fulfilled, (state: any, action) => {
                state.loading = 'succeeded';
                state.data = action.payload;
                console.log("Case", action)
            })
            .addCase(createApplicant.rejected, (state: any, action) => {
                state.loading = 'failed';
                state.error = action.error.message;
            });
    },
});

export default applicantsSlice.reducer;
