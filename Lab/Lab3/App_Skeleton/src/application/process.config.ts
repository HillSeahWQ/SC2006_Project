import * as dotenv from 'dotenv';

// @author: Keerthana Jayaraman Karthikeyan <KEER004@e.ntu.edu.sg>

dotenv.config();

const AnalyticsTracking = process.env.REACT_APP_GA_TRACKING_ID ?? '';

export default AnalyticsTracking;
