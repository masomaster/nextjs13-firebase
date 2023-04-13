migrate((db) => {
  const collection = new Collection({
    "id": "rt8tgpgsv9nkeim",
    "created": "2023-04-13 21:44:16.247Z",
    "updated": "2023-04-13 21:44:16.247Z",
    "name": "profiles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sdnviq0c",
        "name": "firstName",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cydpfqy3",
        "name": "firebaseID",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rt8tgpgsv9nkeim");

  return dao.deleteCollection(collection);
})
