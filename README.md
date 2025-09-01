# Byteplant Nodes

This package contains n8n nodes for [Byteplant](https://www.byteplant.com/).

## Nodes

### Byteplant Address Validator

Validate addresses, phone numbers and email addresses - with unparalleled precision in 240+ countries world-wide.

#### Input

| Name                  | Type    | Required | Description                                                                                                                             |
| --------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| StreetAddress         | string  | false    | Street Address                                                                                                                          |
| City                  | string  | false    | City                                                                                                                                    |
| AdditionalAddressInfo | string  | false    | Apt/Suite/Additional address info                                                                                                       |
| PostalCode            | string  | false    | Zip/Postal code                                                                                                                         |
| State                 | string  | false    | State/Province                                                                                                                          |
| Geocoding             | boolean | false    | Whether to enable Geocoding                                                                                                             |
| CountryCode           | string  | false    | Two-letter ISO 3166-1 country code                                                                                                      |
| StreetNumber          | string  | false    | Housenumber/Building can either be part of StreetAddress or be provided separately                                                      |
| Locale                | string  | false    | IETF language tag - for some countries, only English and the preferred local language used by the country's postal service is supported |
| Output Charset        | string  | false    | Output character set [us-ascii \| utf-8]                                                                                                |
| Timeout               | number  | false    | Timeout in seconds (default 10s, min 5s, max 300s)                                                                                      |

### Byteplant Email Validator

Validate addresses, phone numbers and email addresses - with unparalleled precision in 240+ countries world-wide.

#### Input

| Name         | Type   | Required | Description                                        |
| ------------ | ------ | -------- | -------------------------------------------------- |
| EmailAddress | string | true     | Email address to validate                          |
| Timeout      | number | false    | Timeout in seconds (default 10s, min 5s, max 300s) |

### Byteplant Phone Validator

Validate addresses, phone numbers and email addresses - with unparalleled precision in 240+ countries world-wide.

#### Input

| Name        | Type   | Required | Description                                        |
| ----------- | ------ | -------- | -------------------------------------------------- |
| PhoneNumber | string | true     | Phone number to validate                           |
| CountryCode | string | false    | Two letter ISO 3166-1 country code                 |
| Locale      | string | false    | IETF language tag for Geocoding                    |
| Mode        | string | false    | Extensive, Express                                 |
| Timeout     | number | false    | Timeout in seconds (default 10s, min 5s, max 300s) |
