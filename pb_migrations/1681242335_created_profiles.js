migrate((db) => {
  const collection = new Collection({
    "id": "qyri7rz6lz3egbw",
    "created": "2023-04-11 19:45:35.825Z",
    "updated": "2023-04-11 19:45:35.825Z",
    "name": "profiles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xbp2nh4m",
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
        "id": "4fzqlycs",
        "name": "lastName",
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
        "id": "ncry099e",
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
  const collection = dao.findCollectionByNameOrId("qyri7rz6lz3egbw");

  return dao.deleteCollection(collection);
})
