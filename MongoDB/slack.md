## Users

db.users.insertOne({"username": "juan", "email": "juansq@email.com", "password": "juan123", "created_at": new Date(), "active": true})


## Workspaces

db.workspaces.insertOne({"name": "UTN_PWA_TN", "created_at": new Date(), "owner_id": ObjectId('66e8cd2006a909a2e7feb25d'), "active": true })


## Channels

db.channels.insertOne({"name": "General", "created_at" : new Date(), "workspace_id" : ObjectId('66e8cdf106a909a2e7feb25e')})


## Messages

db.messages.insertOne({"user_id": ObjectId('66e8cd2006a909a2e7feb25d'), "channel_id": ObjectId('66e8ceca06a909a2e7feb25f'), "created_at": new Date(), "content": "Hola como estan todos?"})


## Workspace_users

db.workspace_users.insertOne({'user_id': ObjectId('66e8cd2006a909a2e7feb25d'), "workspace_id" : ObjectId('66e8cdf106a909a2e7feb25e'), "joined_at" : new Date(), "role" : "user", "active" : true})
