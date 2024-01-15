import {test, expect} from '@playwright/test'

test('API GET Request', async({request})=>{
    const response = await request.get('https://bc-sc-sqa-tt016.ocs-support.com/api/v1/reporting/schema/sconnect.v4.rawvolume/en',{
        headers:{
            'x-api-key': '1f86c0c37dfd18792677a158ed9af9f6',
            'Authorization':'Basic c2ljcGFjb25uZWN0OlMxY3A0QzBubjNjdA==',
            'LocaleId':'fr-PT',
            'Content-Type':'application/json',
            'X-AUTH-DEVICE-ID':'android_5012a17ff9a50815',
            'Connection':'keep-alive',
            'APP-VERSION':'1.4.2',
            'Accept':'*/*',
            'User-Agent':'PostmanRuntime/7.36.0',
            'Postman-Token':'<calculated when request is sent>',
            'Host':'<calculated when request is sent>',
            
        }
    });

})