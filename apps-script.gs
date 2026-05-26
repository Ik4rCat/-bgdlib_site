// BGDLib Survey — Google Apps Script
// Paste this code at https://script.google.com
// Deploy as Web App: Execute as "Me", Access "Anyone"

var SPREADSHEET_ID = '1VGeJ7DyulJl1kPwVHElgp7JJPiqC4gYDeVMRgu1w6jk';
var SHEET_NAME     = 'Responses';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp', 'Developer?', 'Engine', 'Time/day',
        'Sources', 'Unified feed?', 'Format', 'Offline?', 'Email'
      ]);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.q1  || '',
      data.q2  || '',
      data.q3  || '',
      data.q4  || '',
      data.q5  || '',
      data.q6  || '',
      data.q7  || '',
      data.email || '',
    ]);

    return buildResponse({ status: 'ok' });
  } catch (err) {
    return buildResponse({ status: 'error', message: err.toString() });
  }
}

function buildResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

// Test via: Run > doGet in the editor
function doGet() {
  return buildResponse({ status: 'ok', message: 'BGDLib survey endpoint active' });
}
