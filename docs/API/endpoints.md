---
id: endpoints
title: CREATE
---

## Create Endpoint

This section explains creating a report using `requestJobDescription`. Report creation requires Expensify Concierge's prior enablement.

**Requirements:**

- Domain and Policy Admin permissions
- Functionality enabled by [concierge@expensify.com](mailto:concierge@expensify.com)

**Error Handling:**

The "Not authorized to authenticate as user" error means the feature isn't enabled for your domain.

### Request Format

| Field Name | Format | Valid Values | Description |
| --- | --- | --- | --- |
| **type** | String | "report" | Specifies the job as report creation. |
| **employeeEmail** | String | Valid email address | The report is created in this user’s account. |
| **report** (JSON Object) | | See report details below. | Defines report properties. |
| **expenses** (JSON Array) | | See expense details below. | Optional expense details. |
| **policyID** | String | Valid policy ID | The report will be associated with this policy. |

#### `inputSettings.report` Details

| Field Name | Format | Valid Values | Description |
| --- | --- | --- | --- |
| **title** | String | | Report title. |
| **fields** (Optional - JSON Object) | | Key-value pairs | Custom field values (use underscores for special characters). |

#### `inputSettings.expenses` Details (Optional)

| Field Name | Format | Valid Values | Description |
| --- | --- | --- | --- |
| **merchant** | String | | Merchant name. |
| **currency** | String | Three-letter code (e.g., USD) | Expense currency. |
| **date** | Date | yyyy-mm-dd | Expense date. |
| **amount** | Integer | | Expense amount in cents. |

### Example Request

```bash

curl --location 'https://integrations.expensify.com/Integration-Server/ExpensifyIntegrations' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'requestJobDescription={
    "type": "create",
    "credentials": {
        "partnerUserID": {{partnerUserID}},
        "partnerUserSecret":{{partnerUserSecret}}
    },
    "inputSettings": {
        "type": "report",
        "policyID": "952DB91B963583C7",
        "report": {
            "title": "Name of the report",
            "fields":{
                "reason_of_trip": "Business trip",
                "employees": "3"
            }
        },
        "employeeEmail": "ifedolapo387@gmail.com",
        "expenses": [
            {
                "date": "2024-03-24",
                "currency": "USD",
                "merchant": "

Alyoski Mall",
                "amount": 4000
            }
        ]
    }
}'
```
### Example Response



```JavaScript
{
    "responseCode": 200
}
```
---
