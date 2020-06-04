export interface IExample{

}

export class ClassExample implements IExample{
    constructor(values: Object = {}) { Object.assign(this, values); }
}

export interface IFconfig {
    "APPNAME": string,
    "CODENAME": string,
    "VERSION": string,
    "CUSTOMER": string,
    "LICENCE": string,
    "REST_API_SERVER": string,
    "REALTIME_API_SERVER": string,
    "REST_API_ENPOINT": string,
    "REST_API_VERSION": string,
    "PROD": boolean;
    "LOGS": boolean;
}

export class Config implements IFconfig{
    "APPNAME": string;
    "CODENAME": string;
    "VERSION": string;
    "CUSTOMER": string;
    "LICENCE": string;
    "REST_API_SERVER": string;
    "REALTIME_API_SERVER": string;
    "REST_API_ENPOINT": string;
    "REST_API_VERSION": string;
    "PROD": boolean;
    "LOGS": boolean;
}