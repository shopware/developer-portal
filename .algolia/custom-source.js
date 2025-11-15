// ~/.deno/bin/deno run --allow-net .algolia/custom-source.js
import algoliasearch from 'npm:algoliasearch';

const projectId = '';
const apiKey = '';
const indexName = 'dev_shopware_docs';

const client = algoliasearch(projectId, apiKey);
const index = client.initIndex(indexName);

// require removal
const deleting = await index.deleteBy({
    tagFilters: ['api'],
}).wait();
console.log(deleting);

//index.clearObjects();

/*index.deleteObjects([
    'https://beta-developer.shopware.com/resources/api/admin-api-reference.html#/67d3e6bc2a3ff-custom-pricing-response',
    'https://beta-developer.shopware.com/resources/api/admin-api-reference.html#/40e7b4a128791-custom-pricing-upsert-operation',
])*/

if (false) {
    const objects = [
        {
            objectID: 'https://beta-developer.shopware.com/resources/api/admin-api-reference.html#/67d3e6bc2a3ff-custom-pricing-response',
            url: 'https://beta-developer.shopware.com/resources/api/admin-api-reference.html#/67d3e6bc2a3ff-custom-pricing-response',
            title: 'Custom pricing response',
            type: 'content',
            hierarchy: {
                lvl0: 'Documentation',
                lvl1: 'Custom pricing response',
                content: 'ACustomPricingResponse Export success boolean required data array[object] required result array[object] extensions array[object]',
            },
            content: 'ACustomPricingResponse Export success boolean required data array[object] required result array[object] extensions array[object]',
            _tags: ['api'],
        },
        {
            objectID: 'https://beta-developer.shopware.com/resources/api/admin-api-reference.html#/40e7b4a128791-custom-pricing-upsert-operation',
            url: 'https://beta-developer.shopware.com/resources/api/admin-api-reference.html#/40e7b4a128791-custom-pricing-upsert-operation',
            title: 'Custom pricing upsert operation',
            type: 'content',
            hierarchy: {
                lvl0: 'Documentation',
                lvl1: 'Custom pricing upsert operation',
                content: 'ACustomPricingUpsertOperation Export action string required A specific verb defining what operation should be actioned for a specific data record  Allowed value: upsert payload array[object] required Contains a list of changesets for an entity. If the action type is delete, a list of identifiers can be provided.  id string Match pattern: ^[0-9a-f]{32}$ productVersionId string Match pattern: ^[0-9a-f]{32}$ productId string required Match pattern: ^[0-9a-f]{32}$ customerId string This parameter should be specified, or \'customerGroupId\', not both  Match pattern: ^[0-9a-f]{32}$ customerGroupId string This parameter should be specified, or \'customerId\', not both  Match pattern: ^[0-9a-f]{32}$ price array[object]',
            },
            content: 'ACustomPricingUpsertOperation Export action string required A specific verb defining what operation should be actioned for a specific data record  Allowed value: upsert payload array[object] required Contains a list of changesets for an entity. If the action type is delete, a list of identifiers can be provided.  id string Match pattern: ^[0-9a-f]{32}$ productVersionId string Match pattern: ^[0-9a-f]{32}$ productId string required Match pattern: ^[0-9a-f]{32}$ customerId string This parameter should be specified, or \'customerGroupId\', not both  Match pattern: ^[0-9a-f]{32}$ customerGroupId string This parameter should be specified, or \'customerId\', not both  Match pattern: ^[0-9a-f]{32}$ price array[object]',
            _tags: ['api'],
        },
    ];

    index
        .saveObjects(objects, {
            autoGenerateObjectIDIfNotExist: false,
        })
        .wait()
        .then(({objectIDs}) => {
            console.log(objectIDs);
        })
        .catch(err => {
            console.log(err);
        });
}