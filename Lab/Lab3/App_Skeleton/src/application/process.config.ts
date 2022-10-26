import * as dotenv from 'dotenv';

dotenv.config();

const AnalyticsTracking = process.env.REACT_APP_GA_TRACKING_ID ?? '';

export default AnalyticsTracking;