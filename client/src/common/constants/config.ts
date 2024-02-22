import { IConfig } from 'store/services/types';

const config = process.env.CONFIG;

export const API_BASEPATH = (config as IConfig).API_BASEPATH || '';
export const POLLING_INTERVAL = (config as IConfig).POLLING_INTERVAL || '';
export const IMAGES_BASEPATH = (config as IConfig).IMAGES_BASEPATH || '';
