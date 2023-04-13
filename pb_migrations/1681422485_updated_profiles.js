migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rt8tgpgsv9nkeim")

  // remove
  collection.schema.removeField("cydpfqy3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lksh1i5j",
    "name": "firebaseID",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rt8tgpgsv9nkeim")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("lksh1i5j")

  return dao.saveCollection(collection)
})
