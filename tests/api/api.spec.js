import {test, expect} from '@playwright/test'
const baseURL = 'https://bc-sc-sqa-tt016.ocs-support.com/api/v1/reporting/schema/sconnect.v4.rawvolume/en'

test('API GET Request', async({request})=>{
    const response = await request.get(baseURL,{
        headers:{
            'Content-Type':'application/json',
            'X-AUTH-DEVICE-ID':'PCroSm5Vhb0u0t02LCGCc3Iok4cp',
            'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
            'IP-ADDRESS':'10.40.38.16',
            'APP-VERSION':'2.0.0',
            'LocaleId':'en',
            'x-api-key': '1f86c0c37dfd18792677a158ed9af9f6', 
            'X-AUTH-OTP':'QoGCGKxsVWLxtsZ+cJgPioGtYfodVRKPl8kxx55xxCXMDW4W8ftCIEfrRUiy0HrHKNqp8BIf4L3vjlKvKBztvpm8lrIrT0zbud8E71FDyZI=,X-BlueCoat-Via=ccfe07c2148a837c',
        },
    })
    expect(response.status()).toBe(200)
    const responseBody = JSON.parse(await response.text())
    expect(responseBody.fullyQualifiedName).toBe('sconnect.v4.rawvolume')
    expect(responseBody.versionId).toBe('431')
});