"use strict";

function IDBService($q) {
    const self = this;
    self.setUp = false;
    var db;

    function init() {
        var deferred = $q.defer();

        if (self.setUp) {
            deferred.resolve(true);
            return deferred.promise;
        }

        var openRequest = window.indexedDB.open("indexeddb_angular", 1);

        openRequest.onerror = function (e) {
            console.log("Error opening db");
            console.dir(e);
            deferred.reject(e.toString());
        };

        openRequest.onupgradeneeded = function (e) {

            var thisDb = e.target.result;
            var objectStore;
            //Create Note OS
            if (!thisDb.objectStoreNames.contains("transformers")) {
                objectStore = thisDb.createObjectStore("transformers", { keyPath: "id", autoIncrement: true });
                objectStore.createIndex("title", "title", { unique: false });
            }

        };

        openRequest.onsuccess = function (e) {
            db = e.target.result;

            db.onerror = function (event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                deferred.reject("Database error: " + event.target.errorCode);
            };

            self.setUp = true;
            deferred.resolve(true);

        };

        return deferred.promise;
    }
    self.getNotes = () => {
		var deferred = $q.defer();
		
		init().then(function() {

			var result = [];

			var handleResult = function(event) {  
				var cursor = event.target.result;
				if (cursor) {
					result.push({key:cursor.key, title:cursor.value.title, updated:cursor.value.updated});
					cursor.continue();
				}
			};  
			
			var transaction = db.transaction(["transformers"], "readonly");  
			var objectStore = transaction.objectStore("transformers");
            objectStore.openCursor().onsuccess = handleResult;

			transaction.oncomplete = function(event) {
				deferred.resolve(result);
			};
		
		});
		return deferred.promise;
	}
    
    self.saveNotes = (note) => {
		//Should this call init() too? maybe
		var deferred = $q.defer();

		if(!note.id) note.id = "";
		console.log(db);
		var t = db.transaction(["transformers"], "readwrite");
		
        if(note.id === "") {
            t.objectStore("transformers")
                            .add({title:note.title,updated:new Date().getTime()});
        } else {
            t.objectStore("transformers")
                            .put({title:note.title,updated:new Date(),id:Number(note.id)});
        }

		t.oncomplete = function(event) {
			deferred.resolve();
		};

		return deferred.promise;
	}
}

angular.module("App").service("IDBService", IDBService);