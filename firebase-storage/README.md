# Firebase-storage

The last stop on our tour of Firebase is learning how to use it's **storage** service. There are a few caveats that make it tricky:

1. Firebase storage is a separate piece of a project (just as `database` and `auth` are self contained).
2. The storage system **does not** automatically push notifications to applications (but we want to enable that behavior)
3. We'll want to track the URLs of files uploaded to the **storage** service in our **database**. This will solve `#2`.
4. If you aren't doing authentication, make sure to properly set the read and write access to enable it for users.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In this no-frills app, we'll make a simple photo uploader that will:

- Upload photos to Firebase **storage**
- Save that information in Firebase **database**
- Show photos to users

## Instructions
In your `App.js` file, do the following:

1. In your `componentDidMount` method:  
- Create references to the `imgs` endpoints on database **and** storage
- When the database 'value' changes, change the state of `imgs`

2. In your `fileChange` method:
- Get the uploaded file and its name
- Create a new child reference (on storage) for the image using its name
- `put` the file contents in the reference. *then()*
- Using the `snapshot.downloadURL` value, push a new element into the _database_ `imgs` reference
