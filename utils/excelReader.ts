import * as XSLX from 'xlsx';

export interface LoginData {
    username: string;
    password: string;
}

 export function readExcelData(filePath: string, sheetName: string): LoginData[] {


    const workbook = XSLX.readFile(filePath);

    const worksheet = workbook.Sheets[sheetName];

    const data= XSLX.utils.sheet_to_json<LoginData>(worksheet);

      return data; 

 } 