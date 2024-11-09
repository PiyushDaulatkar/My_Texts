# FHIR (Fast healthcare interoperability resources)
* FHIR is standard for ***health care information exchange*** (between two different systems).
* FHIR is published by organisation HL7 (Health level 7).
  
* FHIR is 4th version of the standard.
<br><br>

## ***Information exchange*** 
#### (data transfer/communication between two systems through FHIR)
* Components >> RESOURCE & REST API
<br><br>

### Resource
1. ***data model*** +
2. ***json/xml*** +
3. ***terminology binding***.

### REST Api
* ***CRUD*** and ***search*** operations on FHIR resources.
<br><br>

#### data model
* Defines the ***structure of healthcare data*** through modular resources (e.g., Patient, Observation, Medication).

* The way healthcare data is structured using resources. Each resource represents a specific piece of healthcare information (e.g., patient, medication, observation).
* Example of a ***Patient Resource*** in the FHIR Data Model (JSON format):
```json
{
  "resourceType": "Patient",
  "id": "example-patient",
  "name": [
    {
      "use": "official",
      "family": "Doe",
      "given": ["John"]
    }
  ],
  "gender": "male",
  "birthDate": "1980-01-01",
  "address": [
    {
      "use": "home",
      "line": ["123 Main St"],
      "city": "Springfield",
      "state": "IL",
      "postalCode": "62701",
      "country": "USA"
    }
  ]
}

```
<br>

#### json/xml
* formats for representing data model.
* Supports both formats for resource representation.
<br><br>

#### terminology binding
* Terminology Binding is when we ***link*** a ***data field*** in a FHIR resource to a ***standardized list of possible values (called a code system)***.
* This ensures that the data entered is consistent and can be understood across different systems.

* e.g., gender bound to "administrative-gender".
* *Example*: Binding Gender to a Code System
* The gender field in the Patient resource is bound to a predefined set of values from a code system called administrative-gender.
* The administrative-gender code system has values like "male", "female", and "other".
* When we use the gender field in a FHIR Patient resource, we can only choose from these predefined values.
```json
// Simple Example of Binding Gender to a Code System (in JSON format):
{
  "resourceType": "Patient",
  "id": "example-patient",
  "gender": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/administrative-gender",
        "code": "male",
        "display": "Male"
      }
    ]
  }
}
```
* The URL is simply a pointer that tells the system which code system to use for validating the value of the gender field.
<br><br>

## HL7 website
* https://www.hl7.org/fhir/
  
### Published FHIR versions
https://hl7.org/fhir/directory.html

### Maturity level
maturity level of a resource or specification refers to its stability, completeness, and suitability for production use(1 to 5).
<br><br>
<br><br>
<br><br>
<br><br>

# hapi fhir
* Java library
* https://hapifhir.io/


