
# API NovaPoshta
👀 Provides easy access to api novaposhta. API has 6 controllers which is got from [Official Documentation](https://devcenter.novaposhta.ua/docs/services/).  Also each of controller has own methods that are listed below.

## 📖 Table of Contents
- [Setup](#setup)
- [Controllers](#controllers)
- [Methods for controllers](#methods)
   - [Internet Document](#internet-document)
   - [Address](#address)
   - [Counterparty](#counterparty)
   - [Common](#common)
   - [Service](#service)
   - [Registry](#registry)
- [Examples](#examples)
   - [Base of using controllers](#base-using)
      - [Classic using](#classic)
      - [Modern using](#modern)

## 🧰 Setup <a name="setup"/>
Installing by npm
```shellscript
npm install api-novapostha
```
Installing by yarn
```shellscript
yarn add api-novaposhta
```

## 🕹 Controllers <a name="controllers"/>
+ 📦 [Internet Document](https://devcenter.novaposhta.ua/docs/services/556eef34a0fe4f02049c664e) - methods for receiving information about waybills.
+ 🏡 [Address](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43) - it's help you work with addresses of counterparty, cities or streets where has novaposhta.
+ 🥸 [Counterparty](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d) - easy way to control counterparty in account.
+ 🛠 [Common](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed) - ways to receive common data for options to other methods.
+ ⚙️ Service -  services as redelivery, backward or change information in account.
   + [Redelivery](https://devcenter.novaposhta.ua/docs/services/58f722b3ff2c200c04673bd1)
   + [Backward](https://devcenter.novaposhta.ua/docs/services/58ad7185eea27006cc36d649)
   + [Change Information](https://devcenter.novaposhta.ua/docs/services/59eef733ff2c200ce4f6f904)
+ 🗃 [Registry](https://devcenter.novaposhta.ua/docs/services/55662bd3a0fe4f10086ec96e) - better way to working with internet document in registry.

## ⛓ Methods <a name="methods"/>
> 🔒 Designation that you need an api key for a method or controller
1. **Internet Document** 🔒 <a name="internet-document"/>
   - getListDocument - get list of internet document in account
   - getParcelDeliveryDate - get forecast about delivery date
   - getParcelPrice - get parcel price from entered params
   - createDocument - create a internet document
   - deleteDocument - delete internet document
   - generateReport - generate report of all internet documents
   - updateDocument - update information in internet document
   - getStatusDocuments - get status of internet document(s)
   - getTrackingInfo - get tracking information about internet document
   - getTrackingHistory - get tracking history where the parcel passed
2. **Address** <a name="address"/>
   - 🔒 getSettlements - get settlements where has novaposhta
   - 🔒 getAreas - get areas by params in Ukraine
   - 🔒 getCities - same as getAreas but for cities
   - searchCity - search city with branch by params in request
   - 🔒searchStreet - same as searchCity but for street
   - 🔒 getWarehouses - get branches in Ukraine or by params in request
   - 🔒 getWarehouseStreet - get branches in Ukraine by name street
   - 🔒 deleteContractorAddress - delete counterparty address
   - 🔒 createContractorAddress - create counterparty address
   - 🔒 updateContractorAddress - update existed counterparty address
3. **Counterparty** 🔒 <a name="counterparty"/>
   - getCounterpartyAddresses - get counterparty addresses in account
   - getCounterpartyOptions - get options for create internet document with additional service
   - getCounterpartyContactPerson - get contacts of counterparty in account
   - getCounterparties - get list of counterparties
   - updateContactPerson - update contacts of counterparty
   - updateCounterparty - update information about counterparty
   - createContactPerson - create contact for counterparty
   - createCounterparty - create counterparty
   - createLegalCounterparty - create counterparty for legal entity
   - createThirdPersonCounterparty - create counterparty for third person
   - deleteContactPerson - delete contact for counterparty
   - deleteCounterparty - delete counterparty
4. **Common** <a name="common"/>
   - getTimeIntervals - get time intervals for service time intervals in internet document
   - 🔒 getCargoTypes - get types of cargo for create internet document
   - 🔒 getBackwardDeliveryCargoTypes - same as getCargoTypes but for service backward delivery
   - 🔒 getPalletsList - get list of pallets
   - 🔒 getPayersType - get types of payers who could pay
   - 🔒 getRedeliveryPayersType - same as getPayersType but for service redelivery
   - getPackList - get list of packs for create internet document
   - 🔒 getTiresWheelsList - get dimensions and other info about wheels
   - 🔒 getCargoDescriptionList - get details about cargo type
   - 🔒 getMessageCodeText - get descriptions of codes from request
   - 🔒 getServiceTypes - get types of service
   - 🔒 getTypesOfCounterparties - get types of counterparties
   - 🔒 getPaymentForms - get types of payments
   - 🔒 getOwnershipFormsList - get list of ownership
5. **Service** 🔒 <a name="service"/>
   - canCreateRequest - check possibility using one of services
   - createServiceRequest - create request to one of services
   - deleteServiceRequest - delete request one of services
   - getListServiceRequests - get list of services which is api provide
6. **Registry** 🔒 <a name="registry"/>
   - addDocumentToRegistry - add internet document to registry
   - getRegistryInfo - get all information about registry in account
   - getListRegistryInfo - same as getRegistryInfo but returns list
   - deleteRegistry - delete registry in account
   - deleteDocumentFromRegistry - delete internet document from registry

## 📝 Examples <a name="examples"/>

### Options Base API
```json
{
   "apiKey": "<YOUR_API_KEY>",
   "apiUrl": "<YOUR_API_URL>",
   "formatResponse": "json or xml"
}
```
### Using API Controllers <a name="base-using"/>
All controllers are accepted base api options. Example below is shown using for address api and get areas method in two variants.
#### Classic Variant <a name="classic"/>
In this variant you can import and use each of one controllers as individual class with own methods.
```ts  
const api = new ApiAddress({
   apiKey: '<API_KEY>',
});
await api.getAreas();
```  
#### Modern Variant <a name="modern"/>
But in this variant you don't need to import extra controllers, you only need a main controller and using method **get** with param as api controller class and after all, access to methods will be allowed.
```ts  
const api = new NovaPoshta({
   apiKey: '<API_KEY>',
});
await api.get(ApiAddress).getAreas();
```  
Some methods in api has options, in that nothing too hard, all options have types declared for better understanding and avoid mistake for using methods.

#### Using method without params
```ts  
const api = new ApiAddress({    
  apiKey: '<API_KEY>',    
});  
await api.getAreas();  
```  
#### Using method with params
```ts  
const api = new NovaPoshta({
   apiKey: '<API_KEY>',
});
await api.get(ApiAddress).getCities({
   FindByString: 'Kiev',
});  
```
